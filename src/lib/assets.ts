export const assets = {
  logos: {
    primaryLogo: "/assets/AVA logo TM.png",
    whiteBackgroundLogo: "/assets/AVA logo TM white bg.png",
    // Requested source filename was not available locally:
    // "/assets/AVA logo - transparent background.png".
    // Use the primary transparent-capable logo as the safe optional fallback.
    transparentLogo: "/assets/AVA logo TM.png",
    analogicTransparentLogo: "/assets/analogic-transparent-logo-cropped.png",
    analogicWhiteBackgroundLogo: "/assets/analogic-whitebkg-logo-cropped.png",
  },
  documents: {
    flyer: "/assets/Flyer- Final.pdf",
    ava1213: "/assets/DATASHEET-AVA-1216.pdf",
    ava3013: "/assets/DATASHEET-AVA-3016.pdf",
    ava6013: "/assets/DATASHEET-AVA-6016.pdf",
  },
  visuals: {
    semiconductorManufacturing: "/assets/semiconductor-manufacturing-control.svg",
    processControlCleanroom: "/assets/process-control-cleanroom.png",
    processControlPlasma: "/assets/process-control-plasma.png",
    processControlService: "/assets/process-control-service.png",
  },
  products: {
    ava1213: {
      hero: "/assets/ava1213 front.jpg",
      gallery: [
        { src: "/assets/ava1213 front.jpg", label: "Front view" },
        { src: "/assets/ava1213 left.jpg", label: "Left angle view" },
        { src: "/assets/ava 1213 right.jpg", label: "Right angle view" },
      ],
    },
    ava3013: {
      hero: "/assets/ava3013 front.jpg",
      gallery: [
        { src: "/assets/ava3013 front.jpg", label: "Front view" },
        { src: "/assets/ava3013 left.jpg", label: "Left angle view" },
        { src: "/assets/ava3013 right.jpg", label: "Right angle view" },
      ],
    },
    ava6013: {
      hero: "/assets/ava6013 front.jpg",
      gallery: [
        { src: "/assets/ava6013 front.jpg", label: "Front view" },
        { src: "/assets/ava6013 left.jpg", label: "Left angle view" },
        { src: "/assets/ava6013 right.jpg", label: "Right angle view" },
        { src: "/assets/ava6013 back.jpg", label: "Back view" },
      ],
    },
  },
} as const;

export type ProductImage = {
  src: string;
  label: string;
};
