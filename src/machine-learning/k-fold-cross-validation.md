# K-fold交差検証

偏りの大きい事例が訓練事例に集中すると、学習モデルの偏りも大きくなってしまうため、
様々な分割パターンで学習を行ってできるだけ偏りを少なくする手法。

1. 事例を$k$個に分割する
1. $i$番目の分割をテスト事例として、残る$k-1$個を訓練事例としてテスト誤差を評価する
1. 全てのfoldのテスト誤差を平均し、これを汎化誤差の推定値として出力する

