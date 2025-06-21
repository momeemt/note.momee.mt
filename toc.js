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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> note.momee.mt</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.</strong> Nix</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="nix/nixpkgs-review-log.html"><strong aria-hidden="true">2.1.</strong> nixpkgs レビューログ</a></li><li class="chapter-item expanded "><a href="nix/font-loading.html"><strong aria-hidden="true">2.2.</strong> NixOSでフォントが読み込めないとき</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.</strong> 信号処理</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="signal-processing/fourier.html"><strong aria-hidden="true">3.1.</strong> フーリエ変換</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.</strong> 電気電子工学</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="ee/semiconductor.html"><strong aria-hidden="true">4.1.</strong> 半導体素子</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.</strong> ハードウェア</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="hardware/digital-logic/index.html"><strong aria-hidden="true">5.1.</strong> 論理回路</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="hardware/digital-logic/sop.html"><strong aria-hidden="true">5.1.1.</strong> 主加法標準形</a></li><li class="chapter-item expanded "><a href="hardware/digital-logic/universal.html"><strong aria-hidden="true">5.1.2.</strong> 万能ゲート</a></li><li class="chapter-item expanded "><a href="hardware/digital-logic/latch.html"><strong aria-hidden="true">5.1.3.</strong> ラッチ</a></li><li class="chapter-item expanded "><a href="hardware/digital-logic/d-ff.html"><strong aria-hidden="true">5.1.4.</strong> D-FF</a></li></ol></li><li class="chapter-item expanded "><a href="hardware/vlsi/index.html"><strong aria-hidden="true">5.2.</strong> VLSI</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="hardware/vlsi/mos.html"><strong aria-hidden="true">5.2.1.</strong> MOS</a></li><li class="chapter-item expanded "><a href="hardware/vlsi/class.html"><strong aria-hidden="true">5.2.2.</strong> VLSIの分類</a></li><li class="chapter-item expanded "><a href="hardware/vlsi/electronic-properties.html"><strong aria-hidden="true">5.2.3.</strong> 電気的特性と高速化</a></li><li class="chapter-item expanded "><a href="hardware/vlsi/adder.html"><strong aria-hidden="true">5.2.4.</strong> 加算器</a></li><li class="chapter-item expanded "><a href="hardware/vlsi/carry-lookahead-adder.html"><strong aria-hidden="true">5.2.5.</strong> 桁上げ先見加算器</a></li></ol></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.</strong> 論文</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="papers/ieee/8330201.html"><strong aria-hidden="true">6.1.</strong> 2025/06/15: Automatically Repairing Dependency-Related Build Breakage</a></li></ol></li></ol>';
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
