import { PageTemplate } from "@/components/page-template"
import { translations } from "@/lib/translations"

export default function PolishPage() {
  return <PageTemplate locale="pl" t={translations.pl} />
}
