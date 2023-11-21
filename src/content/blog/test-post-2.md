---
isDraft: false
title: Healthcare Integration
description: How we built an integration between patients and hospitals?
date: 2023-12-20
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus a pellentesque sit amet porttitor eget dolor. Nec tincidunt praesent semper feugiat nibh sed. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Pellentesque id nibh tortor id aliquet lectus proin nibh. Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Amet aliquam id diam maecenas ultricies mi eget mauris. Nulla facilisi cras fermentum odio eu feugiat. Maecenas sed enim ut sem viverra. Vitae suscipit tellus mauris a diam maecenas sed.

```js
import fs from "fs";
import path from "path";

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));
    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "content"));
}
```

Phasellus vestibulum lorem sed risus ultricies. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Felis eget nunc lobortis mattis aliquam faucibus purus. Eget nunc lobortis mattis aliquam faucibus. Amet nisl purus in mollis nunc sed. Faucibus purus in massa tempor. Congue quisque egestas diam in arcu cursus euismod quis viverra. Eget mi proin sed libero enim sed faucibus turpis. Sapien nec sagittis aliquam malesuada bibendum arcu. Blandit massa enim nec dui nunc mattis enim. Amet luctus venenatis lectus magna fringilla. Purus gravida quis blandit turpis cursus in hac habitasse. Sem integer vitae justo eget magna fermentum. Ac auctor augue mauris augue. Eu consequat ac felis donec et odio pellentesque diam volutpat. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Eget aliquet nibh praesent tristique magna sit amet purus. Aenean pharetra magna ac placerat vestibulum lectus. Commodo quis imperdiet massa tincidunt. Amet commodo nulla facilisi nullam vehicula ipsum.

Orci ac auctor augue mauris augue. Mauris ultrices eros in cursus turpis massa tincidunt dui. Facilisis gravida neque convallis a cras semper auctor. Quis vel eros donec ac odio. Nullam ac tortor vitae purus faucibus ornare suspendisse sed. Pellentesque eu tincidunt tortor aliquam nulla. Ipsum a arcu cursus vitae congue. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Hac habitasse platea dictumst vestibulum rhoncus est. Nullam non nisi est sit amet facilisis. Amet mauris commodo quis imperdiet massa tincidunt. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Varius quam quisque id diam vel quam elementum pulvinar etiam. Volutpat est velit egestas dui id ornare arcu odio. Egestas erat imperdiet sed euismod nisi porta lorem mollis. Egestas sed tempus urna et pharetra. Gravida rutrum quisque non tellus orci ac auctor augue. Auctor neque vitae tempus quam.

Urna duis convallis convallis tellus. Semper viverra nam libero justo laoreet sit. Nisl pretium fusce id velit ut tortor pretium. Ornare lectus sit amet est placerat in. Scelerisque mauris pellentesque pulvinar pellentesque. Ultricies leo integer malesuada nunc vel. Aliquet nec ullamcorper sit amet risus nullam eget felis eget. Velit laoreet id donec ultrices tincidunt. In nisl nisi scelerisque eu ultrices vitae. Metus dictum at tempor commodo ullamcorper. Ornare quam viverra orci sagittis eu volutpat. Arcu dui vivamus arcu felis bibendum ut tristique. Ut diam quam nulla porttitor massa id neque aliquam vestibulum. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Consectetur adipiscing elit ut aliquam purus. Mauris nunc congue nisi vitae.

Nunc non blandit massa enim nec. Sit amet facilisis magna etiam tempor orci eu lobortis. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. A diam maecenas sed enim ut sem viverra aliquet eget. Bibendum est ultricies integer quis auctor elit sed. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Elit pellentesque habitant morbi tristique. Adipiscing at in tellus integer. Sagittis aliquam malesuada bibendum arcu. Convallis aenean et tortor at risus viverra adipiscing. Eu ultrices vitae auctor eu augue ut lectus. Sit amet nisl purus in mollis nunc sed. Venenatis urna cursus eget nunc scelerisque. Est pellentesque elit ullamcorper dignissim cras tincidunt. Turpis nunc eget lorem dolor sed viverra ipsum nunc. Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Auctor elit sed vulputate mi sit amet mauris commodo. Vitae turpis massa sed elementum tempus. Et pharetra pharetra massa massa ultricies.

Viverra mauris in aliquam sem fringilla ut morbi. Tincidunt nunc pulvinar sapien et ligula ullamcorper. Quis risus sed vulputate odio ut. Nascetur ridiculus mus mauris vitae. Non pulvinar neque laoreet suspendisse interdum consectetur libero. Ac odio tempor orci dapibus ultrices in iaculis nunc. Eget nunc scelerisque viverra mauris in aliquam sem fringilla. Ac feugiat sed lectus vestibulum mattis ullamcorper. Egestas dui id ornare arcu odio ut. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Sit amet risus nullam eget felis eget. Neque viverra justo nec ultrices dui. Malesuada fames ac turpis egestas integer eget aliquet nibh. Sit amet consectetur adipiscing elit pellentesque habitant. Cursus eget nunc scelerisque viverra mauris in aliquam. Magna fringilla urna porttitor rhoncus dolor purus non enim. Cras fermentum odio eu feugiat pretium nibh. A condimentum vitae sapien pellentesque habitant morbi tristique senectus.

Ante metus dictum at tempor commodo ullamcorper a. Egestas integer eget aliquet nibh praesent tristique magna sit amet. Et odio pellentesque diam volutpat commodo sed. Nunc pulvinar sapien et ligula. Et malesuada fames ac turpis egestas sed tempus urna. Ut aliquam purus sit amet luctus venenatis. Est ultricies integer quis auctor elit sed vulputate mi. Nibh sit amet commodo nulla facilisi nullam. Tincidunt eget nullam non nisi est sit amet facilisis magna. Ut tellus elementum sagittis vitae et leo duis ut diam. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Risus viverra adipiscing at in. Vivamus arcu felis bibendum ut tristique et.

Dis parturient montes nascetur ridiculus. Vitae congue eu consequat ac felis donec et odio. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Suspendisse interdum consectetur libero id faucibus nisl tincidunt. Tortor consequat id porta nibh venenatis cras sed felis. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. In nulla posuere sollicitudin aliquam ultrices sagittis. Luctus accumsan tortor posuere ac ut consequat semper. Sed nisi lacus sed viverra tellus. Adipiscing at in tellus integer feugiat scelerisque.

In hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Ut sem nulla pharetra diam sit amet. Feugiat nibh sed pulvinar proin gravida hendrerit. Facilisis volutpat est velit egestas dui id. Integer quis auctor elit sed. Consequat nisl vel pretium lectus quam id leo in. Feugiat pretium nibh ipsum consequat nisl vel. Praesent tristique magna sit amet. Donec et odio pellentesque diam. Blandit volutpat maecenas volutpat blandit aliquam etiam. Ipsum suspendisse ultrices gravida dictum. Nisi lacus sed viverra tellus in hac habitasse platea. Tellus cras adipiscing enim eu turpis egestas pretium. Eget est lorem ipsum dolor sit amet consectetur adipiscing. Eget magna fermentum iaculis eu non. Nunc sed velit dignissim sodales ut eu. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non.

Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Nulla at volutpat diam ut venenatis. Elit ut aliquam purus sit amet luctus venenatis. Commodo sed egestas egestas fringilla phasellus faucibus. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Bibendum at varius vel pharetra vel turpis nunc eget. Molestie at elementum eu facilisis. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Vitae ultricies leo integer malesuada nunc vel. In fermentum posuere urna nec tincidunt praesent semper. Vel eros donec ac odio. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus.
