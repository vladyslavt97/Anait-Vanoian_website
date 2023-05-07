<script>
    import "../app.css";
    import Header from "../components/+header.svelte";
    import Footer from "../components/+footer.svelte";
</script>

<Header />

<slot class="min-h-[100vh]"/>

<Footer />
