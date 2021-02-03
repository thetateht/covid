---
layout: theta
permalink: /map/
---

<br>
<div class="tab">
  <button class="tablinks" onclick="openPlot(event, 'wo')" id="defaultOpen"> <b> World </b> - with ranking </button>
  <button class="tablinks" onclick="openPlot(event, 'wo_2')"> <b> World </b> - increments</button>
  <button class="tablinks" onclick="openPlot(event, 'eu')" style="color:#000088"> <b> Europe </b> - detailed</button>
  <button class="tablinks" onclick="openPlot(event, 'eu_2')" style="color:#000088"> <b> Europe </b> - increments</button>
  <button class="tablinks" onclick="openPlot(event, 'us')" style="color:#0033cc"> <b> USA </b> - detailed</button>
  <button class="tablinks" onclick="openPlot(event, 'us_2')" style="color:#0033cc"> <b> USA </b> - increments</button>
  <button class="tablinks" onclick="openPlot(event, 'ch')" style="color:#003300">  <b> Canton of Zurich </b> - increments</button>
</div>

<div id="wo" class="tabcontent">
<center><iframe src="./../corona/plots/C19_map_WORLD.html"  height="730" width="100%"></iframe></center>
</div>

<div id="wo_2" class="tabcontent">
<center><iframe src="./../corona/plots/C19_map_WORLD_2weeks.html"  height="730" width="100%"></iframe></center>
</div>

<div id="eu" class="tabcontent">
<center><iframe src="./../corona/plots/C19_map_EU.html" height="730" width="100%"></iframe></center>
</div>

<div id="eu_2" class="tabcontent">
<center><iframe src="./../corona/plots/C19_map_EU_2weeks.html" height="730" width="100%"></iframe></center>
</div>

<div id="us" class="tabcontent">
<center><iframe src="./../corona/plots/C19_map_USA.html" height="730" width="100%"></iframe></center>
</div>

<div id="us_2" class="tabcontent">
<center><iframe src="./../corona/plots/C19_map_USA_2weeks.html" height="730" width="100%"></iframe></center>
</div>

<div id="ch" class="tabcontent">
<center><iframe src="./../corona/plots/C19_map_ZH.html"  height="730" width="100%"></iframe></center>
</div>

<br>

