<template>
  <section>
    <h2>Vilka får hjälp genom insamlingen?</h2>
    <p>
      Många människor i vårt land har inte råd med de mest nödvändiga levnadsomkostnaderna såsom hyra, mat, elkostnader
      eller vinterkläder. Genom Hillsong City Care och andra organisationer som vi samarbetar med har vi kontakt med en
      hel del av dem. Denna jul hoppas vi att vi tillsammans kan kunna hjälpa 3000 enskilda individer.
    </p>
    <p>
      Sedan vi hade vår första julinsamling 2012 har vi sett att julklappar och matkassar är ett bra sätt att stötta och
      uppmuntra människor. De gåvor som kommer in kommer att fördelas efter det behovsunderlag vi ser, i de olika städer
      där vi finns. Vi kommer att distribuera julgåvor i Göteborg, Jönköping, Stockholm och Örebro veckorna innan jul.  
    </p>

    <nuxt-image src="/img/merry-xmas.jpg" class="-mx-10 mt-10" />
    <div class="flex justify-end -mx-10">
      <nuxt-image src="/img/single-branch-opt.png" class="w-24 transform -translate-y-6 -rotate-18" />
    </div>

    <h2>Ökat behov på grund av Corona</h2>
    <p>
      Statistik från Rädda Barnen visar att 9,3 % av alla Sveriges barn lever i barnfattigdom. Det motsvarar runt 200
      000 barn. Kommuner vi är i kontakt med säger alla att förfrågningarna från individer som behöver hjälp har ökat på
      grund av den pågående pandemin.
    </p>
    <p>
      Vi har ännu inte någon statistik för hur fattigdomen ökat, men man ser att hushåll som redan innan pandemin hade
      ekonomiska utmaningar får stora negativa konsekvenser på grund av lönesänkningar eller förlorad inkomst.
      Utbildningsminister Anna Ekström sa även på en pressträff under november att man inom skolan har ett ökat behov av
      skolmat på måndagar och fredagar då barn inte får tillräckligt med mat under helgen, vilket är en effekt av
      familjers ekonomiska utmaningar.
    </p>

    <nuxt-image src="/img/appartments.jpg" class="-mx-10 mt-10" />

    <h2>Organisationer vi samarbetar med under årets julinsamling</h2>
    <p>
      De gåvor som vi får in genom julinsamlingen distribueras först och främst genom vårt eget sociala arbete Hillsong
      City Care, men vi samarbetar också lokalt med olika organisationer i de städer där vi finns för att nå så många
      som möjligt. I vårt behovsunderlag för 2020 har vi identifierat närmare 3000 personer som vi genom vårt arbete kan
      få vara med och hjälpa. Nedan följer information om organisationerna.
    </p>

    <div class="flex">
      <XmasEntity src="/img/julgran-klapp-opt.png" type="julklapp" />
      <XmasEntity src="/img/julgran-matkasse-opt.png" type="matkasse" />
    </div>

    <p>HILLSONG CITY CARE</p>
    <p>
      I alla våra städer där vi finns har vi ett eget team som arbetar med att på olika sätt stötta och hjälpa individer
      i utsatthet. Vi stöttar individer och familjer med sociala, psykiska och ekonomiska utmaningar samt personer som
      av olika anledningar lever under skyddad identitet eller på skyddade boenden.
    </p>

    <p>FRÄLSNINGSARMÉN - STOCKHOLM</p>
    <p>
      Frälsningsarmén är en kristen kyrka med ett stort socialt engagemang. För dem är omsorgen om hela människan en
      central del i deras tro och verksamhet. Vi har sedan flera år samarbetat med Söderkåren på Södermalm som möter
      många människor med stora behov, däribland familjer i ekonomisk utsatthet.
    </p>

    <p>
      Kvinnocentret i Akalla är en av Frälsningsarméns lokala kårer i Stockholm. Deras mål är att utifrån deras kristna
      tro möta människor i kris och vara en del av deras helande och upprättelse. De arbetar för att bryta isolering och
      utanförskap samt att stötta kvinnor på väg till arbetsliv och att bli en del av det svenska samhället.
    </p>

    <p>STADSMISSIONEN - STOCKHOLM</p>
    <p>
      Stockholms Stadsmission är en idéburen organisation som utifrån en kristen grundsyn arbetar för att skapa ett
      mänskligare samhälle för alla. Detta gör de genom att arbeta med social omsorg, utbildning och arbetsintegration.
    </p>

    <p>SVENSKA KYRKAN - MÄRSTA</p>
    <p>
      Svenska kyrkan, Märsta pastorat vill ge alla människor plats. Alla människor är välkomna, troende eller ej. Deras
      fokus ligger på att Gud älskar människan, inte att människan måste älska Gud. De möter regelbundet de behov som
      finns i samhället, som till exempel ekonomisk utsatthet och utanförskap.
    </p>

    <nuxt-image src="/img/rosett.png" class="h-40 rosett" role="presentational" />

    <p>RÄDDNINGSMISSIONEN - GÖTEBORG</p>
    <p>
      Räddningsmissionen är en idéburen organisation som bedriver socialt arbete på kristen grund. De arbetar både med
      akuta insatser och mer långsiktiga perspektiv.
    </p>

    <p>SVENSKA KYRKAN - BERGSJÖN</p>
    <p>
      Svenska kyrkan i Bergsjön arbetar på bred front i ett av Göteborgs mest utsatta områden och bidrar med mat, kläder
      och annat.
    </p>

    <p>FRÄLSNINGSARMÉN - ÖREBRO</p>
    <p>
      Frälsningsarmén i Örebro har stort nätverk och jobbar året runt med sociala insatser i staden. Tillsammans med dem
      når vi ut till närmare 80 hushåll med matkassar och julklappar.
    </p>
  </section>
</template>

<script>
import XmasEntity from '~/components/general/XmasEntity'

export default {
  components: {
    XmasEntity
  }
}
</script>

<style lang="postcss" scoped>
/*! purgecss start ignore */
>>> .julklapp {
  animation-delay: 1.5s;
}
>>> .matkasse {
  animation-delay: 2s;
}

.rosett >>> img {
  object-fit: contain !important;
}
/*! purgecss end ignore */
</style>
