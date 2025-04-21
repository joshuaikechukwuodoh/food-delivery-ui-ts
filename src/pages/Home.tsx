import { Button } from "../components/common/Button";
import { Location } from "../components/common/Icons";
import Input from "../components/common/Input";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Background from "../assets/background.jpg";
import Card from "../components/common/Card";
export default function Home() {
  return (
    <>
      <div className="bg-creamyWhite text-charcoalSlate dark:bg-charcoalSlate dark:text-creamyWhite">
        <Header />
        <div
          className="w-full pt-40 py-10 h-1/2 px-5 sm:px-10 md:px-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${Background})` }}
        >
          <div className="flex flex-col gap-4 mt-6">
            <h1 className="cursor-pointer  active:text-primaryBgColor hover:text-primaryBgColor transition-all duration-300 text-ctaColor font-bold text-2xl sm:text-3xl md:text-4xl">
              Order delivery near you
            </h1>

            <div className="flex max-w-3xl items-center justify-center flex-row gap-2 flex-wrap sm:flex-nowrap">
              <div className="flex flex-1 gap-4 items-center px-4 py-3 bg-creamyWhite text-charcoalSlate rounded-md">
                <Location className="text-ctaColor " size={20} />
                <Input
                  name="search"
                  type="text"
                  className="border-none outline-none w-full"
                  placeholder="Enter Your Location"
                />
              </div>
              <Button className="px-5 py-3 active:bg-primaryBgColor hover:bg-primaryBgColor transition-all duration-300   bg-ctaColor text-creamyWhite font-semibold rounded-md sm:w-auto">
                Set Location
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-around items-center">
          <Card
            // className="bg-creamyWhite text-charcoalSlate dark:bg-charcoalSlate dark:text-creamyWhite"
            Title="Effortless Ordering"
            Text="Order seamlessly"
            ImageText="Food ordering Image"
          />
          <Card
            // className="bg-creamyWhite text-charcoalSlate dark:bg-charcoalSlate dark:text-creamyWhite"
            Title="Swift Delivery"
            Text="Count on us to deliver your foods"
            ImageText="Food ordering Image"
          />
          <Card
            // className="bg-creamyWhite text-charcoalSlate dark:bg-charcoalSlate dark:text-creamyWhite"
            Title="Get it while its hot"
            Text="YOur meal gets to you in time"
            ImageText="Food ordering Image"
          />
        </div>
        <p className="text-black bg-transparent dark:text-creamyWhite px-5 sm:px-10 md:px-20 py-8 text-sm leading-relaxed">
          {/* Keeping the long text content as-is; you can eventually extract this into a reusable component or truncate for mobile if needed */}
          // "De finibus bonorum et malorum" Cicero Absatz 1.10.32 - 1.10.33 Sed
          ut // perspiciatis unde omnis iste natus error sit voluptatem
          accusantium // doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo // inventore veritatis et quasi architecto beatae vitae
          dicta sunt // explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut // odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione // voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum // quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam // eius modi tempora incidunt ut labore et
          dolore magnam aliquam quaerat // voluptatem. Ut enim ad minima veniam,
          quis nostrum exercitationem // ullam corporis suscipit laboriosam,
          nisi ut aliquid ex ea commodi // consequatur? Quis autem vel eum iure
          reprehenderit qui in ea voluptate // velit esse quam nihil molestiae
          consequatur, vel illum qui dolorem eum // fugiat quo voluptas nulla
          pariatur? At vero eos et accusamus et iusto // odio dignissimos
          ducimus qui blanditiis praesentium voluptatum // deleniti atque
          corrupti quos dolores et quas molestias excepturi sint // occaecati
          cupiditate non provident, similique sunt in culpa qui // officia
          deserunt mollitia animi, id est laborum et dolorum fuga. Et // harum
          quidem rerum facilis est et expedita distinctio. Nam libero //
          tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
          // minus id quod maxime placeat facere possimus, omnis voluptas
          assumenda // est, omnis dolor repellendus. Temporibus autem quibusdam
          et aut // officiis debitis aut rerum necessitatibus saepe eveniet ut
          et // voluptates repudiandae sint et molestiae non recusandae. Itaque
          earum // rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus // maiores alias consequatur aut perferendis doloribus
          asperiores // repellat. Deutsch "Das höchste Gut und Übel" Cicero
          Absatz 1.10.32 - // 1.10.33 Damit Ihr indess erkennt, woher dieser
          ganze Irrthum gekommen // ist, und weshalb man die Lust anklagt und
          den Schmerz lobet, so will // ich Euch Alles eröffnen und auseinander
          setzen, was jener Begründer // der Wahrheit und gleichsam Baumeister
          des glücklichen Lebens selbst // darüber gesagt hat. Niemand, sagt er,
          verschmähe, oder hasse, oder // fliehe die Lust als solche, sondern
          weil grosse Schmerzen ihr folgen, // wenn man nicht mit Vernunft ihr
          nachzugehen verstehe. Ebenso werde der // Schmerz als solcher von
          Niemand geliebt, gesucht und verlangt, sondern // weil mitunter solche
          Zeiten eintreten, dass man mittelst Arbeiten und // Schmerzen eine
          grosse Lust sich zu verschaften suchen müsse. Um hier // gleich bei
          dem Einfachsten stehen zu bleiben, so würde Niemand von uns //
          anstrengende körperliche Übungen vornehmen, wenn er nicht einen //
          Vortheil davon erwartete. Wer dürfte aber wohl Den tadeln, der nach //
          einer Lust verlangt, welcher keine Unannehmlichkeit folgt, oder der //
          einem Schmerze ausweicht, aus dem keine Lust hervorgeht? Dagegen //
          tadelt und hasst man mit Recht Den, welcher sich durch die Lockungen
          // einer gegenwärtigen Lust erweichen und verführen lässt, ohne in
          seiner // blinden Begierde zu sehen, welche Schmerzen und
          Unannehmlichkeiten // seiner deshalb warten. Gleiche Schuld treffe
          Die, welche aus geistiger // Schwäche, d.h. um der Arbeit und dem
          Schmerze zu entgehen, ihre // Pflichten verabsäumen. Man kann hier
          leicht und schnell den richtigen // Unterschied treffen; zu einer
          ruhigen Zeit, wo die Wahl der // Entscheidung völlig frei ist und
          nichts hindert, das zu thun, was den // Meisten gefällt, hat man jede
          Lust zu erfassen und jeden Schmerz // abzuhalten; aber zu Zeiten
          trifft es sich in Folge von schuldigen // Pflichten oder von
          sachlicher Noth, dass man die Lust zurückweisen und // Beschwerden
          nicht von sich weisen darf. Deshalb trifft der Weise dann // eine
          Auswahl, damit er durch Zurückweisung einer Lust dafür eine //
          grössere erlange oder durch Übernahme gewisser Schmerzen sich grössere
          // erspare. Kompletten Text auf Deutsch ansehen Englisch "The Extremes
          of // Good and Evil" Cicero Absatz 1.10.32 - 1.10.33 But I must
          explain to // you how all this mistaken idea of denouncing pleasure
          and praising // pain was born and I will give you a complete account
          of the system, // and expound the actual teachings of the great
          explorer of the truth, // the master-builder of human happiness. No
          one rejects, dislikes, or // avoids pleasure itself, because it is
          pleasure, but because those who // do not know how to pursue pleasure
          rationally encounter consequences // that are extremely painful. Nor
          again is there anyone who loves or // pursues or desires to obtain
          pain of itself, because it is pain, but // because occasionally
          circumstances occur in which toil and pain can // procure him some
          great pleasure. To take a trivial example, which of // us ever
          undertakes laborious physical exercise, except to obtain some //
          advantage from it? But who has any right to find fault with a man who
          // chooses to enjoy a pleasure that has no annoying consequences, or
          one // who avoids a pain that produces no resultant pleasure? On the
          other // hand, we denounce with righteous indignation and dislike men
          who are // so beguiled and demoralized by the charms of pleasure of
          the moment, // so blinded by desire, that they cannot foresee the pain
          and trouble // that are bound to ensue; and equal blame belongs to
          those who fail in // their duty through weakness of will, which is the
          same as saying // through shrinking from toil and pain. These cases
          are perfectly simple // and easy to distinguish. In a free hour, when
          our power of choice is // untrammelled and when nothing prevents our
          being able to do what we // like best, every pleasure is to be
          welcomed and every pain avoided. // But in certain circumstances and
          owing to the claims of duty or the // obligations of business is will
          frequently occur that pleasures have // to be repudiated and
          annoyances accepted. The wise man therefore // always holds in these
          matters to this principle of selection: he // rejects pleasures to
          secure other greater pleasures, or else he // endures pains to avoid
          worse pains. Übersetzung von H. Rackham Ausgabe // von 1914, De
          Finibus lass dich inspirieren besuche grafikdesign.de // Impressum &
          Datenschutz //{" "}
        </p>

        <Footer />
      </div>
    </>
  );
}
