---
layout: theta
permalink: /map/
---
<br>
## Map with the numbers of cases.
<br>
<div class="tab">
  <button class="tablinks" onclick="openPlot(event, 'wo')" id="defaultOpen"> World - with ranking </button>
  <button class="tablinks" onclick="openPlot(event, 'eu')"> Europe - detailed</button>
  <button class="tablinks" onclick="openPlot(event, 'us')"> USA - detailed</button>
  <button class="tablinks" onclick="openPlot(event, 'ch')"> Canton of Zurich</button>
</div>

<div id="eu" class="tabcontent">
<center><iframe src="./../corona/plots/C19_map_EU.html" height="666" width="100%"></iframe></center>
</div>

<div id="us" class="tabcontent">
<center><iframe src="./../corona/plots/C19_map_USA.html" height="666" width="100%"></iframe></center>
</div>

<div id="wo" class="tabcontent">
<center><iframe src="./../corona/plots/C19_map_WORLD.html"  height="666" width="100%"></iframe></center>
</div>

<div id="ch" class="tabcontent">
<center><iframe src="./../corona/plots/C19_map_ZH.html"  height="666" width="100%"></iframe></center>
</div>

<br>

