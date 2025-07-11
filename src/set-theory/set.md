# 集合

範囲のはっきりしたものの集まりを**集合**という。
集合は普通、ラテン大文字で表される。
幾何学的表現を用いて、集合を**空間**、その元を**点**と呼ぶこともある。

## 元

$A$ が1つの集合であるとき、$A$ に含まれる個々のものを $A$ の**元**（**元素**、**要素**とも）という。
もの $a$ が集合 $A$ の元であることを、$a \in A$、あるいは $A \ni a$ で表す。
このことを、$a$ が $A$ に**属する**、$a$ は $A$ に**含まれる**、$A$ は $a$ を**含む**などという。

$a \in A$ の否定は、$a \not\in A$、または $A \not\ni a$ で表す。

$a \in A$ と $a \not\in A$ はいずれか一方だけが成り立ち、両方同時に成り立つことや、両方同時に成り立たないことはない。

無限に多くの元を持つ集合を**無限集合**、有限個の元しか持たない集合を**有限集合**という。
また固有名詞的に、自然数全体の集合を $\N$、整数全体の集合を $\Z$、有利数全体の集合を $\mathbb{Q}$、実数全体の集合を $\R$ で表す。

$A$ が集合であるとき、どんなもの $a$ を取ってきても $a \in A$ であるか $a \not\in A$ であるかは**定まっている**が、その判定問題が容易に解けるかどうかはまた別問題。

## 変数と条件

考察の対象となるものを代表的に表す文字を**変数**という。
変数が表す対象は任意で、数値だけではない。

また、変数を含む文章をその変数についての**条件**または**性質**という。
条件 $C$ が変数 $x$ についての条件であることを明示したいとき、$C(x)$ と表す。
ある具体的なもの $a$ を $C(x)$ に代入して得られる文章 $C(a)$ が正しいとき、$a$ は条件 $C$ を満たす、または $a$ は性質 $C$ をもつ、という。
条件 $C$ を満たすようなもの全体は1つの集合を形成する。

## 記法

一般に、元 $a, b, c, \cdots$ より成る集合を以下のように表す。
これを**外延的記法**という。

$$
\{ a, b, c, \cdots \}
$$

ただし、この記法はすべての元を列挙するか、簡単に $\cdots$ 部分が推測できるような集合でなければならない。
そこで、ある条件を満たすもの全体の集合、ある性質を満たすもの全体の集合を表現できる、**内包的記法**を用いる。
条件 $C$ を満たすようなもの全体の集合を、次のように表す。

$$
\{x \mid C(x)\}
$$

たとえば、$a, b$ を両端とする $\R$ の閉区間は $\{x \mid a \le x \le b\}$、開区間は $\{x \mid a < x < b \}$ である。

## 空集合

元を全く含まない集合を**空集合**という。
空集合は $\varnothing$、あるいは外延的記法では $\{ \}$ と表す。
たとえば、$\{ x \mid x \in \R, x^2 = -1 \}$ は空集合。

空集合 $\varnothing$ は元を含まないから、$\forall_a \; a \not\in \varnothing$ である。

## 相等

集合 $A, B$ は、全く同じ元から成るとき、すなわち以下が成り立つときに**等しい**という。
これを、$A = B$ と表す。

$$
\forall_x (x \in A \Leftrightarrow x \in B)
$$

### 同等

2つの文章 $p, q$ が与えられたとき、$p \to q$ とは、$p$ が正しいときに $q$ もまた正しいことを示す。
また、$q \to p$ も成り立つとき、$p \Leftrightarrow q$ と表せて、$p$ と $q$ は（論理的に）**同等**であるという。

## 部分集合

{{def}}{def:subset}[部分集合]

集合 $A, B$ において、以下を満たすならば $A$ は $B$ の**部分集合**であるといい、$A \sub B$ または $B \supset A$ と表す。
これを、$A$ は $B$ に**含まれる**、$B$ は $A$ を**含む**という。

$$
\forall_x \; (x \in A \to x \in B)
$$

その否定は、$A \not\sub B$、または $B \not\supset A$ と表される。

$A \sub B \land A \neq B$ であるとき、$A$ は $B$ の**真部分集合**であるという。

$A = B$ であるための必要十分条件は、$A \sub B \land A \supset B$ が成り立つことである。
もし2つの集合が同等であることを証明したければ、両向きに部分集合であることを示す。

$A \sub B \land B \sub C \to A \sub C$ が成り立つことも明らか。

### 空集合と部分集合

空集合 $\varnothing$ は任意の集合 $A$ の部分集合である。

$$
\varnothing \sub A
$$

これは、含意を用いて証明できる。
$\varnothing \sub A$ を示すためには、$\forall_x \; x \in \varnothing \to x \in A$ を示す必要がある。
ここで、$\forall_x \; x \not\in \varnothing$ であるから、常に正しい。
したがって、元の式は正しい。

