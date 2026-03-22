import { PageTemplate } from "@/components/page-template"
import { translations } from "@/lib/translations"

export default function EnglishPage() {
  return <PageTemplate locale="en" t={translations.en} />
}
