import {
  Building2,
  CheckCircle2,
  Clock3,
  MapPin,
  Phone,
  ShieldCheck,
  Truck,
  WalletCards,
  MessageCircle,
} from "lucide-react";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export const contactSummary = [
  "Bulk cement supply support",
  "Quick response on mobile",
  "Located in Deoria, U.P",
];

export const serviceCards = [
  {
    icon: Truck,
    title: "Bulk Cement Supply",
    description: "Reliable loads for sites and stores.",
  },
  {
    icon: Building2,
    title: "Trade & Dealer Support",
    description: "Easy coordination with dealers and shops.",
  },
  {
    icon: Clock3,
    title: "Responsive Enquiry Handling",
    description: "Prompt replies on price and delivery.",
  },
  {
    icon: WalletCards,
    title: "Simple Buying Experience",
    description: "Clear details and quick confirmations.",
  },
];

export const aboutCards = [
  {
    title: "Bulk Requirement Focus",
    text: "Built for dealer, contractor, and project orders.",
  },
  {
    title: "Local Market Presence",
    text: "Deoria-based for quick regional response.",
  },
  {
    title: "Responsive Everywhere",
    text: "Smooth experience on phone or desktop.",
  },
  {
    title: "Fast Contact Access",
    text: "Phone and WhatsApp always visible.",
  },
];

export const advantages = [
  {
    icon: ShieldCheck,
    title: "Clear Business Identity",
    text: "Straightforward cement wholesale.",
  },
  {
    icon: CheckCircle2,
    title: "Easy To Reach",
    text: "Phone and WhatsApp upfront.",
  },
  {
    icon: Truck,
    title: "Focused on Action",
    text: "Move from viewing to ordering fast.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Share Your Requirement",
    text: "Send quantity and location on WhatsApp or call.",
  },
  {
    step: "02",
    title: "Confirm Details",
    text: "We align on pricing and timing.",
  },
  {
    step: "03",
    title: "Move Ahead Faster",
    text: "Order moves forward without delays.",
  },
];

export const contactDetails = [
  {
    icon: Phone,
    label: "Call us",
    value: "9569555234 / 9838075527",
    href: "tel:+919569555234",
    secondaryHref: "tel:+919838075527",
    secondaryValue: "9838075527",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
  },
  {
    icon: MapPin,
    label: "Visit",
    value: "Dharamsala gali, Motilal Road, Deoria (274001), U.P",
    href: "https://www.google.com/maps/search/?api=1&query=Dharamsala+gali+Motilal+Road+Deoria+274001+Uttar+Pradesh",
  },
];

export const trustStrip = [
  "Bulk cement for trade and projects",
  "Fast phone and WhatsApp replies",
  "Clear details, quick confirmations",
];

export const initialFormData = {
  name: "",
  phone: "",
  city: "",
  requirement: "",
  message: "",
};
