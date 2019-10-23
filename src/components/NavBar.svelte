<!-- 
    ## Navigation bar ##

    A responsive horizontal navbar that can support images, links, buttons, and dropdowns.

    * `navbar` class is a responsive horizontal navbar that can support images, links, buttons, and dropdowns.
    * `is-transparent` modifier removes any hover or active background from the navbar items, to enable seamless integration of the navbar in any visual context.
    * `is-fixed-top` modifier keeps the navbar at the top of the page; this needs `has-navbar-fixed-top` too. 
-->

<script>
	export let segment;
</script>

<style>
nav {
    margin-bottom: 6px;
}
</style>

<nav class="navbar is-transparent" role="navigation" aria-label="Navigation bar">

    <!-- 
    ## Brand ##
    
    The `navbar-brand` class is the nav bar's left side, always visible.
    This div usually contains the logo and optionally some links or icons. 
    -->
    <div class="navbar-brand">

        <!-- `navbar-item` class is each single item of the navbar, which can either be an a or a div. -->
        <a class="navbar-item" href="/">
            <span class="panel-icon"><i class="fas fa-home" aria-hidden="true"></i></span>
            <span>ContactOpenSource.com</span>
        </a>

        <!-- `navbar-burger` class is the hamburger icon, which toggles the navbar menu on touch devices. -->
        <button class="button navbar-burger"><span></span><span></span><span></span></button>

    </div>

    <!-- `navbar-menu` class is the right side, hidden on touch devices, visible on desktop -->
    <div class="navbar-menu">

        <!-- `navbar-start` class is the left part of the menu, which appears next to the navbar brand on desktop. -->
        <div class="navbar-start">

            <!--
            ## Dropdown menu parent ##

            To create a dropdown menu, you will need 4 elements:

            * `navbar-item` class with the `has-dropdown` modifier; this is the parent of a dropdown menu.
            * `is-hoverable`: the dropdown will show up when hovering the parent `navbar-item`.
            * `is-active`: the dropdown will show up all the time.
            * `is-right modifier`: position the dropdown to start from the right when `navbar-item` is on the right side.
            * `navbar-link` which contains the dropdown arrow.
            * `navbar-dropdown` which can contain instances of navbar-item and navbar-divider.
            -->
            <div class="navbar-item has-dropdown is-hoverable">

                <!-- `navbar-link` class is a link as the first sibling of a dropdown, which shows the title and an arrow symbol. -->
                <a class="navbar-link" href="/?">Connect</a>

                <!--
                    ## Dropdown ##

                    * `navbar-dropdown` class is the dropdown menu, which can include navbar items and dividers.
                    * `is-boxed` modifier is preferable to use when the navbar is transparent.

                    By default, the dropdown style has:

                    * a grey border-top
                    * a border-radius at both bottom corners

                    When having a transparent navbar, it is preferable to use the boxed version of the dropdown, by using the `is-boxed` modifier:

                    * the grey border is removed
                    * a slight inner shadow is added
                    * all corners are rounded
                    * the hover/active state is animated
                -->
                <div class="navbar-dropdown is-boxed">

                    <!-- Other navbar items; we use links, and you can use any div you want. -->
                    <a class="navbar-item" href="/?">Connect 1</a>
                    <a class="navbar-item" href="/?">Connect 2</a>

                    <!-- `navbar-divider` class displays a horizontal rule in a navbar-dropdown. -->
                    <hr class="navbar-divider">

                    <a class="navbar-item" href="/?">Connect 3</a>
                    <a class="navbar-item" href="/?">Connect 4</a>

                </div>

            </div>

            <!-- Repeat the above "Alpha" dropdown a couple times, so the web page shows a couple more dropdowns. -->
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link" href="/?">Create</a>
                <div class="navbar-dropdown is-boxed">
                    <a class="navbar-item"  href="/?">Create 1</a>
                    <a class="navbar-item"  href="/?">Create 2</a>
                    <hr class="navbar-divider">
                    <a class="navbar-item"  href="/?">Create 3</a>
                    <a class="navbar-item"  href="/?">Create 4</a>
                </div>
            </div>

        </div>

        <!-- `navbar-end` class is the right part of the menu, which appears at the end of the navbar. -->
        <div class="navbar-end">

            <a class="navbar-item" href="/signin"><i class="fas fa-sign-in-alt" aria-hidden="true"></i></a>

            <a class="navbar-item" href="/signout"><i class="fas fa-sign-out-alt" aria-hidden="true"></i></a>

            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link" href="/?"><i class="fas fa-search" aria-hidden="true"></i></a>
                <div class="navbar-dropdown is-boxed">
                    <a class="navbar-item"  href="/?">Search 1</a>
                    <a class="navbar-item"  href="/?">Search 2</a>
                    <hr class="navbar-divider">
                    <a class="navbar-item"  href="/?">Search 3</a>
                    <a class="navbar-item"  href="/?">Search 4</a>
                </div>
            </div>

            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link" href="/?"><i class="fas fa-bell" aria-hidden="true"></i></a>
                <div class="navbar-dropdown is-boxed">
                    <a class="navbar-item"  href="/?">Notification 1</a>
                    <a class="navbar-item"  href="/?">Notification 2</a>
                    <hr class="navbar-divider">
                    <a class="navbar-item"  href="/?">Notification 3</a>
                    <a class="navbar-item"  href="/?">Notification 4</a>
                </div>
            </div>

            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link" href="/?"><i class="fas fa-comment" aria-hidden="true"></i></a>
                <div class="navbar-dropdown is-boxed">
                    <a class="navbar-item"  href="/?">Message 1</a>
                    <a class="navbar-item"  href="/?">Message 2</a>
                    <hr class="navbar-divider">
                    <a class="navbar-item"  href="/?">Message 3</a>
                    <a class="navbar-item"  href="/?">Message 4</a>
                </div>
            </div>

            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link" href="/?"><i class="fas fa-bookmark" aria-hidden="true"></i></a>
                <div class="navbar-dropdown is-boxed">
                    <a class="navbar-item"  href="/?">Bookmark 1</a>
                    <a class="navbar-item"  href="/?">Bookmark 2</a>
                    <hr class="navbar-divider">
                    <a class="navbar-item"  href="/?">Bookmark 3</a>
                    <a class="navbar-item"  href="/?">Bookmark 4</a>
                </div>
            </div>

            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link" href="/?"><i class="fas fa-cog" aria-hidden="true"></i></a>
                <div class="navbar-dropdown is-boxed">
                    <a class="navbar-item"  href="/?">Setting 1</a>
                    <a class="navbar-item"  href="/?">Setting 2</a>
                    <hr class="navbar-divider">
                    <a class="navbar-item"  href="/?">Setting 3</a>
                    <a class="navbar-item"  href="/?">Setting 4</a>
                </div>
            </div>

            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link" href="/?"><i class="fas fa-question-circle" aria-hidden="true"></i></a>
                <div class="navbar-dropdown is-boxed">
                    <a class="navbar-item"  href="/about">About us</a>
                    <a class="navbar-item"  href="/contact">Contact information</a>
                    <a class="navbar-item"  href="/privacy">Privacy policy</a>
                </div>
            </div>

        </div>

    </div>

</nav>
