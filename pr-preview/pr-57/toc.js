// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> note.momee.mt</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.</strong> Nix</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="nix/nixpkgs-review-log.html"><strong aria-hidden="true">2.1.</strong> nixpkgs レビューログ</a></li><li class="chapter-item expanded "><a href="nix/font-loading.html"><strong aria-hidden="true">2.2.</strong> NixOSでフォントが読み込めないとき</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.</strong> 論理学</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="logic/implication.html"><strong aria-hidden="true">3.1.</strong> 含意</a></li></ol></li><li class="chapter-item expanded "><a href="set-theory/index.html"><strong aria-hidden="true">4.</strong> 集合論</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="set-theory/set.html"><strong aria-hidden="true">4.1.</strong> 集合</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.2.</strong> 集合間の演算</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="set-theory/op/union.html"><strong aria-hidden="true">4.2.1.</strong> 和集合</a></li><li class="chapter-item expanded "><a href="set-theory/op/intersection.html"><strong aria-hidden="true">4.2.2.</strong> 共通部分</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="liner-algebra/index.html"><strong aria-hidden="true">5.</strong> 線形代数</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="liner-algebra/gso.html"><strong aria-hidden="true">5.1.</strong> グラム・シュミットの正規直交化法</a></li><li class="chapter-item expanded "><a href="liner-algebra/spectral-decomposition.html"><strong aria-hidden="true">5.2.</strong> スペクトル分類</a></li></ol></li><li class="chapter-item expanded "><a href="probability-theory/index.html"><strong aria-hidden="true">6.</strong> 確率論</a></li><li class="chapter-item expanded "><a href="statistics/index.html"><strong aria-hidden="true">7.</strong> 統計学</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="statistics/descriptive-statistics/index.html"><strong aria-hidden="true">7.1.</strong> 記述統計</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="statistics/descriptive-statistics/classification-and-scale.html"><strong aria-hidden="true">7.1.1.</strong> 分類と尺度</a></li><li class="chapter-item expanded "><a href="statistics/descriptive-statistics/frequency-table-and-histogram.html"><strong aria-hidden="true">7.1.2.</strong> 度数分布表とヒストグラム</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="theory-of-computation/index.html"><strong aria-hidden="true">8.</strong> 計算理論</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.</strong> 画像工学</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="image/recognition/index.html"><strong aria-hidden="true">9.1.</strong> 画像認識</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="image/recognition/lda.html"><strong aria-hidden="true">9.1.1.</strong> 線形判別法</a></li><li class="chapter-item expanded "><a href="image/recognition/mahalanobis-distance.html"><strong aria-hidden="true">9.1.2.</strong> マハラノビス距離</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="machine-learning/index.html"><strong aria-hidden="true">10.</strong> 機械学習</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="machine-learning/mse.html"><strong aria-hidden="true">10.1.</strong> 平均二乗誤差</a></li><li class="chapter-item expanded "><a href="machine-learning/gradient-descent.html"><strong aria-hidden="true">10.2.</strong> 最急降下法</a></li><li class="chapter-item expanded "><a href="machine-learning/liner-regression.html"><strong aria-hidden="true">10.3.</strong> 線形回帰</a></li><li class="chapter-item expanded "><a href="machine-learning/attribute.html"><strong aria-hidden="true">10.4.</strong> データの種類</a></li><li class="chapter-item expanded "><a href="machine-learning/data-preprocessing.html"><strong aria-hidden="true">10.5.</strong> 前処理</a></li><li class="chapter-item expanded "><a href="machine-learning/document.html"><strong aria-hidden="true">10.6.</strong> 文書の特徴ベクトル化</a></li><li class="chapter-item expanded "><a href="machine-learning/image.html"><strong aria-hidden="true">10.7.</strong> 画像の特徴ベクトル化</a></li><li class="chapter-item expanded "><a href="machine-learning/convex-programming-problem.html"><strong aria-hidden="true">10.8.</strong> 凸計画問題</a></li><li class="chapter-item expanded "><a href="machine-learning/polynomial-regression.html"><strong aria-hidden="true">10.9.</strong> 多項式回帰</a></li><li class="chapter-item expanded "><a href="machine-learning/regression-errors.html"><strong aria-hidden="true">10.10.</strong> 回帰における誤差</a></li><li class="chapter-item expanded "><a href="machine-learning/k-fold-cross-validation.html"><strong aria-hidden="true">10.11.</strong> K-fold交差検証</a></li><li class="chapter-item expanded "><a href="machine-learning/regularization.html"><strong aria-hidden="true">10.12.</strong> 正則化</a></li><li class="chapter-item expanded "><a href="machine-learning/ridge-regression.html"><strong aria-hidden="true">10.13.</strong> リッジ回帰</a></li><li class="chapter-item expanded "><a href="machine-learning/feature-selection.html"><strong aria-hidden="true">10.14.</strong> 特徴選択</a></li><li class="chapter-item expanded "><a href="machine-learning/lasso-regression.html"><strong aria-hidden="true">10.15.</strong> ラッソ回帰</a></li><li class="chapter-item expanded "><a href="machine-learning/gradient-descent-convergence.html"><strong aria-hidden="true">10.16.</strong> 勾配降下法の収束</a></li><li class="chapter-item expanded "><a href="machine-learning/sub-gradient.html"><strong aria-hidden="true">10.17.</strong> 劣勾配</a></li><li class="chapter-item expanded "><a href="machine-learning/hyperplane.html"><strong aria-hidden="true">10.18.</strong> 超平面</a></li><li class="chapter-item expanded "><a href="machine-learning/classification.html"><strong aria-hidden="true">10.19.</strong> 分類</a></li><li class="chapter-item expanded "><a href="machine-learning/confusion-matrix.html"><strong aria-hidden="true">10.20.</strong> 混同行列と性能評価</a></li><li class="chapter-item expanded "><a href="machine-learning/kernel.html"><strong aria-hidden="true">10.21.</strong> カーネル</a></li><li class="chapter-item expanded "><a href="machine-learning/logistic-regression.html"><strong aria-hidden="true">10.22.</strong> ロジスティック回帰</a></li><li class="chapter-item expanded "><a href="machine-learning/softmax-regression.html"><strong aria-hidden="true">10.23.</strong> Softmax回帰</a></li><li class="chapter-item expanded "><a href="machine-learning/k-means.html"><strong aria-hidden="true">10.24.</strong> k-means</a></li><li class="chapter-item expanded "><a href="machine-learning/pca.html"><strong aria-hidden="true">10.25.</strong> 主成分分析</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">11.</strong> 信号処理</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="signal-processing/fourier.html"><strong aria-hidden="true">11.1.</strong> フーリエ変換</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">12.</strong> 電気電子工学</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="ee/semiconductor.html"><strong aria-hidden="true">12.1.</strong> 半導体素子</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">13.</strong> ハードウェア</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="hardware/digital-logic/index.html"><strong aria-hidden="true">13.1.</strong> 論理回路</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="hardware/digital-logic/sop.html"><strong aria-hidden="true">13.1.1.</strong> 主加法標準形</a></li><li class="chapter-item expanded "><a href="hardware/digital-logic/universal.html"><strong aria-hidden="true">13.1.2.</strong> 万能ゲート</a></li><li class="chapter-item expanded "><a href="hardware/digital-logic/latch.html"><strong aria-hidden="true">13.1.3.</strong> ラッチ</a></li><li class="chapter-item expanded "><a href="hardware/digital-logic/d-ff.html"><strong aria-hidden="true">13.1.4.</strong> D-FF</a></li></ol></li><li class="chapter-item expanded "><a href="hardware/vlsi/index.html"><strong aria-hidden="true">13.2.</strong> VLSI</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="hardware/vlsi/mos.html"><strong aria-hidden="true">13.2.1.</strong> MOS</a></li><li class="chapter-item expanded "><a href="hardware/vlsi/aoi21.html"><strong aria-hidden="true">13.2.2.</strong> AOI21</a></li><li class="chapter-item expanded "><a href="hardware/vlsi/class.html"><strong aria-hidden="true">13.2.3.</strong> VLSIの分類</a></li><li class="chapter-item expanded "><a href="hardware/vlsi/electronic-properties.html"><strong aria-hidden="true">13.2.4.</strong> 電気的特性と高速化</a></li><li class="chapter-item expanded "><a href="hardware/vlsi/adder.html"><strong aria-hidden="true">13.2.5.</strong> 加算器</a></li><li class="chapter-item expanded "><a href="hardware/vlsi/carry-lookahead-adder.html"><strong aria-hidden="true">13.2.6.</strong> 桁上げ先見加算器</a></li></ol></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">14.</strong> 論文</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">15.</strong> 経済学</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">15.1.</strong> 日本経済</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="economics/jp/economy.html"><strong aria-hidden="true">15.1.1.</strong> 景気</a></li></ol></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">16.</strong> 法学</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="law/road-traffic-act/index.html"><strong aria-hidden="true">16.1.</strong> 道路交通法</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="law/road-traffic-act/traffic-light.html"><strong aria-hidden="true">16.1.1.</strong> 信号</a></li></ol></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
