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
    description:
      "Dependable supply support for projects, retailers, contractors, and recurring site requirements.",
  },
  {
    icon: Building2,
    title: "Trade & Dealer Support",
    description:
      "A professional partner for local stores, distributors, and construction-focused buying teams.",
  },
  {
    icon: Clock3,
    title: "Responsive Enquiry Handling",
    description:
      "Fast communication for pricing requests, delivery discussions, and order coordination.",
  },
  {
    icon: WalletCards,
    title: "Simple Buying Experience",
    description:
      "Straightforward conversations, clear details, and convenient contact channels for every enquiry.",
  },
];

export const aboutCards = [
  {
    title: "Bulk Requirement Focus",
    text: "Positioned for dealers, contractors, and project buyers who need direct wholesale communication.",
  },
  {
    title: "Local Market Presence",
    text: "Deoria location details are easy to find, helping nearby buyers connect with confidence.",
  },
  {
    title: "Responsive Everywhere",
    text: "Customers can browse, call, and enquire smoothly on phones, tablets, and desktops.",
  },
  {
    title: "Fast Contact Access",
    text: "Phone numbers, email, and enquiry options stay visible so buyers can act quickly.",
  },
];

export const advantages = [
  {
    icon: ShieldCheck,
    title: "Clear Business Identity",
    text: "Customers immediately understand the firm name, business category, and how to start the conversation.",
  },
  {
    icon: CheckCircle2,
    title: "Easy To Reach",
    text: "Phone numbers, email, and address are presented in a direct, no-confusion format for faster contact.",
  },
  {
    icon: Truck,
    title: "Focused on Action",
    text: "Visitors can move quickly from browsing to calling, enquiring, or opening the location on maps.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Share Your Requirement",
    text: "Tell us the order size, location, and project or store requirement through the enquiry form or by phone.",
  },
  {
    step: "02",
    title: "Confirm Details",
    text: "We coordinate on quantity, communication, and the best next step for your requirement.",
  },
  {
    step: "03",
    title: "Move Ahead Faster",
    text: "With quick contact options and a focused process, buyers can move from enquiry to action smoothly.",
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
  "Bulk supply support for trade and project needs",
  "Fast call and enquiry access from every screen size",
  "Clear business details for confident decision-making",
];

export const initialFormData = {
  name: "",
  phone: "",
  city: "",
  requirement: "",
  message: "",
};
