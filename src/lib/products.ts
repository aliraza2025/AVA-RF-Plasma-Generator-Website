import { assets, type ProductImage } from "@/lib/assets";

export type Product = {
  slug: string;
  name: string;
  power: string;
  powerDetail: string;
  frequency: string;
  type: string;
  short: string;
  overview: string;
  image: string;
  gallery: readonly ProductImage[];
  datasheet: string;
  stats: string[];
  highlights: string[];
  specifications: { label: string; value: string }[];
};

const sharedHighlights = [
  "Pulsed RF generator with auto frequency tuning",
  "Forward power, load power, and DC bias/process regulation",
  "RS232 and 25-pin analog interfaces with fieldbus options",
  "Standard and Advanced configurations",
];

export const products: Product[] = [
  {
    slug: "ava-1213",
    name: "AVA 1213",
    power: "1.25 kW",
    powerDetail: "1.25 kW / 1250 W",
    frequency: "13.56 MHz",
    type: "Pulsed RF Generator with Auto Frequency Tuning",
    short:
      "Compact 13.56 MHz RF plasma generator for precision pulsed power delivery up to 1250 W.",
    overview:
      "AVA 1213 brings high-precision pulsed RF power, fast auto frequency tuning, and process regulation into a compact platform for semiconductor plasma applications.",
    image: assets.products.ava1213.hero,
    gallery: assets.products.ava1213.gallery,
    datasheet: assets.documents.ava1213,
    stats: ["1250 W max forward power", "+/-5% tuning range", "50 microsecond minimum pulse width"],
    highlights: [
      ...sharedHighlights,
      "Advanced model supports multi-level arbitrary waveform pulsing",
      "Advanced features include CEX support, HALO, smoke detection, and optional water flow sensing",
    ],
    specifications: [
      { label: "Product", value: "AVA 1213" },
      { label: "Power", value: "1.25 kW / 1250 W" },
      { label: "Frequency", value: "13.56 MHz" },
      { label: "Type", value: "Pulsed RF Generator with Auto Frequency Tuning" },
      { label: "Tuning range", value: "+/-5%" },
      { label: "Load impedance", value: "50 Ohm" },
      { label: "Max forward power", value: "1250 W" },
      { label: "Max reflected power", value: "300 W" },
      { label: "Power regulation", value: "Forward power, load power, DC bias/process" },
      { label: "Power regulation accuracy", value: "+/-2% of setpoint or +/-3 W, whichever is greater" },
      { label: "Harmonics", value: "<= -40 dBc with 50-Ohm load" },
      { label: "Spurious", value: "<= -45 dBc" },
      { label: "Efficiency", value: ">65% typical" },
      { label: "Pulsing", value: "Two-level digital or analog; advanced model supports multi-level arbitrary waveform pulsing" },
      { label: "Pulse synchronization", value: "Pulse-in SMA(F), pulse-out SMA(F)" },
      { label: "Minimum pulse width", value: "50 microseconds" },
      { label: "Pulse PRF", value: "100 Hz - 20 kHz" },
      { label: "Pulse duty cycle", value: "1% - 99%" },
      { label: "Pulse rise time", value: "<4 microseconds" },
      { label: "Pulse fall time", value: "<0.2 microseconds" },
      { label: "Interfaces", value: "RS232, 25-pin analog" },
      { label: "Interface options", value: "Ethernet, EtherCAT, Profibus, DeviceNet" },
      { label: "Cooling", value: "Water and air" },
      { label: "Advanced features", value: "CEX support, auto frequency tuning under 1 ms, HALO max forward power 200 W, integrated smoke detector, optional water flow sensor" },
      { label: "Weight", value: "<11.5 kg / <25.4 lbs" },
      { label: "Dimensions", value: "215.6 mm W x 441.7 mm L x 133.4 mm H" },
      { label: "Output connector", value: "N(F)" },
      { label: "AC line", value: "187-228 VAC 1-phase, 50/60 Hz" },
    ],
  },
  {
    slug: "ava-3013",
    name: "AVA 3013",
    power: "3 kW",
    powerDetail: "3 kW / 3000 W",
    frequency: "13.56 MHz",
    type: "Pulsed RF Generator with Auto Frequency Tuning",
    short:
      "Mid-power 13.56 MHz platform for pulsed RF delivery and advanced semiconductor plasma process control.",
    overview:
      "AVA 3013 scales AVA pulsed RF delivery to 3 kW with auto frequency tuning, robust reflected power handling, and advanced control options.",
    image: assets.products.ava3013.hero,
    gallery: assets.products.ava3013.gallery,
    datasheet: assets.documents.ava3013,
    stats: ["3000 W max forward power", "+/-5% tuning range", "600 W max reflected power"],
    highlights: [
      ...sharedHighlights,
      "Advanced model supports multi-level programmable arbitrary waveform pulsing",
      "Advanced features include CEX support, HALO, smoke detection, and optional water flow sensing",
    ],
    specifications: [
      { label: "Product", value: "AVA 3013" },
      { label: "Power", value: "3 kW / 3000 W" },
      { label: "Frequency", value: "13.56 MHz" },
      { label: "Type", value: "Pulsed RF Generator with Auto Frequency Tuning" },
      { label: "Tuning range", value: "+/-5%" },
      { label: "Load impedance", value: "50 Ohm" },
      { label: "Max forward power", value: "3000 W" },
      { label: "Max reflected power", value: "600 W" },
      { label: "Power regulation", value: "Forward power, load power, DC bias/process" },
      { label: "Power regulation accuracy", value: "+/-2% of setpoint or +/-3 W, whichever is greater" },
      { label: "Harmonics", value: "<= -40 dBc with 50-Ohm load" },
      { label: "Spurious", value: "<= -45 dBc" },
      { label: "Efficiency", value: ">65% typical" },
      { label: "Pulsing", value: "Two-level digital or analog; advanced model supports multi-level programmable arbitrary waveform pulsing" },
      { label: "Pulse synchronization", value: "Pulse-in SMA(F), pulse-out SMA(F)" },
      { label: "Minimum pulse width", value: "50 microseconds" },
      { label: "Pulse PRF", value: "100 Hz - 20 kHz" },
      { label: "Pulse duty cycle", value: "1% - 99%" },
      { label: "Pulse rise time", value: "<4 microseconds" },
      { label: "Pulse fall time", value: "<0.2 microseconds" },
      { label: "Interfaces", value: "RS232, 25-pin analog" },
      { label: "Interface options", value: "Ethernet, EtherCAT, Profibus, DeviceNet" },
      { label: "Cooling", value: "Water and air" },
      { label: "Advanced features", value: "CEX support, auto frequency tuning under 1 ms, HALO max forward power 200 W, integrated smoke detector, optional water flow sensor" },
      { label: "Weight", value: "<20 kg / <44 lbs" },
      { label: "Dimensions", value: "215.6 mm W x 402.6 mm D x 133.4 mm H" },
      { label: "Output connector", value: "N(F)" },
      { label: "AC line", value: "187-228 VAC 3-phase, 50/60 Hz" },
    ],
  },
  {
    slug: "ava-6013",
    name: "AVA 6013",
    power: "6 kW",
    powerDetail: "6 kW / 6000 W",
    frequency: "13.56 MHz",
    type: "Pulsed RF Generator with Auto Frequency Tuning",
    short:
      "High-power 13.56 MHz RF plasma generator for advanced pulsed semiconductor plasma processes up to 6 kW.",
    overview:
      "AVA 6013 is the high-power AVA platform, delivering 6 kW forward power, wider frequency tuning, precision regulation, and advanced pulsing support.",
    image: assets.products.ava6013.hero,
    gallery: assets.products.ava6013.gallery,
    datasheet: assets.documents.ava6013,
    stats: ["6000 W max forward power", "+/-10% tuning range", "10 microsecond minimum pulse width"],
    highlights: [
      ...sharedHighlights,
      "Advanced model supports multi-level programmable arbitrary waveform pulsing",
      "Water-cooled high-power platform with DIN 7/16(F) output connector",
    ],
    specifications: [
      { label: "Product", value: "AVA 6013" },
      { label: "Power", value: "6 kW / 6000 W" },
      { label: "Frequency", value: "13.56 MHz" },
      { label: "Type", value: "Pulsed RF Generator with Auto Frequency Tuning" },
      { label: "Tuning range", value: "+/-10%" },
      { label: "Load impedance", value: "50 Ohm" },
      { label: "Max forward power", value: "6000 W" },
      { label: "Max reflected power", value: "1500 W" },
      { label: "Power regulation", value: "Forward power, load power, DC bias/process" },
      { label: "Power accuracy", value: "+/-1.5% of setpoint or +/-2 W, whichever is greater" },
      { label: "Harmonics", value: "<= -40 dBc with 50-Ohm load" },
      { label: "Spurious", value: "<= -45 dBc" },
      { label: "Efficiency", value: ">65% typical at 6 kW" },
      { label: "Pulsing", value: "Dual-level digital or analog; advanced model supports multi-level programmable arbitrary waveform pulsing" },
      { label: "Pulse synchronization", value: "Pulse-in SMA(F), pulse-out SMA(F)" },
      { label: "Minimum pulse width", value: "10 microseconds" },
      { label: "Pulse PRF", value: "100 Hz - 10 kHz" },
      { label: "Pulse duty cycle", value: "1% - 99%" },
      { label: "Pulse rise time", value: "<4 microseconds" },
      { label: "Pulse fall time", value: "<0.2 microseconds" },
      { label: "Interfaces", value: "RS232, 25-pin analog" },
      { label: "Interface options", value: "Ethernet, EtherCAT, Profibus, DeviceNet" },
      { label: "Cooling", value: "Water" },
      { label: "Advanced features", value: "CEX support, auto frequency tuning under 1 ms, HALO max forward power 200 W, integrated smoke detector, optional water flow sensor" },
      { label: "Weight", value: "<33.7 kg / <74.2 lbs" },
      { label: "Dimensions", value: "483 mm W x 650 mm D x 131 mm H" },
      { label: "Output connector", value: "DIN 7/16(F)" },
      { label: "AC line", value: "380-480 VAC 3-phase, 50/60 Hz, 30A" },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(slug: string) {
  return products.filter((product) => product.slug !== slug);
}
