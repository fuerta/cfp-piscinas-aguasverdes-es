import { PageTemplate } from "@/components/page-template"
import { translations } from "@/lib/translations"

export default function GermanPage() {
  return <PageTemplate locale="de" t={translations.de} />
}
