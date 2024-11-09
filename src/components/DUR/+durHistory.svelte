<script>
    import { theLanguage } from "../../store/store";

    let currentLanguage = "g";
    theLanguage.subscribe((value) => {
        currentLanguage = value;
    });
</script>

<div class="font-sans px-3 md:px-20 lg:px-36">
        <img
            src="./quartet/top.jpg"
            alt="Anait"
            class="hidden sm:block sm:relative left-1/2 transform -translate-x-1/2 w-full object-cover rounded-lg shadow-2xl shadow-black mb-5 max-w-[500px]"
            loading="eager"
        />
        <p>{#if currentLanguage === "e"}
            The D.U.R. Quartet is a classical string quartet, and was
            founded in Bremen in 2015. “D.U.R.” stands for the happy one
            Major chord.
        {:else}
            Das D.U.R. Quartett ist ein klassisches Streichquartett, und wurde
            in 2015 in Bremen gegründet. „D.U.R.“ steht für den fröhlichen
            Dur-Akkord.
        {/if}
        </p>
        <br />
        <p>{#if currentLanguage === "e"}
            Founded in August 2015 through the initiative of Anait Vanoian
             four young professional musicians come together to form a string quartet,
             to take part in the international concert work weeks in Goslar
             to participate. After this groundbreaking masterclass with Prof. Oliver
             The decision was made based on the will and positive response from the audience
             Master's students, the D.U.R. Quartet. The quartet was born at the University of Applied Sciences
             Arts Bremen was accompanied by Thomas Klug and received further suggestions
             through a master class from the Curtis Institute of Music (USA), and
             by Martin Funda from Armida Quartet. Furthermore, they study
             Since the summer semester of 2017 at the Hanover University of Music
             Prof. Oliver Wille, Kuss Quartet a chamber music master.
        {:else}
            Durch die Initiative von Anait Vanoian fanden sich im August 2015
            vier junge professionelle Musiker zu einem Streichquartett zusammen,
            um an den internationalen Konzertarbeitswochen in Goslar
            teilzunehmen. Nach diesem wegweisenden Meisterkurs bei Prof. Oliver
            Wille und aufgrund von positiver Publikumsresonanz beschlossen die
            Masterstudierenden, das D.U.R. Quartett zu gründen. Das Quartett wurde an der Hochschule für
            Künste Bremen von Thomas Klug begleitet und bekam weitere Anregungen
            durch einen Meisterkurs vom Curtis Institute of Music (USA), und
            durch Martin Funda von Armida-Quartett. Des Weiteren studieren sie
            seit Sommersemester 2017 an der Hochschule für Musik Hannover bei
            Prof. Oliver Wille, Kuss Quartett einen Kammermusikmaster.
        {/if}
            <br /><br
            />
            {#if currentLanguage === "e"}
            * From 2016 to 2018 you had the opportunity to play four instruments
             famous Italian violin maker Alessandro Ciciliati
             and cooperate with the “Violin Assets” company.<br /><br />

             * The certificate was issued by members of the DUR Quartet in November 2017
             4th Brigitte Kempen Competition of the University of Music Support Association
             in Aachen for students of the HfMT Cologne took part and will be included
             awarded second prize.<br /><br />

             * In September 2018 they will take part in a competition – “XXIII Premio
             Internazionale di Musica Gaetano Zinetti” in Sanguinetto – Verona,
             Italy part.<br /><br />
        {:else}
            * Von 2016 bis 2018 hatten die die Möglichkeit vier Instrumente des
            berühmten italienischen Geigenbauers Alessandro Ciciliati zu spielen
            und zusammen mit der „Violin Assets“ Firma kooperieren.<br /><br />

            * Die Urkunde hat Mitglieder des DUR Quartetts im November 2017 am
            4. Brigitte-Kempen-Wettbewerb des Fördervereins der Musikhochschule
            in Aachen für Studierende der HfMT Köln teilgenommen und wird mit
            dem Zweiten Preis ausgezeichnet.<br /><br />

            * Im September 2018 nehmen die in einen Wettbewerb – „XXIII Premio
            Internazionale di Musica Gaetano Zinetti“ in Sanguinetto – Verona,
            Italien teil.<br /><br />
        {/if}
            
        </p>
    </div>