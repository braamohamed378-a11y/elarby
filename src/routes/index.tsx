import { createFileRoute } from "@tanstack/react-router";
import heroGelato from "@/assets/hero-gelato.jpg";
import menu1 from "@/assets/menu-1.jpg.asset.json";
import menu2 from "@/assets/menu-2.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "چيلاتى العربى — أحلى چيلاتي في إسكندرية" },
      {
        name: "description",
        content:
          "چيلاتى العربى — أحلى چيلاتي اسكندراني بكل النكهات: فستق، مانجا، فراولة، أرز بلبن، أم علي وكسكسي. دليفرى من فرع الساعة أو سيدى بشر.",
      },
      { property: "og:title", content: "چيلاتى العربى — أحلى چيلاتي في إسكندرية" },
      {
        property: "og:description",
        content: "كل حدوته حلوة بتبدأ بحاجة حلوة من چيلاتى العربي. اطلب دليفرى دلوقتي.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const FLAVORS = [
  {
    emoji: "💥",
    name: "قنبلة العربي",
    price: "٥٠ ج.م",
    note: "أزر بلبن + مانجو + فاكهة + قشطة + ايس كريم + عسل",
    card: "bg-primary text-primary-foreground",
    delay: "0ms",
  },
  {
    emoji: "🍯",
    name: "أصلين بالسمنة البلدى",
    price: "٢٥ ج.م",
    note: "أو برام بـ ٣٠ ج.م",
    card: "bg-sun text-sun-foreground",
    delay: "60ms",
  },
  {
    emoji: "🥛",
    name: "أزر بلبن جامبو",
    price: "٣٠ ج.م",
    note: "سادة أو بأي إضافة",
    card: "bg-mint text-mint-foreground",
    delay: "120ms",
  },
  {
    emoji: "🍫",
    name: "كشري نوتيلا",
    price: "٥٥ ج.م",
    note: "لوتس · أوريو · مانجو · فواكه · بستاشيو",
    card: "bg-foreground text-background",
    delay: "180ms",
  },
];

const BRANCHES = [
  {
    name: "الرميل ٢ · جميلة بوحريد",
    hours: "١٠ ص – ٣ ص · يوميًا",
    badge: "مفتوح",
    badgeClass: "bg-mint text-mint-foreground",
  },
  {
    name: "سيدي بشر · شارع المسرح",
    hours: "٧ ص – ١١ م · أحد – سبت",
    badge: "٧ ص – ١١ م",
    badgeClass: "bg-primary text-primary-foreground",
  },
];

const REVIEWS = [
  {
    text: "أحسن چيلاتي في إسكندرية، الفستق حاجة تانية خالص!",
    author: "أسماء · Google",
    delay: "0ms",
  },
  {
    text: "الأرز بلبن والكسكسي رجّعوني لأيام الصبا.",
    author: "محمد · Facebook",
    delay: "70ms",
  },
  {
    text: "الدليفري سريع والسكوب كبير، شكراً چيلاتي العربي.",
    author: "سارة · Google",
    delay: "140ms",
  },
];

const DELIVERY_PHONE = "01221657838";
const DELIVERY_PHONE_DISPLAY = "012 21657838";

function Index() {
  return (
    <div className="font-body relative mx-auto min-h-screen max-w-[390px] overflow-hidden bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-background/90 px-5 py-3 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="font-display grid size-7 place-items-center rounded-full bg-primary text-sm font-extrabold text-primary-foreground">
            چ
          </span>
          <span className="font-display text-lg font-extrabold leading-none">
            چيلاتي العربي
          </span>
        </div>
        <a
          href={`tel:${DELIVERY_PHONE}`}
          className="font-display rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground ring-1 ring-foreground/5 transition-transform active:translate-y-px"
        >
          اتصل
        </a>
      </header>

      {/* Hero */}
      <section className="relative px-5 pt-8 pb-6">
        <div
          aria-hidden="true"
          className="floaty absolute top-2 left-3 grid size-16 select-none place-items-center rounded-full bg-sun/80 text-3xl"
        >
          🍦
        </div>
        <div className="anim-up">
          <p className="font-mono mb-2 text-[11px] tracking-[0.2em] text-muted-foreground">
            إسكندرية · الساعة
          </p>
          <h1 className="font-display text-[clamp(38px,13vw,56px)] leading-[0.95] font-extrabold text-balance">
            كل حدوته حلوة
            <br />
            بتبدأ <span className="text-primary">بحاجة حلوة</span>
          </h1>
          <p className="text-pretty mt-3 max-w-[30ch] text-muted-foreground">
            أحلى چيلاتي اسكندراني — سكوب بارد على كوب دافي في صيف إسكندرية.
          </p>
        </div>
        <div className="anim-up mt-6 w-full overflow-hidden rounded-[2.5rem] ring-1 ring-foreground/5">
          <img
            src={heroGelato}
            alt="سكوب فراولة وفستق على كورنيت وافل"
            width={800}
            height={912}
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
      </section>

      {/* Flavor marquee */}
      <div className="my-2 -rotate-1 overflow-hidden bg-primary py-3">
        <div className="marquee-track font-display flex w-[200%] gap-8 text-xl font-extrabold whitespace-nowrap text-primary-foreground">
          <span>أصلين ✦ برام ✦ كشري ✦ زبادو ✦ قشطوطة ✦ قنبلة العربي ✦ أرز بلبن ✦</span>
          <span>أصلين ✦ برام ✦ كشري ✦ زبادو ✦ قشطوطة ✦ قنبلة العربي ✦ أرز بلبن ✦</span>
        </div>
      </div>

      {/* Flavors */}
      <section className="px-5 py-8">
        <h2 className="font-display mb-4 text-3xl font-extrabold text-balance">
          الأصناف المميزة
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {FLAVORS.map((flavor) => (
            <div
              key={flavor.name}
              style={{ animationDelay: flavor.delay }}
              className={`anim-up rounded-[1.75rem] p-4 ring-1 ring-foreground/5 transition-transform active:-translate-y-0.5 ${flavor.card}`}
            >
              <span className="floaty inline-block text-3xl">{flavor.emoji}</span>
              <p className="font-display mt-2 text-lg font-extrabold">{flavor.name}</p>
              <p className="font-mono mt-1 text-sm opacity-80">{flavor.price}</p>
              <p className="mt-2 text-[11px] leading-snug opacity-70">{flavor.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Menu */}
      <section className="px-5 pb-8">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="font-display text-3xl font-extrabold text-balance">
            المنيو الكامل
          </h2>
          <span className="font-mono text-xs text-muted-foreground">
            الأسعار بالجنيه
          </span>
        </div>
        <div className="space-y-4">
          <div className="anim-up overflow-hidden rounded-[2rem] ring-1 ring-foreground/5">
            <img
              src={menu1.url}
              alt="منيو چيلاتي العربي — أزر باللبن، أرب كريم، الكشري، الزبادو، القشطوة"
              width={1200}
              height={1200}
              loading="lazy"
              className="w-full"
            />
          </div>
          <div className="anim-up overflow-hidden rounded-[2rem] ring-1 ring-foreground/5">
            <img
              src={menu2.url}
              alt="منيو چيلاتي العربي — أصلين، برام، الإضافات، الحلويات، الديناميت"
              width={1200}
              height={1200}
              loading="lazy"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Delivery CTA */}
      <section className="px-5 pb-8">
        <a
          href={`tel:${DELIVERY_PHONE}`}
          className="font-display block rounded-[2rem] bg-primary p-5 text-primary-foreground ring-1 ring-foreground/5 transition-transform active:translate-y-0.5"
        >
          <p className="font-mono text-[11px] tracking-[0.2em] opacity-80">
            دليفري الآن
          </p>
          <p className="mt-1 text-2xl font-extrabold">اطلب چيلاتي العربي</p>
          <p className="font-mono mt-3 text-lg font-semibold" dir="ltr">
            {DELIVERY_PHONE_DISPLAY}
          </p>
        </a>
      </section>

      {/* Branches */}
      <section className="px-5 pb-8">
        <h2 className="font-display mb-4 text-3xl font-extrabold text-balance">
          الفروع والمواعيد
        </h2>
        <div className="space-y-3">
          {BRANCHES.map((branch, i) => (
            <div
              key={branch.name}
              style={{ animationDelay: `${i * 80}ms` }}
              className="anim-up rounded-[1.5rem] bg-cream p-4 ring-1 ring-foreground/5"
            >
              <div className="flex items-center justify-between">
                <p className="font-display text-lg font-bold">{branch.name}</p>
                <span
                  className={`font-mono rounded-full px-2 py-1 text-xs ${branch.badgeClass}`}
                >
                  {branch.badge}
                </span>
              </div>
              <p className="font-mono mt-2 text-sm text-muted-foreground">
                {branch.hours}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="px-5 pb-28">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="font-display text-3xl font-extrabold text-balance">
            آراء الزبائن
          </h2>
          <span className="font-mono text-sm text-muted-foreground">
            ٤.٤ ★ (١٣٣)
          </span>
        </div>
        <div className="space-y-3">
          {REVIEWS.map((review) => (
            <div
              key={review.author}
              style={{ animationDelay: review.delay }}
              className="anim-up rounded-[1.5rem] border border-border bg-background p-4"
            >
              <p className="text-pretty">"{review.text}"</p>
              <p className="font-mono mt-2 text-xs text-muted-foreground">
                — {review.author}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Sticky call bar */}
      <a
        href={`tel:${DELIVERY_PHONE}`}
        className="font-display fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full bg-foreground px-5 py-3 font-bold text-background shadow-lg ring-1 ring-foreground/10 transition-transform active:translate-y-0.5"
      >
        <span className="bob text-xl">📞</span>
        <span className="font-mono" dir="ltr">
          {DELIVERY_PHONE_DISPLAY}
        </span>
      </a>
    </div>
  );
}
