import Image from "next/image";
import Link from "next/link";

export default function HassanCissePage() {
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
                Shaykh Hassan Cissé (RA)
              </h1>

              <p className="mt-5 text-xl text-green-100 md:text-2xl">
                Scholar, Imam and Distinguished Leader of the Tariqa Tijaniyya
              </p>

              <div className="mt-7 h-1 w-24 rounded-full bg-[#C9A227]" />
            </div>

            <div className="relative mx-auto h-80 w-full max-w-md overflow-hidden rounded-3xl shadow-2xl ring-2 ring-[#C9A227]/40">
              <Image
                src="/images/shaykh-hassan-cisse.jpeg"
                alt="Shaykh Hassan Cissé (RA)"
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
            The Life of Shaykh Hassan Cissé
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-green-700" />
        </div>

        <article className="space-y-7 text-base leading-8 text-gray-700 md:text-lg">
          <p>
            Shaykh Hassan Ali Cissé (RA) was one of the most prominent
            Islamic scholars and representatives of the Tariqa Tijaniyya
            in the modern era. He was a grandson and spiritual heir of
            Shaykh al-Islam Al-Hajj Ibrahim Niasse (RA), and became an
            important teacher and representative of the Tijaniyya in
            Senegal and throughout the world.
          </p>

          <p>
            Shaykh Hassan Cissé was born in Senegal in December 1945 into
            a distinguished family of Islamic scholarship. His father was
            Shaykh Sidi Ali Cissé, one of Shaykh Ibrahim Niasse&apos;s
            closest companions and students, while his mother was
            Sayyida Fatima Zahra Niasse.
          </p>

          <p>
            His family belonged to a long-standing tradition of Islamic
            scholarship in West Africa. From an early age, Shaykh Hassan
            was surrounded by scholars and was given a strong foundation
            in Qur&apos;anic and Islamic learning.
          </p>

          <p>
            He memorised the Holy Qur&apos;an at a young age in Mauritania
            and continued his education under the supervision of leading
            scholars. Much of his advanced traditional education took
            place in Kaolack, Senegal, under the personal guidance of
            Shaykh Ibrahim Niasse (RA).
          </p>

          <p>
            Shaykh Ibrahim had gathered distinguished scholars from
            Senegal, Mauritania, Nigeria and other regions in Kaolack.
            Shaykh Hassan benefited from this environment and studied
            the Qur&apos;an and its interpretation, Hadith, Seerah,
            Islamic jurisprudence, Arabic grammar, literature, poetry
            and Tasawwuf.
          </p>

          <p>
            His education was not limited to traditional Islamic
            scholarship. He also pursued modern academic studies and
            obtained a Bachelor&apos;s degree in Islamic Studies and
            Arabic Literature from Ain Shams University in Cairo, Egypt.
          </p>

          <p>
            He later studied in England and obtained advanced academic
            qualifications in English from the University of London.
            He also pursued doctoral studies in Islamic Studies at
            Northwestern University in the United States, although his
            studies were interrupted following the death of his father.
          </p>

          <h2 className="pt-8 text-2xl font-bold text-green-900 md:text-3xl">
            His Relationship with Shaykh Ibrahim Niasse
          </h2>

          <p>
            Shaykh Hassan Cissé had a particularly close relationship
            with his grandfather and spiritual guide, Shaykh Ibrahim
            Niasse (RA). Shaykh Ibrahim is reported to have shown special
            attention to Hassan from an early age.
          </p>

          <p>
            Shaykh Hassan was only about thirty years old when Shaykh
            Ibrahim Niasse passed away in 1975. He was also reported to
            have been the last person to see Shaykh Ibrahim alive.
          </p>

          <p>
            In the final instructions attributed to Shaykh Ibrahim,
            Shaykh Hassan was specifically mentioned in connection with
            the leadership of the community. He subsequently became an
            important Imam and spiritual guide among the followers of
            Shaykh Ibrahim Niasse.
          </p>

          <div className="my-10 rounded-3xl border-l-4 border-[#C9A227] bg-green-50 p-7">
            <p className="text-lg font-semibold text-green-900">
              A Legacy of Knowledge
            </p>

            <p className="mt-3 leading-8 text-gray-700">
              Shaykh Hassan Cissé combined traditional Islamic scholarship,
              spiritual guidance and modern education, becoming one of the
              most widely respected representatives of the Tijaniyya in the
              twentieth century.
            </p>
          </div>

          <h2 className="pt-8 text-2xl font-bold text-green-900 md:text-3xl">
            Imam and Spiritual Guide
          </h2>

          <p>
            After the passing of Shaykh Ibrahim Niasse, Shaykh Hassan
            Cissé assumed important responsibilities within the
            community. He became Imam of the central mosque in
            Medina-Baye, Kaolack, Senegal, and played a major role in
            teaching Qur&apos;an, Hadith, Islamic jurisprudence and
            spiritual sciences.
          </p>

          <p>
            His reputation as a scholar continued to grow. He received
            numerous ijazas and authorisations from scholars across the
            Muslim world. Among these were authorisations from prominent
            scholars of Hadith and Islamic scholarship.
          </p>

          <p>
            He was reported to have received more than six hundred
            ijazas from scholars around the world, reflecting the
            breadth of his scholarly connections and his standing among
            Muslim scholars.
          </p>

          <p>
            Shaykh Hassan was fluent in several languages, including
            Arabic, English, French, Hausa and Wolof. His linguistic
            ability allowed him to communicate Islamic teachings with
            Muslims from many different cultural and geographical
            backgrounds.
          </p>

          <h2 className="pt-8 text-2xl font-bold text-green-900 md:text-3xl">
            His Global Da&apos;wah
          </h2>

          <p>
            Shaykh Hassan Cissé travelled extensively throughout Africa,
            the Middle East, Europe and North America. He was invited to
            teach and speak in countries including Nigeria, Mauritania,
            Morocco, Ghana, Niger, Burkina Faso, Côte d&apos;Ivoire,
            South Africa, France, Germany, England and the United States.
          </p>

          <p>
            In 1976, he introduced the Tariqa Tijaniyya to American
            Muslims. Through his teaching, lectures and community work,
            he helped establish a lasting presence of Tijaniyya
            scholarship and spiritual practice among Muslim communities
            in the United States.
          </p>

          <p>
            His approach to da&apos;wah emphasised knowledge, worship,
            good character, love of the Prophet Muhammad ﷺ and obedience
            to Allah. He encouraged Muslims to remain faithful to the
            Qur&apos;an and Sunnah while developing their spiritual lives.
          </p>

          <h2 className="pt-8 text-2xl font-bold text-green-900 md:text-3xl">
            Humanitarian Work
          </h2>

          <p>
            Shaykh Hassan Cissé&apos;s work extended beyond religious
            teaching. He was deeply involved in humanitarian and
            educational activities and became an advocate for the
            development and welfare of African Muslim communities.
          </p>

          <p>
            In 1988, he founded the African American Islamic Institute
            (AAII), an international organisation dedicated to Islamic
            education, humanitarian assistance and community development.
          </p>

          <p>
            Through the organisation, he supported educational projects,
            humanitarian initiatives and efforts aimed at improving the
            lives of communities in Africa and elsewhere.
          </p>

          <p>
            He also participated in United Nations conferences involving
            international non-governmental organisations and was invited
            to speak at UNICEF and other United Nations-related events.
          </p>

          <p>
            His commitment to humanitarian development also led to his
            involvement with African Islamic organisations working in
            areas such as population and development.
          </p>

          <h2 className="pt-8 text-2xl font-bold text-green-900 md:text-3xl">
            His Scholarly Legacy
          </h2>

          <p>
            Shaykh Hassan Cissé became widely recognised as an accomplished
            Islamic scholar and spiritual guide. His teaching connected
            classical Islamic scholarship with the needs of Muslims
            living in a rapidly changing modern world.
          </p>

          <p>
            His scholarly reputation earned him recognition from major
            Islamic institutions. Al-Azhar University in Egypt honoured
            him with an award of the highest distinction for his work
            and contributions as an internationally recognised Muslim
            scholar.
          </p>

          <p>
            He also served in several important positions, including
            Chief Imam of the Central Mosque in Medina-Kaolack, President
            of Elhadji Ibrahim Niasse University in Dakar, and Founder
            and Chairman of the African American Islamic Institute.
          </p>

          <h2 className="pt-8 text-2xl font-bold text-green-900 md:text-3xl">
            Passing and Legacy
          </h2>

          <p>
            Shaykh Hassan Cissé (RA) passed away on 14 August 2008 in
            Kaolack, Senegal. His funeral in Medina-Baye was attended by
            an enormous gathering of people, reflecting the profound
            influence he had on Muslims in Senegal, Africa and around the
            world.
          </p>

          <p>
            After his passing, his brother and companion, Shaykh Ahmad
            Tijani Cissé, succeeded him as Imam of the Grand Mosque of
            Medina-Baye and continued the family&apos;s tradition of
            Islamic scholarship and service.
          </p>

          <p>
            Shaykh Hassan Cissé&apos;s legacy continues through his
            students, institutions, writings and the communities he
            helped establish. His life remains an example of the
            combination of Islamic knowledge, spiritual discipline,
            service to humanity and dedication to the propagation of
            beneficial knowledge.
          </p>

          <div className="my-10 rounded-3xl border-l-4 border-[#C9A227] bg-green-50 p-7">
            <p className="text-lg font-semibold text-green-900">
              May Allah reward his service
            </p>

            <p className="mt-3 leading-8 text-gray-700">
              May Allah, Most High, have mercy upon Shaykh Hassan Cissé
              (RA), elevate his rank, reward his service to Islam and
              preserve the beneficial knowledge he transmitted to
              generations of Muslims.
            </p>
          </div>
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