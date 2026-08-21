import type { Metadata } from "next";
import { EditorialForm } from "./EditorialForm";

export const metadata: Metadata = { title: "Sala de redacción", description: "Panel editorial demostrativo de Bogotá Sin Cuentos.", robots: { index: false, follow: false } };

export default function EditorialPage() { return <EditorialForm />; }

