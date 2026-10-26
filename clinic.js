export const CLINIC = {
  name: "Wissence",
  fullName: "Clínica Wissence",
  specialty: "Medicina Esportiva",
  city: "Jundiaí - SP",
  address: "Rua Rangel Pestana, 465 - Centro, Jundiaí - SP, 13201-000",
  phoneDisplay: "(11) 5026-2905",
  phoneHref: "tel:+551150262905",
  whatsappNumber: "551150262905",
  instagram: "https://instagram.com/clinicawissence",
};

export const waLink = (message) =>
  `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const WA_DEFAULT = waLink(
  "Olá! Vim pelo site da Clínica Wissence e gostaria de agendar uma consulta.",
);

export const MAPS_EMBED =
  "https://www.google.com/maps?q=Rua%20Rangel%20Pestana%2C%20465%20-%20Centro%2C%20Jundia%C3%AD%20-%20SP%2C%2013201-000&output=embed";

export const HOURS = [
  { days: "Segunda a Sexta", time: "08:00 às 19:00" },
  { days: "Sábado", time: "08:00 às 12:00" },
  { days: "Domingo", time: "Fechado" },
];

export const MAPS_ROUTE =
  "https://www.google.com/maps/dir/?api=1&destination=Rua+Rangel+Pestana,+465+-+Centro,+Jundia%C3%AD+-+SP,+13201-000";

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHw0fHxhdGhsZXRlJTIwcnVubmluZyUyMG1vdGlvbiUyMHNwb3J0cyUyMG1lZGljaW5lJTIwZXZhbHVhdGlvbnxlbnwwfHx8fDE3OTI5NzUxNzN8MA&ixlib=rb-4.1.0&q=85",
  heroSecondary:
    "https://images.unsplash.com/photo-1727094141271-9bea5bc8c757?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHwzfHxhdGhsZXRlJTIwcnVubmluZyUyMG1vdGlvbiUyMHNwb3J0cyUyMG1lZGljaW5lJTIwZXZhbHVhdGlvbnxlbnwwfHx8fDE3OTI5NzUxNzN8MA&ixlib=rb-4.1.0&q=85",
  clinicInterior:
    "https://images.unsplash.com/photo-1781513144825-aa1e284c5950?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBsdXh1cnklMjBtZWRpY2FsJTIwY2xpbmljJTIwaW50ZXJpb3IlMjBjb25zdWx0YXRpb258ZW58MHx8fHwxNzkyOTc1MTczfDA&ixlib=rb-4.1.0&q=85",
  clinicWaiting:
    "https://images.unsplash.com/photo-1759262151080-e05ba1c6294f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBtZWRpY2FsJTIwY2xpbmljJTIwaW50ZXJpb3IlMjBjb25zdWx0YXRpb258ZW58MHx8fHwxNzkyOTc1MTczfDA&ixlib=rb-4.1.0&q=85",
  audiencePro:
    "https://images.unsplash.com/photo-1744706908540-c7450689a30a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHwyfHxhdGhsZXRlJTIwcnVubmluZyUyMG1vdGlvbiUyMHNwb3J0cyUyMG1lZGljaW5lJTIwZXZhbHVhdGlvbnxlbnwwfHx8fDE3OTI5NzUxNzN8MA&ixlib=rb-4.1.0&q=85",
  audienceAmateur:
    "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHwxfHxhdGhsZXRlJTIwcnVubmluZyUyMG1vdGlvbiUyMHNwb3J0cyUyMG1lZGljaW5lJTIwZXZhbHVhdGlvbnxlbnwwfHx8fDE3OTI5NzUxNzN8MA&ixlib=rb-4.1.0&q=85",
  audienceGym:
    "https://images.unsplash.com/photo-1605296867724-fa87a8ef53fd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHw0fHxneW0lMjB3b3Jrb3V0JTIwZml0bmVzcyUyMHRyYWluaW5nJTIwcnVubmVyJTIwYXRobGV0ZXxlbnwwfHx8fDE3OTI5NzUxNzN8MA&ixlib=rb-4.1.0&q=85",
  audienceBeginner:
    "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwzfHxneW0lMjB3b3Jrb3V0JTIwZml0bmVzcyUyMHRyYWluaW5nJTIwcnVubmVyJTIwYXRobGV0ZXxlbnwwfHx8fDE3OTI5NzUxNzN8MA&ixlib=rb-4.1.0&q=85",
};
