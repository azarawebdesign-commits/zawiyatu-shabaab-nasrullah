import Image from "next/image";

const contents = [
  "Introduction",
  "Early Life and Birth",
  "Parents and Early Upbringing",
  "Mastery of the Qur'an",
  "Studies in Kumasi",
  "His Teachers and Scholars",
  "Tijaniyya Spiritual Formation",
  "Returning to Accra as a Teacher",
  "Students and Intellectual Legacy",
  "Deputy Regional Chief Imam",
  "National Chief Imam",
  "The Office of the National Chief Imam",
  "A Champion of Peace",
  "Interfaith Dialogue",
  "Educational Mission",
  "SONSETFund",
  "Islamic Peace and Security Council",
  "Humanitarian and Social Development",
  "The Ghana National Mosque",
  "Qur'an Memorisation",
  "Unity Among Zongo Communities",
  "Major Contributions",
  "Awards and Recognition",
  "Sheikh Sharubutu Sports Complex",
  "His Centenary",
  "His Family",
  "His Spiritual Character",
  "His Understanding of Leadership",
  "Timeline: 1919–2026",
  "Legacy and Conclusion",
];

const contributions = [
  {
    title: "Islamic Scholarship",
    text: "Decades devoted to Qur'anic and Islamic education.",
  },
  {
    title: "Teaching",
    text: "Training and mentoring generations of Muslim students.",
  },
  {
    title: "Tijaniyya Leadership",
    text: "Serving as a spiritual leader within Ghana's Tijaniyya Muslim community.",
  },
  {
    title: "National Religious Leadership",
    text: "Serving as Ghana's National Chief Imam since 1993.",
  },
  {
    title: "Peacebuilding",
    text: "Promoting peaceful coexistence and participating in national peace efforts.",
  },
  {
    title: "Interfaith Relations",
    text: "Encouraging dialogue and cooperation between religious communities.",
  },
  {
    title: "Education",
    text: "Supporting Islamic schools, secular education and scholarships.",
  },
  {
    title: "Youth Development",
    text: "Encouraging young Muslims to pursue knowledge and responsible leadership.",
  },
  {
    title: "Humanitarian Service",
    text: "Supporting vulnerable people and communities.",
  },
  {
    title: "Institutional Development",
    text: "Supporting the development of Islamic educational and community institutions.",
  },
];

const awards = [
  "Member of the Order of the Star of Volta, Republic of Ghana, 2006 and 2007",
  "Tijaniyya Muslims Movement Highest Personality Award, 2011",
  "Yankasa Man of the Year Award, 2013",
  "Muslims Personality Award, 2013",
  "Man of the Year Award, Abnaul Faida, Lagos, 2014",
  "Northern Achievers Award, 2015",
  "Muslims Excellence Award, Yankasa Association Inc., USA, 2015",
  "Martin Luther King Jr. Award for Peace and Justice, United States Embassy in Accra, 2016",
  "Ghana Muslim Students' Association Patron Award, 2018",
  "Muslims Achievers Award, 2018",
  "Honorary Professorial Degree Award, Poltava University, Ukraine, 2019",
  "Ultimate Icon of the Year, Ghana Actors and Entertainers Awards, 2019",
];

const timeline = [
  {
    year: "1919",
    event: "Born on 23 April in Accra.",
  },
  {
    year: "1920s",
    event: "Begins Qur'anic and Islamic education under his parents.",
  },
  {
    year: "c. 1931",
    event: "By approximately age 12, develops mastery of Qur'anic recitation.",
  },
  {
    year: "1930s onward",
    event: "Travels to Kumasi for advanced Islamic studies.",
  },
  {
    year: "—",
    event: "Studies under Shaykh Abdullah Dan Tano and other scholars.",
  },
  {
    year: "After Kumasi",
    event: "Returns to Accra and begins teaching Muslim youth.",
  },
  {
    year: "Later years",
    event: "Continues seeking knowledge from senior scholars.",
  },
  {
    year: "1974",
    event: "Appointed Deputy Regional Chief Imam.",
  },
  {
    year: "1992",
    event:
      "Developments associated with the establishment and formalisation of the Office of the National Chief Imam.",
  },
  {
    year: "1993",
    event: "Becomes National Chief Imam of Ghana.",
  },
  {
    year: "2006–2007",
    event: "Receives national recognition associated with the Order of the Star of Volta.",
  },
  {
    year: "2011",
    event: "Receives the Tijaniyya Muslims Movement Highest Personality Award.",
  },
  {
    year: "2015",
    event:
      "The Sheikh Sharubutu Ramadan Cup becomes associated with promoting peace and unity among Zongo communities.",
  },
  {
    year: "2016",
    event:
      "Receives the Martin Luther King Jr. Award for Peace and Justice.",
  },
  {
    year: "2018",
    event:
      "Receives major Muslim community and students' association recognitions.",
  },
  {
    year: "2019",
    event:
      "Receives honorary recognition from Poltava University and celebrates his 100th birthday on 23 April.",
  },
  {
    year: "2020",
    event: "Sheikh Sharubutu Sports Complex is named in his honour.",
  },
  {
    year: "2021",
    event:
      "Leads the first Jumu'ah prayer at the Ghana National Mosque in Kanda on 16 July.",
  },
  {
    year: "2022",
    event: "Sharubutu Sabilu Salaam Qur'an Memorisation Institute is established.",
  },
  {
    year: "2024",
    event:
      "His wife, Hajia Rahmatu Tahwee Sheikh Sharubutu, passes away on 27 March.",
  },
  {
    year: "2025",
    event:
      "First graduating class of approximately 30 Qur'an memorizers is reported from the Sharubutu Sabilu Salaam Institute.",
  },
  {
    year: "2026",
    event:
      "Continues to be recognised publicly as Ghana's National Chief Imam and Grand Mufti.",
  },
];

const legacy = [
  {
    number: "01",
    title: "Knowledge",
    text: "Seek beneficial knowledge throughout one's life.",
  },
  {
    number: "02",
    title: "Faith",
    text: "Remain devoted to Allah and committed to Islamic teachings.",
  },
  {
    number: "03",
    title: "Character",
    text: "Allow knowledge to produce humility, patience and good conduct.",
  },
  {
    number: "04",
    title: "Service",
    text: "Use one's abilities to benefit others.",
  },
  {
    number: "05",
    title: "Peace",
    text: "Resolve disagreements through dialogue and reconciliation.",
  },
  {
    number: "06",
    title: "Education",
    text: "Invest in the intellectual and moral development of young people.",
  },
  {
    number: "07",
    title: "Unity",
    text: "Work for harmony among Muslims and peaceful coexistence with all communities.",
  },
];

export default function OsmanNuhuSharubutuPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F0]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-800 to-green-700 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full border-[50px] border-[#C9A227]" />
          <div className="absolute -bottom-40 -left-32 h-[500px] w-[500px] rounded-full border-[60px] border-[#C9A227]" />
        </div>
        

        <div className="relative mx-auto max-w-6xl px-6 py-24 text-center md:py-32">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
            Zawiyatu Shabaab Nasrullah
          </p>
          

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            SHAYKH DR. OSMAN NUHU SHARUBUTU
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-xl font-medium md:text-2xl">
            Life, Scholarship, Spirituality and Legacy
          </p>

          <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-[#C9A227]" />

          <p className="mt-8 text-lg font-semibold text-[#C9A227] md:text-xl">
            Ghana&apos;s National Chief Imam and Grand Mufti
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-green-50 md:text-lg">
            Knowledge, worship, peace, unity and service to humanity.
          </p>
        </div>
      </section>

      {/* CONTENTS */}
      <section className="border-b border-green-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Explore His Life
            </p>

            <h2 className="mt-3 text-3xl font-bold text-green-900">
              Contents
            </h2>
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {contents.map((item, index) => (
              <div
                key={item}
                className="rounded-xl border border-green-100 bg-green-50 px-5 py-4 text-sm font-medium text-green-900 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="mr-2 font-bold text-[#C9A227]">
                  {String(index + 1).padStart(2, "0")}.
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
            Introduction
          </p>

          <h2 className="mt-3 text-3xl font-bold text-green-900 md:text-5xl">
            A Century of Knowledge and Service
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-green-700" />
        </div>

        <article className="space-y-6 text-base leading-8 text-gray-700 md:text-lg">
          <p>
            His Eminence Shaykh Dr. Osman Nuhu Sharubutu is one of the most
            prominent Islamic scholars and religious leaders in Ghana&apos;s
            modern history.
          </p>

          <p>
            Born on 23 April 1919 in Accra, he has devoted more than a century
            of his life to Islamic scholarship, Qur&apos;anic education,
            spiritual guidance, community development, peacebuilding and
            national service.
          </p>

          <p>
            He has served as Ghana&apos;s National Chief Imam since 1993,
            becoming one of the longest-serving Muslim leaders in the
            country&apos;s history. He is also widely recognised as a senior
            figure within the Tijaniyya Muslim community in Ghana, where he has
            served as a spiritual leader.
          </p>

          <p>
            His influence, however, extends beyond the Muslim community.
            Through his advocacy for peaceful coexistence, interfaith dialogue,
            education and national unity, Shaykh Sharubutu has become a
            respected figure across Ghanaian society.
          </p>

          <p>
            His life represents a remarkable journey from a young student of
            the Qur&apos;an in Accra to a teacher, scholar, spiritual guide and
            national religious leader.
          </p>
        </article>
      </section>

      {/* EARLY LIFE */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                01 • Early Life
              </p>

              <h2 className="mt-3 text-3xl font-bold text-green-900 md:text-4xl">
                Born into a Scholarly Family
              </h2>

              <div className="mt-6 h-1 w-20 rounded-full bg-green-700" />

              <div className="mt-8 rounded-3xl bg-green-900 p-8 text-white">
                <p className="text-sm uppercase tracking-wider text-[#C9A227]">
                  Born
                </p>

                <p className="mt-2 text-4xl font-bold">23 April 1919</p>

                <p className="mt-2 text-green-100">Accra, Ghana</p>
              </div>
            </div>

            <div className="space-y-6 text-base leading-8 text-gray-700 md:text-lg lg:col-span-3">
              <p>
                Shaykh Osman Nuhu Sharubutu was born on 23 April 1919 in
                Accra, in the area historically associated with Cow Lane and
                the Old Zongo/Fadama community.
              </p>

              <p>
                He was born into a respected Muslim family with a strong
                tradition of Islamic learning and religious service.
              </p>

              <p>
                His father was Shaykh Imam Nuhu Sharubutu, a respected Islamic
                scholar who later served as the Imam-Raatib of the Accra
                Central Mosque.
              </p>

              <p>
                His mother was Hajja Ayishatu Abbass, popularly known as Mma
                Tasidi.
              </p>

              <p>
                The environment into which young Osmanu was born played a major
                role in shaping his future. Islamic learning was not simply an
                academic pursuit in his household; it was regarded as a way of
                life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARENTS */}
      <section className="bg-[#FAF7F0]">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              02 • Family
            </p>

            <h2 className="mt-3 text-3xl font-bold text-green-900 md:text-4xl">
              His Parents and Early Upbringing
            </h2>

            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-green-700" />
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-green-100">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-900 text-xl font-bold text-[#C9A227]">
                F
              </div>

              <h3 className="mt-6 text-2xl font-bold text-green-900">
                His Father
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                His father, Shaykh Imam Nuhu Sharubutu, was a respected Islamic
                scholar who later served as the Imam-Raatib of the Accra
                Central Mosque.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                During the day, his father taught him and helped establish the
                foundations of his Qur&apos;anic and Islamic education.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-green-100">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-900 text-xl font-bold text-[#C9A227]">
                M
              </div>

              <h3 className="mt-6 text-2xl font-bold text-green-900">
                His Mother
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                His mother was Hajja Ayishatu Abbass, popularly known as Mma
                Tasidi.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                She contributed significantly to his upbringing and education
                at home and belonged to a family closely connected with
                Islamic scholarship.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border-l-4 border-[#C9A227] bg-green-900 p-8 text-white">
            <p className="text-lg leading-8 text-green-50 md:text-xl">
              His mother was the sister of Shaykh Imam Muhammad Abbas,
              popularly known as Mallam Muhammad Mazawaje, a highly respected
              Ghanaian Islamic scholar and Imam. His father had also studied
              under Imam Muhammad Mazawaje, strengthening the scholarly
              environment surrounding young Osmanu.
            </p>
          </div>
        </div>
      </section>

      {/* QURAN */}
      <section className="bg-green-950 text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
            03 • Qur&apos;anic Education
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            Mastery of the Qur&apos;an
          </h2>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

          <div className="mx-auto mt-12 max-w-3xl space-y-6 text-base leading-8 text-green-50 md:text-lg">
            <p>
              One of the most remarkable aspects of Shaykh Osmanu&apos;s
              childhood was his early progress in Qur&apos;anic learning.
            </p>

            <p>
              He began learning Qur&apos;anic recitation and Arabic writing
              under the guidance of his parents.
            </p>

            <p>
              By approximately the age of twelve, biographical accounts state
              that he had mastered the recitation of the Holy Qur&apos;an.
            </p>

            <p>
              This early accomplishment demonstrated both his intellectual
              ability and his dedication to religious learning.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-sm rounded-3xl border border-green-700 bg-green-900 p-8">
            <p className="text-sm uppercase tracking-wider text-[#C9A227]">
              Approximately
            </p>

            <p className="mt-2 text-6xl font-bold">12</p>

            <p className="mt-2 text-green-100">
              Age at which he had mastered Qur&apos;anic recitation
            </p>
          </div>
        </div>
      </section>

      {/* STUDIES */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              04 • Scholarship
            </p>

            <h2 className="mt-3 text-3xl font-bold text-green-900 md:text-5xl">
              His Studies in Kumasi
            </h2>

            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-green-700" />
          </div>

          <div className="rounded-3xl bg-[#FAF7F0] p-8 md:p-12">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#C9A227]">
                  Advanced Islamic Studies
                </p>

                <h3 className="mt-3 text-3xl font-bold text-green-900">
                  Kumasi
                </h3>

                <p className="mt-5 leading-8 text-gray-700">
                  Young Osmanu was eventually sent from Accra to Kumasi, the
                  capital of the Ashanti Region, to continue his Islamic
                  education.
                </p>

                <p className="mt-5 leading-8 text-gray-700">
                  There, he studied under the distinguished Islamic scholar
                  Shaykh Abdullah Dan Tano.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-green-900">
                  Areas of Study
                </h3>

                <div className="mt-5 grid gap-3">
                  {[
                    "Arabic grammar",
                    "Arabic literature",
                    "Islamic texts",
                    "Islamic jurisprudence",
                    "Hadith",
                    "Prophetic traditions",
                    "Islamic ethics and scholarship",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-green-100 bg-white px-5 py-3 text-gray-700 shadow-sm"
                    >
                      <span className="mr-3 text-[#C9A227]">◆</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEACHERS */}
      <section className="bg-[#FAF7F0]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              05 • Teachers
            </p>

            <h2 className="mt-3 text-3xl font-bold text-green-900 md:text-4xl">
              A Lifelong Student of Knowledge
            </h2>

            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-green-700" />
          </div>

          <div className="space-y-6 text-base leading-8 text-gray-700 md:text-lg">
            <p>
              Shaykh Osmanu did not regard his formal education as the end of
              his search for knowledge. Even after becoming a teacher himself,
              he continued seeking knowledge from scholars.
            </p>

            <p>
              One biographical account records Shaykh Alhaji Mohammed,
              popularly known as Baraw, among the scholars from whom he
              benefited.
            </p>

            <p>
              His attitude toward scholarship was characterised by humility:
              becoming a teacher did not make him consider himself beyond
              learning.
            </p>

            <p>
              Whenever he encountered a respected scholar, he continued to
              seek knowledge and benefit from that person&apos;s learning.
              This lifelong pursuit of knowledge became one of the defining
              features of his character.
            </p>
          </div>
        </div>
      </section>

      {/* TIJANIYYA */}
      <section className="bg-green-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              06 • Spiritual Formation
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              His Tijaniyya Spiritual Formation
            </h2>

            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#C9A227]" />
          </div>

          <div className="mx-auto max-w-4xl space-y-6 text-base leading-8 text-green-50 md:text-lg">
            <p>
              The Tijaniyya tradition occupies an important place in Shaykh
              Osman Nuhu Sharubutu&apos;s religious life.
            </p>

            <p>
              His connection to the Tijaniyya was particularly strengthened
              through his maternal uncle, Shaykh Muhammad Mazawaje Abbas.
            </p>

            <p>
              Following his return to Accra, his uncle introduced him to
              Tijaniyya spiritual programmes and practices. Through this
              environment, Shaykh Osmanu&apos;s scholarly development was
              complemented by spiritual training.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Remembrance of Allah",
              "Devotion to the Prophet Muhammad ﷺ",
              "Islamic scholarship",
              "Spiritual discipline",
              "Good character",
              "Service to humanity",
              "Peace and reconciliation",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-2xl bg-green-800 p-6 ring-1 ring-green-700"
              >
                <p className="text-sm font-bold text-[#C9A227]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <p className="mt-3 font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-green-700 bg-green-950 p-8">
            <p className="text-lg leading-8 text-green-100 md:text-xl">
              He subsequently became recognised as a spiritual leader of the
              Tijaniyya Muslims Movement of Ghana.
            </p>

            <p className="mt-5 text-sm leading-7 text-green-200">
              Note: Publicly available sources confirm his Tijaniyya
              affiliation and identify Shaykh Muhammad Mazawaje Abbas as an
              important influence in his spiritual formation. A complete
              authenticated written Tijaniyya silsila tracing every link from
              Shaykh Ahmad al-Tijani through later authorities to Shaykh
              Osmanu is not consistently documented in the sources consulted.
            </p>
          </div>
        </div>
      </section>

      {/* TEACHING */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              07 • Teaching
            </p>

            <h2 className="mt-3 text-3xl font-bold text-green-900 md:text-5xl">
              Returning to Accra as a Teacher
            </h2>

            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-green-700" />
          </div>

          <div className="space-y-6 text-base leading-8 text-gray-700 md:text-lg">
            <p>
              After completing his studies, Shaykh Osmanu returned to Accra.
              Rather than immediately seeking a position of authority, he
              dedicated himself to teaching.
            </p>

            <p>
              He focused particularly on Muslim youth who wished to become
              Islamic scholars, Qur&apos;an teachers, Imams, Islamic thinkers
              and community leaders.
            </p>

            <p>
              His teaching became an important part of his contribution to
              Ghanaian Islam. He also continued his own studies while teaching
              others.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {[
              "Islamic scholars",
              "Qur'an teachers",
              "Imams",
              "Islamic thinkers",
              "Community leaders",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-green-100 bg-green-50 p-6"
              >
                <span className="text-2xl font-bold text-[#C9A227]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-3 text-xl font-bold text-green-900">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENTS */}
      <section className="bg-[#FAF7F0]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                08 • Intellectual Legacy
              </p>

              <h2 className="mt-3 text-3xl font-bold text-green-900 md:text-4xl">
                His Students and Intellectual Legacy
              </h2>

              <div className="mt-6 h-1 w-20 rounded-full bg-green-700" />

              <div className="mt-10 rounded-3xl bg-green-900 p-8 text-center text-white">
                <p className="text-sm uppercase tracking-wider text-[#C9A227]">
                  Reported
                </p>

                <p className="mt-2 text-6xl font-bold">50+</p>

                <p className="mt-3 text-green-100">
                  Students personally educated, supported and empowered
                </p>
              </div>
            </div>

            <div className="space-y-6 text-base leading-8 text-gray-700 md:text-lg lg:col-span-3">
              <p>
                Over the course of his teaching career, Shaykh Osmanu trained
                and mentored numerous Muslim students.
              </p>

              <p>
                One biographical account states that he personally educated,
                supported and empowered more than 50 students in Islamic
                studies, many of whom went on to become influential figures in
                Ghana&apos;s Muslim community.
              </p>

              <p>
                His educational philosophy was not limited to memorisation. He
                sought to produce Muslims who possessed knowledge, good
                character, discipline, religious understanding, leadership
                qualities and commitment to community service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEPUTY + NATIONAL CHIEF IMAM */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              09–10 • Leadership
            </p>

            <h2 className="mt-3 text-3xl font-bold text-green-900 md:text-5xl">
              From Teacher to National Chief Imam
            </h2>

            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-green-700" />
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-[#FAF7F0] p-8 shadow-lg ring-1 ring-green-100 md:p-10">
              <p className="text-5xl font-bold text-[#C9A227]">1974</p>

              <h3 className="mt-5 text-2xl font-bold text-green-900">
                Deputy Regional Chief Imam
              </h3>

              <p className="mt-5 leading-8 text-gray-600">
                In 1974, Shaykh Osmanu was appointed Deputy Regional Chief
                Imam. His appointment followed consultations involving Muslim
                scholars, chiefs and other religious and community leaders.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                At first, he was reluctant to accept the responsibility. His
                preference was reportedly to continue concentrating on teaching
                and scholarship. However, Muslim leaders encouraged him to
                accept the position because of their confidence in his
                knowledge, character and dedication.
              </p>
            </div>

            <div className="rounded-3xl bg-green-900 p-8 text-white shadow-lg md:p-10">
              <p className="text-5xl font-bold text-[#C9A227]">1993</p>

              <h3 className="mt-5 text-2xl font-bold">
                National Chief Imam of Ghana
              </h3>

              <p className="mt-5 leading-8 text-green-100">
                In 1993, Shaykh Osman Nuhu Sharubutu became the National Chief
                Imam of Ghana. This marked the beginning of one of the most
                significant chapters of his life.
              </p>

              <p className="mt-5 leading-8 text-green-100">
                His responsibilities extended beyond leading congregational
                prayers to Islamic education, community development, interfaith
                relations, national peacebuilding, mediation, youth
                development and social welfare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE */}
      <section className="bg-green-950 text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
            11 • National Leadership
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            The Office of the National Chief Imam
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#C9A227]" />

          <p className="mx-auto mt-8 max-w-4xl text-base leading-8 text-green-50 md:text-lg">
            Under Shaykh Sharubutu&apos;s leadership, the office of the
            National Chief Imam became increasingly visible in Ghana&apos;s
            national life. He has regularly used his position to encourage
            Muslims to obey the law, pursue education, maintain good character
            and contribute positively to society.
          </p>

          <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-green-50 md:text-lg">
            His leadership has generally emphasised moderation, consultation
            and reconciliation rather than confrontation.
          </p>
        </div>
      </section>

      {/* PEACE */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                12 • Peacebuilding
              </p>

              <h2 className="mt-3 text-3xl font-bold text-green-900 md:text-5xl">
                A Champion of Peace
              </h2>

              <div className="mt-6 h-1 w-20 rounded-full bg-green-700" />
            </div>

            <div className="space-y-6 text-base leading-8 text-gray-700 md:text-lg">
              <p>
                Perhaps one of the most recognisable aspects of Shaykh
                Sharubutu&apos;s public legacy is his commitment to peace.
              </p>

              <p>
                He has repeatedly called upon Ghanaians to settle disagreements
                peacefully. His role has included engagement with communities
                experiencing conflict and dialogue between different religious
                and social groups.
              </p>

              <p>
                He has also been associated with the National Peace Council,
                reflecting his involvement in national peacebuilding.
              </p>

              <p>
                His contribution to peace has been recognised by figures
                outside the Muslim community. Former President John Agyekum
                Kufuor, for example, publicly expressed the view that Shaykh
                Sharubutu deserved consideration for the Nobel Peace Prize
                because of his contribution to peace and national development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERFAITH */}
      <section className="bg-[#FAF7F0]">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
            13 • Religious Harmony
          </p>

          <h2 className="mt-3 text-3xl font-bold text-green-900 md:text-5xl">
            Interfaith Dialogue
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-green-700" />

          <div className="mx-auto mt-10 max-w-4xl space-y-6 text-base leading-8 text-gray-700 md:text-lg">
            <p>
              Shaykh Sharubutu has consistently promoted peaceful relations
              between Muslims and Christians.
            </p>

            <p>
              His approach is based on the understanding that religious
              differences do not prevent citizens from cooperating for the
              common good.
            </p>

            <p>
              He has participated in interfaith initiatives and maintained
              relationships with leaders from other religious communities.
              This has helped establish him as one of Ghana&apos;s important
              voices for religious tolerance.
            </p>
          </div>

          <div className="mt-12 rounded-3xl bg-green-900 p-8 text-white md:p-10">
            <p className="text-xl font-semibold leading-8 md:text-2xl">
              Different faith communities can maintain their religious
              convictions while living together peacefully and working
              together for national development.
            </p>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              14–15 • Education
            </p>

            <h2 className="mt-3 text-3xl font-bold text-green-900 md:text-5xl">
              An Educational Mission
            </h2>

            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-green-700" />
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-green-100 bg-green-50 p-8 md:p-10">
              <h3 className="text-2xl font-bold text-green-900">
                Islamic and Modern Education
              </h3>

              <p className="mt-5 leading-8 text-gray-600">
                Education has remained central to Shaykh Sharubutu&apos;s
                life. His educational mission combines traditional Islamic
                learning with modern education.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                He has supported the idea that Muslim children should receive
                both strong Islamic education and the secular education
                necessary to participate successfully in contemporary society.
              </p>
            </div>

            <div className="rounded-3xl bg-green-900 p-8 text-white md:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#C9A227]">
                SONSETFund
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Sheikh Dr. Osmanu Nuhu Sharubutu Education Trust Fund
              </h3>

              <p className="mt-5 leading-8 text-green-100">
                The foundation was established to assist brilliant but
                financially disadvantaged students.
              </p>

              <p className="mt-5 leading-8 text-green-100">
                In 2017, 19 students from Zongo communities across several
                regions of Ghana benefited from the scholarship scheme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IPASEC + HUMANITARIAN */}
      <section className="bg-[#FAF7F0]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-green-100 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#C9A227]">
                16 • Peace and Security
              </p>

              <h3 className="mt-3 text-2xl font-bold text-green-900">
                Islamic Peace and Security Council of Ghana
              </h3>

              <p className="mt-5 leading-8 text-gray-600">
                Shaykh Sharubutu is also associated with the establishment of
                the Islamic Peace and Security Council of Ghana (IPASEC).
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                The organisation reflects his interest in peace, security and
                responsible citizenship and represents another dimension of
                his belief that Muslim institutions should contribute
                positively to the stability and development of Ghana.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-green-100 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#C9A227]">
                17 • Humanitarian Service
              </p>

              <h3 className="mt-3 text-2xl font-bold text-green-900">
                Humanitarian and Social Development
              </h3>

              <p className="mt-5 leading-8 text-gray-600">
                His work has also included humanitarian activities. Among the
                initiatives associated with his leadership is the Nuuru
                Usmaniya Foundation for Humanitarian Services and Development,
                which was established to support vulnerable Muslim children and
                communities.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                His broader philosophy of leadership has consistently connected
                religious service with social responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NATIONAL MOSQUE */}
      <section className="bg-green-900 text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
            18 • Islamic Institution
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            The Ghana National Mosque
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#C9A227]" />

          <p className="mx-auto mt-8 max-w-4xl text-base leading-8 text-green-50 md:text-lg">
            One of the major developments in Ghana&apos;s contemporary Muslim
            institutional history has been the establishment of the Ghana
            National Mosque in Kanda, Accra.
          </p>

          <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-green-50 md:text-lg">
            Shaykh Sharubutu played an important role in efforts surrounding
            the development of the mosque.
          </p>

          <div className="mx-auto mt-10 max-w-md rounded-3xl border border-green-700 bg-green-950 p-8">
            <p className="text-sm uppercase tracking-wider text-[#C9A227]">
              Historic Moment
            </p>

            <p className="mt-2 text-4xl font-bold">16 July 2021</p>

            <p className="mt-3 leading-7 text-green-100">
              Led the first Jumu&apos;ah prayer at the newly established Ghana
              National Mosque.
            </p>
          </div>
        </div>
      </section>

      {/* QURAN INSTITUTE */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
            19 • Qur&apos;anic Education
          </p>

          <h2 className="mt-3 text-3xl font-bold text-green-900 md:text-5xl">
            Qur&apos;an Memorisation for a New Generation
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-green-700" />

          <div className="mx-auto mt-10 max-w-4xl space-y-6 text-base leading-8 text-gray-700 md:text-lg">
            <p>
              His commitment to Qur&apos;anic education has continued into his
              later years.
            </p>

            <p>
              In 2022, the Sharubutu Sabilu Salaam Qur&apos;an Memorisation
              Institute was established.
            </p>

            <p>
              In October 2025, the institute held its first graduation
              ceremony, with approximately 30 pupils reported to have
              completed memorisation of the entire Qur&apos;an.
            </p>
          </div>

          <div className="mt-12 rounded-3xl bg-green-50 p-8 ring-1 ring-green-100">
            <p className="text-xl font-semibold leading-8 text-green-900 md:text-2xl">
              A lifelong commitment to Qur&apos;anic learning continues through
              the education of a new generation.
            </p>
          </div>
        </div>
      </section>

      {/* ZONGO UNITY */}
      <section className="bg-[#FAF7F0]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                20 • Community
              </p>

              <h2 className="mt-3 text-3xl font-bold text-green-900 md:text-5xl">
                Promoting Unity Among Zongo Communities
              </h2>

              <div className="mt-6 h-1 w-20 rounded-full bg-green-700" />
            </div>

            <div className="space-y-6 text-base leading-8 text-gray-700 md:text-lg">
              <p>
                Shaykh Sharubutu has maintained a strong connection with
                Ghana&apos;s Zongo communities.
              </p>

              <p>
                He has repeatedly encouraged Muslims from different ethnic and
                cultural backgrounds to recognise their shared faith and work
                together.
              </p>

              <p>
                One example is the Sheikh Sharubutu Ramadan Cup, a football
                tournament established to promote peace and unity among Zongo
                communities.
              </p>

              <p>
                The initiative demonstrates an important aspect of his approach
                to community leadership: social activities can also become
                instruments for peacebuilding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTRIBUTIONS */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              21 • Service
            </p>

            <h2 className="mt-3 text-3xl font-bold text-green-900 md:text-5xl">
              His Major Contributions
            </h2>

            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-green-700" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {contributions.map((item, index) => (
              <div
                key={item.title}
                className="rounded-3xl border border-green-100 bg-green-50 p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-900 font-bold text-[#C9A227]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-5 text-xl font-bold text-green-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="bg-green-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              22 • Recognition
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              Awards and Recognition
            </h2>

            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#C9A227]" />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {awards.map((award, index) => (
              <div
                key={award}
                className="flex gap-4 rounded-2xl bg-green-900 p-5 ring-1 ring-green-800"
              >
                <span className="font-bold text-[#C9A227]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="leading-7 text-green-50">{award}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-green-700 bg-green-900 p-8 text-center">
            <p className="leading-8 text-green-100">
              Published biographies also report several honorary doctoral and
              academic recognitions associated with his work.
            </p>
          </div>
        </div>
      </section>

      {/* SPORTS COMPLEX + CENTENARY */}
      <section className="bg-[#FAF7F0]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-green-100 md:p-10">
              <p className="text-5xl font-bold text-[#C9A227]">2020</p>

              <h3 className="mt-5 text-2xl font-bold text-green-900">
                Sheikh Sharubutu Sports Complex
              </h3>

              <p className="mt-5 leading-8 text-gray-600">
                In November 2020, an ultra-modern sports complex in New Fadama,
                a community with which he has strong connections, was named the
                Sheikh Sharubutu Sports Complex.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                The naming reflected his status as a community leader whose
                influence extends beyond strictly religious activities.
              </p>
            </div>

            <div className="rounded-3xl bg-green-900 p-8 text-white shadow-lg md:p-10">
              <p className="text-5xl font-bold text-[#C9A227]">100</p>

              <h3 className="mt-5 text-2xl font-bold">His Centenary</h3>

              <p className="mt-5 leading-8 text-green-100">
                On 23 April 2019, Shaykh Osman Nuhu Sharubutu celebrated his
                100th birthday. The centenary became a major national occasion.
              </p>

              <p className="mt-5 leading-8 text-green-100">
                Religious leaders, politicians, traditional authorities and
                members of the public celebrated a life that had already
                spanned an extraordinary period of Ghanaian history.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAMILY */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              25 • Family
            </p>

            <h2 className="mt-3 text-3xl font-bold text-green-900 md:text-4xl">
              His Family
            </h2>

            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-green-700" />
          </div>

          <div className="rounded-3xl bg-[#FAF7F0] p-8 text-center md:p-12">
            <h3 className="text-2xl font-bold text-green-900">
              Hajia Rahmatu Tahwee Sheikh Sharubutu
            </h3>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-700 md:text-lg">
              Shaykh Sharubutu was married to Hajia Rahmatu Tahwee Sheikh
              Sharubutu, who was an important part of his family life. Hajia
              Rahmatu passed away on 27 March 2024. Her death was mourned by
              the Muslim community and by many people who recognised the
              importance of the family behind the National Chief Imam.
            </p>
          </div>
        </div>
      </section>

      {/* CHARACTER */}
      <section className="bg-green-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              26–27 • Character and Leadership
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              The Man Behind the Titles
            </h2>

            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#C9A227]" />
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold">His Spiritual Character</h3>

              <p className="mt-5 leading-8 text-green-100">
                Beyond his titles and institutional achievements, Shaykh
                Sharubutu&apos;s legacy is strongly connected to his personal
                character.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Humility",
                  "Patience",
                  "Discipline",
                  "Devotion",
                  "Scholarship",
                  "Compassion",
                  "Peacefulness",
                  "Respect",
                  "Service",
                ].map((quality) => (
                  <span
                    key={quality}
                    className="rounded-full border border-green-700 bg-green-800 px-4 py-2 text-sm text-green-50"
                  >
                    {quality}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                His Understanding of Leadership
              </h3>

              <p className="mt-5 leading-8 text-green-100">
                Shaykh Sharubutu&apos;s long career demonstrates a conception
                of leadership based on responsibility rather than privilege.
                His journey shows that leadership emerged from scholarship and
                service.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Student",
                  "Teacher",
                  "Mentor",
                  "Community Leader",
                  "National Chief Imam",
                ].map((role, index) => (
                  <div
                    key={role}
                    className="flex items-center gap-4 rounded-xl bg-green-800 p-4"
                  >
                    <span className="font-bold text-[#C9A227]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="font-semibold">{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              28 • A Life in Time
            </p>

            <h2 className="mt-3 text-3xl font-bold text-green-900 md:text-5xl">
              Timeline: 1919–2026
            </h2>

            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-green-700" />
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="relative border-l-2 border-green-200 pl-7 md:pl-10">
              {timeline.map((item) => (
                <div key={`${item.year}-${item.event}`} className="relative pb-10 last:pb-0">
                  <div className="absolute -left-[38px] top-1 h-4 w-4 rounded-full border-4 border-white bg-[#C9A227] ring-2 ring-green-700 md:-left-[51px]" />

                  <p className="text-sm font-bold uppercase tracking-wider text-[#C9A227]">
                    {item.year}
                  </p>

                  <p className="mt-2 text-base leading-7 text-gray-700 md:text-lg">
                    {item.event}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEGACY */}
      <section className="bg-[#FAF7F0]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              29 • Legacy
            </p>

            <h2 className="mt-3 text-3xl font-bold text-green-900 md:text-5xl">
              His Legacy for Future Generations
            </h2>

            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-green-700" />

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
              The greatest measure of Shaykh Osman Nuhu Sharubutu&apos;s legacy
              is not simply the length of his life. It is the knowledge he
              transmitted, the students he taught, the institutions he
              supported, the communities he served and the peace he promoted.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {legacy.map((item) => (
              <div
                key={item.number}
                className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-green-100"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-900 font-bold text-[#C9A227]">
                  {item.number}
                </div>

                <h3 className="mt-5 text-xl font-bold text-green-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="bg-gradient-to-br from-green-950 via-green-900 to-green-800 text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center md:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
            30 • Conclusion
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            A Century of Knowledge, Faith and Service
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#C9A227]" />

          <div className="mx-auto mt-10 space-y-6 text-base leading-8 text-green-50 md:text-lg">
            <p>
              Shaykh Dr. Osman Nuhu Sharubutu&apos;s life is one of
              extraordinary longevity, scholarship and service.
            </p>

            <p>
              Born in Accra in 1919, he began his journey as a young student
              learning the Qur&apos;an from his parents. His search for
              knowledge later took him to Kumasi, where he studied advanced
              Islamic sciences under respected scholars.
            </p>

            <p>
              He returned to Accra as a teacher and spent years educating
              Muslim youth while continuing his own pursuit of knowledge.
            </p>

            <p>
              His commitment to the Tijaniyya spiritual tradition became an
              important dimension of his religious life, while his reputation
              for scholarship eventually led him into wider Muslim leadership.
            </p>

            <p>
              In 1974, he became Deputy Regional Chief Imam, and in 1993 he
              assumed the position of Ghana&apos;s National Chief Imam.
            </p>

            <p>
              For more than three decades in that national position, he has
              served not only as a religious leader but also as a voice for
              peace, education, unity and social responsibility.
            </p>

            <p>
              His educational initiatives, including SONSETFund and Qur&apos;an
              education projects, demonstrate his belief in investing in future
              generations.
            </p>

            <p>
              His peacebuilding and interfaith activities demonstrate his
              commitment to a Ghana in which Muslims and people of other faiths
              can live together with mutual respect.
            </p>

            <p>
              His association with the Tijaniyya Muslims Movement of Ghana,
              his teaching career and his long service to the Muslim community
              have made him one of the most recognisable Islamic scholars in
              Ghana.
            </p>

            <p>
              Today, his life stands as a bridge between generations of
              Ghanaian Muslims: connecting traditional Islamic scholarship with
              modern education, spirituality with public service, and religious
              leadership with national peace.
            </p>

            <p className="font-semibold text-white">
              More than a century after his birth, Shaykh Osman Nuhu Sharubutu
              remains a symbol of knowledge, faith, humility, peace, unity and
              service.
            </p>
          </div>

          {/* DU'A */}
          <div className="mx-auto mt-14 max-w-4xl rounded-3xl border border-green-700 bg-green-950 p-8 md:p-12">
            <p
              dir="rtl"
              className="text-2xl leading-[2.2] text-[#C9A227] md:text-3xl"
            >
              اللهم احفظ شيخنا وبارك في عمره وعلمه وعمله، وانفع به الإسلام
              والمسلمين. آمين.
            </p>

            <p className="mt-8 text-lg font-medium leading-8 text-green-50 md:text-xl">
              Allahumma ihfaz Shaykhana, wa baarik fi &apos;umrihi wa
              &apos;ilmihi wa &apos;amalihi, wanfa&apos; bihi al-Islama
              wal-Muslimeen. Ameen.
            </p>
          </div>

          <div className="mx-auto mt-12 h-1 w-20 rounded-full bg-[#C9A227]" />

          <p className="mt-8 text-xl font-bold text-[#C9A227] md:text-2xl">
            Shaykh Dr. Osman Nuhu Sharubutu
          </p>

          <p className="mt-2 text-sm text-green-100 md:text-base">
            Ghana&apos;s National Chief Imam and Grand Mufti
          </p>
        </div>
      </section>
    </main>
  );
}