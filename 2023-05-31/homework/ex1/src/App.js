import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const isScrolledToTop = window.scrollY === 0;
      const scrollingUp = window.scrollY < (window.lastScrollY || 0);
      setShowButton(!isScrolledToTop && scrollingUp);
      window.lastScrollY = window.scrollY;
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="App">
      <h1>Lorem Ipsum</h1>
      <p>
        Food plays a crucial role in the lives of ants, as it serves as a vital
        source of energy, sustenance, and survival for these tiny creatures.
        Ants require food to fuel their activities, maintain their bodily
        functions, and support the growth and development of their colonies.
        Ants have diverse dietary preferences, with different species feeding on
        a wide range of food sources such as sugars, proteins, fats, and plant
        materials. Food enables ants to perform various essential tasks within
        their colonies, including foraging, caring for the brood, defending the
        nest, and even engaging in complex communication through chemical
        signals. The availability and quality of food sources directly impact
        the productivity, population dynamics, and overall success of ant
        colonies. By efficiently sourcing, transporting, and storing food, ants
        exhibit remarkable organizational and cooperative behavior that ensures
        the well-being and survival of their societies. Thus, food plays a
        pivotal role in supporting the intricate social structure and ecological
        significance of ants.
      </p>
      <p>
        Incorporating mathematics into poetry can bring a unique and enriching
        dimension to the art form. Mathematics, with its precision, logic, and
        abstract beauty, can complement the expressive and imaginative qualities
        of poetry. By intertwining mathematics with poetic language, poets can
        create a harmonious fusion that expands the boundaries of creative
        expression. Mathematics offers a wealth of metaphors, symbols, and
        patterns that can evoke deep emotions and provoke intellectual
        engagement. It adds layers of complexity, structure, and rhythm to the
        poetic composition, allowing for innovative and thought-provoking
        explorations of themes and ideas. Including mathematics in poetry can
        also challenge traditional perceptions and inspire new ways of
        perceiving the world. By embracing the marriage of math and poetry, we
        not only celebrate the inherent beauty of both disciplines but also
        encourage interdisciplinary thinking, fostering a deeper appreciation
        for the diverse ways in which human knowledge and creativity can
        intersect and inspire.
      </p>
      <p>
        Dog eggs and buffalo eggs are purely fictional and do not exist in
        reality. Dogs and buffaloes are mammals, and mammals reproduce through
        live birth rather than laying eggs. Therefore, discussing the size of
        dog eggs and buffalo eggs is not applicable. It's important to separate
        factual information from fictional concepts to ensure accuracy and
        clarity in our understanding of the natural world.
      </p>
      <p>
        A blank paper, by itself, cannot be considered an argument. An argument
        typically involves presenting a claim or proposition supported by
        evidence, reasoning, or logical inference. A blank paper lacks any
        explicit statements, evidence, or logical structure to convey a position
        or persuade an audience. It does not present any premises or conclusions
        that can be analyzed, evaluated, or debated. However, it is worth noting
        that a blank paper can serve as a potential canvas or medium for
        expressing arguments. It can be used as a starting point for someone to
        write down their thoughts, ideas, or persuasive points. In that sense, a
        blank paper can facilitate the creation and presentation of arguments,
        but on its own, devoid of content, it cannot be regarded as an argument.
      </p>

      <p>
        Et molestie ac feugiat sed lectus vestibulum mattis. Tellus in metus
        vulputate eu. Porta lorem mollis aliquam ut porttitor leo a diam. Auctor
        augue mauris augue neque gravida in fermentum et sollicitudin. Posuere
        sollicitudin aliquam ultrices sagittis. A diam maecenas sed enim. Sed
        velit dignissim sodales ut eu sem. Eu sem integer vitae justo eget. Urna
        neque viverra justo nec ultrices dui sapien. Massa tincidunt dui ut
        ornare lectus sit amet. Faucibus a pellentesque sit amet porttitor eget
        dolor morbi. Natoque penatibus et magnis dis parturient montes nascetur.
        Scelerisque varius morbi enim nunc faucibus a pellentesque sit amet.
        Bibendum est ultricies integer quis auctor elit sed vulputate mi. Sem
        fringilla ut morbi tincidunt augue interdum velit. Quis imperdiet massa
        tincidunt nunc pulvinar.
      </p>
      <button className={showButton ? "show" : "hide"} onClick={scrollToTop}>
        Scroll to top
      </button>
    </div>
  );
}

export default App;
