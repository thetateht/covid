---
layout: theta
permalink: /tab/
---

<br>

<div class="tab">
  <button class="tablinks" onclick="openPlot(event, 'eu')" id="defaultOpen"> All cases</button>
  <button class="tablinks" onclick="openPlot(event, 'wo')"> Daily cases </button>
  <button class="tablinks" onclick="openPlot(event, 'deaths')"> Daily deaths </button>
  <button class="tablinks" onclick="openPlot(event, 'ch')"> Quarantine in CH </button>
  <button class="tablinks" onclick="openPlot(event, 'al')"> Collected data </button>
  <button class="tablinks" onclick="openPlot(event, 'pol')"> Poland </button>
</div>

<div id="eu" class="tabcontent">
<center><iframe src="./../corona/plots/C19_tab.html" style="height: 666px; width:80%;"></iframe></center>
</div>

<div id="wo" class="tabcontent">
<center><iframe src="./../corona/plots/C19_tab_2.html" style="height: 666px; width:80%;"></iframe></center>
</div>

<div id="deaths" class="tabcontent">
<center><iframe src="./../corona/plots/C19_tab_2B.html" style="height: 666px; width:80%;"></iframe></center>
</div>

<div id="ch" class="tabcontent">
<center><iframe src="./../corona/plots/C19_tab_3.html" style="height: 600px; width:95%;"></iframe></center>
<center>
<table  style='font-size:80%'><tr>
<td>
   <span style="color:red">RED</span> - mandatory quarantine <br>
   <span style="color:orange">ORANGE</span> - quarantine for selected regions&emsp;
 </td><td>
   <span style="color:green">GREEN</span> - no quarantine required<br>
   BLACK - so far never quarantined
 </td>
</tr></table>
</center>
</div>

<div id="al" class="tabcontent">
<center><iframe src="./../corona/plots/C19_tab_4.html" style="height: 666px; width:85%;"></iframe></center>
</div>

<div id="pol" class="tabcontent">
<center><iframe src="./../corona/plots/C19_tab_5_PL_powiats.html" style="height: 666px; width:85%;"></iframe></center>
</div>

<br>
<br>
