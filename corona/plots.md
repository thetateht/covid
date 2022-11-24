---
layout: theta
permalink: /plots/
---

<br>
<div class="tab">
  <button class="tablinks" onclick="openPlot(event, 'big')" id="defaultOpen"> Most affected countries</button>
  <button class="tablinks" onclick="openPlot(event, 'ceu')" style="color:#000088" id="western"> Western Europe </button>
  <button class="tablinks" onclick="openPlot(event, 'eeu')" style="color:#000088" id="eastern"> Eastern Europe </button>
  <button class="tablinks" onclick="openPlot(event, 'eu')" style="color:#000088" id="union"> European Union </button>
  <button class="tablinks" onclick="openPlot(event, 'cont')" id="continents"> Continents </button>
  <button class="tablinks" onclick="openPlot(event, 'pol')" style="color:#005500" id="poland"> Poland </button>
  <!--<button class="tablinks" onclick="openPlot(event, 'ch')" style="color:#005500" id="swiss"> Switzerland </button>-->
  <button class="tablinks" onclick="openPlot(event, 'nc')" id="choosen"> New cases <br> <small> selected countries </small> </button>
  <button class="tablinks" onclick="openPlot(event, 'other')" id="others"> Other Charts </button>
</div>

<div id="big" class="tabcontent">
    <br><br>
    <img class="center fit" src="./../corona/plots/C19_BIG_a.jpg"  alt="plot big_a"> 
    <br><br><br><br>
    <img class="center fit" src="./../corona/plots/C19_BIG_b.jpg"  alt="plot big_b"> 
    <br><br><br><br>
    <img class="center fit" src="./../corona/plots/C19_BIG_b2.jpg"  alt="plot big_b2"> 
    <br><br><br><br>
    <img class="center fit" src="./../corona/plots/C19_BIG_d.jpg" alt="plot big_d" >
    <br><br><br><br>
    <img class="center fit" src="./../corona/plots/C19_BIG_e.jpg" alt="plot big_e" >
    <br><br><br><br>
   <!-- <center><embed src="./../corona/plots/C19_log_BIG.html" width="95%" height="800" /> </center> 
    <br><br><br><br> -->
    <img class="center fit" src="./../corona/plots/C19_BIG_new.jpg" alt="plot 4" >
    <br><br><br><br>
    <img class="center fit" src="./../corona/plots/C19_BIG_new2.jpg" alt="plot 5" >
    <br><br><br><br>
    <img class="center fit" src="./../corona/plots/C19_BIG_new-fast.jpg" alt="plot 6" >
    <br><br><br><br>
    <img class="center fit" src="./../corona/plots/C19_BIG_new-perc.jpg" alt="plot 7" >
    <br><br>
    <p id="top"> <a href="#" class="top"> Back to the top </a> &nbsp;&nbsp; 
                 <a href="#" class="top" onclick="document.getElementById('western').click()"> Next > </a> </p>
</div>

<div id="ceu" class="tabcontent">
    <br><br>
    <img class="center fit" src="./../corona/plots/C19_CEU_cases.jpg" alt="plot 1" >
    <br><br><br><br>
    <img class="center fit" src="./../corona/plots/C19_CEU_cases2.jpg" alt="plot 2" >
    <br><br><br><br>
   <!-- <center><embed src="./../corona/plots/C19_log_CEU.html" width="95%" height="880" /> </center> 
    <br><br><br><br> -->
    <img class="center fit" src="./../corona/plots/C19_CEU_new.jpg" alt="plot 4" >
    <br><br><br><br>
    <img class="center fit" src="./../corona/plots/C19_CEU_new2.jpg" alt="plot 5" >
    <br><br><br><br>
    <img class="center fit" src="./../corona/plots/C19_CEU_new-fast.jpg" alt="plot 6" >
    <br><br><br><br>
    <img class="center fit" src="./../corona/plots/C19_CEU_new-perc.jpg" alt="plot 7" >
    <br><br>
    <p id="top"> <a href="#" class="top" onclick="document.getElementById('defaultOpen').click()"> < Previous </a> &nbsp;&nbsp; 
                 <a href="#" class="top"> Back to the top </a> &nbsp;&nbsp; 
                 <a href="#" class="top" onclick="document.getElementById('eastern').click()"> Next > </a> </p>
</div>

<div id="eeu" class="tabcontent">
    <br><br>
    <img class="center fit" src="./../corona/plots/C19_EEU_cases.jpg" alt="plot 1" >
    <br><br><br><br>
    <img class="center fit" src="./../corona/plots/C19_EEU_cases2.jpg" alt="plot 2" >
    <br><br><br><br>
   <!-- <center><embed src="./../corona/plots/C19_log_EEU.html" width="95%" height="950" /> </center> 
    <br><br><br><br> -->
    <img class="center fit" src="./../corona/plots/C19_EEU_new.jpg" alt="plot 4" >
    <br><br><br><br>
    <img class="center fit" src="./../corona/plots/C19_EEU_new2.jpg" alt="plot 5" >
    <br><br><br><br>
    <img class="center fit" src="./../corona/plots/C19_EEU_new-fast.jpg" alt="plot 6" >
    <br><br><br><br>
    <img class="center fit" src="./../corona/plots/C19_EEU_new-perc.jpg" alt="plot 7" >
    <br><br>
    <p id="top"> <a href="#" class="top" onclick="document.getElementById('western').click()"> < Previous </a> &nbsp;&nbsp; 
                 <a href="#" class="top"> Back to the top </a> &nbsp;&nbsp; 
                 <a href="#" class="top" onclick="document.getElementById('union').click()"> Next > </a> </p>
</div>

<div id="eu" class="tabcontent">
    <br><br>
    <img class="center fit" src="./../corona/plots/C19_EU_CH_UK_cases.jpg" alt="plot 1" >
    <br><br><br><br>
    <img class="center fit" src="./../corona/plots/C19_EU_CH_UK_cases2.jpg" alt="plot 2" >
    <br><br><br><br>
    <img class="center fit" src="./../corona/plots/C19_EU_CH_UK_cases3.jpg" alt="plot 3" >
    <br><br><br><br>
   <!-- <center><embed src="./../corona/plots/C19_log_EU.html" width="95%" height="1150" /> </center> 
    <br><br><br><br> -->
    <img class="center fit" src="./../corona/plots/C19_EU_CH_UK_new.jpg" alt="plot 4" >
    <br><br><br><br>
    <img class="center fit" src="./../corona/plots/C19_EU_CH_UK_new2.jpg" alt="plot 5" >
    <br><br><br><br>
    <img class="center fit" src="./../corona/plots/C19_EU_CH_UK_new-fast.jpg" alt="plot 6" >
    <br><br><br><br>
    <img class="center fit" src="./../corona/plots/C19_EU_CH_UK_new-perc.jpg" alt="plot 7" >
    <br><br>
    <p id="top"> <a href="#" class="top" onclick="document.getElementById('eastern').click()"> < Previous </a> &nbsp;&nbsp; 
                 <a href="#" class="top"> Back to the top </a> &nbsp;&nbsp; 
                 <a href="#" class="top" onclick="document.getElementById('continents').click()"> Next > </a> </p>
</div>

<div id="cont" class="tabcontent">
    <br><br>
    <img class="center fit" src="./../corona/plots/C19_Continents.jpg" width="80%" alt="plot 1" >
    <br><br><br><br>
    <img class="center fit" src="./../corona/plots/C19_Continents_new.jpg" width="80%"  alt="plot 3" >
    <br><br><br><br>
    <img class="center fit" src="./../corona/plots/C19_Continents_new-plot.jpg" width="80%" alt="plot 4" >
    <br><br><br><br>
    <center><embed src="./../corona/plots/C19_log_Cont.html" width="80%" height="650" /> </center> 
    <br><br>
    <p id="top"> <a href="#" class="top" onclick="document.getElementById('union').click()"> < Previous </a> &nbsp;&nbsp; 
                 <a href="#" class="top"> Back to the top </a> &nbsp;&nbsp; 
                 <a href="#" class="top" onclick="document.getElementById('poland').click()"> Next > </a> </p>
</div>

<div id="pol" class="tabcontent">
    <br><br>
    <img class="center fit" src="./../corona/plots/C19_Silesia.jpg" width="80%" height="700" alt="plot 1" >
    <br><br><br><br>
   <!-- <img class="center fit" src="./../corona/plots/C19_Silesia_log.jpg" width="80%" height="700" alt="plot 2" >
    <br><br><br><br> -->
    <img class="center fit" src="./../corona/plots/C19_Silesia_new.jpg" width="80%" alt="plot 3" >
    <br><br><br><br>
    <img class="center fit" src="./../corona/plots/C19_Silesia_new2.jpg" width="80%" alt="plot 4" >
    <br><br><br><br>
    <img class="center fit" src="./../corona/plots/C19_PL_new-short.jpg" width="80%" height="600" alt="plot 34" >
    <!--<br><br><br><br>
    <img class="center fit" src="./../corona/plots/C19_kra_2.jpg" width="80%"  alt="nie_kra" >
    <br><br><br><br>
    <img class="center fit" src="./../corona/plots/C19_kra.jpg" width="80%"  alt="kra" >-->
    <br><br><br><br>
    <img class="center fit" src="./../corona/plots/C19_Silesia_new-plot.jpg"  width="80%" height="700" alt="plot 5" >
    <br><br><br><br>
    <img class="center fit" src="./../corona/plots/C19_Silesia_new-fast.jpg"  width="80%" height="700" alt="plot 6" >
    <br><br><br><br>
  <!--  <center> <h2 style="color:darkblue"> Interactive chart with Polish voivodeships </h2>
             <embed src="./../corona/plots/C19_PL.html" width="80%" height="750" /> </center> 
    <br><br><br><br> -->
    <center> <embed src="./../corona/plots/C19_log_Reg.html" width="80%" height="700" /> </center> 
    <br><br>
    <p id="top"> <a href="#" class="top" onclick="document.getElementById('continents').click()"> < Previous </a> &nbsp;&nbsp; 
                 <a href="#" class="top"> Back to the top </a> &nbsp;&nbsp; 
                 <a href="#" class="top" onclick="document.getElementById('choosen').click()"> Next > </a> </p>
</div>

<!--<div id="ch" class="tabcontent">
    <br><br>
    <img class="center fit" src="./../corona/plots/C19_CH.jpg" width="80%" height="700" alt="plot 1" >
    <br><br><br><br>
    <img class="center fit" src="./../corona/plots/C19_CH_new_charts_1.jpg" width="80%" alt="plot 3" >
    <br><br><br><br>
    <img class="center fit" src="./../corona/plots/C19_CH_new_charts_2.jpg" width="80%" alt="plot 3b" >
    <br><br><br><br>
    <img class="center fit" src="./../corona/plots/C19_CH_new_plot.jpg"  width="80%" height="700" alt="plot 4" >
    <br><br><br><br>
    <img class="center fit" src="./../corona/plots/C19_CH_new_fast.jpg"  width="80%" height="700" alt="plot 5" >
    <br><br><br><br>
    <center> <embed src="./../corona/plots/C19_log_CH-cant.html" width="80%" height="700" /> </center> 
    <br><br>
    <p id="top"> <a href="#" class="top" onclick="document.getElementById('poland').click()"> < Previous </a> &nbsp;&nbsp; 
                 <a href="#" class="top"> Back to the top </a> &nbsp;&nbsp; 
                 <a href="#" class="top" onclick="document.getElementById('choosen').click()"> Next > </a> </p>
</div>-->

<div id="nc" class="tabcontent">
    <br><br><br><br>
    Europe: <a href="#chch">Switzerland</a>, <a href="#pl">Poland</a>,<a href="#fi">Finland</a>, <a href="#cz">Czechia</a>, <a href="#sk">Slovakia</a>, <a href="#sl">Slovenia</a>, 
            <a href="#ua">Ukraine</a>, <a href="#ro">Romania</a>,<a href="#hu">Hungary</a>, <a href="#at">Austria</a>, <a href="#gr">Germany</a>, <a href="#es">Spain</a>,
            <a href="#an">Andorra</a>, <a href="#uk">United Kingdom</a>
        <br> Others:  <a href="#is">Israel</a>, <a href="#in">India</a>, <a href="#np">Nepal</a>, <a href="#jp">Japan</a>, <a href="#chi">China</a>, <a href="#nz">New Zealand</a>,
        <a href="#au">Australia</a>, <a href="#sa">South Africa</a>, <a href="#me">Mexico</a>, <a href="#us">United States</a>
    <br><br><br>
    <a id="pl"></a>
    <img class="center fit" src="./../corona/plots/C19_daily_Poland.jpg" width="80%" height="500" alt="pl" >
    <br><br><br><br>
    <a id="chch"></a>
    <img class="center fit" src="./../corona/plots/C19_daily_Switzerland.jpg" width="80%" height="400" alt="ch" >
    <br><br><br><br>
    <a id="fi"></a>
    <img class="center fit" src="./../corona/plots/C19_daily_Finland.jpg" width="80%" height="400" alt="fi" >
    <br><br><br><br>
    <a id="cz"></a>
    <img class="center fit" src="./../corona/plots/C19_daily_Czechia.jpg" width="80%" height="400" alt="cz" >
    <br><br><br><br>
    <a id="sk"></a>
    <img class="center fit" src="./../corona/plots/C19_daily_Slovakia.jpg" width="80%" height="400" alt="sk" >
    <br><br><br><br>
    <a id="sl"></a>
    <img class="center fit" src="./../corona/plots/C19_daily_Slovenia.jpg" width="80%" height="400" alt="sl" >
    <br><br><br><br>
    <a id="ua"></a>
    <img class="center fit" src="./../corona/plots/C19_daily_Ukraine.jpg" width="80%" height="400" alt="uk" >
    <br><br><br><br>
    <a id="ro"></a>
    <img class="center fit" src="./../corona/plots/C19_daily_Romania.jpg" width="80%" height="400" alt="ro" >
    <br><br><br><br>
    <a id="hu"></a>
    <img class="center fit" src="./../corona/plots/C19_daily_Hungary.jpg" width="80%" height="400" alt="hu" >
    <br><br><br><br>
    <a id="at"></a>
    <img class="center fit" src="./../corona/plots/C19_daily_Austria.jpg" width="80%" height="400" alt="at" >
    <br><br><br><br>
    <a id="gr"></a>
    <img class="center fit" src="./../corona/plots/C19_daily_Germany.jpg" width="80%" height="400" alt="de" >
    <br><br><br><br>
    <a id="es"></a>
    <img class="center fit" src="./../corona/plots/C19_daily_Spain.jpg" width="80%" height="400" alt="es" >
    <br><br><br><br>
    <a id="an"></a>
    <img class="center fit" src="./../corona/plots/C19_daily_Andorra.jpg" width="80%" height="400" alt="au" >
    <br><br><br><br>
    <a id="uk"></a>
    <img class="center fit" src="./../corona/plots/C19_daily_United_Kingdom.jpg" width="80%" height="400" alt="uk" >
    <br><br><br><br>
    <a id="is"></a>
    <img class="center fit" src="./../corona/plots/C19_daily_Israel.jpg" width="80%" height="400" alt="il" >
    <br><br><br><br>
    <a id="in"></a>
    <img class="center fit" src="./../corona/plots/C19_daily_India.jpg" width="80%" height="400" alt="in" >
    <br><br><br><br>
    <a id="np"></a>
    <img class="center fit" src="./../corona/plots/C19_daily_Nepal.jpg" width="80%" height="400" alt="np" >
    <br><br><br><br>
    <a id="jp"></a>
    <img class="center fit" src="./../corona/plots/C19_daily_Japan.jpg" width="80%" height="400" alt="jp" >
    <br><br><br><br>
    <a id="chi"></a>
    <img class="center fit" src="./../corona/plots/C19_daily_China.jpg" width="80%" height="400" alt="chi" >
    <br><br><br><br>
    <a id="nz"></a>
    <img class="center fit" src="./../corona/plots/C19_daily_New_Zealand.jpg" width="80%" height="400" alt="nz" >
    <br><br><br><br>
    <a id="au"></a>
    <img class="center fit" src="./../corona/plots/C19_daily_Australia.jpg" width="80%" height="400" alt="au" >
    <br><br><br><br>
    <a id="sa"></a>
    <img class="center fit" src="./../corona/plots/C19_daily_South_Africa.jpg" width="80%" height="400" alt="au" >
    <br><br><br><br>
    <a id="me"></a>
    <img class="center fit" src="./../corona/plots/C19_daily_Mexico.jpg" width="80%" height="400" alt="mx" >
    <br><br><br><br>
    <a id="us"></a>
    <img class="center fit" src="./../corona/plots/C19_daily_United_States.jpg" width="80%" height="400" alt="us" >
    <br><br>
    <p id="top"> <a href="#" class="top" onclick="document.getElementById('poland').click()"> < Previous </a> &nbsp;&nbsp; 
                 <a href="#" class="top"> Back to the top </a> &nbsp;&nbsp; 
                 <a href="#" class="top" onclick="document.getElementById('others').click()"> Next > </a> </p>
</div>

<div id="other" class="tabcontent">
  <br><br>
    <img class="center fit" src="./../corona/plots/C19_percent_weekly.jpg" alt="plot 1" >
  <br><br><br><br>
    <img class="center fit" src="./../corona/plots/C19_percent.jpg" alt="plot 2" >
    <br><br><br><br>
    <!-- <img class="center fit" src="./../corona/plots/C19_mortality.jpg" width="80%" alt="plot 3" > 
    <br><br><br><br>-->
    <img class="center fit" src="./../corona/plots/C19_deaths.jpg" width="80%" alt="plot 4" >
    <br><br><br><br>
  <!-- <td> <img  class="center fit" src="./../corona/plots/C19_recov_mort.jpg" alt="plot 5"> </td>
    <br><br><br><br> -->
    <center><embed src="./../corona/plots/C19_log_all.html" width="80%" height="800" /> </center> 
    <br><br><br><br>
    <center> <embed src="./../corona/plots/C19_dots.html" width="80%" height="800" /> </center> 
    <br><br>
    <p id="top"> <a href="#" class="top" onclick="document.getElementById('choosen').click()"> < Previous </a> &nbsp;&nbsp; 
                 <a href="#" class="top"> Back to the top </a> </p>
</div>

<br><br><br>
