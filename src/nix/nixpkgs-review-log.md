# nixpkgs レビューログ
[NixOS/nixpkgs](https://github.com/NixOS/nixpkgs)のレビュー時に見逃していた・気を付けるべき点について記録しておく。

## 習慣
- できるだけ起床してから30〜60分間はnixpkgsへのレビューに充てる
    - 朝の方が当日中に他のレビュワーやコントリビュータからの返信に対応しやすい
- [ ] バージョン更新だけなど、レビューしやすいPRは作業の合間に取り組みたい...
    - まだ`nixpkgs-review`が実行されていないPRに対して自動で実行しておくツールが欲しい
- 過去にレビューしたPRの更新や、レビュワーから指摘にはできるだけ優先的に対応する
    - これが苦手なのが課題

## 一般
- Approveしてから他のレビュワーによって改善点が指摘された場合にはメモしておく
- Request Changesを送ってからマージされるまではTodoistに入れて確認するようにする
- Approveしてからコミッタにマージされない場合はNixOS Discourseの[prs-ready-for-review](https://discourse.nixos.org/t/prs-ready-for-review/3032)に投稿する
- Request Changesを送る際にはできるだけ丁寧に改善点について説明する

## ログ

### 2025/06/04
- [ ] [PR #413741](https://github.com/NixOS/nixpkgs/pull/413741)
- [ ] [PR #413753](https://github.com/NixOS/nixpkgs/pull/413753)
- [ ] [draft-PR #413745](https://github.com/NixOS/nixpkgs/pull/413745)
    - xenstore-toolがバージョンアップによって消されたAPIを使っていて、かつ報告場所がないので困っている、という旨のコメントをOCamlパッケージをメンテナンスしてる方に投げてみた
- 30分くらいのつもりだったけど2時間経っていた
- SATySFi
    - https://github.com/na4zagin3/satyrographos/blob/196244437adaf81d89b3081dd8a26a45e02d1b24/src/satysfi/satysfiDirs.ml#L31-L43
    - ここで~/.opam/<ocaml-version>配下のパッケージパスを特定している
    - `SATYSFI_RUNTIME`を書き換えると出力先を選べる
    - Pythonスクリプト不要かも。satyrographosに処理を委譲できそう

