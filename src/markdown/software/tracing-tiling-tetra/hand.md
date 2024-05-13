---
title: "Hand"
slug: "/software/tracing-tiling-tetra/hand"
---

### Bones: 

Source Data: CT scan  
242 slices (0.8mm of separation) each of 512 by 512 samples regularly distributed on a total areal of 204mm by 204mm.

![](https://cvcweb.oden.utexas.edu/cvcwp/wp-content/uploads/2018/09/ct-hand93.gif)
![](https://cvcweb.oden.utexas.edu/cvcwp/wp-content/uploads/2018/09/ct-hand123.gif)

Each slice is contoured and the resulting contours are stacked together to determine the solid bone model.

![](https://cvcweb.oden.utexas.edu/cvcwp/wp-content/uploads/2018/09/CT-solid2.gif)
![](https://cvcweb.oden.utexas.edu/cvcwp/wp-content/uploads/2018/09/CT-solid1.gif)

The model must then be segmented so that each bone can be described as an independent structure.

![](https://cvcweb.oden.utexas.edu/cvcwp/wp-content/uploads/2018/09/finger1.gif)

### Tendons

Source Data: MRI scan  
67 slices (3mm of separation) each of 256 by 256 samples regularly distributed on a total area of 120mm by 120mm

![](https://cvcweb.oden.utexas.edu/cvcwp/wp-content/uploads/2018/09/MRI-hand21.gif)
![](https://cvcweb.oden.utexas.edu/cvcwp/wp-content/uploads/2018/09/MRI-hand34.gif)

The tendons are obtained as isocontours at isovalue 42 resulting in a model of both skin and tendon.

![](https://cvcweb.oden.utexas.edu/cvcwp/wp-content/uploads/2018/09/MRI-solid2.gif)
![](https://cvcweb.oden.utexas.edu/cvcwp/wp-content/uploads/2018/09/MRI-solid1.gif)

The tendons then need to be seperated from the skin.

![](https://cvcweb.oden.utexas.edu/cvcwp/wp-content/uploads/2018/09/tendon1.gif)
![](https://cvcweb.oden.utexas.edu/cvcwp/wp-content/uploads/2018/09/MRI-solid3.gif)

(Partial extraction of the Flexor Digitorum Profundus)

### Remaining Work

- Complete extraction of tendon data from the tendon and hand model.
- Combine tendon model with bone model for a complete geometric model.
