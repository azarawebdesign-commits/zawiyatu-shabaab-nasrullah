import Image from "next/image";
import Link from "next/link";

export default function TijaniyyaPage() {
  const conditions = [
    {
      number: "01",
      title: "Islamic Faith",
      text: "The seeker must be a Muslim and maintain faith in Allah, His Messenger Muhammad ﷺ, and the fundamental teachings of Islam.",
    },
    {
      number: "02",
      title: "Observance of the Shari'a",
      text: "The spiritual path is practiced within the framework of the Qur'an and Sunnah. Obligatory acts of worship and Islamic duties remain essential.",
    },
    {
      number: "03",
      title: "Commitment to the Wird",
      text: "The seeker commits to maintaining the prescribed daily remembrance and devotional practices of the Tariqa with sincerity and consistency.",
    },
    {
      number: "04",
      title: "Respect for the Tariqa",
      text: "The disciple approaches the path with respect, sincerity, good character, and willingness to follow the spiritual guidance of the Tariqa.",
    },
    {
      number: "05",
      title: "Avoiding Prohibited Matters",
      text: "The disciple strives to avoid what Allah has prohibited and works continually to purify the heart and improve conduct.",
    },
    {
      number: "06",
      title: "Sincerity",
      text: "The purpose of entering the spiritual path should be seeking the pleasure of Allah, strengthening one's faith, and drawing closer to Him.",
    },
  ];

  const contents = [
    "Introduction",
    "The Three Principles",
    "Conditions for Initiation",
    "Distinguished Scholars",
    "Wird",
    "Wazifah",
    "Zikr-ul-Juma'a",
  ];

  const scholars = [
    {
      name: "Shaykh Ahmad al-Tijani (RA)",
      title: "Founder of the Tariqa Tijaniyya",
      description:
        "Founder of the Tariqa Tijaniyya and one of the most distinguished scholars and spiritual teachers in the history of the Tariqa.",
      image: "/images/shaykh-ahmad-tijani.jpeg",
      href: "/scholars/ahmed-al-tijani",
    },
    {
      name: "Shaykh Ibrahim Niasse (RA)",
      title: "Shaykh al-Islam • Scholar • Spiritual Guide",
      description:
        "One of the greatest scholars and spiritual leaders of the Tijaniyya in the twentieth century and a major figure in the spread of Islamic knowledge and the Tariqa.",
      image: "/images/shaykh-ibrahim-niasse.jpg",
      href: "/scholars/ibrahim-niasse",
    },
    {
      name: "Shaykh Hassan Cisse (RA)",
      title: "Islamic Scholar • Spiritual Guide • Educator",
      description:
        "A distinguished Senegalese Islamic scholar, spiritual guide, educator, and prominent representative of the Tijaniyya in the modern world.",
      image: "/images/shaykh-hassan-cisse.jpeg",
      href: "/scholars/hassan-cisse",
    },
    {
      name: "Shaykh Dr. Osman Nuhu Sharubutu",
      title: "Scholar • Spiritual Guide • Teacher • Peace Advocate",
      description:
        "A distinguished Ghanaian Islamic scholar, spiritual guide, teacher and national religious leader whose life has been deeply connected with scholarship, Tijaniyya spirituality, peacebuilding and service to humanity.",
      image: "/images/shaykh-usman-nuhu-sharubutu.jpeg",
      href: "/scholars/osman-nuhu-sharubutu",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAF7F0]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-800 to-green-700 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[40px] border-[#C9A227]" />
          <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full border-[50px] border-[#C9A227]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-24 text-center md:py-32">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
            Zawiyatu Shabaab Nasrullah
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            THE TIJANIYYA
          </h1>

          <p className="mt-5 text-xl font-medium md:text-2xl">
            Tariqa of the 20th Century
          </p>

          <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-[#C9A227]" />

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-green-50 md:text-lg">
            An introduction to the Tariqa Tijaniyya, its principles,
            spiritual teachings, distinguished scholars, and devotional
            practices.
          </p>
        </div>
      </section>


      {/* =====================================================
          TABLE OF CONTENTS
      ===================================================== */}

      <section className="border-b border-green-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">

          <h2 className="text-center text-2xl font-bold text-green-900">
            Contents
          </h2>

          <div className="mx-auto mt-6 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {contents.map((item, index) => (
              <div
                key={item}
                className="rounded-xl border border-green-100 bg-green-50 px-5 py-4 text-sm font-medium text-green-900"
              >
                <span className="mr-2 text-[#C9A227]">
                  {String(index + 1).padStart(2, "0")}.
                </span>

                {item}
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">

        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
            Introduction
          </p>

          <h2 className="mt-3 text-3xl font-bold text-green-900 md:text-4xl">
            The Tariqa Tijaniyya
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-green-700" />
        </div>

        <article className="space-y-6 text-base leading-8 text-gray-700 md:text-lg">

          <p>
            Tariqa Tijaniyya is a path, a way (Tariqa), and a method
            of studying and putting into practice Islamic Spiritual
            Science (Tasawwuf).
          </p>

          <p>
            Spiritual Science has at times been misleadingly called
            Mysticism. However, in Islam it is a regular science with
            its set laws and a full scheme of knowledge, in details.
            It is based on definite experiences that can be reproduced,
            just like in any other science.
          </p>

          <p>
            Every person passes through the same stages in their
            spiritual journey as the Masters before them. Even the
            humblest learners can at least aspire to develop a sense
            of the presence of Allah and acquire an increasing control
            over their passions and desires for worldly things.
          </p>

          <p>
            Studying Spiritual Science is a means of learning:
          </p>


          {/* Spiritual Concepts */}

          <div className="grid gap-6 py-6 md:grid-cols-3">

            <div className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl font-bold text-green-800">
                01
              </div>

              <h3 className="text-xl font-bold text-green-900">
                Muraqabah
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                To see Allah in everything — being conscious of Allah
                at all times.
              </p>
            </div>


            <div className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl font-bold text-green-800">
                02
              </div>

              <h3 className="text-xl font-bold text-green-900">
                Mushahadah
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                To witness Allah in everything.
              </p>
            </div>


            <div className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl font-bold text-green-800">
                03
              </div>

              <h3 className="text-xl font-bold text-green-900">
                Ma&apos;rifah
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                To know, or to experience Allah in everything.
              </p>
            </div>

          </div>


          <p>
            The Tariqa Tijaniyya is based purely on Qur&apos;an and Hadith.
            To describe the Tariqa, we will say that it is simply to
            rule oneself according to the teachings of the Qur&apos;an and
            the teachings of the Prophet ﷺ.
          </p>

        </article>
      </section>


      {/* =====================================================
          THREE PRINCIPLES
      ===================================================== */}

      <section className="bg-green-900 text-white">

        <div className="mx-auto max-w-6xl px-6 py-20">

          <div className="mb-14 text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              The Foundation
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              The Tariqa Tijaniyya Is Based on Three Principles
            </h2>

            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#C9A227]" />

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-green-100">
              These three principles form an important foundation of the
              devotional practice described in the Tariqa Tijaniyya:
              seeking forgiveness, affirming the oneness of Allah, and
              sending prayers upon the Prophet Muhammad ﷺ.
            </p>

          </div>


          {/* Principle 1 */}

          <div className="mb-10 rounded-3xl bg-white p-7 text-gray-700 shadow-xl md:p-10">

            <div className="flex flex-col gap-6 md:flex-row">

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-2xl font-bold text-green-800">
                01
              </div>

              <div>

                <p className="text-sm font-semibold uppercase tracking-wider text-[#C9A227]">
                  First Principle
                </p>

                <h3 className="mt-1 text-2xl font-bold text-green-900 md:text-3xl">
                  Asking Allah for Forgiveness
                </h3>

                <p className="mt-5 leading-8">
                  The first principle is seeking forgiveness from Allah
                  through Istighfar and sincere repentance.
                </p>

                <div className="my-7 rounded-2xl bg-green-50 p-7 text-center">

                  <p className="text-2xl font-semibold text-green-900 md:text-3xl">
                    أَسْتَغْفِرُ اللَّهَ
                  </p>

                  <p className="mt-3 font-medium text-gray-600">
                    Astaghfirullah
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    Seeking forgiveness from Allah.
                  </p>

                </div>

                <p className="leading-8">
                  Istighfar is an important form of remembrance and
                  repentance. The believer seeks Allah&apos;s forgiveness,
                  turns away from wrongdoing, and strives to improve
                  their character and conduct.
                </p>

              </div>
            </div>
          </div>


          {/* Principle 2 */}

          <div className="mb-10 rounded-3xl bg-white p-7 text-gray-700 shadow-xl md:p-10">

            <div className="flex flex-col gap-6 md:flex-row">

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-2xl font-bold text-green-800">
                02
              </div>

              <div>

                <p className="text-sm font-semibold uppercase tracking-wider text-[#C9A227]">
                  Second Principle
                </p>

                <h3 className="mt-1 text-2xl font-bold text-green-900 md:text-3xl">
                  Affirming the Oneness of Allah
                </h3>

                <p className="mt-5 leading-8">
                  The second principle is affirming the absolute
                  oneness of Allah through Tawhid.
                </p>

                <div className="my-7 rounded-2xl bg-green-50 p-7 text-center">

                  <p className="text-2xl font-semibold text-green-900 md:text-3xl">
                    لَا إِلَٰهَ إِلَّا اللَّهُ
                  </p>

                  <p className="mt-3 font-medium text-gray-600">
                    La ilaha illallah
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    There is no deity worthy of worship except Allah.
                  </p>

                </div>

                <p className="leading-8">
                  Tawhid is the foundation of Islamic belief. The
                  believer recognises Allah as the One God and directs
                  worship, reliance, love, and devotion to Him.
                </p>

              </div>
            </div>
          </div>


          {/* Principle 3 */}

          <div className="rounded-3xl bg-white p-7 text-gray-700 shadow-xl md:p-10">

            <div className="flex flex-col gap-6 md:flex-row">

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-2xl font-bold text-green-800">
                03
              </div>

              <div>

                <p className="text-sm font-semibold uppercase tracking-wider text-[#C9A227]">
                  Third Principle
                </p>

                <h3 className="mt-1 text-2xl font-bold text-green-900 md:text-3xl">
                  Salat &apos;ala Nabi ﷺ
                </h3>

                <p className="mt-5 leading-8">
                  The third principle is offering prayers and blessings
                  upon the Prophet Muhammad ﷺ.
                </p>

                <div className="my-7 rounded-2xl bg-green-50 p-7 text-center">

                  <p className="text-2xl font-semibold text-green-900 md:text-3xl">
                    اللَّهُمَّ صَلِّ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ
                  </p>

                  <p className="mt-3 font-medium text-gray-600">
                    Salat &apos;ala Nabi
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    Sending blessings and prayers upon the Prophet ﷺ.
                  </p>

                </div>

                <p className="leading-8">
                  The Qur&apos;an instructs the believers to send blessings
                  upon the Prophet ﷺ, following the mention that Allah
                  and His angels send blessings upon him.
                </p>

                <p className="mt-5 leading-8">
                  Sending prayers upon the Prophet ﷺ is therefore an
                  important expression of love, respect, and devotion
                  to the Messenger of Allah.
                </p>

              </div>
            </div>
          </div>


          {/* Closing */}

          <div className="mt-14 rounded-3xl border border-green-700 bg-green-950 p-8 text-center">

            <p className="text-lg leading-8 text-green-100 md:text-xl">
              These principles form part of the devotional foundation
              described in the Tariqa Tijaniyya and are presented within
              the broader framework of the Qur&apos;an, Sunnah, remembrance
              of Allah, and love for the Messenger of Allah ﷺ.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          CONDITIONS FOR INITIATION
      ===================================================== */}

      <section className="bg-white">

        <div className="mx-auto max-w-6xl px-6 py-20">

          <div className="mb-14 text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              The Tijaniyya
            </p>

            <h2 className="mt-3 text-3xl font-bold text-green-900 md:text-5xl">
              Conditions for Initiation
            </h2>

            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-green-700" />

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-600">
              Entering the Tariqa Tijaniyya involves a commitment to
              Islamic faith, practice, remembrance, and spiritual discipline.
            </p>

          </div>


          <div className="grid gap-6 md:grid-cols-2">

            {conditions.map((condition) => (
              <div
                key={condition.number}
                className="group rounded-3xl border border-green-100 bg-green-50 p-7 transition hover:-translate-y-1 hover:shadow-lg md:p-8"
              >

                <div className="flex gap-5">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-900 text-lg font-bold text-[#C9A227]">
                    {condition.number}
                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-green-900 md:text-2xl">
                      {condition.title}
                    </h3>

                    <p className="mt-3 leading-7 text-gray-600">
                      {condition.text}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>


          <div className="mt-12 rounded-3xl bg-green-900 p-8 text-center text-white md:p-10">

            <p className="text-lg leading-8 text-green-50 md:text-xl">
              The Tariqa is not separate from Islam. Its spiritual
              discipline is intended to help the believer strengthen
              faith, remembrance of Allah, good character, and obedience
              to the teachings of the Qur&apos;an and the Sunnah.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          DISTINGUISHED SCHOLARS
      ===================================================== */}

      <section className="bg-[#FAF7F0]">

        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">

          <div className="mb-14 text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Distinguished Scholars
            </p>

            <h2 className="mt-3 text-3xl font-bold text-green-900 md:text-5xl">
              Great Scholars of the Tijaniyya
            </h2>

            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-green-700" />

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
              Explore the lives, scholarship, spiritual teachings,
              and legacies of some of the distinguished scholars
              associated with the Tijaniyya tradition.
            </p>

          </div>


          <div className="grid gap-8 md:grid-cols-2">

            {scholars.map((scholar) => (
              <div
                key={scholar.href}
                className="group overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-green-100 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >

                <div className="relative h-[360px] overflow-hidden">

                  <Image
                    src={scholar.image}
                    alt={scholar.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 pt-20">
                    <p className="text-sm font-semibold uppercase tracking-wider text-[#C9A227]">
                      Scholar
                    </p>

                    <h3 className="mt-1 text-2xl font-bold text-white md:text-3xl">
                      {scholar.name}
                    </h3>
                  </div>

                </div>


                <div className="p-7 md:p-8">

                  <p className="text-sm font-semibold text-green-700">
                    {scholar.title}
                  </p>

                  <p className="mt-4 leading-8 text-gray-600">
                    {scholar.description}
                  </p>

                  <Link
                    href={scholar.href}
                    className="mt-7 inline-flex items-center justify-center rounded-full bg-green-900 px-7 py-3 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-green-800"
                  >
                    Read Full Biography
                    <span className="ml-2 text-[#C9A227]">
                      →
                    </span>
                  </Link>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          DEVOTIONAL PRACTICES
      ===================================================== */}

      <section className="bg-green-900 text-white">

        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">

          <div className="mb-14 text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Devotional Practices
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              Remembrance and Worship
            </h2>

            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#C9A227]" />

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-green-100">
              The Tijaniyya tradition places emphasis on remembrance
              of Allah, prayers upon the Prophet Muhammad ﷺ, and
              regular devotional practices.
            </p>

          </div>


          <div className="grid gap-8 md:grid-cols-3">

            {/* Wird */}

            <div className="rounded-3xl bg-white p-8 text-gray-700 shadow-xl md:p-10">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-xl font-bold text-green-800">
                01
              </div>

              <h3 className="mt-6 text-2xl font-bold text-green-900">
                Wird
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                The daily Wird forms an important part of the devotional
                practice of the Tariqa Tijaniyya, consisting of prescribed
                remembrance and prayers performed regularly.
              </p>

            </div>


            {/* Wazifah */}

            <div className="rounded-3xl bg-white p-8 text-gray-700 shadow-xl md:p-10">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-xl font-bold text-green-800">
                02
              </div>

              <h3 className="mt-6 text-2xl font-bold text-green-900">
                Wazifah
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                The Wazifah is another important devotional practice
                involving remembrance of Allah, seeking forgiveness,
                and prayers upon the Prophet Muhammad ﷺ.
              </p>

            </div>


            {/* Zikr-ul-Juma&apos;a */}

            <div className="rounded-3xl bg-white p-8 text-gray-700 shadow-xl md:p-10">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-xl font-bold text-green-800">
                03
              </div>

              <h3 className="mt-6 text-2xl font-bold text-green-900">
                Zikr-ul-Juma&apos;a
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Zikr-ul-Juma&apos;a is a collective devotional practice
                associated with Friday and provides an opportunity for
                believers to gather in remembrance and prayer.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="bg-gradient-to-br from-green-950 via-green-900 to-green-800 px-6 py-20 text-center text-white md:py-24">

        <div className="mx-auto max-w-4xl">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
            Explore the Tijaniyya
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Learn More About Its Scholars and Spiritual Heritage
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-green-100 md:text-lg">
            Discover the lives and teachings of the scholars who
            contributed to the transmission and development of the
            Tijaniyya tradition.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/scholars/ahmed-al-tijani"
              className="rounded-full bg-[#C9A227] px-8 py-4 font-bold text-green-950 transition hover:bg-[#D8B63A]"
            >
              Ahmad al-Tijani
            </Link>

            <Link
              href="/scholars/ibrahim-niasse"
              className="rounded-full border border-[#C9A227] px-8 py-4 font-bold text-[#C9A227] transition hover:bg-[#C9A227] hover:text-green-950"
            >
              Ibrahim Niasse
            </Link>

          </div>

        </div>

      </section>

            {/* Tijaniyya Litanies & Practices */}
      <section className="bg-[#FAF7F0] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Spiritual Practices
            </p>

            <h2 className="mt-3 text-3xl font-bold text-green-900 md:text-5xl">
              Tijaniyya Litanies &amp; Practices
            </h2>

            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-green-700" />

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
              An overview of the Wird, Wazifah, and Zikr-ul-Juma&apos;a,
              including their prescribed recitations, recommended times,
              conditions, and forms of remembrance.
            </p>
          </div>

          <div className="space-y-8">

            {/* =========================
                WIRD
            ========================== */}
            <details
              open
              className="overflow-hidden rounded-3xl border border-green-100 bg-white shadow-lg"
            >
              <summary className="cursor-pointer bg-green-900 px-7 py-6 text-xl font-bold text-white transition hover:bg-green-800 md:px-10 md:text-2xl">
                Wird
              </summary>

              <div className="space-y-10 p-7 md:p-10">

                {/* Introduction */}
                <div>
                  <h3 className="text-2xl font-bold text-green-900">
                    The Wird
                  </h3>

                  <p className="mt-4 leading-8 text-gray-700">
                    The Wird is done in the morning (Subha) and in the
                    evening (Asr).
                  </p>
                </div>

                {/* Wird Consists Of */}
                <div className="rounded-2xl bg-green-50 p-6">
                  <h3 className="text-xl font-bold text-green-900">
                    The Wird Consists Of
                  </h3>

                  <div className="mt-5 space-y-4 text-gray-700">
                    <div className="flex flex-col justify-between gap-2 border-b border-green-100 pb-3 sm:flex-row">
                      <span className="font-medium">
                        Astaghfiru-allah
                      </span>
                      <span className="font-semibold text-green-900">
                        100 times
                      </span>
                    </div>

                    <div className="flex flex-col justify-between gap-2 border-b border-green-100 pb-3 sm:flex-row">
                      <span className="font-medium">
                        Salatul &apos;Ala Nabiyyi — Salatul Fatih
                      </span>
                      <span className="font-semibold text-green-900">
                        100 times
                      </span>
                    </div>

                    <div className="flex flex-col justify-between gap-2 sm:flex-row">
                      <span className="font-medium">
                        La ilaha illa-llah
                      </span>
                      <span className="font-semibold text-green-900">
                        100 times
                      </span>
                    </div>
                  </div>
                </div>

                {/* Morning Wird */}
                <div>
                  <h3 className="text-2xl font-bold text-green-900">
                    The Best Recommended Time For The Morning Wird
                  </h3>

                  <ul className="mt-5 list-disc space-y-4 pl-6 leading-8 text-gray-700">
                    <li>
                      It is from the Dawn Prayer (Subha), up to one hour
                      and a half after sunrise.
                    </li>

                    <li>
                      Its operative time extends until sunset, after which
                      it&apos;s considered as repayment.
                    </li>

                    <li>
                      It&apos;s also permissible to make Wird before dawn
                      in the night without an excuse because of the high
                      multitude of rewards for worshipping in the night.
                    </li>

                    <li>
                      It can be started two hours after Isha prayer and
                      continue to the break of dawn.
                    </li>

                    <li>
                      If the dawn finds you still reciting you must
                      complete the Wird and repeat it after the Subha
                      prayer.
                    </li>
                  </ul>
                </div>

                {/* Evening Wird */}
                <div>
                  <h3 className="text-2xl font-bold text-green-900">
                    The Best Recommended Time For The Evening Wird
                  </h3>

                  <ul className="mt-5 list-disc space-y-4 pl-6 leading-8 text-gray-700">
                    <li>
                      It starts after the Asr Prayer, and its imperative
                      time extends up to dawn (Fajr).
                    </li>

                    <li>
                      It can be made up if missed in the specified
                      imperative time.
                    </li>

                    <li>
                      It is not permissible to recite the evening Wird in
                      advance in the daytime, even if there is an excuse.
                    </li>

                    <li>
                      It is permissible to recite the Wird for the coming
                      day in advance in the night, if you are expecting
                      difficulties in making it during its prescribed
                      time. But it must be recited in its proper order,
                      e.g. morning Wird followed by the evening Wird.
                    </li>

                    <li>
                      If there is no expected difficulty or excuse, you
                      can also recite the Wird in the night in advance,
                      because of the rewards of praying at night.
                    </li>

                    <li>
                      If the Iqamah for prayer is called you must stop the
                      Wird and pray. After the prayer, continue the Wird
                      from where you stopped.
                    </li>

                    <li>
                      Prayers always have first preference over the Wird
                      and Wazifah.
                    </li>
                  </ul>
                </div>

                {/* Conditions */}
                <div>
                  <h3 className="text-2xl font-bold text-green-900">
                    Perfect Conditions Under Which The Wird Should Be Recited
                  </h3>

                  <p className="mt-4 leading-8 text-gray-700">
                    If any of these conditions are violated without a
                    valid reason then the Wird should be repeated with an
                    extra 100 Istighfar.
                  </p>

                  <ol className="mt-6 list-decimal space-y-4 pl-6 leading-8 text-gray-700">
                    <li>
                      To sit in prayer position, and close the eyes while
                      reading the Wird.
                    </li>

                    <li>Face the Qibla.</li>

                    <li>
                      Picture the Prophet (SAW) or the Shaykh or other
                      pious Tijani.
                    </li>

                    <li>
                      To concentrate on the words of the Zikr.
                    </li>

                    <li>
                      To recite Ist&apos;azah (Auzo billah), Bismillah and
                      Al-Fatiha before starting the Wird.
                    </li>

                    <li>
                      To start each Zikr with a Quranic verse that orders
                      people to do it.
                    </li>

                    <li>
                      Make intention (niyah) before beginning the Wird.
                    </li>

                    <li>
                      To read the Wird in prescribed order.
                    </li>

                    <li>
                      To read the Wird silently, moving your lips, and
                      avoid reciting aloud.
                    </li>

                    <li>
                      After the Wird you should meditate a while.
                    </li>

                    <li>
                      To give the spiritual feelings a chance to subside
                      you should not eat or drink immediately after the
                      Wird.
                    </li>

                    <li>
                      One should have purification: wudu, tayammum or
                      ghusl.
                    </li>

                    <li>
                      Women who are menstruating can make the Wird if
                      desired or abstain from it.
                    </li>

                    <li>
                      It is optional for the sick, menstruating women and
                      women bleeding from childbirth to make up the Wird.
                    </li>

                    <li>
                      Body, clothes and place of worship must be clean.
                    </li>

                    <li>
                      One should be dressed according to Shariah.
                    </li>

                    <li>
                      To read the Wird in proper manner (adab): not
                      smiling, looking here and there, thinking about
                      worldly things, laughing aloud, reciting too fast,
                      and not reciting in a state of drowsiness.
                    </li>

                    <li>
                      Avoid talking unless necessary, e.g. replying to
                      the call of the Shaykh, parents and husband.
                    </li>
                  </ol>
                </div>

                {/* Wird Transliteration */}
                <div>
                  <h3 className="text-2xl font-bold text-green-900">
                    The Wird — Transliteration
                  </h3>

                  <div className="mt-6 space-y-8">

                    <div className="rounded-2xl bg-gray-50 p-6">
                      <p className="font-semibold text-green-900">
                        Astaghfiru-llah
                      </p>
                      <p className="mt-2 text-sm text-gray-500">
                        100 times
                      </p>
                    </div>

                    <div className="rounded-2xl bg-gray-50 p-6">
                      <p className="font-semibold text-green-900">
                        Salatul Fatiha
                      </p>

                      <p className="mt-4 text-lg leading-9 text-gray-700">
                        Allahumma salli &apos;ala Sayyidina Muhammadil
                        fatihi lima &apos;ugliq, Wal khatimi lima sabaqa,
                        Nasiril haqqi bil haqqi, Wal hadi ilaa Siratikal
                        mustaqeem, Wa&apos;ala &apos;alihi, haqqa qadrihi,
                        wa miqdarihil azeem.
                      </p>

                      <p className="mt-3 text-sm text-gray-500">
                        100 times
                      </p>
                    </div>

                    <div className="rounded-2xl bg-gray-50 p-6">
                      <p className="font-semibold text-green-900">
                        La ilaha illa-llah
                      </p>

                      <p className="mt-2 text-sm text-gray-500">
                        100 times
                      </p>

                      <p className="mt-4 text-gray-700">
                        Followed by Sayyiduna Muhammadun Rasulullah
                        &apos;Alaihi Salaamu-llah.
                      </p>
                    </div>

                  </div>
                </div>

                {/* Wird Translation */}
                <div>
                  <h3 className="text-2xl font-bold text-green-900">
                    The Wird — English Translation
                  </h3>

                  <div className="mt-6 space-y-6 text-gray-700">

                    <div>
                      <h4 className="font-bold text-green-900">
                        I seek forgiveness from Allah
                      </h4>
                      <p className="mt-1 text-sm text-gray-500">
                        100 times
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-green-900">
                        Salatul Fatih
                      </h4>

                      <p className="mt-3 leading-8">
                        Oh Allah bestow your blessing upon our Prophet
                        Muhammad, who opened what was closed, Who ended
                        what preceded him. Who aided the truth by the
                        truth. Who guides mankind to the straight path of
                        Allah. And to his family let this prayer be worthy
                        for them in merits and in value equal to the
                        Prophets.
                      </p>

                      <p className="mt-2 text-sm text-gray-500">
                        100 times
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-green-900">
                        There is no God but Allah
                      </h4>

                      <p className="mt-2 text-sm text-gray-500">
                        100 times
                      </p>

                      <p className="mt-3 leading-8">
                        May the peace of Allah be upon our Master Muhammad
                        the Messenger of Allah.
                      </p>
                    </div>

                  </div>
                </div>

                {/* Wird Arabic */}
                <div>
                  <h3 className="text-2xl font-bold text-green-900">
                    The Wird — Arabic
                  </h3>

                  <div className="mt-6 space-y-8 text-right" dir="rtl">

                    <div className="rounded-2xl bg-green-50 p-6">
                      <p className="text-3xl leading-[2.2] text-green-950">
                        أَسْتَغْفِرَ الله
                      </p>
                      <p className="mt-3 text-sm text-gray-600">
                        (100 times)
                      </p>
                    </div>

                    <div className="rounded-2xl bg-green-50 p-6">
                      <p className="text-3xl leading-[2.4] text-green-950">
                        اللّهُمَّ صَلَّ عَلَى سَيِّدِنَا مَحَمَّدِ الْفَاتِحِ
                        لِمَا أُغْلِقَ وَالْخَاتِمِ لِمَا سَبَقَ نَاصِرِ
                        الْحَقِّ بِالْحَقِّ وَالْهَادِي إِلَى صِرَاطِكَ
                        الْمُسْتَقِيمِ وَعَلَى آلِهِ حَقَّ قَدْرِهِ
                        وَمِقْدَارِهِ الْعَظِيمِ
                      </p>

                      <p className="mt-3 text-sm text-gray-600">
                        (100 times)
                      </p>
                    </div>

                    <div className="rounded-2xl bg-green-50 p-6">
                      <p className="text-3xl leading-[2.2] text-green-950">
                        لَا إِلَهَ إِلَّا اللَّهُ
                      </p>

                      <p className="mt-3 text-sm text-gray-600">
                        (100 times)
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            </details>

                        {/* =========================
                WAZIFAH
            ========================== */}
            <details className="overflow-hidden rounded-3xl border border-green-100 bg-white shadow-lg">
              <summary className="cursor-pointer bg-green-900 px-7 py-6 text-xl font-bold text-white transition hover:bg-green-800 md:px-10 md:text-2xl">
                Wazifah
              </summary>

              <div className="space-y-10 p-7 md:p-10">

                <div>
                  <h3 className="text-2xl font-bold text-green-900">
                    The Wazifah
                  </h3>

                  <p className="mt-4 leading-8 text-gray-700">
                    The Wazifah should be done once within 24 hours.
                  </p>
                </div>

                <div className="rounded-2xl bg-green-50 p-6">
                  <h3 className="text-xl font-bold text-green-900">
                    The Wazifah Consists Of
                  </h3>

                  <div className="mt-5 space-y-4 text-gray-700">
                    {[
                      ["Al Fatiha", "Once"],
                      ["Al Istighfar", "30 times"],
                      ["Salatul Fatiha", "50 times"],
                      ["La ilaha illa-llah", "100 times"],
                      ["Jawharatul Kamaal", "12 times"],
                    ].map(([name, count]) => (
                      <div
                        key={name}
                        className="flex flex-col justify-between gap-2 border-b border-green-100 pb-3 last:border-0 sm:flex-row"
                      >
                        <span className="font-medium">{name}</span>
                        <span className="font-semibold text-green-900">
                          {count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-green-900">
                    Conditions Under Which The Wazifah Should Be Recited
                  </h3>

                  <ol className="mt-6 list-decimal space-y-4 pl-6 leading-8 text-gray-700">
                    <li>
                      The conditions governing Wazifah are the same as the
                      conditions governing the Wird.
                    </li>

                    <li>
                      It should be performed aloud by sitting in a ring,
                      except for an acceptable excuse.
                    </li>

                    <li>
                      The recitation should be in one voice.
                    </li>

                    <li>
                      The spreading of a clean white cloth in the center
                      of the ring when reciting Jawharatul Kamaal.
                    </li>

                    <li>
                      For reciting Jawharatul Kamaal ablution with water
                      is obligatory. Otherwise, in case of Tayammum,
                      Jawharatul Kamaal should be replaced with 20
                      Salatul Fatiha.
                    </li>

                    <li>
                      It is permissible to recite the Wazifah on the back
                      of an animal and in a vehicle on a journey. But the
                      reciter should come down or stop driving after the
                      reciting of the 7th Jawharatul Kamaal and sit down
                      to complete the remaining 5, except in case of lack
                      of security, in which case Jawharatul Kamaal can be
                      replaced with 20 Salatul Fatiha.
                    </li>

                    <li>
                      The late comer should join the group and proceed
                      with them, and at the end he should recite what he
                      had missed at the beginning.
                    </li>

                    <li>
                      During the 12th Jawharatul Kamaal, hands should be
                      raised and opened while reciting.
                    </li>

                    <li>
                      While hands are still opened and raised, prayers
                      should be offered secretly. After the prayers, wipe
                      the face with the palm of your hands. Shake hands
                      with brothers (sisters with sisters), first from the
                      right and then to the left, and to whomever it is
                      possible to shake with.
                    </li>

                    <li>
                      The Imam will take the responsibility for the errors
                      that might have been committed during the Wazifah.
                    </li>

                    <li>
                      The individual should rectify any errors by reciting
                      100 Astaghfiru-llah, as in the Wird.
                    </li>
                  </ol>
                </div>

                {/* Wazifah Transliteration */}
                <div>
                  <h3 className="text-2xl font-bold text-green-900">
                    The Wazifah — Transliteration
                  </h3>

                  <div className="mt-6 space-y-8">

                    <div className="rounded-2xl bg-gray-50 p-6">
                      <h4 className="font-bold text-green-900">
                        Al Fatiha
                      </h4>

                      <p className="mt-4 text-lg leading-9 text-gray-700">
                        Bismi-llahir Rahmanir Raheem. Al Hamdu li-llahir
                        Rabbil &apos;Alameen. Ar Rahmanir Raheem. Maliki
                        Yaum-id Deen. Iyyaka na&apos;budu wa iyyaka
                        nasta&apos;een. Ihdinas Siratal Mustaqeem.
                        Siraatal ladhina an&apos;amta alaihim, ghairil
                        magdoobi alaihim, wa lad daaleen, Ameen.
                      </p>

                      <p className="mt-3 text-sm text-gray-500">
                        Once
                      </p>
                    </div>

                    <div className="rounded-2xl bg-gray-50 p-6">
                      <h4 className="font-bold text-green-900">
                        Al Istighfar
                      </h4>

                      <p className="mt-4 text-lg leading-9 text-gray-700">
                        Astaghfir-llah al&apos;Azimal Iladhi La ilaha illa
                        Huwal Hayyul Qayyum.
                      </p>

                      <p className="mt-3 text-sm text-gray-500">
                        30 times
                      </p>
                    </div>

                    <div className="rounded-2xl bg-gray-50 p-6">
                      <h4 className="font-bold text-green-900">
                        Salatul Fatiha
                      </h4>

                      <p className="mt-4 text-lg leading-9 text-gray-700">
                        Allahumma salli &apos;ala Sayyidina Muhammadil
                        fatihi lima &apos;ugliq, Wal khatimi lima sabaqa.
                        Nasiril haqqi bil haqqi. Wal hadi ilaa Siratikal
                        mustaqeem. Wa&apos;ala &apos;alihi, haqqa qadrihi,
                        wa miqdarihil azeem.
                      </p>

                      <p className="mt-3 text-sm text-gray-500">
                        50 times
                      </p>
                    </div>

                    <div className="rounded-2xl bg-gray-50 p-6">
                      <h4 className="font-bold text-green-900">
                        At Tasbih
                      </h4>

                      <p className="mt-4 text-lg leading-9 text-gray-700">
                        Subhana Rabbika Rabbil &apos;Izzati &apos;amma
                        yasifoun. Wa salaamun &apos;ala-l mursalin. Wal
                        hamdu li-llahir Rabbil Aalameen.
                      </p>

                      <p className="mt-3 text-sm text-gray-500">
                        Once
                      </p>
                    </div>

                    <div className="rounded-2xl bg-gray-50 p-6">
                      <h4 className="font-bold text-green-900">
                        At Tahlil
                      </h4>

                      <p className="mt-4 text-2xl text-gray-700">
                        La ilaha illa-llah
                      </p>

                      <p className="mt-3 text-sm text-gray-500">
                        100 times
                      </p>
                    </div>

                    <div className="rounded-2xl bg-gray-50 p-6">
                      <h4 className="font-bold text-green-900">
                        At Tadhyil
                      </h4>

                      <p className="mt-4 text-lg leading-9 text-gray-700">
                        Sayyiduna Muhammadur Rasulu-llah, Alaihi Salaamu-llah.
                      </p>

                      <p className="mt-3 text-sm text-gray-500">
                        Once
                      </p>
                    </div>

                    <div className="rounded-2xl bg-gray-50 p-6">
                      <h4 className="font-bold text-green-900">
                        Jawharatul Kamaal
                      </h4>

                      <p className="mt-4 text-lg leading-9 text-gray-700">
                        Allahumma salli wa saalim &apos;alaa, Ain-ir
                        Rahmatir Rabbaniyyati, Wal yaqutatil
                        mutahaqiqati-lhaa&apos;itati bi markazil fuhoumi
                        wal ma&apos;aani. Wa Nuril akwaanil mutakawwinatil
                        Adamiyy saahibil haqq-r Kabhaani. Al barqil
                        asta&apos;l bi muzounil arbaahil, maali&apos;ati li
                        kulli muta&apos;arridin minal buhouri wal awaani.
                        Wa Nurikal laani&apos;il ladhi mala&apos;ta bihi
                        kawnakal haa&apos;ita bi amkinatil makanee.
                      </p>

                      <p className="mt-4 text-lg leading-9 text-gray-700">
                        Allahumma salli wa sallim&apos;alaa, &apos;ainul
                        haqqillatee talajalla minhaa uroushul haqaa&apos;iqi,
                        ainal ma&apos;aarifil aqwam. Siratikal taamill
                        asqam.
                      </p>

                      <p className="mt-4 text-lg leading-9 text-gray-700">
                        Allahumma salli wa sallim &apos;alaa, tal&apos;atil
                        haqqi bil haqqil kanzil a&apos;zam. Ifaadatika
                        minka ilaika ihaatatin nuril mutalsam.
                        Salla-llahu &apos;alaihi wa&apos;alaa &apos;alihi
                        salaatan tu&apos;arrifunaa bi haa&apos;iyyah.
                      </p>

                      <p className="mt-3 text-sm text-gray-500">
                        12 times
                      </p>
                    </div>

                    <div className="rounded-2xl bg-gray-50 p-6">
                      <h5 className="font-bold text-green-900">
                        INNA-LLAHA
                      </h5>

                      <p className="mt-4 text-lg leading-9 text-gray-700">
                        Indeed Allah and His angels send blessings upon the Prophet. Oh Ye who believe, send your blessings upon him with a sense of reverence and gratitude. May the Blessings of Allah be upon him, and upon his family and his companions peace and gratitiude.
Glory to the Lord, The Lord of Majesty, from what they attribute. And peace be upon those sent. And praise be to Allah, the Lord of the worlds. Amen.
                      </p>

                      <p className="mt-3 text-sm text-gray-500">
                        Once
                      </p>
                      </div>

                  </div>
                </div>

                {/* Arabic */}
    <div className="rounded-2xl bg-green-50 p-6 md:p-10">
      <h3 className="text-2xl font-bold text-green-900">
        The Wazifah&apos;a Is As Follows
      </h3>

      <h4 className="mt-3 text-xl font-semibold text-green-800">
        (Arabic)
      </h4>

      <div className="mt-8 space-y-10">

        <div dir="rtl" className="text-right">
          <p className="text-3xl leading-[2.4] text-green-950">
            بِسَمِ اللَّهِ الرَّحْمْنِ الرَّحِيْمِ
            <br />
            الْحَمْدُلِلْهِ رَبّ الْعَلَمِيْنَ « الرَّحْمِنِ الرَّحِيْمِ •
            مَلِك يَوْمِ الدِّيْنِ • إِيَّاكَ نَعْبُدُ وَاِيَّاكَ
            نَسْتَعِيْنَ • اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيْمَ •
            صِرَاطً الْذِيْنَ أنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوْبِ
            عَلَيْهِمْ وَلَاَ الضَّالِيْنَ ٥
          </p>

          <p className="mt-4 font-semibold">(Once)</p>
        </div>

        <div dir="rtl" className="text-right">
          <p className="text-3xl leading-[2.4] text-green-950">
            أَسْتَغْفِرَ اللَّهَ الْعَظِيْمَ الَّذِي لا إلهَ إلاَ هُوَ
            الْحَي الْقَيْومَ
          </p>

          <p className="mt-4 font-semibold">(30 times)</p>
        </div>

        <div dir="rtl" className="text-right">
          <p className="text-3xl leading-[2.4] text-green-950">
            اللَهُمْ صَلَ عَلَى سَيْدِنًا مُحَمَّدِ الْفَاتِحِ لِمَا أغْلِقَ •
            وَالْخَاتِمِ لِمَا سَبَقَ نَاصِرِ الْحَقِ بِالْحَقّ °
            وَالْهَادِي إلَى صِرَاطِكَ الْمَسْتَقِيْمِ وَعَلَى أَلِهِ
            حَقَّ قَدْرِه وَمِقْدَارِهِ الْعَظِيْمِ °
          </p>

          <p className="mt-4 font-semibold">(30 times)</p>
        </div>

        <div dir="rtl" className="text-right">
          <p className="text-3xl leading-[2.4] text-green-950">
            سَبْحَانَ رَبِّكَ رَبِّ الْعِزَّةِ عُمَّا يَصِفُوْنَ •
            وَسَلامٌ عَلَى الْمَرْسَلِيْنِ • وَالْحَمْدَ لِلهِ رَبِّ
            الْعَالَمِيْنِ °
          </p>

          <p className="mt-4 font-semibold">(Once)</p>
        </div>

        <div dir="rtl" className="text-right">
          <p className="text-4xl font-semibold leading-[2.4] text-green-950">
            لاَ إلهَ إلا اللّه
          </p>

          <p className="mt-4 font-semibold">
            (100 times)
          </p>
        </div>

        <div dir="rtl" className="text-right">
          <p className="text-3xl leading-[2.4] text-green-950">
            سَيِّدّنَا مُحَمّدُ رَسُوْلُ اللهِ عَلَيْهِ سَلَاَمُ اللهِ
          </p>

          <p className="mt-4 font-semibold">(Once)</p>
        </div>

        <div dir="rtl" className="text-right">
          <p className="text-3xl leading-[2.4] text-green-950">
            آللّهُمَ صَلَ وَ سَلِمْ عَلَى عَيْنِ الرَّحْمَةِ رَبَّانِيَّةِ • وَالْيَاقُوِتَةِ المُتَحَقِقَةِ الْحَائِطَةِ بمركز الفهوم والمعاني • ونور الأكوان الْمُتَكَوِّنَةِ الأدَمِيّ صَاحِبِ الْحَقَ ارَبَانِي • الْبَرْقِ الأسْطَعِ بِمِزُونِ الأَرْبَاحِ الْمَالِئَةِ لِكُلَ مَتَعَرَضِ مِنَ الْبُحُورِ وَالأوَانِي • وَنُورِكَ الأَمِعِ الَذِي مَلأتَ بِهِ كَوْنَك الْحَائِطَ بِامْكِنَةِ الْمَكَانِي • اللّهمَّ صَلّ وَسَلِم عَلَى عَيْنِ الْحَقِّ الَّتِي تَتَجَلَّى مِنْهَا عُرُوْشٍ الْحَقَائِق عَيْنَ الْمَعَارِفِ الأقْوَمِ ° صِرَاطِك التَّام الأسْقَمِ • اللَّهُمَّ صَلَ وَسَلِّم عَلَى طَلْعَةِ الْحَقِّ بِالْحَقِّ الْكَنْزِ الأعْظَم ٥ إفَاضَتِكَ مِنْكَ إِلَيْكَ إِحَاطَةِ النُّوْرِ الْمُطَلْسَمِ • صَلَّى اللهُ عَلَيْهِ وَعَلَى الهِ صَلَاة تُعَرّفُنَا بِهَا إيَّاه ٥
          </p>

          <p className="mt-4 font-semibold">(12 times)</p>
        </div>

        <div dir="rtl" className="text-right">
          <p className="text-3xl leading-[2.4] text-green-950">
            نَّ اللّهَ وَمَلا تِكَتَهُ يُصلُّوْنَ عَلى النَّبِيْ ° يَا أَيْهَا الَّذِيْنَ أَمَنَوْاصَلُوا عَلَيْهِ وَسَلِمُوا تَسْلِيْمَا • وَصَلَى اللهُ عَلَيْهِ وَعَلَى أله وَصَحْبِهِ وَسَلَّمَ
تَسْلِيْمَاه سُبْحَانَ رَبِّكَ رَب الْعِزَّةِ عَمَّا يُصِفُوْنَ • وَسَلَامٌ عَلَى الْمُرْسَلِيْنَ • وَالْحَمْدُ لِلهِ رَبِ العَالَمِيْنَ ٥
          </p>

          <p className="mt-4 font-semibold">(Once)</p>
        </div>
        </div>
        </div>

                {/* Duas */}
                <div>
                  <h3 className="text-2xl font-bold text-green-900">
                    Du&apos;as After Wazifah
                  </h3>

                  <div className="mt-6 rounded-2xl bg-green-50 p-6">
                    <div className="space-y-4 text-gray-700">
                      <p>
                        <strong>Hasbuna-llahu wa Neeman Wakeel</strong>{" "}
                        — 450 times
                      </p>

                      <p>
                        <strong>Ya Lateef</strong> — 129 times
                      </p>

                      <p>
                        <strong>Al Fatiha</strong> — Once
                      </p>

                      <p>
                        <strong>Salatul Fatih</strong> — 10 times
                      </p>

                      <p>
                        <strong>Suratul Ikhlas</strong> — 11 times
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </details>

            {/* =========================
    ZIKR-UL-JUMA'A
========================== */}
<details className="overflow-hidden rounded-3xl border border-green-100 bg-white shadow-lg">
  <summary className="cursor-pointer bg-green-900 px-7 py-6 text-xl font-bold text-white transition hover:bg-green-800 md:px-10 md:text-2xl">
    Zikr-ul-Juma&apos;a
  </summary>

  <div className="space-y-10 p-7 md:p-10">

    {/* Introduction */}
    <div>
      <h3 className="text-2xl font-bold text-green-900">
        ZIKR-UL JUMA&apos;A
      </h3>

      <p className="mt-4 leading-8 text-gray-700">
        Zikr-ul-Juma&apos;a should be done on every Friday evening in
        congregation, one hour before sunset.
      </p>
    </div>

    {/* The Zikr-ul-Juma'a Consists Of */}
    <div className="rounded-2xl bg-green-50 p-6 md:p-8">
      <h3 className="text-2xl font-bold text-green-900">
        The Zikr-ul-Juma&apos;a Consists Of
      </h3>

      <div className="mt-6 space-y-3 leading-8 text-gray-700">
        <p>Al Fatiha <span className="font-semibold">(Once)</span></p>
        <p>Al Istighfar <span className="font-semibold">(3 times)</span></p>
        <p>Salatul Fatiha <span className="font-semibold">(3 times)</span></p>
        <p>At Tasbih <span className="font-semibold">(Once)</span></p>
        <p>At Tahleel <span className="font-semibold">(1,000-1,600 times)</span></p>
        <p>Salatul Fatiha <span className="font-semibold">(3 times)</span></p>
        <p>Inna-llaha <span className="font-semibold">(Once)</span></p>
      </div>
    </div>

    {/* Conditions */}
    <div>
      <h3 className="text-2xl font-bold text-green-900">
        Conditions for Zikr-ul-Juma&apos;ah
      </h3>

      <ol className="mt-6 list-decimal space-y-4 pl-6 leading-8 text-gray-700">
        <li>
          Haila-llah / Zkr-ul-Juma a is strictly instructed to be performed
          after Asr prayers on Friday
        </li>

        <li>
          The congregation of people is a necessary condition, if possible.
          Otherwise it should be performed individually
        </li>

        <li>
          It should be recited aloud in one voice sitting in a circle.
        </li>

        <li>
          If the individual prefers he is permitted to recite La ilaha
          illa-llah 1,000 times or more. The next best figure is 1,600,
          which Shaykh Tijani use to recite, otherwise one can continue
          without counting.
        </li>
      </ol>
    </div>

    {/* Transliteration */}
    <div className="rounded-2xl bg-gray-50 p-6 md:p-8">
      <h3 className="text-2xl font-bold text-green-900">
        The Zikr-ul-Juma&apos;a Is As Follows
      </h3>

      <h4 className="mt-3 text-xl font-semibold text-green-800">
        (Transliteration)
      </h4>

      <div className="mt-8 space-y-8 leading-8 text-gray-700">

        {/* Al Fatiha */}
        <div>
          <h5 className="text-xl font-bold text-green-900">Al Fatiha</h5>

          <p className="mt-3">
            Bısmı-lahir Rahmanir Raheem, Al Hamdu li-Hahir Rabbil Alameen.
            Ar Rahmanir Raheem. Maliki Yaum-id Deen. Iyyaka na&apos;budu wa
            iyyaka nasta een. Ihdinas Siratal Mustaqeem. Siraatal ladhina
            an&apos;amta alaihim, ghairil magdoobi ‘alaihim, wa lad daaleen,
            Ameen.
          </p>

          <p className="mt-2 font-semibold">(Once)</p>
        </div>

        {/* Al Istighfar */}
        <div>
          <h5 className="text-xl font-bold text-green-900">Al Istighfar</h5>

          <p className="mt-3">
            Astaghfir-llah al&apos;Azimal Hadhi
            <br />
            La ilaha illa Huwal Hayyul Qayyum,
          </p>

          <p className="mt-2 font-semibold">(3 times)</p>
        </div>

        {/* Salatul Fatiha */}
        <div>
          <h5 className="text-xl font-bold text-green-900">
            Salatul Fatiha
          </h5>

          <p className="mt-3">
            Allahumma salli ala Sayyidina Muhammadil fatihi lima ugliq,
            Wal khatimi lima sabaqa, Nasiril haqqi bil haqqi. Wal hadi ilaa
            Siratikal mustaqeen. Wa&apos;ala &apos;alihi, haqqa qadrihi, wa
            miqdarihil &apos;azeem.
          </p>

          <p className="mt-2 font-semibold">(3 times)</p>
        </div>

        {/* At Tasbih */}
        <div>
          <h5 className="text-xl font-bold text-green-900">At Tasbih</h5>

          <p className="mt-3">
            Subhana Rabbika Rabbil Izzati&apos;amma yasifoun.
            <br />
            Wa salaamun ‘ala-l mursalin, Wal hamdu li-llahir Rabbil
            Aalameen.
          </p>

          <p className="mt-2 font-semibold">(Once)</p>
        </div>

        {/* At Tahlil */}
        <div>
          <h5 className="text-xl font-bold text-green-900">At Tahlil</h5>

          <p className="mt-3 text-2xl font-semibold text-green-950">
            La illaha illa-llah
          </p>

          <p className="mt-2 font-semibold">(1,000 - 1,600 times)</p>
        </div>

      </div>
    </div>

    {/* Translation */}
    <div>
      <h3 className="text-2xl font-bold text-green-900">
        The Zikr-ul-Juma&apos;a Is As Follows
      </h3>

      <h4 className="mt-3 text-xl font-semibold text-green-800">
        (Translation)
      </h4>

      <div className="mt-8 space-y-8 leading-8 text-gray-700">

        {/* Al Fatiha */}
        <div>
          <h5 className="text-xl font-bold text-green-900">Al Fatiha</h5>

          <p className="mt-3">
            In the name of Allah, Most Gracious, Most Merciful.
            <br />
            Praise be to Allah, the Cherisher and Sustainer of the worlds,
            Most Gracious, Most Merciful, Master of the Day of Judgement.
            Thee do we worship, and Thine aid do we seck. Show us the
            straight way. The way of those on whom Thou hast bestowed Thy
            Grace. Those whose (portion) is not wrath, and who go not astray.
          </p>

          <p className="mt-2 font-semibold">(Once)</p>
        </div>

        {/* Al Istighfar */}
        <div>
          <h5 className="text-xl font-bold text-green-900">Al Istighfar</h5>

          <p className="mt-3">
            I ask forgiveness of Allah the Great, who there is no God but He,
            the Living, the Self-Subsisting.
          </p>

          <p className="mt-2 font-semibold">(3 times)</p>
        </div>

        {/* Salatul Fatih */}
        <div>
          <h5 className="text-xl font-bold text-green-900">
            Salatul Fatih
          </h5>

          <p className="mt-3">
            Oh Allah bestow your blessing upon our Prophet Muhammad, who
            opened what was closed, Who ended what preceded him. Who aided
            the truth by the truth. Who guides mankind to the straight path
            of Allah. And to his family let this prayer be worthy for them in
            merits and in value equal to the Prophet&apos;s.
          </p>

          <p className="mt-2 font-semibold">(3 times)</p>
        </div>

        {/* At Tasbih */}
        <div>
          <h5 className="text-xl font-bold text-green-900">At Tasbih</h5>

          <p className="mt-3">
            Glory to thy Lord, the Lord of Honour and Power (He is free)
            from what they ascribe (to Him).
          </p>

          <p className="mt-2 font-semibold">(Once)</p>
        </div>

        {/* At Tahlil */}
        <div>
          <h5 className="text-xl font-bold text-green-900">At Tahlil</h5>

          <p className="mt-3">
            There is no God but Allah.
          </p>

          <p className="mt-2 font-semibold">(1,000 - 1,600 times)</p>
        </div>

        {/* At Tadhyil */}
        <div>
          <h5 className="text-xl font-bold text-green-900">At Tadhyil</h5>

          <p className="mt-3">
            May the peace of Allah be upon our Master Muhammad the Messenger
            of Allah.
          </p>

          <p className="mt-2 font-semibold">(Once)</p>
        </div>

        {/* Al Fatiha */}
        <div>
          <h5 className="text-xl font-bold text-green-900">Al Fatiha</h5>

          <p className="mt-3">
            In the name of Allah, Most Gracious, Most Merciful.
            <br />
            Praise be to Allah, the Cherisher and Sustainer of the worlds,
            Most Gracious, Most Merciful.
            <br />
            Master of the Day of Judgement. Thee do we worship, and Thine aid
            do we seck. Show us the straight way. The way of those on whom
            Thou hast bestowed Thy Grace, Those whose (portion) is not wrath,
            and who go not astray.
          </p>

          <p className="mt-2 font-semibold">(Once)</p>
        </div>

        {/* Salatul Fatih */}
        <div>
          <h5 className="text-xl font-bold text-green-900">
            Salatul Fatih
          </h5>

          <p className="mt-3">
            Oh Allah bestow your blessing upon our Prophet Muhammad, who
            opened what was closed. Who ended what preceded him. Who aided
            the truth by the truth. Who guides mankind to the straight path
            of Allah. And to his family let this prayer be worthy for them in
            merits and in value equal to the Prophet&apos;s.
          </p>

          <p className="mt-2 font-semibold">(3 times)</p>
        </div>

        {/* Inna-llaha */}
        <div>
          <h5 className="text-xl font-bold text-green-900">Inna-llaha</h5>

          <p className="mt-3">
            Indeed Allah and His angels send blessings upon the Prophet.
            Oh Ye who believe, send your blessings upon him with a sense of
            reverence and gratitude. May the Blessings of Allah be upon him,
            and upon his family and his companions peace and gratitude.
            <br />
            Glory to the Lord. The Lord of Majesty, from what they attribute.
            And peace he upon those sent. And praise be to Allah, the Lord of
            the worlds, Ameen.
          </p>

          <p className="mt-2 font-semibold">(Once)</p>
        </div>

      </div>
    </div>

    {/* Arabic */}
    <div className="rounded-2xl bg-green-50 p-6 md:p-10">
      <h3 className="text-2xl font-bold text-green-900">
        The Zikr-al-Juma&apos;a Is As Follows
      </h3>

      <h4 className="mt-3 text-xl font-semibold text-green-800">
        (Arabic)
      </h4>

      <div className="mt-8 space-y-10">

        <div dir="rtl" className="text-right">
          <p className="text-3xl leading-[2.4] text-green-950">
            أعوذ بالله من الشيطان الرجيه
            <br />
            الْحَمْدُلِلْهِ رَبّ الْعَلَمِيْنَ « الرَّحْمِنِ الرَّحِيْمِ •
            مَلِك يَوْمِ الدِّيْنِ • إِيَّاكَ نَعْبُدُ وَاِيَّاكَ
            نَسْتَعِيْنَ • اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيْمَ •
            صِرَاطً الْذِيْنَ أنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوْبِ
            عَلَيْهِمْ وَلَاَ الضَّالِيْنَ ٥
          </p>

          <p className="mt-4 font-semibold">(Once)</p>
        </div>

        <div dir="rtl" className="text-right">
          <p className="text-3xl leading-[2.4] text-green-950">
            أَسْتَغْفِرَ اللَّهَ الْعَظِيْمَ الَّذِي لا إلهَ إلاَ هُوَ
            الْحَي الْقَيْومَ
          </p>

          <p className="mt-4 font-semibold">(3 times)</p>
        </div>

        <div dir="rtl" className="text-right">
          <p className="text-3xl leading-[2.4] text-green-950">
            اللَهُمْ صَلَ عَلَى سَيْدِنًا مُحَمَّدِ الْفَاتِحِ لِمَا أغْلِقَ •
            وَالْخَاتِمِ لِمَا سَبَقَ نَاصِرِ الْحَقِ بِالْحَقّ °
            وَالْهَادِي إلَى صِرَاطِكَ الْمَسْتَقِيْمِ وَعَلَى أَلِهِ
            حَقَّ قَدْرِه وَمِقْدَارِهِ الْعَظِيْمِ °
          </p>

          <p className="mt-4 font-semibold">(3 times)</p>
        </div>

        <div dir="rtl" className="text-right">
          <p className="text-3xl leading-[2.4] text-green-950">
            سَبْحَانَ رَبِّكَ رَبِّ الْعِزَّةِ عُمَّا يَصِفُوْنَ •
            وَسَلامٌ عَلَى الْمَرْسَلِيْنِ • وَالْحَمْدَ لِلهِ رَبِّ
            الْعَالَمِيْنِ °
          </p>

          <p className="mt-4 font-semibold">(Once)</p>
        </div>

        <div dir="rtl" className="text-right">
          <p className="text-4xl font-semibold leading-[2.4] text-green-950">
            لاَ إلهَ إلا اللّه
          </p>

          <p className="mt-4 font-semibold">
            (1000 - 1600 times)
          </p>
        </div>

        <div dir="rtl" className="text-right">
          <p className="text-3xl leading-[2.4] text-green-950">
            سَيِّدّنَا مُحَمّدُ رَسُوْلُ اللهِ عَلَيْهِ سَلَاَمُ اللهِ
          </p>

          <p className="mt-4 font-semibold">(Once)</p>
        </div>

        <div dir="rtl" className="text-right">
          <p className="text-3xl leading-[2.4] text-green-950">
            بِسْمِ اللّهِ الرَّحْمِنِ الرَّحِيَّمِ
            <br />
            الْحَمْدُ لِلهِ رَبِ الْعَلَمِيْنَ • الرَّحْمْنِ الرَّحِيْمِ °
            <br />
            مَلِك يَوْمِ الدِّيْنِ ٥ إِيَّاكَ نَعْبَدَ وَاِيَّاكَ
            نَسْتَعِيْنَ ٥ إِهْدِنَا الصِّرَاط الْمُسْتَقِيْمَ •
            صِرَاط الْذِيْنَ انْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوْبِ
            عَلَيْهِمْ وَلَاَ الضَّالِيْنَ ٥
          </p>

          <p className="mt-4 font-semibold">(Once)</p>
        </div>

        <div dir="rtl" className="text-right">
          <p className="text-3xl leading-[2.4] text-green-950">
            اللهُمْ صَلٍّ عَلَى سَيِّدِنَا مُحَمَّدِ الْفَاتِحِ لِمَا أغْلِقَ •
            وَالْخَاتِم لِمَا سَبْق • نَاصِرِ الْحَقِ بِالْحَقّ •
            وَالْهَادِي إِلَى صِرَاطِكَ الْمُسْتَقِيْمِ وَعَلَى أَله
            حَقِّ قَدْرِه وَمِقْدَارِهِ الْعَظِيمِ •
          </p>

          <p className="mt-4 font-semibold">(3 times)</p>
        </div>

        <div dir="rtl" className="text-right">
          <p className="text-3xl leading-[2.4] text-green-950">
            إِنَّ اللّهَ وَمَلا نِكَتَهُ يُصَلُوْنَ عَلَى النَّبِيِّ •
            يَا أَيَّهَا الْذِيْنَ أَمَنُوْاصلُوا عَلَيْهِ وَسَلِمُوا
            تَسْلِيْمَا • وَصَلَى الله عَلَيْهِ وَعَلَى آلهِ وَصحْبِهِ
            وَسَلَّمْ نَسْلِيْما • سَبْحَانَ رَبَ الْعِزَّةِ عَمَّا
            يَصِفُونَ • وَسَلَامٌ عَلَى الْمُرْسَلِيْنَ • وَالْحَمْدُ
            لِلْهِ رَبّ العَالَمِين °
          </p>

          <p className="mt-4 font-semibold">(Once)</p>
        </div>

        <div>
          <h5 className="text-xl font-bold text-green-900">
            At Tadhyil
          </h5>

          <p
            dir="rtl"
            className="mt-3 text-right text-3xl leading-[2.4] text-green-950"
          >
            Sayyiduna Muhammadur Rasulu-llah, ‘Alaihi Salaamu-llah
          </p>

          <p className="mt-4 font-semibold">(Once)</p>
        </div>

        <div>
          <h5 className="text-xl font-bold text-green-900">
            Al Fatiha
          </h5>

          <p className="mt-3 leading-8 text-gray-700">
            Bismi-llahir Rahmanir Raheem. Al Hamdu li-labir Rabbil Alameen.
            Ar Rahmanir Raheem. Maliki Yaum-id Deen. İyyaka na&apos;budu wa
            iyyaka nasta een, Indinas Siratal Mustaqeem. Siraatal ladhina
            an&apos;amta alaihim, ghairil magdoobi &apos;alaihim, wa lad
            daaleen. Ameen.
          </p>

          <p className="mt-2 font-semibold">(Once)</p>
        </div>

        <div>
          <h5 className="text-xl font-bold text-green-900">
            Salatul Fatiha
          </h5>

          <p className="mt-3 leading-8 text-gray-700">
            Allahumma salli ala Sayyidina Muhammadil fatihi lima &apos;ugliq.
            Wal khatimi lima sabaqa. Nasiril haqqi bil haqqi. Wal hadi ilaa
            Siratikal mustaqeem, Wa&apos;ala ‘alihi, haqqa qadrihi, wa
            miqdaribil azeem.
          </p>

          <p className="mt-2 font-semibold">(3 times)</p>
        </div>

        <div>
          <h5 className="text-xl font-bold text-green-900">
            Inna-llaha
          </h5>

          <p className="mt-3 leading-8 text-gray-700">
            Inna-llaha wa malaikatahu yusalluna ‘alaa-n
            <br />
            Nabiy. Ya ayyuhal ladhina aamanu, sallu &apos;alaihi wa sallimu
            tasleema. Wa salla-Ilahu ‘alaihi wa
            <br />
            ‘alaa. aalihi wa sabbihi wa sallama tasleema.
            <br />
            Subhana Rabbika Rabbil ‘Izzati&apos;amma yasifoun.
            <br />
            Wa salaamun ‘ala-l mursalin. Wal hamdu li-llahir Rabbil
            Aalameen,
          </p>

          <p className="mt-2 font-semibold">(Once)</p>
        </div>

      </div>
    </div>

  </div>
</details>

            </div>
            </div>
            </section>

    </main>
  );
}