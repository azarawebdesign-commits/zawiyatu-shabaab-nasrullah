import Image from "next/image";
import Link from "next/link";

export default function AhmadAlTijaniPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F0]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-800 to-green-700 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full border-[40px] border-[#C9A227]" />
          <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full border-[50px] border-[#C9A227]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <Link
            href="/tijaniyya"
            className="mb-10 inline-block text-sm font-medium text-green-100 hover:text-[#C9A227]"
          >
            ← Back to Tijaniyya
          </Link>

          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Distinguished Scholar
              </p>

              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                Shaykh Ahmad al-Tijani (RA)
              </h1>

              <p className="mt-5 text-xl text-green-100 md:text-2xl">
                Founder of the Tariqa Tijaniyya
              </p>

              <div className="mt-7 h-1 w-24 rounded-full bg-[#C9A227]" />
            </div>

            <div className="relative mx-auto h-80 w-full max-w-md overflow-hidden rounded-3xl shadow-2xl ring-2 ring-[#C9A227]/40">
              <Image
                src="/images/shaykh-ahmad-tijani.jpeg"
                alt="Shaykh Ahmad al-Tijani (RA)"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 448px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
            Biography
          </p>

          <h2 className="mt-3 text-3xl font-bold text-green-900 md:text-4xl">
            The Life of Shaykh Ahmad al-Tijani
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-green-700" />
        </div>

        <article className="space-y-7 text-base leading-8 text-gray-700 md:text-lg">
          <p>
            Shaykh Ahmad al-Tijani is regarded as the founder of the
            Tariqa Tijaniyya. His full name is Ahmad bin Muhammad bin
            al-Mukhtar bin Salim. His father was Muhammad al-Mukhtar
            bin Ahmad bin Mahmad bin Salim, a well-respected man of
            learning.
          </p>

          <p>
            Shaykh Ahmad al-Tijani&apos;s lineage has been traced back
            to the Prophet Muhammad ﷺ through Imam Hasan (RA), the
            grandson of the Prophet ﷺ.
          </p>

          <p>
            Shaykh Sidi Ahmad al-Tijani was born in Ain Maadi, Algeria,
            in 1737. Ain Maadi is located in northern-central Algeria,
            about 30 miles from the city of Laghouat. His father lived
            and taught in Ain Maadi.
          </p>

          <p>
            Shaykh Ahmad al-Tijani became distinguished early in his
            life. By the age of seven, he had memorised the Qur&apos;an
            under Muhammad bin Ba&apos;afiyya and had studied the
            Mukhtasar of Shaykh Sidi Khalil, a major legal text in
            West and North Africa.
          </p>

          <p>
            Before reaching puberty, he was already known among the
            scholars of his time for his knowledge, intelligence,
            modesty, and piety. He studied Islamic law according to
            the Maliki Madhhab and continued his studies under
            respected scholars.
          </p>

          <p>
            He memorised and studied several important works,
            including the Lakhdaari, the Risaalah of Imam
            Qairawaani, the Khalil, and the Muqaddimat of Ibn Rushd.
            He also studied works on Tasawwuf and Islamic spirituality.
          </p>

          <p>
            Shaykh Ahmad al-Tijani became an orphan in 1752 after his
            mother and father died during a smallpox epidemic. He was
            only sixteen years old at the time.
          </p>

          <p>
            Despite this hardship, he continued his education with
            great enthusiasm. In 1757, he travelled to Fez to study
            the Prophetic traditions, meet Sufi Shaykhs, and benefit
            from the lessons of renowned scholars from different
            regions.
          </p>

          <p>
            By the age of twenty-one, Shaykh Ahmad al-Tijani was
            firmly grounded in religious learning and had received
            authorisations to teach Islamic sciences.
          </p>

          <h2 className="pt-8 text-2xl font-bold text-green-900 md:text-3xl">
            His Spiritual Journey
          </h2>

          <p>
            During his spiritual journey, Shaykh Ahmad al-Tijani
            participated in several Sufi brotherhoods, including the
            Qadiriyya and Nasiriyya. He also studied under a number of
            recognised spiritual teachers.
          </p>

          <p>
            A wali named Muhammad bin al-Hasun al-Wanjili is reported
            to have predicted that Shaykh Ahmad al-Tijani would attain
            spiritual realisation in the desert. The Shaykh subsequently
            travelled to Al-Abiad, where he settled in the Zawiya of
            Sidi Abdul Qadir bin Muhammad and devoted himself to
            worship, spiritual training, and teaching.
          </p>

          <p>
            He later travelled toward Mecca and, during his journey,
            stopped near Algiers, where he was initiated into the
            Khalwatiyya Sufi order.
          </p>

          <p>
            In 1774, Shaykh Ahmad al-Tijani reached Mecca, where he
            encountered an Indian Sufi Shaykh named Ahmad bin Abdullah.
            He later travelled to Medina and met Shaykh Abdul Karim
            al-Samman, a prominent spiritual teacher.
          </p>

          <h2 className="pt-8 text-2xl font-bold text-green-900 md:text-3xl">
            The Beginning of the Tijaniyya
          </h2>

          <p>
            During his period of spiritual retreat and devotion, Shaykh
            Ahmad al-Tijani reported experiencing a vision of the
            Prophet Muhammad ﷺ while in a state of wakefulness.
          </p>

          <p>
            According to the Tijani tradition, the Prophet ﷺ instructed
            him to leave the paths he had previously followed and
            undertake the spiritual mission that would become associated
            with the Tariqa Tijaniyya.
          </p>

          <p>
            The tradition further relates that the Prophet ﷺ assigned
            him the Wird and Wazifa of the Tariqa and instructed him to
            maintain the path while continuing to interact with people
            rather than withdrawing permanently from society.
          </p>

          <p>
            The Tariqa Tijaniyya was formally established in the late
            eighteenth century and subsequently spread throughout
            North and West Africa.
          </p>

          <div className="my-10 rounded-3xl border-l-4 border-[#C9A227] bg-green-50 p-7">
            <p className="text-lg font-semibold text-green-900">
              A central emphasis
            </p>

            <p className="mt-3 leading-8 text-gray-700">
              Shaykh Ahmad al-Tijani emphasised adherence to the Qur&apos;an
              and the Sunnah and regarded the Shari&apos;a as fundamental
              to the spiritual path.
            </p>
          </div>

          <h2 className="pt-8 text-2xl font-bold text-green-900 md:text-3xl">
            His Teaching and Influence
          </h2>

          <p>
            From the late eighteenth century, Shaykh Ahmad al-Tijani
            travelled through regions of the Sahara, Sudan, and
            Tunisia, establishing Zawiyas and appointing Muqaddams to
            guide communities of disciples.
          </p>

          <p>
            Many of his early disciples were scholars, jurists, judges,
            and other learned members of the Muslim community. The
            Tijaniyya consequently developed a strong reputation for
            combining spiritual training with Islamic scholarship.
          </p>

          <p>
            Around the end of the eighteenth century, Shaykh Ahmad
            al-Tijani settled in Fez, Morocco, where he became a major
            centre of teaching and spiritual guidance.
          </p>

          <p>
            His teachings later spread rapidly throughout Sub-Saharan
            Africa. Among the major figures associated with the spread
            of the Tariqa were Shaykh al-Hajj Umar Tall, El Hadj Malik
            Sy, Shaykh Said Ba, and Shaykh Ibrahim Niasse al-Kaolakhy.
          </p>

          <h2 className="pt-8 text-2xl font-bold text-green-900 md:text-3xl">
            Legacy
          </h2>

          <p>
            Shaykh Ahmad al-Tijani remains one of the central historical
            figures of the Tijaniyya tradition. His teachings, spiritual
            practices, and emphasis on Qur&apos;an, Sunnah, remembrance
            of Allah, and spiritual discipline became the foundation
            through which the Tariqa was transmitted to generations of
            disciples.
          </p>

          <p>
            His legacy continued through the scholars and spiritual
            teachers who carried the Tijaniyya to different parts of
            Africa and, eventually, to communities around the world.
          </p>
        </article>
      </section>

      {/* Back to Tijaniyya */}
      <section className="bg-green-900 px-6 py-16 text-center text-white">
        <h2 className="text-2xl font-bold md:text-3xl">
          Explore More of the Tijaniyya
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-green-100">
          Learn more about the great scholars, principles, practices,
          and history of the Tariqa Tijaniyya.
        </p>

        <Link
          href="/tijaniyya"
          className="mt-7 inline-block rounded-full bg-[#C9A227] px-7 py-3 font-semibold text-green-950 transition hover:bg-[#D8B63A]"
        >
          Back to Tijaniyya
        </Link>
      </section>
    </main>
  );
}