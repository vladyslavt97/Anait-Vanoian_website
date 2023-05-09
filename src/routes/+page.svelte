<script>
  import { Motion } from "svelte-motion";
  import IoMdCloudDownload from 'svelte-icons/io/IoMdCloudDownload.svelte'

</script>

<div class="">
  <Motion
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:2}}
      let:motion
      >
    <div  use:motion class="flex flex-row justify-around items-center my-4 mt-16">
        <a href="https://www.youtube.com/@anaitvanoian7094"><img src="./youtube.png" alt="youtube" width="30px"/></a>
        <a href="https://www.facebook.com/anait.vanoyan"><img src="./facebook.png" alt="facebook" width="30px"/></a>
        <a href="https://www.instagram.com/anaitvioline/?igshid=ZGUzMzM3NWJiOQ%3D%3D"><img src="./instagram.png" alt="instagram" width="30px"/></a>
        <a href="https://soundcloud.com/anaitvanoian/anait-vanoian-m-karminsky-the-jewish-prayer"><img src="./soundcloud.png" alt="instagram" width="55px"/></a>
    </div>
  </Motion>
  <div>
    <h1 class="text-center my-7">Home page</h1>
    <Motion
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:3}}
      let:motion
      >
      <img use:motion src="/anait.jpeg" alt="phot" class="rounded float-left ml-5 mr-3 sm:ml-16 lg:ml-44 lg:mr-6" width="180px">
    </Motion>
    <p class="px-5 font-sans pb-10 sm:mx-10 lg:mx-40"> <span class="italic">Anait Vanoian</span> wurde 1991 in Izmail, Ukraine, geboren.
  Mit 6 Jahren nahm sie den ersten Geigenunterricht.
  Von 1998 bis 2005 war sie Schülerin von T. Spodinetz an der Schule für Künste in Kramatorsk, Ukraine.
  Von 2005 bis 2008 besuchte sie bei Professor S. Evdokimov die Spezialmusikschule in Charkiv und von 2008 bis 2012 absolvierte sie an der Nationalen Universität für Künste in Charkiw ein Bachelor-Studium, das sie mit Auszeichnung („rotes Diplom“) abschloss.<br/>
  Nach der Übersiedlung nach Deutschland besuchte sie 2013 ein Jahr lang das Brahms-Konservatorium in Hamburg bei Professor T. Mikaelyan.
  Von 2014 bis 2017 absolvierte sie als Studentin bei Professorin Katrin Scholz an der Hochschule für Künste in Bremen ein Master – Studium
  Ab 2017 wird sie die hMtMh (Hochschule für Musik, Theater und Medien) in Hannover besuchen und bei Professor Oliver Wille (Kuss-Quartett) studieren.
  Anait ist Preisträgerin mehrerer Wettbewerbe, u.a.der folgenden:<br/>
  • „Bluebird of Happiness“ in Simferopol, Ukraine (3. Preis, 2002)<br/>
  • „Silver String Music Competition“ in Kramatorsk (1. Preis, 2004)<br/>
  • Internationaler Streichquartett Wettbewerb in Radom, Polen (3.Preis, 16.8.2011), zusammen mit dem Nocturnum-Quartett<br/>
  • 4. Brigitte-Kempen-Wettbewerb des Fördervereins der Musikhochschule in Aachen für Studierende der HfMT Köln. (2. Preis, 23.11.2017)<br/>
  • XXIII Premio Internazionale di Musica Gaetano Zinetti (92 Punkten von 100, 23.09.2018)<br/>
  • Medici International Music Competition, London (3. Preis, 2021)<br/><br/>
  Sie nahm auch an zahlreichen Festivals teil:<br/>
  5 Jahre lang war sie Mitglied im Richard-Wagner-Verein in Charkiw. Als Stipendiatin hat sie an den Richard-Wagner-Festspielen in Bayreuth teilgenommen, wo sie zusammen mit dem Komponisten Denys Bocharov eine zeitgenössische Komposition von ihm präsentiert hat.
  Vom 8.- 20.8.2014 spielte sie beim Vilalte Musik-Festival in Corsavy, Frankreich, als erste Geigerin in unterschiedlichen Besetzungen, in Trios, Quartetts und Sextetts.
  2014 und 2015 war sie Stipendiatin des Deutschland-Stipendiums.
  Sie nahm an zahlreichen Meisterkursen teil und spielte dort mit führenden Violinisten wie Wladimir Astrachanzew, Aleksej Koshvanets, Natalja Boyarskaya, Anatoly Bazhenov, Maxim Rusanow und Thomas Brandis, später auch mit Markus Placci und Burghard Maiß, außerdem beim Masterkurs mit dem „Aizuri Quartett“ aus Amerika und mit dem ersten Violinisten, Martin Funda, des „Armida Quartetts“ Berlin.
  Ab August 2015 ist sie die erste Geigerin des D.U.R.Quartetts in Bremen.<br/><br/>
  Anait und ihre Kollegen von des D.U.R. Quartett haben Instrumente von des berühmten italienischen Geigenbauers Alessandro Ciciliati zu bekommen, der Sprechpartner ist „Violin Assets“.
  Ab Oktober 2019 fängte sie als Stellvertreterin Konzertmasterin bei „Neue Philharmonie“ Berlin an.
  Berufserfahrung:<br/>
  • Konzertmeisterin bei Städtisches Orchester Delmenhorst<br/>
  • Konzertmeisterin bei Kammerphilharmonie Emsland<br/>
  • Stimmführerin bei Silk Road Symphony Orchester in Berlin<br/>
  • I Violine Tutti bei Neue Philharmonie Hamburg<br/>
  • I Violine Tutti Hansa Philharmonie Hamburg<br/>
  • Stellvertreterin Konzertmeisterin bei Neue Philharmonie Berlin<br/>
  • I Violine Tutti (Aushilfe) – Niedersachsen Theater in Hildesheim<br/>
  • I Violine Tutti (Aushilfe) – Deutschen Filmorchester Babelsberg Berlin<br/>
  • II Violine Tutti - Russisch-Deutschen MusikAkademie Berlin unter der Leitung Maestro Valery Gergiev<br/>
  • Stellvertreterin Konzertmeisterin bei Brandenburgisches Konzertorchester Eberswalde (Zeitvertrag)<br/>
  • Stellvertreterin Konzertmeisterin (Aushilfe) bei Staatstheater Cottbus</p>
  </div>


  <div class="flex justify-center pb-20">
    <a href="/CV_Anait_Vanoian.pdf" download class="flex flex-row items-center gap-4">Download CV 
      <div class="w-10">
        <IoMdCloudDownload />
      </div>
    </a>
  </div>
</div>