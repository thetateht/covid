---
layout: theta
permalink: /tab/
---

<br>
## Ranking of the number of cases in countries.
<br>

<div class="tab">
  <button class="tablinks" onclick="openPlot(event, 'eu')" id="defaultOpen"> All cases</button>
  <button class="tablinks" onclick="openPlot(event, 'wo')"> Daily cases/Population </button>
  <button class="tablinks" onclick="openPlot(event, 'ch')"> Quarantine in CH </button>
</div>

<div id="eu" class="tabcontent">
<center><iframe src="./../corona/plots/C19_tab.html" style="height: 666px; width:80%;"></iframe></center>
</div>

<div id="wo" class="tabcontent">
<center><iframe src="./../corona/plots/C19_tab_2.html" style="height: 666px; width:80%;"></iframe></center>
</div>


<div id="ch" class="tabcontent">
<h2>Table with new cases daily (flattened by the biweekly average) with information about quarantine obligation in Switzerland</h2>
<p>
<span style="color:red">RED</span>  - mandatory quarantine <br>
<span style="color:orange">ORANGE</span> - quarantine for selected regions <br>
<span style="color:green">GREEN</span> - no quarantine required <br>
BLACK - so far never quarantined <br><br>
</p>
<center><iframe src="./../corona/plots/C19_tab_3.html" style="height: 555px; width:85%;"></iframe></center>
</div>
<br>
<br>
