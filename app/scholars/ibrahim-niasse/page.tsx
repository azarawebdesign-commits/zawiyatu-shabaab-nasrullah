import Image from "next/image";
import Link from "next/link";

export default function IbrahimNiassePage() {
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
                Shaykh Ibrahim Niasse (RA)
              </h1>

              <p className="mt-5 text-xl text-green-100 md:text-2xl">
                Imam of the Fayḍa Tijaniyya
              </p>

              <div className="mt-7 h-1 w-24 rounded-full bg-[#C9A227]" />
            </div>

            <div className="relative mx-auto h-80 w-full max-w-md overflow-hidden rounded-3xl shadow-2xl ring-2 ring-[#C9A227]/40">
              <Image
                src="/images/shaykh-ibrahim-niasse.jpg"
                alt="Shaykh Ibrahim Niasse (RA)"
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
            The Life of Shaykh Ibrahim Niasse
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-green-700" />
        </div>

        <article className="space-y-7 text-base leading-8 text-gray-700 md:text-lg">
          <p>
            Shaykh al-Islam al-Hajj Ibrahim ibn al-Hajj Abdallah Niasse,
            widely known as Shaykh Ibrahim Niasse, was one of the most
            influential Islamic scholars and spiritual authorities of
            the twentieth century. He became one of the foremost
            representatives of the Tariqa Tijaniyya and is particularly
            renowned for the spiritual path known as the Fayḍa.
          </p>

          <p>
            Shaykh Ibrahim Niasse was born in 1900 in the village of
            Tayba Niaseen in the region of Saloum, Senegal. He was born
            into a distinguished family of Islamic scholarship and
            spiritual learning. His father, Shaykh Abdallah Niasse,
            was a respected scholar and prominent Tijani spiritual
            teacher.
          </p>

          <p>
            From an early age, Shaykh Ibrahim was immersed in Qur'anic
            education, Islamic jurisprudence, Arabic language,
            Prophetic traditions, and the spiritual sciences. His
            upbringing within a scholarly family provided him with a
            strong foundation in both the outward sciences of Islam
            and the discipline of Tasawwuf.
          </p>

          <p>
            He memorised the Qur'an at a young age and continued his
            studies under his father and other scholars. He developed
            an extraordinary reputation for knowledge, intelligence,
            devotion, and spiritual discipline while still relatively
            young.
          </p>

          <h2 className="pt-8 text-2xl font-bold text-green-900 md:text-3xl">
            His Father and Early Education
          </h2>

          <p>
            His father, Shaykh Abdallah Niasse, was one of the important
            Tijani scholars of his generation. He established a major
            centre of Islamic learning and spiritual instruction, where
            students travelled to study the Qur'an, Islamic law,
            Arabic, Prophetic traditions, and Tasawwuf.
          </p>

          <p>
            Shaykh Ibrahim benefited greatly from his father's teaching.
            He also studied with other recognised scholars and became
            deeply familiar with the classical Islamic sciences.
          </p>

          <p>
            His education was not limited to religious knowledge in the
            narrow sense. He developed expertise in Arabic grammar,
            rhetoric, jurisprudence, theology, Qur'anic sciences,
            Hadith, and Sufi literature.
          </p>

          <h2 className="pt-8 text-2xl font-bold text-green-900 md:text-3xl">
            The Passing of His Father
          </h2>

          <p>
            After the death of his father in 1922, Shaykh Ibrahim
            became one of the principal figures within the family
            tradition of Islamic scholarship.
          </p>

          <p>
            He continued teaching and guiding students and attracted
            large numbers of people who sought his knowledge and
            spiritual guidance. His reputation gradually extended
            beyond his immediate community.
          </p>

          <p>
            During these years, he became increasingly recognised as a
            major Tijani scholar and spiritual guide in Senegal and
            neighbouring regions.
          </p>

          <h2 className="pt-8 text-2xl font-bold text-green-900 md:text-3xl">
            The Fayḍa of Shaykh Ibrahim Niasse
          </h2>

          <p>
            One of the most important aspects of Shaykh Ibrahim
            Niasse's legacy is his teaching concerning the Fayḍa, a
            spiritual outpouring associated with the Tijani tradition.
          </p>

          <p>
            Shaykh Ibrahim taught that the Fayḍa represented a period
            of widespread spiritual awakening and that large numbers
            of believers would attain deeper knowledge of Allah through
            the spiritual path of the Tijaniyya.
          </p>

          <p>
            His teachings attracted disciples from Senegal, Mauritania,
            Gambia, Nigeria, Ghana, Niger, Sudan, and many other parts
            of Africa.
          </p>

          <p>
            The movement eventually developed an international
            character, with communities of disciples emerging across
            Africa and later in Europe, North America, and other parts
            of the world.
          </p>

          <div className="my-10 rounded-3xl border-l-4 border-[#C9A227] bg-green-50 p-7">
            <p className="text-lg font-semibold text-green-900">
              A central feature of his teaching
            </p>

            <p className="mt-3 leading-8 text-gray-700">
              Shaykh Ibrahim Niasse emphasised knowledge of Allah,
              adherence to the Qur'an and Sunnah, remembrance of Allah,
              love of the Prophet Muhammad ﷺ, and spiritual purification.
            </p>
          </div>

          <h2 className="pt-8 text-2xl font-bold text-green-900 md:text-3xl">
            Kōlakh and the Centre of Learning
          </h2>

          <p>
            Shaykh Ibrahim Niasse became closely associated with
            Kōlakh, also known as Kaolack, in Senegal. The city became
            an important centre of Tijani scholarship and spiritual
            education.
          </p>

          <p>
            His zawiya attracted students and visitors from many
            countries. Scholars, students, and ordinary Muslims came
            to benefit from his lessons, prayers, spiritual guidance,
            and teachings.
          </p>

          <p>
            The community surrounding Shaykh Ibrahim developed into one
            of the major centres of the Tijaniyya in West Africa.
          </p>

          <h2 className="pt-8 text-2xl font-bold text-green-900 md:text-3xl">
            His Influence in West Africa
          </h2>

          <p>
            Shaykh Ibrahim Niasse's influence became particularly
            significant in West Africa during the twentieth century.
            His disciples established communities and educational
            centres in Senegal, Nigeria, Ghana, Niger, Mauritania,
            Gambia, Sudan, and other countries.
          </p>

          <p>
            In Nigeria, his teachings attracted numerous scholars and
            spiritual leaders. His relationship with Nigerian scholars
            helped strengthen the transmission of Tijani scholarship
            throughout the region.
          </p>

          <p>
            Ghana also became an important centre of his influence,
            with many Tijani communities preserving his teachings,
            devotional practices, and scholarly tradition.
          </p>

          <h2 className="pt-8 text-2xl font-bold text-green-900 md:text-3xl">
            His Travels and International Influence
          </h2>

          <p>
            Shaykh Ibrahim Niasse travelled extensively and maintained
            relationships with scholars, rulers, students, and
            religious communities across Africa and the Muslim world.
          </p>

          <p>
            His influence extended beyond West Africa. He developed
            relationships with scholars and communities in North
            Africa and the Middle East and participated in wider
            Islamic intellectual and religious networks.
          </p>

          <p>
            Through his students and representatives, his teachings
            eventually reached communities far beyond the places he
            personally visited.
          </p>

          <h2 className="pt-8 text-2xl font-bold text-green-900 md:text-3xl">
            His Scholarly Works
          </h2>

          <p>
            Shaykh Ibrahim Niasse was also a prolific author. He wrote
            extensively in Arabic on Qur'anic interpretation, Islamic
            spirituality, theology, jurisprudence, Prophetic praise,
            and the teachings of the Tijaniyya.
          </p>

          <p>
            Among the works associated with him are writings such as
            <span className="font-semibold text-green-900">
              {" "}
              Kashif al-Ilbas
            </span>
            , in which he discussed important questions concerning the
            Tijani path and its spiritual teachings.
          </p>

          <p>
            He also composed numerous poems and writings expressing
            love for Allah and the Messenger of Allah ﷺ and explaining
            aspects of spiritual knowledge and purification.
          </p>

          <h2 className="pt-8 text-2xl font-bold text-green-900 md:text-3xl">
            His Relationship with the Prophet ﷺ
          </h2>

          <p>
            Love of the Prophet Muhammad ﷺ occupied a central position
            in Shaykh Ibrahim Niasse's teachings and writings.
          </p>

          <p>
            He encouraged his disciples to follow the Sunnah, increase
            their remembrance of Allah, send abundant blessings upon
            the Prophet ﷺ, and cultivate sincere love and reverence for
            him.
          </p>

          <p>
            His writings contain extensive expressions of praise for
            the Messenger of Allah ﷺ and reflections on the spiritual
            significance of Prophetic knowledge.
          </p>

          <h2 className="pt-8 text-2xl font-bold text-green-900 md:text-3xl">
            His Students and Legacy
          </h2>

          <p>
            Shaykh Ibrahim Niasse left behind a vast network of
            disciples and scholars. Many of them became teachers,
            imams, spiritual guides, authors, and leaders of Tijani
            communities in different parts of the world.
          </p>

          <p>
            Among the prominent scholars associated with his tradition
            were figures who carried his teachings into Nigeria, Ghana,
            Niger, Sudan, Mauritania, Senegal, and other countries.
          </p>

          <p>
            His educational and spiritual legacy continues through
            zawiyas, Qur'anic schools, Islamic institutions, scholarly
            gatherings, and communities of disciples around the world.
          </p>

          <h2 className="pt-8 text-2xl font-bold text-green-900 md:text-3xl">
            Passing and Lasting Legacy
          </h2>

          <p>
            Shaykh Ibrahim Niasse passed away in London on 26 July
            1975. His body was returned to Kaolack, Senegal, where he
            was buried.
          </p>

          <p>
            His passing did not end his influence. His teachings
            continued to spread through his students and the
            generations that followed them.
          </p>

          <p>
            Today, Shaykh Ibrahim Niasse is remembered by millions of
            Tijani Muslims as one of the most influential spiritual
            leaders and scholars in the modern history of the
            Tariqa Tijaniyya.
          </p>

          <p>
            His legacy is particularly associated with the Fayḍa,
            Islamic scholarship, spiritual education, remembrance of
            Allah, love of the Prophet Muhammad ﷺ, and the transmission
            of Tijani teachings across Africa and the wider Muslim
            world.
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