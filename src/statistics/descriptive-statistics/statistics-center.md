# データの中心を表す統計量

データから何らかの計算により得られた値を**統計量**と呼ぶ。
データの持つ統計的性質を定量的に測る基準となる。
また、データの中心を表す性質を持つ統計量を**代表値**と呼ぶ。

## 平均値

### 算術平均

算術平均（相加平均）は以下によって与えられる。
足し算する量を平均するとき、差が意味を持つデータに対して最適な平均。

$$
\bar{x} = \frac{1}{n} (x_1 + x_2 + \cdots + x_n) = \frac{1}{n} \sum_{i=1}^n x_i
$$

標本平均、という場合には算術平均を指す場合がほとんど。

### 幾何平均

幾何平均（相乗平均）は以下によって与えられる。
掛け算する量を平均するとき、連続的な増減を鳴らしたいときに対して最適な平均。
対数を取ると算術平均に変換できる。

$$
\bar{x}_G = \sqrt[n]{x_1 \times x_2 \times \cdots \times x_n}
$$

### 調和平均

平均時速の計算などにおいては調和平均が用いられる。

$$
\bar{x}_H = \frac{n}{\frac{1}{x_1} + \frac{1}{x_2} + \cdots + \frac{1}{x_n}}
$$

## 中央値

データを大きさの順に並べたとき、ちょうど中央に来る観測値を **中央値（メディアン）** という。
データが偶数個の場合は、中央に来る2つの観測値の平均を中央値とする。

## 最頻値

最も頻度の多い値を **最頻値（モード）** という。
質的データの場合には最も頻度の高い値を最頻値とすればよい。
量的データの場合は同じ値の観測値が複数得られることが稀なので、度数分布表を作成して、最も頻度の高い階級の階級値を最頻値とすることがある。

