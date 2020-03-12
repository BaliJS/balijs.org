import '../styles/index.css'

export default () => (
   <div class="container max-w-lg mx-auto">
   <header class="flex justify-between pb-4">
     <div>
       <h1 class="text-black">BALI<span class="bg-black text-yellow-300">JS</span></h1>
     </div>
     <nav>
       <ul class="flex">
         <li class="pr-1 pl-1"><a>Archive</a></li>|
         <li class="pr-1 pl-1"><a>Latest</a></li>|
         <li class="pr-1 pl-1"><a>RSS</a></li>
       </ul>
     </nav>
   </header>
   <main>
     <section>
       <div class="flex justify-between">
         <a>Prev</a>
         <a>Next</a>
       </div>
       <div class="issue-html"></div>
       <div class="flex justify-between">
         <a>Prev</a>
         <a>Next</a>
       </div>
     </section>
   </main>
 </div>
)
