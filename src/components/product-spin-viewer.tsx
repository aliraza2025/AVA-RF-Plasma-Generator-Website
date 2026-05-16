"use client";

import { ChevronLeft, ChevronRight, Pause, Play, RotateCw } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import type { ProductImage } from "@/lib/assets";

type ProductSpinViewerProps = {
  images: readonly ProductImage[];
  productName: string;
};

export function ProductSpinViewer({
  images,
  productName,
}: ProductSpinViewerProps) {
  const frames = useMemo(() => orderSpinFrames(images), [images]);
  const [spinPosition, setSpinPosition] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const dragStart = useRef<number | null>(null);
  const positionStart = useRef(0);
  const lastTick = useRef<number | null>(null);

  const frameCount = frames.length;
  const wrappedPosition = wrapPosition(spinPosition, frameCount);
  const baseIndex = Math.floor(wrappedPosition);
  const nextIndex = frameCount > 1 ? (baseIndex + 1) % frameCount : baseIndex;
  const progress = wrappedPosition - baseIndex;
  const selected = frameCount > 0 ? Math.round(wrappedPosition) % frameCount : 0;
  const current = frames[baseIndex] ?? frames[0];
  const next = frames[nextIndex] ?? current;

  useEffect(() => {
    if (!spinning || frameCount < 2) {
      lastTick.current = null;
      return;
    }

    let frameId = 0;

    function animate(timestamp: number) {
      if (lastTick.current === null) {
        lastTick.current = timestamp;
      }

      const deltaSeconds = Math.min((timestamp - lastTick.current) / 1000, 0.08);
      lastTick.current = timestamp;
      setSpinPosition((position) => position + deltaSeconds * 0.85);
      frameId = window.requestAnimationFrame(animate);
    }

    frameId = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(frameId);
  }, [frameCount, spinning]);

  function step(direction: 1 | -1) {
    if (frameCount < 2) {
      return;
    }

    setSpinning(false);
    setSpinPosition((position) => Math.round(position) + direction);
  }

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if (frameCount < 2) {
      return;
    }

    if ((event.target as HTMLElement).closest("button")) {
      return;
    }

    setSpinning(false);
    dragStart.current = event.clientX;
    positionStart.current = spinPosition;
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (dragStart.current === null || frameCount < 2) {
      return;
    }

    const delta = event.clientX - dragStart.current;
    const frameShift = -delta / 150;
    setSpinPosition(positionStart.current + frameShift);
  }

  function endDrag(event: React.PointerEvent<HTMLDivElement>) {
    dragStart.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  return (
    <div className="grid gap-4">
      <div
        className="premium-card relative flex aspect-[1.45] touch-pan-y select-none items-center justify-center rounded-[2rem] p-5 cursor-grab active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        role="img"
        aria-label={`${productName} 360 product spin viewer`}
      >
        <div className="absolute inset-0 micro-grid opacity-45" aria-hidden="true" />
        <div
          className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-600 shadow-sm backdrop-blur"
          aria-hidden="true"
        >
          <RotateCw size={14} />
          360 spin
        </div>

        {current ? (
          <div className="relative h-full w-full">
            <Image
              src={current.src}
              alt={`${productName} ${current.label.toLowerCase()}`}
              width={1300}
              height={860}
              priority
              loading="eager"
              sizes="(min-width: 1024px) 48vw, 92vw"
              className="absolute inset-0 h-full w-full object-contain will-change-[opacity]"
              style={{ opacity: frameCount > 1 ? 1 - progress : 1 }}
              draggable={false}
            />
            {frameCount > 1 ? (
              <Image
                src={next.src}
                alt=""
                width={1300}
                height={860}
                priority
                loading="eager"
                sizes="(min-width: 1024px) 48vw, 92vw"
                className="absolute inset-0 h-full w-full object-contain will-change-[opacity]"
                style={{ opacity: progress }}
                draggable={false}
              />
            ) : null}
          </div>
        ) : (
          <div className="relative flex h-full w-full items-center justify-center rounded-lg border border-dashed border-slate-300 text-sm font-semibold text-slate-500">
            Image pending
          </div>
        )}

        {frameCount > 1 ? (
          <div
            className="absolute inset-x-4 bottom-4 z-10 flex items-center justify-between gap-3"
            onPointerDown={(event) => event.stopPropagation()}
          >
            <SpinButton
              label={`Rotate ${productName} left`}
              onClick={() => step(-1)}
            >
              <ChevronLeft size={18} aria-hidden="true" />
              <span>Left</span>
            </SpinButton>

            <button
              type="button"
              aria-label={spinning ? "Pause product spin" : "Start product spin"}
              onClick={() => setSpinning((value) => !value)}
              className="inline-flex h-11 min-w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/90 px-4 text-slate-900 shadow-sm backdrop-blur transition hover:border-blue-200 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#246BFE]"
            >
              {spinning ? (
                <Pause size={18} aria-hidden="true" />
              ) : (
                <Play size={18} aria-hidden="true" />
              )}
            </button>

            <SpinButton
              label={`Rotate ${productName} right`}
              onClick={() => step(1)}
            >
              <span>Right</span>
              <ChevronRight size={18} aria-hidden="true" />
            </SpinButton>
          </div>
        ) : null}
      </div>

      <div
        className="grid grid-cols-3 gap-3 sm:grid-cols-4"
        aria-label={`${productName} available views`}
      >
        {frames.map((image, index) => (
          <button
            key={`${image.src}-${image.label}`}
            type="button"
            aria-label={`Show ${productName} ${image.label.toLowerCase()}`}
            aria-pressed={selected === index}
            onClick={() => {
              setSpinning(false);
              setSpinPosition(index);
            }}
            className={`relative aspect-[1.45] overflow-hidden rounded-2xl border bg-white p-2 transition hover:-translate-y-0.5 hover:border-[#246BFE] ${
              selected === index
                ? "border-[#246BFE] ring-2 ring-blue-100"
                : "border-slate-200"
            }`}
          >
            <Image
              src={image.src}
              alt=""
              width={360}
              height={240}
              sizes="160px"
              className="h-full w-full object-contain"
              draggable={false}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function SpinButton({
  children,
  label,
  onClick,
}: {
  children: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="inline-flex h-11 min-w-24 items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white/90 px-3 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#246BFE] active:translate-y-0"
    >
      {children}
    </button>
  );
}

function orderSpinFrames(images: readonly ProductImage[]) {
  const sequence = ["Front view", "Right angle view", "Back view", "Left angle view"];
  const available = images.filter((image) => image.src);

  return [
    ...sequence
      .map((label) => available.find((image) => image.label === label))
      .filter((image): image is ProductImage => Boolean(image)),
    ...available.filter((image) => !sequence.includes(image.label)),
  ];
}

function wrapPosition(position: number, frameCount: number) {
  if (frameCount < 1) {
    return 0;
  }

  return ((position % frameCount) + frameCount) % frameCount;
}
