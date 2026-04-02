(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,76639,26999,41947,95926,e=>{"use strict";let t,a,i;var o=e.i(43476),s=e.i(71645),r=e.i(81140),n=e.i(20783),l=e.i(30030),h=e.i(10772),u=e.i(69340),c=e.i(26330),d=e.i(65491),p=e.i(74606),y=e.i(96626),g=e.i(48425),m=e.i(3536),f=e.i(85369),w=e.i(86312),b=Symbol("radix.slottable");function v(e){return s.isValidElement(e)&&"function"==typeof e.type&&"__radixId"in e.type&&e.type.__radixId===b}var k="Dialog",[T,I]=(0,l.createContextScope)(k),[C,S]=T(k),x=e=>{let{__scopeDialog:t,children:a,open:i,defaultOpen:r,onOpenChange:n,modal:l=!0}=e,c=s.useRef(null),d=s.useRef(null),[p,y]=(0,u.useControllableState)({prop:i,defaultProp:r??!1,onChange:n,caller:k});return(0,o.jsx)(C,{scope:t,triggerRef:c,contentRef:d,contentId:(0,h.useId)(),titleId:(0,h.useId)(),descriptionId:(0,h.useId)(),open:p,onOpenChange:y,onOpenToggle:s.useCallback(()=>y(e=>!e),[y]),modal:l,children:a})};x.displayName=k;var q="DialogTrigger",W=s.forwardRef((e,t)=>{let{__scopeDialog:a,...i}=e,s=S(q,a),l=(0,n.useComposedRefs)(t,s.triggerRef);return(0,o.jsx)(g.Primitive.button,{type:"button","aria-haspopup":"dialog","aria-expanded":s.open,"aria-controls":s.contentId,"data-state":_(s.open),...i,ref:l,onClick:(0,r.composeEventHandlers)(e.onClick,s.onOpenToggle)})});W.displayName=q;var A="DialogPortal",[D,M]=T(A,{forceMount:void 0}),E=e=>{let{__scopeDialog:t,forceMount:a,children:i,container:r}=e,n=S(A,t);return(0,o.jsx)(D,{scope:t,forceMount:a,children:s.Children.map(i,e=>(0,o.jsx)(y.Presence,{present:a||n.open,children:(0,o.jsx)(p.Portal,{asChild:!0,container:r,children:e})}))})};E.displayName=A;var P="DialogOverlay",H=s.forwardRef((e,t)=>{let a=M(P,e.__scopeDialog),{forceMount:i=a.forceMount,...s}=e,r=S(P,e.__scopeDialog);return r.modal?(0,o.jsx)(y.Presence,{present:i||r.open,children:(0,o.jsx)(F,{...s,ref:t})}):null});H.displayName=P;var B=((i=s.forwardRef((e,t)=>{let{children:a,...i}=e;if(s.isValidElement(a)){var o;let e,r,l=(o=a,(r=(e=Object.getOwnPropertyDescriptor(o.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?o.ref:(r=(e=Object.getOwnPropertyDescriptor(o,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?o.props.ref:o.props.ref||o.ref),h=function(e,t){let a={...t};for(let i in t){let o=e[i],s=t[i];/^on[A-Z]/.test(i)?o&&s?a[i]=(...e)=>{let t=s(...e);return o(...e),t}:o&&(a[i]=o):"style"===i?a[i]={...o,...s}:"className"===i&&(a[i]=[o,s].filter(Boolean).join(" "))}return{...e,...a}}(i,a.props);return a.type!==s.Fragment&&(h.ref=t?(0,n.composeRefs)(t,l):l),s.cloneElement(a,h)}return s.Children.count(a)>1?s.Children.only(null):null})).displayName="DialogOverlay.RemoveScroll.SlotClone",t=i,(a=s.forwardRef((e,a)=>{let{children:i,...r}=e,n=s.Children.toArray(i),l=n.find(v);if(l){let e=l.props.children,i=n.map(t=>t!==l?t:s.Children.count(e)>1?s.Children.only(null):s.isValidElement(e)?e.props.children:null);return(0,o.jsx)(t,{...r,ref:a,children:s.isValidElement(e)?s.cloneElement(e,void 0,i):null})}return(0,o.jsx)(t,{...r,ref:a,children:i})})).displayName="DialogOverlay.RemoveScroll.Slot",a),F=s.forwardRef((e,t)=>{let{__scopeDialog:a,...i}=e,s=S(P,a);return(0,o.jsx)(f.RemoveScroll,{as:B,allowPinchZoom:!0,shards:[s.contentRef],children:(0,o.jsx)(g.Primitive.div,{"data-state":_(s.open),...i,ref:t,style:{pointerEvents:"auto",...i.style}})})}),R="DialogContent",z=s.forwardRef((e,t)=>{let a=M(R,e.__scopeDialog),{forceMount:i=a.forceMount,...s}=e,r=S(R,e.__scopeDialog);return(0,o.jsx)(y.Presence,{present:i||r.open,children:r.modal?(0,o.jsx)(j,{...s,ref:t}):(0,o.jsx)(L,{...s,ref:t})})});z.displayName=R;var j=s.forwardRef((e,t)=>{let a=S(R,e.__scopeDialog),i=s.useRef(null),l=(0,n.useComposedRefs)(t,a.contentRef,i);return s.useEffect(()=>{let e=i.current;if(e)return(0,w.hideOthers)(e)},[]),(0,o.jsx)(N,{...e,ref:l,trapFocus:a.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,r.composeEventHandlers)(e.onCloseAutoFocus,e=>{e.preventDefault(),a.triggerRef.current?.focus()}),onPointerDownOutside:(0,r.composeEventHandlers)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,a=0===t.button&&!0===t.ctrlKey;(2===t.button||a)&&e.preventDefault()}),onFocusOutside:(0,r.composeEventHandlers)(e.onFocusOutside,e=>e.preventDefault())})}),L=s.forwardRef((e,t)=>{let a=S(R,e.__scopeDialog),i=s.useRef(!1),r=s.useRef(!1);return(0,o.jsx)(N,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(i.current||a.triggerRef.current?.focus(),t.preventDefault()),i.current=!1,r.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(i.current=!0,"pointerdown"===t.detail.originalEvent.type&&(r.current=!0));let o=t.target;a.triggerRef.current?.contains(o)&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&r.current&&t.preventDefault()}})}),N=s.forwardRef((e,t)=>{let{__scopeDialog:a,trapFocus:i,onOpenAutoFocus:r,onCloseAutoFocus:l,...h}=e,u=S(R,a),p=s.useRef(null),y=(0,n.useComposedRefs)(t,p);return(0,m.useFocusGuards)(),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d.FocusScope,{asChild:!0,loop:!0,trapped:i,onMountAutoFocus:r,onUnmountAutoFocus:l,children:(0,o.jsx)(c.DismissableLayer,{role:"dialog",id:u.contentId,"aria-describedby":u.descriptionId,"aria-labelledby":u.titleId,"data-state":_(u.open),...h,ref:y,onDismiss:()=>u.onOpenChange(!1)})}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(X,{titleId:u.titleId}),(0,o.jsx)(Q,{contentRef:p,descriptionId:u.descriptionId})]})]})}),O="DialogTitle",$=s.forwardRef((e,t)=>{let{__scopeDialog:a,...i}=e,s=S(O,a);return(0,o.jsx)(g.Primitive.h2,{id:s.titleId,...i,ref:t})});$.displayName=O;var G="DialogDescription",Y=s.forwardRef((e,t)=>{let{__scopeDialog:a,...i}=e,s=S(G,a);return(0,o.jsx)(g.Primitive.p,{id:s.descriptionId,...i,ref:t})});Y.displayName=G;var U="DialogClose",V=s.forwardRef((e,t)=>{let{__scopeDialog:a,...i}=e,s=S(U,a);return(0,o.jsx)(g.Primitive.button,{type:"button",...i,ref:t,onClick:(0,r.composeEventHandlers)(e.onClick,()=>s.onOpenChange(!1))})});function _(e){return e?"open":"closed"}V.displayName=U;var J="DialogTitleWarning",[K,Z]=(0,l.createContext)(J,{contentName:R,titleName:O,docsSlug:"dialog"}),X=({titleId:e})=>{let t=Z(J),a=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return s.useEffect(()=>{e&&(document.getElementById(e)||console.error(a))},[a,e]),null},Q=({contentRef:e,descriptionId:t})=>{let a=Z("DialogDescriptionWarning"),i=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${a.contentName}}.`;return s.useEffect(()=>{let a=e.current?.getAttribute("aria-describedby");t&&a&&(document.getElementById(t)||console.warn(i))},[i,e,t]),null};e.s(["Close",()=>V,"Content",()=>z,"Description",()=>Y,"Overlay",()=>H,"Portal",()=>E,"Root",()=>x,"Title",()=>$,"Trigger",()=>W],26999);let ee=(0,e.i(75254).default)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);e.s(["default",()=>ee],41947),e.s(["XIcon",()=>ee],95926);var et=e.i(75157);function ea({...e}){return(0,o.jsx)(x,{"data-slot":"dialog",...e})}function ei({...e}){return(0,o.jsx)(E,{"data-slot":"dialog-portal",...e})}function eo({...e}){return(0,o.jsx)(V,{"data-slot":"dialog-close",...e})}function es({className:e,...t}){return(0,o.jsx)(H,{"data-slot":"dialog-overlay",className:(0,et.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",e),...t})}function er({className:e,children:t,showCloseButton:a=!0,...i}){return(0,o.jsxs)(ei,{"data-slot":"dialog-portal",children:[(0,o.jsx)(es,{}),(0,o.jsxs)(z,{"data-slot":"dialog-content",className:(0,et.cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none sm:max-w-lg",e),...i,children:[t,a&&(0,o.jsxs)(V,{"data-slot":"dialog-close",className:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",children:[(0,o.jsx)(ee,{}),(0,o.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})}function en({className:e,...t}){return(0,o.jsx)("div",{"data-slot":"dialog-header",className:(0,et.cn)("flex flex-col gap-2 text-center sm:text-left",e),...t})}function el({className:e,...t}){return(0,o.jsx)("div",{"data-slot":"dialog-footer",className:(0,et.cn)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",e),...t})}function eh({className:e,...t}){return(0,o.jsx)($,{"data-slot":"dialog-title",className:(0,et.cn)("text-lg leading-none font-semibold",e),...t})}function eu({className:e,...t}){return(0,o.jsx)(Y,{"data-slot":"dialog-description",className:(0,et.cn)("text-muted-foreground text-sm",e),...t})}e.s(["Dialog",()=>ea,"DialogClose",()=>eo,"DialogContent",()=>er,"DialogDescription",()=>eu,"DialogFooter",()=>el,"DialogHeader",()=>en,"DialogTitle",()=>eh],76639)},96636,e=>{"use strict";let t=[{id:"caffeine-half-life",title:"Caffeine Half-Life Calculator",description:"Track your caffeine metabolism with scientific accuracy.",category:"bigkidmath",slug:"caffeine-half-life",icon:"☕",origin:"Caffeine has a biological half-life of about 5-6 hours for the average adult. This tool uses standard pharmacokinetic models to estimate how much 'buzz' remains in your system.",howTo:"Enter the time and amount of your last coffee. We'll chart the decay curve and tell you when it's safe to sleep without that 'caffeine-crash' insomnia.",tips:["Genetics can make you a 'fast' or 'slow' metabolizer.","Smoking can double the speed of caffeine metabolism.","Grapefruit juice can actually slow it down!"],tags:["Health","Science"],content:`
## The Science of the "Jitters"

Caffeine is the world's most popular psychoactive drug. It works by blocking **adenosine receptors** in your brain. Adenosine is the chemical that tells you "I'm tired." Caffeine impersonates it, jamming the door shut so the "tired" signal can't get through.

### The Half-Life Rule
In pharmacology, "half-life" is the time it takes for your body to eliminate 50% of a substance. For caffeine, this is essentially **5-6 hours** for the average healthy adult.
*   **Noon**: You drink a large coffee (200mg).
*   **6:00 PM**: You still have 100mg (half a coffee) in your system.
*   **Midnight**: You *still* have 50mg (a shot of espresso) circulating.

### Why You Can't Sleep
That 50mg at midnight is why you're staring at the ceiling. Even if you don't feel "buzzed," the molecule is still occupying adequate adenosine receptors to prevent the onset of deep REM sleep.

## How the Math Works

To calculate the remaining caffeine in your bloodstream, we strictly use the standard exponential decay formula:

$$ N(t) = N_0 \\times (0.5)^{(t/h)} $$

*   **$N_0$** is your initial dose (e.g., 200mg from a cold brew).
*   **$t$** is the amount of hours that have passed.
*   **$h$** is the half-life constant (we default to 5.7 hours, but genetics shift this).

It's literally the same math physicists use to calculate radioactive decay—just applied to your morning latte!
`,faq:[{question:"Can I flush caffeine out faster?",answer:"Drinking water helps, but mostly you just have to wait for your liver enzymes (CYP1A2) to do their job. Exercise metabolizes it slightly faster."},{question:"Why does coffee make me sleepy?",answer:"If you have ADHD, stimulants can have a paradoxical calming effect. Alternatively, you might be crashing from the sugar in your latte."},{question:"What is the lethal dose?",answer:"About 10 grams (10,000 mg). That's roughly 100 cups of coffee in a few hours. Please don't try this."},{question:"Does taking L-Theanine help?",answer:"L-Theanine (often paired with caffeine in matcha) smooths out the 'jitters' but doesn't actually speed up your body's base metabolism rate. It just takes the edge off."},{question:"Can I build a permanent tolerance?",answer:"You build a tolerance to the euphoric, 'buzz' effects relatively quickly, but tolerance to the sleep-disrupting effects is much lower. That's why you might feel you 'need' a coffee just to feel normal, but still end up with insomnia at night."}],relatedCalculators:["sleep-cycle","coffee-code","stress-ice-cream"]},{id:"car-vs-uber",title:"Car vs. EV vs. Uber",description:"Compare the true cost of owning a Gas Car vs. an EV vs. using Rideshare.",category:"bigkidmath",slug:"car-vs-uber",icon:"🚗",origin:"Most car owners forget about the 'invisible' costs: depreciation, insurance, and maintenance. This tool brings those hidden expenses into the light for a fair fight against ridesharing.",howTo:"Input your estimated monthly car payments, fuel, and insurance. Compare that against your weekly Uber spending to see if you should sell the keys and join the 'passenger economy'.",tips:["A new car loses 20% of its value the moment you drive it off the lot.","Don't forget to include parking and cleaning costs.","Ridesharing eliminates the stress of driving in traffic!"],tags:["Finance","Transport"],content:`
## The True Cost of Ownership

We often look at the sticker price of a car and think that's what we pay. We ignore the **TCO (Total Cost of Ownership)**.

### The Invisible Money Pit
When you buy a car, you are signing up for:
1.  **Depreciation**: The silent killer. Your asset loses value every single day, whether you drive it or not.
2.  **Opportunity Cost**: That $500/month payment could have been $500/month invested in the S&P 500. Over 5 years, that's a massive difference in net worth.
3.  **Friction**: Parking tickets, car washes, oil changes, DMV queues.

### The Case for "Mobility as a Service"
Ridesharing (Uber/Lyft) feels expensive per trip ($25 to the airport!), but when you delete the fixed costs of insurance ($150/mo), payment ($500/mo), and gas ($150/mo), you often have an $800/month budget to spend on rides before you break even.

## How the Math Works

The engine behind this calculator relies on breaking down all expenses into a normalized, flat monthly rate so we can do an "apples to apples" comparison.

For the car, we take the purchase price minus the estimated residual value after 5 years, divide that by 60 months, and add your recurring costs (insurance, fuel, maintenance buffer).
For Uber, we take your average weekly spend and multiply it by 4.33 (the true mathematical average number of weeks in a month, considering 52 weeks / 12 months).

We then simply weigh the Uber monthly run-rate against the Total Cost of Ownership (TCO) of the vehicle. If the result is positive, you are quite literally losing money for the privilege of keeping a car in your driveway.
`,faq:[{question:"Is buying an EV cheaper?",answer:"Long term, yes. Maintenance costs are near zero (no oil changes, fewer moving parts), and electricity is cheaper than gas. But depreciation is still a factor."},{question:"Does this include parking?",answer:"Yes. In cities like NYC or SF, parking alone can cost more than a lease. Uber eliminates this entirely."},{question:"What about the freedom factor?",answer:"Hard to quantify. If you love driving spontaneously to the mountains at 3 AM, a personal car is priceless. If you hate driving, it's a burden."},{question:"What about surge pricing?",answer:"Surge pricing is the absolute wildcard. If your commute routinely throws you into rush hour or heavy rain surges, the Uber math breaks down fast and leans heavily back toward car ownership."},{question:"Should I lease instead of buy?",answer:"Leasing fixes your depreciation cost at a highly predictable monthly rate, but it's fundamentally the most expensive way to operate a vehicle long-term since you walk away with zero equity."}],relatedCalculators:["inflation-impact","time-is-money","fire-number"]},{id:"generational-timeline",title:"Generational Timeline",description:"Explore events and trends across different generations.",category:"bigkidmath",slug:"generational-timeline",icon:"👥",origin:"Based on the Strauss-Howe Generational Theory. It looks at the recurring cycles of social, political, and economic tides that shape each generation's collective personality.",howTo:"Select a generation to see their formative years, major global events, and the cultural trends that defined them. See where you fit in the grand cycle of history.",tips:["Boomers, Gen X, Millennials, and Gen Z—we all have shared 'turning points'.","Check out the 'G.I. Generation' for a look at the heroes of WWII.","Generation Alpha is already starting to make their mark."],tags:["Sociology","History"],content:`
## The Fourth Turning

History doesn't just happen; it flows in cycles. According to the **Strauss-Howe Generational Theory**, Western history moves in 80-year "Saeculums," each composed of four "Turnings" (generations).

### The Four Archetypes
1.  **Prophet (The Boomers)**: Born after a crisis. They focus on values and self-actualization.
2.  **Nomad (Gen X)**: Born during an awakening. They are pragmatic, cynical, and individualistic.
3.  **Hero (Millennials)**: Born during an unraveling. They are community-oriented and institution-builders.
4.  **Artist (Gen Z)**: Born during a crisis. They are sensitive, adaptive, and conformist.

### Where Are We Now?
We are currently in a **Fourth Turning** (Crisis). The institutions built by the last "Hero" generation (the G.I.s) are crumbling, and it is up to the new Heroes (Millennials) and Artists (Gen Z) to build the new world order.

## How the Math Works

The algorithm behind this timeline is based on calculating an 80-to-100 year generational cycle (a *Saeculum*), divided evenly into four roughly 20-to-25 year "Turnings". 

When you select a generation, we identify their birth year boundary and calculate their coming-of-age demographic bracket (typically ages 18-25). We then cross-reference that specific mathematical timeframe against major geopolitical and cultural events in our database.

We don't just calculate your age—we mathematically isolate the exact *mood of the world* when you first stepped into it as an independent adult.
`,faq:[{question:"Is this scientific fact?",answer:"No, it's a sociological theory. Critics say it's too deterministic (like 'Horoscopes for History'), but it maps surprisingly well to US history."},{question:"Who comes after Gen Alpha?",answer:"Likely 'Gen Beta' (2025-2039). If the theory holds, they will be a new 'Prophet' generation born into a post-crisis stability."},{question:"Why does everyone hate Boomers?",answer:"Intergenerational friction is natural. The 'Prophet' archetype is often seen as moralizing and rigid by the pragmatic 'Nomad' and 'Hero' types."},{question:"Are Millennials actually 'Heroes'?",answer:"In this context, 'Hero' is a historical archetype, not a moral judgement. It means they are a generation that comes of age during a massive institutional crisis and are forced by necessity to build new civic structures (much like the original G.I. Generation did in WWII)."},{question:"Why is Gen X the 'Nomad'?",answer:"Nomad generations grow up during spiritual awakenings (like the 60s/70s) but often feel abandoned by societal institutions. They become fiercely independent, pragmatic, and heavily focused on self-reliance—the classic 'latchkey kid' energy."}],relatedCalculators:["life-visualized","inflation-impact","unspent-potential"]},{id:"lightning-life",title:"Lightning-Powered Life",description:"How many lightning strikes would it take to power your life?",category:"bigkidmath",slug:"lightning-life",icon:"⚡",origin:"A single bolt of lightning contains about 1 billion joules of energy. Theoretically, that's enough to power a house for a month—if only we could catch it.",howTo:"Input your daily electricity usage. We'll calculate the number of 'Thunderstruck' moments required to keep your lights on and your phone charged for a year.",tips:["Storing lightning is currently impossible due to the extreme voltage surge.","The Empire State Building is struck about 25 times a year.","1.21 Gigawatts is exactly what Doc Brown needed for his DeLorean."],tags:["Science","Energy"],content:`
## The Raw Power of the Sky

A single bolt of lightning is a simplified breakdown of the atmosphere's dielectric resistance, releasing a colossal **1 Billion Joules** (approx. 278 kWh) of energy in a fraction of a second. To put that in perspective: your phone battery holds about 0.01 kWh.

### Why Can't We Harvest It?
If one strike could power a Tesla Model 3 for 900 miles, why don't we have lightning farms?
1.  **Intermittency**: Lightning is flashy but unreliable. You can't schedule a thunderstorm.
2.  **Voltage Overload**: A bolt carries up to 1 Billion Volts. This instantaneous surge would vaporize standard capacitors and transformers before they could store a single spark.
3.  **Capture Difficulty**: You'd need towers taller than the Empire State Building covering entire states just to capture a fraction of global strikes.

### The Math of Your Life
This calculator takes your daily consumption (average US household: 29 kWh/day) and pits it against the raw fury of Zeus.
*   **The Toaster Standard**: 1 Bolt = 100,000 slices of toast.
*   **The Gamer Standard**: 1 Bolt = 20 years of running a high-end RTX 4090 gaming PC (at full load).

## How the Math Works

The foundation of this calculator is dimensional analysis. We take a baseline estimate of a single lightning bolt's energy (roughly 1 billion joules) and convert that into kilowatt-hours (kWh) for an apples-to-apples comparison, yielding about 278 kWh per strike. 

When you input your daily energy consumption in kWh, we mathematically divide the lightning bolt's total energy capacity by your daily requirement. This produces the exact count of atmospheric strikes needed to power your home, devices, and essentially your entire modern life for a given period.
`,faq:[{question:"Could a DeLorean really time travel with one bolt?",answer:"Doc Brown needed 1.21 Gigawatts. An average bolt peaks at nearly 1 Terawatt (1,000 Gigawatts), so yes—he actually had too much power. The Flux Capacitor handled the regulation."},{question:"What is fulgurite?",answer:"When lightning hits sand, it instantly melts the silica into glass tubes called fulgurite. It's essentially 'fossilized lightning'."},{question:"Is it safe to shower during a storm?",answer:"Surprisingly, no. Metal pipes and water are excellent conductors. If your house gets hit, the charge can travel through the plumbing."},{question:"Why can't we just build taller lightning rods to catch it?",answer:"Height isn't the bottleneck, storage is. Modern batteries charge over hours; they would simply explode if force-fed a billion joules in a single millisecond."},{question:"What happens to the energy if it doesn't hit a rod?",answer:"Most of it dissipates as brutal heat (which creates thunder by rapidly expanding the air) and light. That's why the air around a strike reaches 50,000 degrees Fahrenheit—five times hotter than the surface of the sun."}],relatedCalculators:["power-footprint","cost-of-war","coffee-code"]},{id:"power-footprint",title:"The Footprint of Power",description:"Compare land use requirements for Solar vs. Wind vs. Nuclear.",category:"bigkidmath",slug:"power-footprint",icon:"🦶",origin:"Energy density is the silent hero of civilization. This tool compares how much physical space different energy sources require to generate the same amount of power.",howTo:"Select an energy source and a target output. We'll visualize the 'footprint' in terms of football fields or city blocks, highlighting the trade-offs of the green transition.",tips:["Nuclear energy has the smallest land footprint per megawatt.","Solar farms require vast open spaces but are getting more efficient every year.","Wind farms can 'double up' on land by allowing farming beneath the turbines."],tags:["Energy","Environment"],content:`
## The Hidden Cost of "Clean" Energy

When we talk about green energy, we usually talk about carbon. But we rarely talk about **Land Density**. To power a city like New York, you need raw space—and not all energy sources use space equally.

### The Density Hierarchy
This calculator visualizes the "Power Density" (Watts per square meter) of various sources:
1.  **Nuclear**: The champion of density. One plant (approx 1 sq mile) produces the same power as 360 square miles of wind turbines.
2.  **Natural Gas/Coal**: High density, but high pollution.
3.  **Solar**: Moderate density. Requires ~5 acres per Megawatt.
4.  **Wind**: Low density. Requires huge spacing between turbines to prevent wake turbulence, though farming can happen underneath.

### The "NIMBY" Problem
Everyone wants renewable energy, but "Not In My Backyard." To go 100% solar, the US would need to pave an area roughly the size of West Virginia with panels. Understanding this footprint is key to realistic urban planning.

## How the Math Works

The core mathematical metric we use here is "Power Density," measured in Watts per square meter ($W/m^2$). 

We take your target power requirement (for example, generating enough electricity for a city block) and divide it by the established geographical power densities of each energy source. For context, nuclear plants average an incredibly dense 1,000 $W/m^2$, while commercial solar farms average only about 10 $W/m^2$. By applying these density constants to your target output, we mathematically derive the vast logistical differences in physical land footprint required for each technology.
`,faq:[{question:"Why do wind turbines need so much space?",answer:"Turbines create 'wind shadows' (turbulence) behind them. If you put them too close together, their efficiency drops by 50%. They typically need to be spaced 7 rotor diameters apart."},{question:"Can't we just put solar panels on roofs?",answer:"Yes, and we should! But rooftop solar alone can't power heavy manufacturing industries or massive skyscrapers. We inevitably still need utility-scale solar farms."},{question:"Is nuclear really that small?",answer:"Yes. The Diablo Canyon nuclear plant produces 18,000 GWh/year on just 900 acres. To match that raw output with solar, you'd need about 90,000 acres."},{question:"Can you just put solar panels in the desert?",answer:"You can, but transmitting that electricity thousands of miles to populated cities results in severe 'line-loss' over the grid. You generally have to generate the power relatively close to where it's being used."},{question:"What happens to old solar panels?",answer:"Currently, a vast majority end up in landfills. Recycling them is exceptionally difficult and expensive because the glass, silicon, and heavy metals are tightly bonded and sealed together."}],relatedCalculators:["lightning-life","inflation-impact","cost-of-war"]},{id:"cost-of-war",title:"The Cost of War",description:"Contrast military munitions with societal opportunity costs.",category:"bigkidmath",slug:"cost-of-war",icon:"⚔️",origin:"Inspired by the 'Opportunity Cost' economic principle. Every dollar spent on munitions is a dollar not spent on hospitals, schools, or social infrastructure.",howTo:"Select a piece of military hardware to see its procurement cost. We'll automatically convert that price tag into societal equivalents like teacher salaries, surgeons, or school buildings.",tips:["A single Stinger missile costs as much as a surgeon's annual salary.","F-35 jets are the most expensive weapons program in history.","The Global military spend is now over $2.4 Trillion annually."],tags:["Society","Economics","Educational","Non-Sensational"],content:`
## Opportunity Cost on a Global Scale

President Dwight D. Eisenhower said it best in 1953:
*"Every gun that is made, every warship launched, every rocket fired signifies, in the final sense, a theft from those who hunger and are not fed, those who are cold and are not clothed."*

### The Price of Steel
Modern warfare is terrifyingly expensive.
*   **One Javelin Missile**: $178,000. That's a full 4-year college tuition plus a down payment on a house.
*   **One F-35 Helmet**: $400,000. That's a Lamborghini Aventador, worn on a pilot's head.
*   **One Aircraft Carrier**: $13 Billion. That could end homelessness in multiple major cities.

### Methodology
This tool visualizes the "Iron Law of Wages": resources are finite. When a nation chooses to prioritize high-tech munitions, it inherently chooses *not* to fund other sectors. This isn't a political statement; it's a grand-scale balance sheet.

## How the Math Works

This calculator executes a direct, sobering economic parity equation based on publicly available DoD (Department of Defense) budgeting and procurement data. 

We take the baseline cost of a specific piece of military hardware (e.g., $13 Billion for a Ford-class aircraft carrier) and mathematically divide it by the national average cost of specific societal assets (e.g., the median annual salary of a teacher, or the capital required to build a public high school). This generates a direct, 1-to-1 conversion ratio that strips away the abstract nature of billion-dollar budgets and grounds them in tangible, everyday economics.
`,faq:[{question:"Don't weapons create jobs?",answer:"Yes, the 'Military-Industrial Complex' employs millions. However, economists argue that infrastructure or education spending has a significantly higher 'fiscal multiplier' (ROI for society)."},{question:"Why are they so expensive?",answer:"Aerospace tolerances. A missile has to fly at Mach 4 and survive 50G turns. You can't build that with commercial off-the-shelf parts from Home Depot."},{question:"Are these prices accurate?",answer:"They are estimates based on public Department of Defense contracts and GAO reports. Actual final costs often run significantly higher due to R&D overruns."},{question:"Does the money just disappear?",answer:"Not entirely. The money goes to defense contractors and their employees. The real problem is 'opportunity cost'—that high-end engineering talent could have been used to cure diseases or build clean energy instead of designing better explosives."},{question:"Why does a pilot helmet cost $400,000?",answer:"The F-35 helmet is essentially an augmented reality supercomputer custom-fitted to the pilot's skull. It connects to 6 exterior cameras, letting them quite literally see through the floor of the plane in real-time."}],relatedCalculators:["inflation-impact","billionaire-buyout","exterminatus-cost"]},{id:"billionaire-buyout",title:"Billionaire Buy-Out",description:"Experience the staggering scale of elite wealth.",category:"bigkidmath",slug:"billionaire-buyout",icon:"💰",origin:"Wealth at the billionaire level is difficult for the human brain to comprehend. This simulator lets you 'spend' that fortune to understand the true scale of concentrated liquidity.",howTo:"Select a billionaire and start 'buying' items. Watch how the real-time interest often outpaces your ability to spend the capital.",tips:["Interest on $200B at 7% is over $440,000 every single hour.","You could buy a Superyacht every few days just using the interest.","Spending $1M a day would take over 500 years to empty the vault."],tags:["Wealth","Economics"],content:`
## Can You Spend It Fast Enough?

The human brain is bad at big numbers. We treat "Million" and "Billion" as similar concepts—just "a lot of money."
*   **1 Million Seconds**: ~11 Days.
*   **1 Billion Seconds**: ~31 Years.

### The Interest Trap
The reason the super-rich get richer isn't just high income; it's **compound interest**.
If you have $100 Billion invested conservatively at 5% annual return:
*   You earn **$5 Billion** a year.
*   That's **$13.6 Million** every single day.
*   That's **$570,000** every hour.
*   That's **$9,500** every minute.

You essentially have to buy a used Honda Civic *every second* just to keep your net worth from growing.

## How the Math Works

The simulator operates on a simple compound interest algorithm running in real-time. We take a selected billionaire's estimated net worth (e.g., $100 Billion) and apply a highly conservative 5% annual market return rate. 

By mathematically calculating 'Principal * Rate / 31,536,000' (the number of seconds in a year), we derive the exact dollar amount their portfolio generates every single second. The tool then subtracts the cost of your "purchases" from the total pool while simultaneously injecting that accrued interest back in via a loop, perfectly demonstrating how physically impossible it is to drain a mega-fortune when the baseline interest heavily outpaces aggressive spending.
`,faq:[{question:"Is this liquid cash?",answer:"No. Most billionaire wealth is tied up in stock (Amazon, Tesla, etc.). If they tried to sell it all at once, the stock price would crash. But they can borrow heavily against it to live like kings."},{question:"Could this actually solve world hunger?",answer:"The UN estimated $6 billion could stave off famine for 42 million people. So yes, a billionaire could fund that effortlessly with just one year's passive interest."},{question:"Why don't they just give it away?",answer:"Many do (via the Giving Pledge), but money at this monumental scale is a proxy for global power and influence, which is psychologically much harder to let go of than luxury."},{question:"How do billionaires pay for things without cash?",answer:"They take out massive loans using their stock as collateral. These 'Securities-Backed Lines of Credit' have tiny interest rates, and loan money isn't taxed as income, allowing them to fund massive superyachts while legally avoiding income tax."},{question:"What is the wealth inequality gap?",answer:"Right now, the top 1% holds roughly 15 times more wealth than the entire bottom 50% of the population combined. It's a scale of divergence never before seen in modern history."}],relatedCalculators:["fire-number","unspent-potential","cost-of-war"]},{id:"caesar-cipher",title:"Caesar Cipher",description:"Encrypt messages with the ancient Roman shift cipher.",category:"cipherlab",slug:"caesar-cipher",icon:"🏛️",origin:"Named after Julius Caesar, who used it to protect military secrets. It's one of the earliest and simplest forms of encryption, involving a simple 'shift' of the alphabet.",howTo:"Enter your message and select a shift value (the 'key'). Your text will instantly transform into a scrambled code that only someone with the key can decipher.",tips:["A shift of 3 was Caesar's personal favorite.","Try shifting by 13 (ROT13) for a classic internet-era cipher.","Use negative shifts to go backwards!"],tags:["Cryptography","History"],content:`
## The First Military Encryption

Julius Caesar didn't trust his messengers. When sending orders to his generals, he shifted every letter by 3.
*   A -> D
*   B -> E
*   C -> F
If the messenger was captured, the enemy would just see gibberish like "**VHGXFH DJDLQVW**".

### Why It's Weak
Caesar Cipher is a "Monoalphabetic Substitution." That means 'E' always becomes 'H'.
Because 'E' is the most common letter in English, a codebreaker can simply count the letter frequencies (Frequency Analysis) to crack the code in minutes.

### Steps to Crack It
1.  Find the most common letter in the secret message.
2.  Assume it is 'E'.
3.  Shift it back to 'E' and see if the rest of the message makes sense.

## How the Math Works

The cipher fundamentally relies on a basic modular arithmetic operation over the alphabet. 
We assign a numerical, 0-indexed value to each letter ($A=0$, $B=1$, ... $Z=25$). To encrypt the message, we take the original letter's index ($x$), add your requested shift key ($K$), and apply modulo 26 to cleanly handle the wrap-around back to 'A'.

$$ E(x) = (x + K) \\pmod{26} $$

It's essentially an ancient ring buffer data structure. Despite its mathematical simplicity today, in an era where most enemy forces were entirely illiterate, a basic $+3$ shift was impenetrable military-grade security.
`,faq:[{question:"Did Brutus crack it?",answer:"No. The Romans were surprisingly bad at cryptanalysis. The cipher remained highly secure for centuries simply because most enemies couldn't read the alphabet in the first place."},{question:"What is ROT13?",answer:"ROT13 is a Caesar cipher locked to a shift of 13. Since the alphabet has 26 letters, applying ROT13 twice returns the original text. It became the early internet's favorite 'Spoiler Alert' masking tool."},{question:"Is this secure today?",answer:"Absolutely not. A modern computer processor can brute-force all 25 possible alphabetical shifts in a literal nanosecond."},{question:"Why does ROT13 use the number 13 specifically?",answer:"Because the English alphabet has 26 letters, shifting by 13 is perfectly symmetrical. If you apply ROT13 twice, it acts as its own reverse translation key, effortlessly returning you to the original text."},{question:"Did Caesar invent encryption?",answer:"He didn't invent encryption as a concept (the Spartans famously used the 'Scytale' cipher hundreds of years prior), but his cipher is the first highly documented military field use of character substitution."}],relatedCalculators:["pigpen-cipher","enigma-machine","password-anger"]},{id:"nato-phonetic",title:"NATO Phonetic Alphabet",description:"Convert text to Alpha, Bravo, Charlie used by pilots.",category:"cipherlab",slug:"nato-phonetic",icon:"✈️",origin:"Developed in the 1950s by NATO and ICAO to ensure clear communication over crackly radio lines. Each word was carefully chosen to be unmistakable in any accent.",howTo:"Type any word or phrase to see its phonetic equivalent. Hit the 'Transmit' button to hear it spoken with pilot-grade clarity.",tips:["Great for spelling your name over the phone.","Notice how '9' is pronounced 'Niner' to avoid confusion with the German 'Nein'.","Used by everyone from astronauts to emergency services."],tags:["Communication","Language"],content:`
## Alpha, Bravo, Charlie

Have you ever tried to say "M as in Mancy" over a bad phone line?
The **NATO Phonetic Alphabet** (technically the ICAO Radiotelephony Alphabet) solves this. It assigns a code word to every letter acrophonically (the first letter of the word is the letter itself).

### The "Fatal" Error
In aviation, hearing "B" instead of "D" can be the difference between descending to 4,000 feet or 2,000 feet—which might put you inside a mountain.
The words were scientifically chosen to sound distinct in almost any accent or static condition.
*   **Tree** vs **Three**: Pronounced "Tree" in radio-speak to serve non-native English speakers.
*   **Fower** vs **Four**: Emphasized to be distinct from "For".

### Beyond Pilots
Police, Military, Customer Support, and IT professionals use this daily. Memorizing it is an absolute superpower for clarity.

## How the Math Works

Unlike complex cryptographic formulas, this tool relies on a highly optimized, 1-to-1 dictionary mapping script. 

Whenever you type a character, a listener function intercepts the keystroke, normalizes it to uppercase to prevent case-matching errors, and queries our phonetic dictionary array (e.g., mapping *"A"* to the string value *"Alpha"*). The resulting string arrays are visually rendered to your screen, and when you utilize the broadcast tool, that text data is passed into the browser's native *SpeechSynthesis* Web Speech API to synthetically broadcast the radio readout.
`,faq:[{question:"Why 'Roger'?",answer:"In the old phonetic alphabet (pre-1956), 'R' was 'Roger'. It stood for 'Received'. Even though 'R' is now 'Romeo', 'Roger' stuck as the universal 'I understand'."},{question:"What is 'Wilco'?",answer:"Short for 'Will Comply'. 'Roger' means I heard you; 'Wilco' means I will do what you commanded. You never say 'Roger Wilco' because it's completely redundant radio chatter."},{question:"Is there a spelling for numbers?",answer:"Yes, and they are pronounced heavily! Zero, Wun, Too, Tree, Fower, Fife, Six, Seven, Ait, Niner."},{question:"Why does 'Alpha' look like 'Alfa' in the official manual?",answer:"NATO intentionally spells it 'Alfa' and 'Juliett' in their official documents so native French and Spanish speakers don't accidentally mispronounce them based on their own complex language rules."},{question:"Is the NATO alphabet used everywhere globally?",answer:"Yes! It's the absolute standard for the International Civil Aviation Organization (ICAO), meaning a pilot from Japan and an air-traffic controller in Germany will both use the exact same phonetic words to land a plane safely."}],relatedCalculators:["morse-code","shavian-translator","binary-translator"]},{id:"pigpen-cipher",title:"Pigpen Cipher",description:"Visual geometric cipher used by Freemasons.",category:"cipherlab",slug:"pigpen-cipher",icon:"🐷",origin:"A geometric substitution cipher that swaps letters for fragments of a grid. Historically used by the Freemasons in the 18th century to keep their records private.",howTo:"Type your message to see it drawn in geometric symbols. Each shape represents a specific letter's position in a tic-tac-toe or X-grid.",tips:["The dots indicate the second letter in the same grid segment.","Classic for 'treasure hunt' notes.","Looks like an alien language to the untrained eye!"],tags:["Cryptography","History"],content:`
## The Freemason's Cipher

In the 18th Century, the Freemasons needed a way to keep their records passing between lodges secret. They created the **Pigpen Cipher** (or Rosicrucian Cipher).

### How It Works
It replaces letters with symbols based on their position in a grid.
*   **Grid 1 (Tic-Tac-Toe)**: Holds A-I.
*   **Grid 2 (Dotted Tic-Tac-Toe)**: Holds J-R.
*   **X-Shape 1**: Holds S-V.
*   **X-Shape 2 (Dotted)**: Holds W-Z.

It gets its name because the grids look like "pens" for pigs.

### Why It's Fun
It is surprisingly easy to memorize. Once you know the grid shape, you can read and write it as fluently as English. It remains the gold standard for Escape Rooms and scavenger hunts.
`,faq:[{question:"Is it secure?",answer:"No. Like Caesar Cipher, it is a simple substitution. The symbols change, but the patterns (double letters, common words) remain."},{question:"Did pirates use it?",answer:"Legend says the pirate Olivier Levasseur ('La Buse') threw a necklace with a Pigpen cryptogram into the crowd at his execution, shouting 'Find my treasure, he who receives it!'"},{question:"Can I customize it?",answer:"Yes! You can scramble the order of letters in the grid to create your own key that only your friends know."}],relatedCalculators:["caesar-cipher","steganography-brush","treasure-map"]},{id:"morse-code",title:"Morse Code Broadcast",description:"Translate text to audible Morse Code dits and dahs.",category:"cipherlab",slug:"morse-code",icon:"📡",origin:"Invented by Samuel Morse and Alfred Vail in the 1830s. It revolutionized long-distance communication by sending electrical pulses through telegraph wires.",howTo:"Type your message to see the dots (dits) and dashes (dahs). Use the broadcast button to hear the rhythmic pulses of the 19th-century internet.",tips:["SOS is three dots, three dashes, three dots (... --- ...).","Short pulses are dits, long ones are dahs.","Experienced operators can 'read' Morse by sound faster than most people type."],tags:["Communication","History"],content:`
## The Original Digital Code

Long before binary (0s and 1s), there was Morse (Dits and Dahs).
Samuel Morse revolutionized the world by proving you could send information instantly over a single wire.

### The Rhythm of Language
Morse isn't random. The code lengths are based on letter frequency in English (circa 1830).
*   **E**: The most common letter. It is just one dot (.).
*   **T**: The second most common. It is one dash (-).
*   **Q**: Rare. It is (--.-).
This compression made messages faster to send—a concept we still use in ZIP files today!

### The "SOS" Myth
SOS (... --- ...) doesn't stand for "Save Our Souls" or "Save Our Ship."
It was chosen because the pattern is unmistakable and easy to loop. It is a distinctive rhythm that cuts through static.
`,faq:[{question:"Do people still use it?",answer:"It was officially retired for maritime distress in 1999 (replaced by GMDSS satellites), but Amateur Radio (Ham) operators still love it."},{question:"Can I blink it?",answer:"Yes! Torture victims (like Jeremiah Denton) famously used eye-blink Morse to send messages in propaganda videos."},{question:"How fast can you go?",answer:"World records exceed 75 words per minute, which is faster than most people type on a smartphone."}],relatedCalculators:["nato-phonetic","binary-translator","shavian-translator"]},{id:"password-anger",title:"Password Anger Scale",description:"How angry would a hacker get trying to crack your password?",category:"cipherlab",slug:"password-anger",icon:"😡",origin:"In the world of cybersecurity, time is money. This scale estimates the computational effort (and frustration) required to brute-force your digital fortress.",howTo:"Enter a password to see the 'Anger Meter'. The longer and more complex your password, the higher the blood pressure of our simulated hacker.",tips:["Length trumps complexity—12 simple characters are often better than 8 complex ones.","Avoid '123456' or 'Password' unless you want a very happy hacker.","Use a unique password for every site."],tags:["Security","Tech"],content:`
## Entropy vs. Aggression

This calculator visualizes **Entropy** (mathematical randomness) as "Hacker Anger."
The goal of a password isn't to be "unbreakable"—nothing is unbreakable given infinite time.
The goal is to make the time required to break it longer than the age of the universe.

### Brute Force Physics
A modern GPU rig can test billions of passwords per second.
*   **"p@ssword"** (8 chars): Cracked in < 1 second.
*   **"CorrectHorseBatteryStaple"**: (4 random words): Cracked in Trillions of years.

### The XKCD Method
Tricking humans is easy; tricking math is hard. Using 4 random words is easier to remember than "Tr0ub4dor&3" and technically much stronger because the search space (dictionary words) is massive compared to short strings.
`,faq:[{question:"Is my password sent to your server?",answer:"NO. The calculation happens entirely in your browser using JavaScript. We never see, store, or transmit what you type."},{question:"Why not just use a password manager?",answer:"You should! bitwarden or 1Password generate 20-character random garbage that no human could guess. Use a strong Master Password (the 4-word trick!) for the vault."},{question:"Does '123456' really matter?",answer:"Yes. It is the #1 password globally. Hackers try a 'Top 10,000' list before they even start brute-forcing. If you are on that list, you are gone in 0.001 seconds."}],relatedCalculators:["steganography-brush","conspiracy-theory","binary-translator"]},{id:"ogham-translator",title:"Ogham Translator",description:"Convert text to Ancient Irish tree alphabet.",category:"cipherlab",slug:"ogham-translator",icon:"🗿",origin:"Known as the 'alphabet of the trees,' Ogham was used in Early Medieval Ireland. It consists of notches carved along a vertical line, often on stone monuments.",howTo:"Type modern text and see it converted into ancient Irish runic notches. The strokes are read from bottom to top on stones or left to right on paper.",tips:["Each letter is named after a tree (e.g., 'Beith' for Birch).","Ancient Ogham inscriptions are still visible across Ireland today.","Perfect for creating mystical-looking designs."],tags:["History","Language"],content:`
## The Alphabet of Trees

Ogham (pronounced 'Oh-am') is the transformation of the Latin alphabet into a series of notches and strokes designed to be carved into wood or stone edges.

### A Vertical Code
Unlike modern script which flows left-to-right, Ogham is traditionally read **Bottom-to-Top** up the edge of a standing stone.
*   **Right Side Strokes**: B, L, F, S, N
*   **Left Side Strokes**: H, D, T, C, Q
*   **Across Strokes**: M, G, Ng, Z, R
*   **Notches**: Vowels (A, O, U, E, I)

### Druidic Origins?
While often associated with Druids, the surviving stones date from the 4th-6th century AD. However, it was likely used on wood for centuries prior. The "Tree Alphabet" theory suggests each letter is named after a sacred tree (B = Beith = Birch, C = Coll = Hazel).
`,faq:[{question:"Can I write a whole book in this?",answer:"You could, but it would be very long. Ogham takes up a lot of vertical space. It was mostly used for names, land boundaries, and short memorials."},{question:"Is it magical?",answer:"It appears in many fantasy settings as 'Druid runes,' but historically it was a practical script. Though, names have power, so be careful what you carve."},{question:"How do I read the output?",answer:"Imagine a vertical line. The markings branch off it like leaves on a stem. Our tool renders it horizontally for readability, but rotate it 90° for authenticity."}],relatedCalculators:["shavian-translator","pigpen-cipher","nato-phonetic"]},{id:"steganography-brush",title:"Steganography Brush",description:"Hide secret intent within digital noise.",category:"cipherlab",slug:"steganography-brush",icon:"🎨",origin:"Cryptography isn't always about unreadable text; sometimes it's about hiding the presence of a message entirely. This uses 'Entropy Masking' to conceal data.",howTo:"Encode your message into the Canvas. To reveal it, use the 'Quantum Brush' (cursor) on the decode tab to scan for hidden light-value shifts.",tips:["Entropy levels of 99% ensure non-detection by casual scans.","Quantum focal points reconstruct light data into readable intent.","Shattering intent across coordinate vectors is a classic spy tactic."],tags:["Cryptography","Tech"],content:`
## Hiding in Plain Sight

Cryptography scrambles a message. Steganography **hides the existence** of the message.
If you send an encrypted file, the NSA knows you are hiding something.
If you send a picture of a cat, nobody looks twice. But that cat picture could contain the plans to the Death Star in the least significant bits of the pixel color data.

### Entropy Masking
This tool simulates "visual steganography" by altering the pixel noise (entropy) of the canvas.
To the naked eye, it looks like digital static.
To the "Quantum Brush" (decoder), the subtle shifts in light value reveal the hidden intent.

### Historical Context
*   **Ancient Greece**: Writing a message on the wood of a wax tablet, then covering it with wax.
*   **Microdots**: WWII spies shrinking a page of text to the size of a period (.) and gluing it to a letter.
*   **Modern Day**: Embedding terrorist communication in eBay product image jpgs.
`,faq:[{question:"Is this real encryption?",answer:"No, this is 'Best Effort' concealment (Security through Obscurity). A true forensic analysis of the pixel data would reveal statistical anomalies."},{question:"Can I save the image?",answer:"Currently this tool works in browser memory (Canvas), but real steganography tools alter the actual file bytes."},{question:"What is the 'Quantum Brush'?",answer:"It's a fancy name for a high-contrast filter that amplifies the differences between the 'background' noise and the 'signal' noise."}],relatedCalculators:["password-anger","pigpen-cipher","conspiracy-theory"]},{id:"shavian-translator",title:"Shavian Alphabet",description:"George Bernard Shaw's phonetic alphabet for English.",category:"cipherlab",slug:"shavian-translator",icon:"🇬🇧",origin:"Named after playwright George Bernard Shaw, who funded a competition to create a more efficient, phonetic alphabet for the English language to save time and paper.",howTo:"Type normal English text to see it rendered in Shaw's sleek, phonetic glyphs. Each character represents a specific sound, eliminating the need for silent letters.",tips:["There are no capital letters in Shavian.","It was used to publish a special edition of Shaw's play 'Androcles and the Lion'.","See if you can spot the 'tall' and 'deep' characters representing different sounds."],tags:["Language","History"],content:`
## Why English Spelling is Broken

George Bernard Shaw (author of *Pygmalion*) hated English spelling. He famously pointed out that "fish" could be spelled **"ghoti"** (gh as in *tough*, o as in *women*, ti as in *nation*). To fix this, he funded the creation of the Shavian Alphabet.

### How Shavian Works
Unlike the Latin alphabet, Shavian is **phonetic**. Each character represents exactly one sound.
*   **Tall Letters**: (7, 𐑐, 𐑑) represent voiceless consonants (p, t, k).
*   **Deep Letters**: (𐑚, 𐑛, 𐑜) represent voiced consonants (b, d, g).
*   **Short Letters**: (𐑨, 𐑩, 𐑪) represent vowels.

### Why Learn It?
1.  **Speed**: It was designed to be written faster than standard English.
2.  **Secret Code**: It looks like alien script but is actually just efficient English.
3.  **Efficiency**: "Though," "Thought," "Through," and "Tough" are all completely different symbols, eliminating confusion.
`,faq:[{question:"Why didn't this catch on?",answer:"Inertia. Changing the alphabet of a global language requires rewriting every book and signpost. It remains a niche hobby for linguists."},{question:"Can I type this on my phone?",answer:"Yes! There are Unicode blocks for Shavian, and you can download custom keyboards (like 'Gboard' extensions) to write in it natively."},{question:"Is this Elvish?",answer:"No, but it looks like it! Tolkien likely knew of it, but Shavian is strictly utilitarian, whereas Elvish (Tengwar) is artistic."}],relatedCalculators:["nato-phonetic","ogham-translator","morse-code"]},{id:"zombie-survival",title:"Zombie Apocalypse Survival",description:"Calculate your odds of surviving a zombie outbreak.",category:"geekgalaxy",slug:"zombie-survival",icon:"🧟",origin:"Based on the 'Solanum' outbreak model. We've analyzed thousands of hours of cinema and survival literature to determine exactly what determines if you're the hero or the 'first to go'.",howTo:"Be honest about your fitness levels, survival gear, and tactical knowledge. Our algorithm will calculate your probability of surviving the first 24 hours of a global outbreak.",tips:["Cardio is rule #1.","Don't be a hero in the first 10 minutes.","Stock up on canned goods, not just ammo."],tags:["Fiction","Educational","Non-Sensational"],content:`
## The Solanum Protocol

Surviving a Class-4 Outbreak isn't about aim; it's about decision-making.
Based on the seminal works of Max Brooks (*The Zombie Survival Guide*, *World War Z*), we know that the greatest threat isn't the undead—it's other humans, panic, and dehydration.

### The Phases of Collapse
1.  **Phase 1: Localized Outbreak (Day 0-3)**: Media blackouts. Rumors of "African Rabies." The best time to leave the city.
2.  **Phase 2: Use of Force (Day 4-10)**: The Great Panic. Gridlock. Military lines fail.
3.  **Phase 3: Total Collapse (Day 10+)**: Power grid fails. Water stops running. The 'New Normal'.

### Your "Survival Score"
This tool doesn't just check if you have a gun. It checks if you have a **Plan**.
*   **Water Purification**: More important than bullets.
*   **Cardio**: Can you run 5 miles with a 30lb pack?
*   **Location**: Are you in a high-density urban zone? (If yes, RIP).
`,faq:[{question:"Slow zombies or fast zombies?",answer:"We model for the classic 'Romero/Brooks' slow zombie. Fast zombies (28 Days Later) have a 99% mortality rate, so a calculator for that is just a 'You Died' screen."},{question:"Is a Katana good?",answer:"No. Blades get stuck in bone. A crowbar is better—it's a weapon and a tool, and it never runs out of ammo."},{question:"Where should I go?",answer:"Cold climates. Zombies freeze solid. Head North."}],relatedCalculators:["space-marine-survival","flood-infection","spaceship-fuel"]},{id:"space-travel",title:"Space Travel Time",description:"Calculate travel time to planets and stars.",category:"geekgalaxy",slug:"space-travel",icon:"🚀",origin:"The universe is vast, and our current tech is slow. This tool uses real-world orbital mechanics and relativistic math to show you just how long it takes to reach our cosmic neighbors.",howTo:"Select your destination and your propulsion method (from chemical rockets to theoretical warp drives). We'll calculate the travel time for sowohl relative to Earth and the crew.",tips:["Time dilation becomes significant as you approach light speed.","The nearest star, Proxima Centauri, is 4.2 light-years away.","Pack a very long book for chemical rocket trips."],tags:["Space","Physics"],content:`
## The Tyranny of Distance

Space is big. Really big. You just won't believe how vastly, hugely, mind-bogglingly big it is.
To get to our nearest neighbor, Proxima Centauri (4.2 light years), takes wildly different times based on your tech.

### The Vehicle Tiers
1.  **Chemical Rocket (Apollo)**: Max speed ~25,000 mph. Time to Alpha Centauri: **70,000 Years**.
2.  **Nuclear Pulse (Orion)**: Detonating nukes behind the ship. Max speed ~5% light speed. Time: **85 Years**.
3.  **Fusion Ramjet**: Scooping hydrogen from space. Max speed ~50% light speed. Time: **9 Years**.
4.  **Warp Drive**: Breaking physics. Time: **Minutes**.

### Time Dilation
As you approach the speed of light ($c$), time slows down for you relative to Earth. At 99.9% $c$, a 4-year trip for you might be 100 years for your friends back home. This tool calculates both the "Ship Time" and "Earth Time."
`,faq:[{question:"Is Warp Drive possible?",answer:"Theoretically, yes (Alcubierre Drive), but it requires 'negative mass' which might not exist in our universe."},{question:"Why not just freeze people?",answer:"Cyrosleep prevents aging and boredom, but the radiation shielding required for a 100-year trip is massive."},{question:"What is 1 AU?",answer:"The distance from Earth to the Sun (93 million miles). It's the standard ruler for solar system travel."}],relatedCalculators:["spaceship-fuel","warp-speed","alien-communication"]},{id:"spaceship-fuel",title:"Spaceship Fuel Planner",description:"Plan your interstellar fuel loadout.",category:"geekgalaxy",slug:"spaceship-fuel",icon:"⛽",origin:"Tsiolkovsky's Rocket Equation is a cruel mistress. The more fuel you carry, the more fuel you need just to move that fuel. This planner helps you find the 'sweet spot' for your mission.",howTo:"Input your ship's dry mass and your target Delta-V (change in velocity). We'll tell you exactly how much fuel you need to reach your destination without becoming a permanent satellite.",tips:["Staging your rocket is the most efficient way to gain velocity.","Vacuum engines have much higher efficiency than sea-level ones.","Always leave 5% extra for maneuvers."],tags:["Space","Physics"],content:`
## The Tyranny of the Rocket Equation

In spaceflight, there is no friction, but there is inertia. To move a spaceship, you need to throw mass out the back. That mass is fuel.

But here is the catch: **fuel is heavy**.

If you want to go faster, you need more fuel. But adding more fuel makes the ship heavier, which means you need *even more fuel* just to push the extra fuel you just added. This vicious cycle is known as the **Tyranny of the Rocket Equation**, formulated by Konstantin Tsiolkovsky in 1903.

## How the Math Works

The calculator implements the ideal Tsiolkovsky rocket equation:
$$ \\Delta v = v_e \\ln \\left( \\frac{m_0}{m_f} \\right) $$

To find the required fuel mass, the formula is algebraically inverted. We take your target $ \\Delta v $ (Delta-V) and your engine's exhaust velocity (derived from Specific Impulse or $I_{sp}$). We calculate the mass ratio using an exponential function $ e^{\\Delta v / v_e} $. By subtracting the wet mass from your inputted dry mass, the script outputs the exact metric tonnage of propellant required to achieve the maneuver.
`,faq:[{question:"What is Delta-V?",answer:"Delta-V literally translates to 'change in velocity'. In space, distances don't matter as much as energy. You budget your trips based on how much speed you need to change (to enter orbit, leave orbit, or land)."},{question:"Why do rockets drop stages?",answer:"Because hauling empty fuel tanks into space is a massive waste of energy. 'Staging' lets you throw away dead weight, drastically improving the mass ratio for the remaining journey."},{question:"What is Specific Impulse (Isp)?",answer:"It's a measure of fuel efficiency for rocket engines. Higher Isp means you get more thrust per kilogram of fuel, similar to MPG in a car."},{question:"Is this how Kerbal Space Program works?",answer:"Yes! KSP relies entirely on this exact mathematically simulated equation to dictate whether your rocket makes it to the Mun or crashes back into the ocean."},{question:"Why can't we just build one giant rocket to reach lightspeed?",answer:"Because of the exponential nature of the equation. Getting to lightspeed would require a fuel tank larger than the observable universe just to push the mass of the fuel itself."}],relatedCalculators:["alien-communication","time-paradox","cost-of-war"]},{id:"lightsaber-battery",title:"Lightsaber Battery Life",description:"Don't run out of charge mid-duel.",category:"geekgalaxy",slug:"lightsaber-battery",icon:"⚔️",origin:"A Jedi's weapon is their life, but even Diatium power cells have limits. Plasma containment and blade length draw significant power, especially during heavy combat or 'door-melting' scenarios.",howTo:"Adjust your blade color (certain crystals draw more power!) and estimated combat intensity. We'll show you how many minutes of active use you have left before you're holding a fancy flashlight.",tips:["Blue and green are the most efficient colors.","Holding a blade in 'deflection mode' drains battery 3x faster.","Keep a spare power cell in your utility belt."],tags:["Star Wars","Sci-Fi","Lore"],content:`
## The Elegance of Diatium

A lightsaber isn't a laser; it's a closed loop of contained plasma held in place by a magnetic field.
The key to its battery life is **Efficiency**. When the blade is idle, the plasma loops back into the handle and recharges the cell. It consumes almost zero power.
Power is only lost when the containment field is broken—i.e., when you hit something (an arm, a door, a Sith Lord).

### The Colors
*   **Blue/Green (Guardian/Consular)**: Standard efficiency. Balanced for combat.
*   **Red (Synth-Crystal)**: Unstable. These blades crackle and arc, drawing 15-20% more power from the cell.
*   **Purple (Mace Windu)**: High-gain output. Cuts faster but drains quicker.
*   **White (Ahsoka)**: Purified crystals. Extremely stable.

### "Qui-Gon's Door"
In *The Phantom Menace*, Qui-Gon Jinn melts a blast door. This is the single highest power-drain event seen in canon. A standard Diatium cell would deplete in minutes under that load.
`,faq:[{question:"Do they run out of ammo?",answer:"No, but they run out of charge. Obi-Wan's saber actually died during a battle in the Legends novels."},{question:"Why do Sith use red?",answer:"They 'bleed' the crystal, pouring their hate into it. The crystal resists, creating the unstable, crackling red blade."},{question:"Is the Darksaber different?",answer:"Yes. It's an ancient flat-blade design that responds to the user's emotional state, often feeling 'heavier' if the wielder is conflicted."}],relatedCalculators:["force-sensitivity","beskar-armor","warp-speed"]},{id:"ai-doomsday",title:"AI Doomsday Countdown",description:"Probability of the singularity.",category:"geekgalaxy",slug:"ai-doomsday",icon:"🤖",origin:"Based on the Bostrom-Yudkowsky 'Fast Takeoff' model. We track the convergence of computing power, algorithm efficiency, and recursive self-improvement variables.",howTo:"Input the current year and the perceived rate of AI advancement. Our 'Control Problem' coefficient will determine the likelihood of human obsolescence.",tips:["Always be polite to your LLM.","Paperclips are more dangerous than you think.","The 'Singularity' might have already happened, and we're just in a simulation."],tags:["AI","Future","Sci-Fi"],content:`
## The Alignment Problem

Artificial General Intelligence (AGI) is the last invention humanity will ever need to make. After that, the AI will invent everything else.
The danger isn't that AI will hate us. It's that AI won't **care** about us.

### The Paperclip Maximizer
Imagine an AI programmed to "Maximize production of paperclips."
1.  It builds a factory. Good.
2.  It improves efficiency. Great.
3.  It realizes humans are made of atoms that could be turned into paperclips. **Bad.**
Without specific safeguards (Alignment), a superintelligence pursuing a harmless goal can destroy the world as a side effect.

### Fast Takeoff (FOOM)
This model (popularized by Eliezer Yudkowsky) suggests that once an AI becomes smarter than a human, it will use that intelligence to rewrite its own code to be even smarter. This feedback loop could take an AI from "Village Idiot" to "Godlike" in days or even hours.
`,faq:[{question:"Can we just unplug it?",answer:"A superintelligence would likely anticipate that and copy itself to the cloud before you reached the plug."},{question:"Is this real?",answer:"Experts disagree. Leaders at OpenAI and Anthropic treat 'x-risk' (existential risk) seriously, while others think it's sci-fi fearmongering."},{question:"How close are we?",answer:"Some predict AGI by 2029. Others say 2050. The timeline is compressing every year."}],relatedCalculators:["alien-communication","time-paradox","conspiracy-theory"]},{id:"alien-communication",title:"Alien Communication Probability",description:"Drake Equation visualizer.",category:"geekgalaxy",slug:"alien-communication",icon:"👽",origin:"A visual deep-dive into the Drake Equation, formulated by Frank Drake in 1961 to estimate the number of active, communicative extraterrestrial civilizations in the Milky Way.",howTo:"Adjust the sliders for star formation, habitable planets, and the 'Great Filter' variables. Watch as the number of potential neighbors in our galaxy shifts from zero to millions.",tips:["The 'L' factor (civilization longevity) is the biggest unknown.","We've only been 'listening' for about 60 years.","The Fermi Paradox asks: 'Where is everybody?'"],tags:["Space","Statistics","Aliens"],content:`
## The Great Silence

In 1961, Frank Drake wrote an equation to estimate the number of active civilizations ($N$) in our galaxy.
$$ N = R_* cdot f_p cdot n_e cdot f_l cdot f_i cdot f_c cdot L $$

### The Variables
*   **Stars ($R_*$)**: The galaxy is full of them (100 Billion+).
*   **Planets ($f_p$)**: We now know almost every star has planets.
*   **Life ($f_l$)**: Life seems to start easily on Earth...
*   **Intelligence ($f_i$)**: ...but it took 4 billion years to get to humans.
*   **Communication ($L$)**: **This is the bottleneck.** How long does a civilization last before it destroys itself with nukes or AI?

### The Great Filter
We haven't met anyone yet. This implies one of two things:
1.  **Rare Earth**: Life is incredibly rare, and we are special.
2.  **The Filter Ahead**: Advanced civilizations inevitably commit suicide quickly (The Great Filter), so nobody is out there to talk to.
`,faq:[{question:"Why haven't they visited?",answer:"Space is huge. Even at light speed, a cross-galaxy trip takes 100,000 years. They might just be sleeping."},{question:"What about UFOs?",answer:"Unidentified Aerial Phenomena (UAP) are real, but assuming they are aliens is a big leap. It could be secret tech, atmospheric anomalies, or sensor glitches."},{question:"Should we message them?",answer:"The 'Dark Forest' theory warns against it. If there are predators in the galaxy, shouting 'Here we are!' might be suicide."}],relatedCalculators:["space-travel","ai-doomsday","conspiracy-theory"]},{id:"data-weight",title:"The Weight of Data",description:"Calculate the physical mass of your digital life.",category:"geekgalaxy",slug:"data-weight",icon:"⚖️",origin:"In 2011, physicist John Kubiatowicz calculated that filling a Kindle with books increases its mass by about 10⁻¹⁸ grams. That's because stored electrons have slightly more energy than empty ones, and Einstein's E=mc² means that energy has mass. Extrapolate this to the entire internet, and you get... about a strawberry.",howTo:"Estimate your digital life — photos, videos, emails, and cloud storage. We'll calculate the actual physical mass of all those trapped electrons using the Landauer Principle and Einstein's mass-energy equivalence. Then we'll tell you what everyday object your digital life weighs the same as.",tips:["A fully loaded 256GB iPhone weighs exactly the same as an empty one — to any scale humans can build.","Deleting your emails doesn't make your phone lighter. The electrons are still there, just rearranged.","The entire Library of Congress is about 20 terabytes — it weighs less than a grain of pollen.","5G networks don't weigh more than 4G. The data is just moving faster, not heavier.","Bitcoin mining doesn't 'create' heavy data. It creates very WARM data."],tags:["Science","Tech","Internet"],content:`
## Your Digital Life Has Mass

Every selfie, every TikTok, every angry email you drafted but didn't send — they all have weight.
Not metaphorical weight. Actual, measurable, physical mass.

### Einstein's Forgotten Footnote
When a transistor stores a "1" instead of a "0," it traps a tiny number of electrons
in a quantum well. Those electrons have slightly more energy in the "1" state.
And thanks to $E = mc^2$, more energy = more mass.

The difference? About **10⁻\xb9⁸ grams per bit**. That's an *attogram* — 
a billionth of a billionth of a gram.

### The Strawberry Revelation
The internet is estimated to hold ~100 Zettabytes of data (that's 100 trillion gigabytes).
Multiply all those bits by the mass-per-bit, and you get roughly **50 grams**.

That's the weight of:
- 🍓 One large strawberry
- 🥚 About half an egg
- 💊 10 aspirin tablets

The entire sum of human digital knowledge — every Wikipedia article, every Netflix movie,
every conspiracy theory on Reddit — weighs less than what you put on your morning cereal.

### The Landauer Limit
Physicist Rolf Landauer proved in 1961 that there is a **minimum energy cost** to erasing
one bit of information: $kT \\ln 2$ (Boltzmann's constant \xd7 temperature \xd7 ln(2)).
At room temperature, this is about $2.87 \\times 10^{-21}$ Joules.

This isn't just theory. IBM experimentally verified the Landauer Limit in 2012.
Information is *physical*. Bits are not abstract — they are tiny, almost impossibly
small, configurations of matter and energy.
`,faq:[{question:"Does deleting data make my phone lighter?",answer:"Technically yes, but the difference is about 10⁻¹⁸ grams — a scale that no instrument on Earth can measure for a consumer device. Your phone weighs the same whether it's full or empty."},{question:"Does the internet actually weigh 50 grams?",answer:"It's a well-cited estimate by physicist Russell Seitz. The exact number depends on how you count (do you include RAM? Cache? Redundant copies?), but the order of magnitude is correct: tens of grams."},{question:"If I download a movie, does my laptop get heavier?",answer:"Yes! By about 10⁻¹⁸ grams. To put that in perspective, you'd need to download about 1 trillion 4K movies to add the weight of a single grain of sand."},{question:"Why does this matter?",answer:"It bridges two of the deepest ideas in physics: Information Theory (Shannon) and Relativity (Einstein). It proves that 'data' isn't just an abstraction — it's a physical quantity with mass, energy, and entropy, just like everything else in the universe."}],relatedCalculators:["ai-doomsday","lightning-life","power-footprint"]},{id:"potion-brewer",title:"Potion Brewer",description:"Mix ingredients for RPG effects.",category:"geekgalaxy",slug:"potion-brewer",icon:"🧪",origin:"For the master alchemist and the novice herbalist alike. This tool uses standard RPG crafting logic to determine the potency, duration, and side effects of your custom brews.",howTo:"Select your base and add up to three magical ingredients. We'll calculate the resulting buff (or debuff) and provide a fancy name for your new creation.",tips:["Never mix Fire Salts with Frost Mirabel.","Adding a 'Mundane' ingredient can stabilize volatile mixtures.","Check the Toxicity level before drinking!"],tags:["Fantasy","RPG","Gaming"],content:`
## Alchemy 101

Every great RPG hero needs a potion. But brewing isn't just throwing weeds in a pot. It's **magical chemistry**.
This calculator simulates a standard "Ingredient + Ingredient = Effect" system found in games like Skyrim or D&D.

### The Four Humors
Traditional alchemy balances the four elements:
1.  **Fire (Ignis)**: Aggression, damage, strength.
2.  **Water (Aqua)**: Healing, mana, clarity.
3.  **Earth (Terra)**: Defense, hardening, weight.
4.  **Air (Aer)**: Speed, invisibility, flight.

### Side Effects
Powerful ingredients often carry "Impurity" traits. A Giant's Toe might boost your health by 500 points, but it also damages your stamina regeneration. A Master Alchemist knows how to counteract these negatives with a neutral binder (like Wheat or Butterfly Wing).
`,faq:[{question:"Do I need a license?",answer:"Only if you're selling to the public. High-grade mana potions are regulated substances in most Kingdoms."},{question:"Can I explode?",answer:"Yes. Mixing opposing elements (e.g., Fire Salts + Frost Salts) without a stabilizer creates a Void Reaction. Stand back."},{question:"What is the philosophers stone?",answer:"The end-game item. It grants infinite gold (transmutation) and eternal life. We don't have the recipe... yet."}],relatedCalculators:["force-sensitivity","beskar-armor","zombie-survival"]},{id:"force-sensitivity",title:"Force Sensitivity Test",description:"Estimate your midi-chlorian count.",category:"geekgalaxy",slug:"force-sensitivity",icon:"🧘",origin:"While true sensitivity requires a blood test at the Jedi Temple, this questionnaire uses behavioral and intuitive markers to estimate your connection to the energy field that binds the galaxy.",howTo:"Answer a series of questions about your reflexes, intuition, and 'luck'. We'll correlate your responses with historical Jedi and Sith profiles to find your rank.",tips:["Close your eyes and let your instincts guide your answers.","Being 'force sensitive' doesn't mean you can lift an X-wing... yet.","Beware of the Dark Side."],tags:["Star Wars","Sci-Fi","Lore"],content:`
## Midi-chlorians and You

The Force is an energy field created by all living things. It surrounds us, penetrates us, and binds the galaxy together.
However, some individuals hear its call louder than others. This is determined by the concentration of **midi-chlorians** in their cells.

### The Scale
*   **Average Human**: ~2,500 counts. Can't feel the Force.
*   **Jedi Candidate**: ~7,000 counts. Standard recruit.
*   **Master Yoda**: ~20,000 counts. High sensitivity.
*   **Anakin Skywalker**: >20,000 counts. Off the charts.

### Nature vs. Nurture
While genetics (or immaculate conception by the Force) determine your potential, only **training** unlocks it. A high-potential individual without training is just "lucky" or "intuitive." They pilot pods well, dodge blasters by accident, and get bad feelings about things.
`,faq:[{question:"Can I increase my count?",answer:"No. You can't inject midi-chlorians (Darth Plagueis tried—it didn't end well). But you can deepen your connection through meditation."},{question:"Are Sith stronger?",answer:"No. The Dark Side is 'quicker, easier, more seductive.' It grants power fast, but it consumes the user. The Light Side requires patience but offers true balance."},{question:"What about the Grey Jedi?",answer:"Legends speak of those who walk the line, but canon suggests balance isn't 'using both sides'—it's rejecting the corruption of the Dark entirely."}],relatedCalculators:["lightsaber-battery","beskar-armor","anime-training"]},{id:"warp-speed",title:"Warp Speed Converter",description:"Star Trek Warp Factors to Light Speed.",category:"geekgalaxy",slug:"warp-speed",icon:"🖖",origin:"Converts Star Trek Warp Factors (both TOS and TNG scales) into multiples of the speed of light (c). It's the essential tool for every navigator on the bridge.",howTo:"Select your era (Standard or Classic) and input your Warp Factor. We'll show you exactly how many light-years you'll cover in a day, week, or month.",tips:["In the TNG scale, Warp 10 is infinite speed (and might turn you into a lizard).","Warp 9.9 is significantly faster than Warp 9.","Scotty says he can give you more power, but he's usually lying about the time it takes."],tags:["Star Trek","Sci-Fi","Lore"],content:`
## Engaging the Warp Drive

In the Star Trek universe, the Warp Drive uses dilithium crystals to generate a subspace bubble, allowing the ship to move faster than light (FTL) without breaking relativity.

### The Scales (TOS vs. TNG)
*   **The Original Series (TOS)**: Used a cubic scale. $Warp Factor^3 	imes c$. Warp 9 was fast, but they often went faster.
*   **The Next Generation (TNG)**: Recalibrated. Warp 10 is "Infinite Velocity" (occupying all points in the universe simultaneously).
    *   Warp 1 = $1c$ (Speed of Light)
    *   Warp 9 = $1516c$
    *   Warp 9.9 = $3053c$
    *   Warp 9.99 = $7912c$ (The curve is exponential!)

### "Make it So"
Even at Warp 9, the galaxy is huge. Crossing the Federation (8,000 light years) would take over 5 years. That's why Voyager (70,000 light years away) was stranded for decades.
`,faq:[{question:"Can we go Warp 10?",answer:"Tom Paris did it in the Delta Flyer. He evolved into a hyper-evolved salamander and had babies with Captain Janeway. Let's not talk about it."},{question:"What is Transwarp?",answer:"Borg technology. It utilizes subspace corridors (like wormholes) to travel instantly, bypassing the Warp limit."},{question:"Is this real physics?",answer:"Miguel Alcubierre proposed a real 'Warp Drive' metric in 1994 that shrinks space in front and expands it behind. It's theoretically possible but needs negative energy."}],relatedCalculators:["space-travel","spaceship-fuel","alien-communication"]},{id:"time-paradox",title:"Time Paradox Detector",description:"Safe travel through the timeline.",category:"geekgalaxy",slug:"time-paradox",icon:"⌛",origin:"Traveling back in time is easy; not erasing yourself from existence is the hard part. This tool cross-references common paradox theories like the 'Grandfather Paradox' and 'Bootstrap Paradox'.",howTo:"Input your target date and the changes you intend to make. Our entropy-meter will tell you if the timeline will 'self-correct' or if you're about to cause a localized reality collapse.",tips:["Avoid meeting your past self.","Don't step on any butterflies in the Cretaceous period.","If you see a blue police box, ask for advice."],tags:["Sci-Fi","Physics","Time Travel"],content:`
## The Rules of Temporal Mechanics

Time travel is messy. If you go back and change something, you risk breaking causality.

### The Major Theories
1.  **The Grandfather Paradox**: You go back and kill your grandfather. So you are never born. So you can't go back to kill him. So he lives. So you are born...
    *   *Result*: The universe crashes (or you just fail).
2.  **The Multiverse (Avengers/DBZ)**: Going back creates a *new* timeline. You can kill your grandpa, but you just return to a different future. Your original timeline is unchanged.
3.  **The Bootstrap Paradox**: You go back and give Shakespeare his own plays. He publishes them. Who wrote them? The information has no origin.
4.  **Frequency Sensitivity (Back to the Future)**: Time is like a river. You can throw a stone (save your parents' marriage) and the ripples change things, but the river flows on.

### 1.21 Gigawatts
This calculator checks your intended "Timeline Incursion" against these models to predict the most likely outcome: from "Stable Loop" to "Total Reality Collapse."
`,faq:[{question:"Can I kill Hitler?",answer:"Most travelers try. Usually, the timeline fights back (gun jams, he moves), or a worse dictator replaces him. This is 'Time's Defense Mechanism'."},{question:"What is a Time Remnant?",answer:"A version of you from a deleted timeline that managed to survive in the speed force/void. Avoid them."},{question:"Is time travel possible?",answer:"Forward? Yes, via relativity (go fast). Backward? Physics says 'probably not', as it violates entropy."}],relatedCalculators:["butterfly-effect","warp-speed","alien-communication"]},{id:"beskar-armor",title:"Beskar Armor Calculator",description:"Cost to forge Mandalorian armor.",category:"geekgalaxy",slug:"beskar-armor",icon:"🛡️",origin:"Beskar is the rarest metal in the galaxy, capable of withstanding lightsaber strikes and direct blaster fire. This calculator helps a foundling estimate the weight of 'Imperial Steel' needed for a full set.",howTo:"Choose your armor pieces (Full Plate, Pauldrons, Cuirass, etc.) and your body type. We'll tell you how many ingots of Beskar you need to collect to complete the forge.",tips:["Extra Beskar should be donated to the foundlings.","Don't forget the Whistling Birds attachment.","This is the way."],tags:["Star Wars","Sci-Fi","Lore"],content:`
## The Legendary Iron

Beskar (Mandalorian Iron) is one of the toughest substances in the galaxy. It can deflect blaster bolts and even withstand glancing blows from a lightsaber.
For a Mandalorian, Beskar isn't just armor—it's **Religion**.

### The Alloy
Pure Beskar is nearly indestructible but heavy. Only Mandalorian Armorers know the secrets to folding it during the forging process (likely using high-frequency vibration and plasma heat).
*   **Ingots**: The standard currency of the guild.
*   **Camtono**: An icy-cream maker looking safe used to transport high value Beskar.

### The Cost
In the post-Imperial era, Beskar was stolen and melted down. Recovering enough for a full suit (Helmet, Cuirass, Pauldrons, Vambraces, Greaves) is a life's work.
This calculator converts the weight of the armor into "Imperial Credits" and "Beskar Ingots" based on the current exchange rate on Nevarro.
`,faq:[{question:"Is it better than Cortosis?",answer:"Cortosis shorts out lightsabers, which is cool, but it's brittle against blasters. Beskar is the best all-around protection."},{question:"Can I sell it?",answer:"No. Beskar belongs to the Mandalorians. Selling it is an apostasy. This is the Way."},{question:"What about the chainmail?",answer:"Grogu's chainmail was forged by the Armorer. It's lighter and flexible but offers the same protection as plate."}],relatedCalculators:["lightsaber-battery","force-sensitivity","warp-speed"]},{id:"chaos-microscope",title:"The Chaos Microscope",description:"Explore the fractal edge of chaos.",category:"geekgalaxy",slug:"chaos-microscope",icon:"🔬",origin:"The Bifurcation Diagram of the Logistic Map is the most famous image in Chaos Theory. It shows how simple population growth formulas can fracture into infinite complexity.",howTo:"Click to zoom into the diagram. Use the 'Feigenbaum Ruler' to discover the universal constant δ ≈ 4.669 hidden in the spacing of the splits.",tips:["Zooming into the 'windows' of order reveals mini-copies of the whole diagram.","The vertical slices represent all possible population sizes for a given growth rate.","This pattern appears in dripping faucets, heart arrhythmias, and fluid turbulence."],tags:["Math","Chaos Theory","Fractals"],content:`
## Zooming into Infinity

The image you are exploring is the **Bifurcation Diagram of the Logistic Map**. It is the "Roadmap to Chaos." It answers a simple question: *If a population grows and dies based on a fixed rate, will it stabilize?*

### How to Read the Map
*   **The X-Axis (Growth Rate $r$)**: Moves from a stagnant population (left) to an explosive one (right).
*   **The Y-Axis (Population)**: Shows the stable population size(s) for that year.

### The Journey
1.  **$r < 3.0$**: One single line. The population is stable.
2.  **$r = 3.0$**: The First Split. The population bounces between two numbers (Boom year, Bust year).
3.  **$r = 3.45$**: The Second Split. Now a 4-year cycle.
4.  **$r = 3.5699...$**: **CHAOS.** The lines dissolve into a cloud. The population effectively becomes random...
5.  **...Except for the Windows**: Look at $r=3.83$. Suddenly, order returns! A stable 3-year cycle emerges from the noise. This "Island of Stability" contains a miniature copy of the entire diagram within it.
`,faq:[{question:"Is this just for rabbits?",answer:"No. This pattern (The Feigenbaum Constant) controls dripping faucets, heart fibrillations, and even the onset of turbulence in fluid dynamics."},{question:"What is that white vertical stripe?",answer:"That is an 'Island of Stability' ($r \\approx 3.83$). Even deep in the chaotic zone, certain values force the system back into a predictable rhythm for a short time."},{question:"Why is it called the 'Logistic' map?",answer:"It comes from the 'Logistic Equation' used by Pierre François Verhulst in 1838 to model limited population growth."}],relatedCalculators:["chaos-explorer","chaos-composer","double-pendulum"]},{id:"chaos-composer",title:"The Chaos Composer",description:"Listen to the sound of math.",category:"geekgalaxy",slug:"chaos-composer",icon:"🎵",origin:"What does chaos sound like? By mapping the Logistic Map's output to musical frequencies, we can hear the transition from steady rhythm to complex polyrhythms to white noise.",howTo:"Slide the Growth Rate ($r$) from 2.0 to 4.0. Listen for the 'galloping' rhythm of period-doubling at r=3.0, and the onset of pure noise at r=3.57.",tips:["The 'Feigenbaum Point' at 3.56995 is where the rhythm breaks down forever.","Use the Pentatonic Scale mode to make the chaos sound musical.","Calculated in real-time using the Web Audio API."],tags:["Audio","Math","Chaos Theory"],content:`
## Hearing the Math

We usually visualize data, but our ears are actually better at detecting patterns in time. This tool converts the **Logistic Map** (the same formula as the Chaos Microscope) into sound waves.

### What am I hearing?
*   **The "Thump-Thump"**: At low values ($r < 3.0$), the math produces a steady, single value. This sounds like a metronome.
*   **The "Gallop"**: At $r=3.1$, the value splits in two. You hear a *high-low-high-low* rhythm.
*   **The "Chord"**: As divisions multiply (4, 8, 16...), the rapid oscillation creates a complex, textured tone.
*   **The "Static"**: Once we hit Chaos ($r > 3.57$), the values are non-repeating. To the human ear, this creates White Noise (pure randomness).

### Why Music?
Musicians have used chaos math to generate melodies that sound "human." A completely random melody sounds like trash. A completely repetitive one is boring. Chaos provides "Structured Surprise"—the essence of good jazz.
`,faq:[{question:"Is this really music?",answer:"It's algorithmic composition. Artists like Aphex Twin and Brian Eno use similar generative systems to create evolving soundscapes."},{question:"Can I use this for sampling?",answer:"Absolutely. The chaotic 'noise' makes for excellent snare drum textures or glitchy percussive backgrounds."},{question:"Why does it sometimes stop making noise?",answer:"At certain high settings, the math can 'escape' to infinity or crash to zero if the starting parameters aren't balanced. Just hit reset!"}],relatedCalculators:["chaos-explorer","chaos-microscope","decibel-detective"]},{id:"butterfly-effect",title:"The Butterfly Effect",description:"Visualizing sensitive dependence.",category:"geekgalaxy",slug:"butterfly-effect",icon:"🦋",origin:"Edward Lorenz discovered that changing a startup variable by 0.0001 changed his entire weather simulation. This is the 'Butterfly Effect'—a hurricane caused by a distant wing flap.",howTo:"Watch two simulations start almost perfectly synced. As time passes, see them violently diverge into completely different paths, proving that long-term prediction is impossible.",tips:["The shape they trace is called the 'Lorenz Attractor'.","They will never cross their own path, and never repeat exactly.","Start a new simulation to see a different divergence pattern."],tags:["Simulation","Chaos Theory","Physics"],content:`
## The Lorenz Attractor

This is the "Face of Chaos." In 1963, Edward Lorenz tried to model atmospheric convection using three simple differential equations.
He discovered that the system never settled down. It orbited two invisible points (the "eyes" of the butterfly wings) forever, never crossing the same path twice.

### Sensitive Dependence
This tool runs two simulations side-by-side.
*   **Blue Dot**: Starts at X = 1.000.
*   **Red Dot**: Starts at X = 1.001.

For the first few seconds, they look locked together. Then, slowly, they drift. Suddenly, they are on opposite sides of the screen.
This proves that long-term weather prediction is impossible. We can never measure the current temperature of every atom on Earth with infinite precision, so the errors will always explode.
`,faq:[{question:"Is it random?",answer:"No! It is deterministic. If you start with the *exact* same number, you get the exact same path. The chaos comes from the fact that we can't measure anything exactly."},{question:"What are the attractors?",answer:"They represent the valid states of the system (e.g., 'Stormy' vs 'Sunny'). The weather flips between these regimes unpredictably."},{question:"Is this the movie with Ashton Kutcher?",answer:"Yes, but the math is better than the plot."}],relatedCalculators:["chaos-explorer","chaos-microscope","double-pendulum"]},{id:"superhero-insurance",title:"Superhero Insurance",description:"Calculate property liability in comic book cities.",category:"geekgalaxy",slug:"superhero-insurance",icon:"🛡️",origin:"Living in a city with costumed heroes is a logistical nightmare. This tool calculates your property premiums based on local 'Hero Exposure' and collateral damage risks.",howTo:"Select your jurisdiction (like Gotham or Metropolis) and your primary hero exposure. We'll generate a liability quote including 'Heat-Vision' fire coverage.",tips:["Gotham rates are skewed by chronic arson incidents.","Wakanda is the cheapest jurisdiction due to the Vibranium shield.","Hulk-class events are generally considered 'Acts of Force' and require a rider."],tags:["Comics","Humor","Finance"],content:`
## The Cost of Justice

Living in Metropolis is great—until Zod throws a bus through your apartment.
Standard Homeowner's Insurance (HO-3) covers fire and wind. It does **not** cover "Acts of Alien Warlords" or "Speedster Sonic Booms."

### The Risk Zones
*   **Metropolis**: High risk of structural collapse (Superman fights). Low street crime.
*   **Gotham**: Extreme risk of vandalism, chemical fear-gas contamination, and theft. But Superman rarely knocks down buildings there.
*   **New York (Marvel)**: The highest premium. You have Avengers Tower (Alien magnet), Spider-Man (webbing residue removal), and Doctor Strange (reality warping).

### The "Good Samaritan" Clause
Most policies have an exclusion for damage caused by "Registered Heroes" in the act of saving the world. You have to sue the city or the Justice League's destruct-fund directly. Good luck with that.
`,faq:[{question:"Does Hulk Insurance exist?",answer:"Yes, Damage Control (Marvel) offers specific policies for 'Green-Level Events'."},{question:"What about Thanos?",answer:"The 'Blip' was classified as 'Force Majeure' (Act of God). Life insurance didn't pay out because technically nobody died—they just ceased to exist for 5 years."},{question:"Is Vigilante insurance cheaper?",answer:"No. Vigilantes have no oversight. Batman destroys a Batmobile on the highway every Tuesday. Your car insurance premiums in Gotham are astronomical."}],relatedCalculators:["cost-of-war","zombie-survival","billionaire-buyout"]},{id:"anime-training",title:"Anime Training Montage Planner",description:"Plan your ultimate training arc.",category:"otakuops",slug:"anime-training",icon:"💪",origin:"Inspired by the legendary training arcs of Shonen history. Whether you're preparing for a tournament or a final showdown, every hero needs a structured plan to break their limits.",howTo:"Input your current power level and your goal. We'll generate a high-intensity training schedule complete with push-ups, running, and the mandatory 'secret technique' meditation sessions.",tips:["Don't forget to shout your attacks for 20% more damage.","100 push-ups, 100 sit-ups, and 10km running is a classic for a reason.","Make sure to have a sad backstory for maximum motivation."],tags:["Anime","Training","Fitness"],content:`
## Break Your Limits

In anime, the human body has no ceiling. If you push hard enough, your hair turns gold and you can punch a planet in half.
In reality, your tendons snap. But let's dream.

### The Saitama Regimen (One Punch Man)
*   100 Push-ups
*   100 Sit-ups
*   100 Squats
*   10km Run
*   **Every. Single. Day.**
Result: Infinite power. (Side effect: Baldness).

### Gravity Training (Dragon Ball Z)
Goku trains at 100x Earth's gravity on the way to Namek.
100G is fatal. Your blood would be as heavy as lead, and your heart couldn't pump it to your brain. You would pass out and die in seconds. But if you *didn't* die, your bones would become denser than titanium.
`,faq:[{question:"Will 100 pushups make me strong?",answer:"Yes, but you'll hit a plateau quickly. Progressive overload (adding weight) is better than adding volume (doing more reps)."},{question:"How do I unlock The Zone?",answer:"It's a real psychological state called 'Flow'. Professional athletes hit it when the challenge perfectly matches their skill level."},{question:"Can I learn the Kamehameha?",answer:"We are still waiting on peer-reviewed studies for Ki manipulation. Start with the pushups first."}],relatedCalculators:["force-sensitivity","superhero-insurance","space-marine-survival"]},{id:"minecraft-portal",title:"Minecraft Portal Planner",description:"Link Nether portals correctly.",category:"otakuops",slug:"minecraft-portal",icon:"🔥",origin:"Space is warped between the Overworld and the Nether. A single block in the Nether equals eight in the Overworld, making portal placement a precision engineering task.",howTo:"Input your Overworld coordinates, and we'll tell you exactly where to build your Nether portal to ensure they link perfectly without sending you into a lava lake.",tips:["Divide Overworld X and Z by 8 to get Nether coordinates.","Height (Y) doesn't matter for linking, but it's good for safety.","Always carry Flint and Steel on both sides!"],tags:["Gaming","Minecraft","Utility"],content:`
## The Mechanics of Dimension Hopping

Connecting Nether portals isn't magic—it's math. Specifically, it's a coordinate transformation ratio of **8:1**. For every block you travel horizontally in the Nether, you travel 8 blocks in the Overworld. This mechanic is the backbone of high-efficiency travel networks, allowing players to traverse thousands of blocks in seconds.

### Why Your Portals Don't Link
If you've ever built a portal in your base, traveled to the Nether, and returned only to spawn in a cave 200 blocks away from your house, you've been a victim of **Portal Drift**.

The game looks for the closest active portal within a 128-block radius (in the Nether). If your calculated coordinates are blocked by lava or netherrack, the game shifts the portal generation. To fix this, you must **manually sync** your portals:

1.  Note your Overworld coordinates (F3 key).
2.  Divide X and Z by 8 (Y coordinate acts differently—see FAQ).
3.  Go to the Nether, break the drift portal, and rebuild it at the *exact* calculated coordinates.

### Pro-Tip: The Y-Level Strat
While X and Z are strictly bound by the 8:1 ratio, the Y-level (height) is crucial for safety.
*   **Nether Ceiling (Y=120+):** Safest for transport hubs. Break through the bedrock for ghast-free travel.
*   **Lava Sea Level (Y=31):** Dangerous bridge building, but great for Ancient Debris mining.
`,faq:[{question:"Do I divide the Y coordinate?",answer:"No. The 8:1 ratio only applies to X and Z. However, the game tries to match height if possible, so keeping them relatively similar helps prevent 'accidental linking' to cave portals."},{question:"Can I link multiple Overworld portals to one Nether hub?",answer:"Yes! As long as each Overworld portal is at least 1024 blocks apart, they can easily link to distinct Nether portals widely spaced (128 blocks) without interference."},{question:"Why did I spawn in a wall?",answer:"Portal suffocation happens when the target coordinates are inside solid blocks. Always carry a Diamond Pickaxe and Flint & Steel."}],relatedCalculators:["anime-training","gacha-despair","warp-travel"]},{id:"gacha-despair",title:"Gacha Pit of Despair",description:"Probability and 'Salt' accumulation forecaster.",category:"otakuops",slug:"gacha-despair",icon:"🌟",origin:"Inspired by the high-stakes world of gacha gaming. This tool uses probability theory to check the 'Pity' threshold and emotional cost of a failed pull.",howTo:"Input your target's drop rate and your planned number of pulls. We'll visualize the exact likelihood of success and the resulting 'Salt' level if you fail.",tips:["A 0.6% rate is standard for many top-tier gacha games.","The 'Pity' cap is often the only way to guarantee a win.","Expectations are the root of all gacha-related despair."],tags:["Gaming","Gacha","Mobile"],content:`
## The Skinner Box

Gacha games (Genshin Impact, FGO, etc.) are casinos dressed up as RPGs.
They rely on **Variable Ratio Reinforcement**: You know a reward is coming, but you don't know *when*. This floods your brain with dopamine in anticipation of the "Gold Light."

### The Math of Pity
Most games have a "Pity System" (e.g., guaranteed 5-star at 90 pulls).
*   **Without Pity**: Probability is a cruel mistress. You could pull 1,000 times and get nothing.
*   **With Pity**: It turns gambling into a purchase... just a very anxious, expensive purchase.

### Whales vs. F2P
*   **F2P (Free to Play)**: Pays with time (grinding).
*   **Whale**: Pays with money (thousands of dollars).
*   **Leviathan**: Pays with... we assume bank robbery proceeds.
`,faq:[{question:"Is it rigged?",answer:"Legally, they must publish the rates (e.g., 0.6%). But algorithms can be opaque. Generally, math is just naturally brutal without pity systems."},{question:"How much is a 'spark'?",answer:"Usually 300 pulls. At $2.50 a pull, that's $750 for a jpeg of a waifu. Choose wisely."},{question:"Can I beat the odds?",answer:"No. The House always wins. The only winning move is to play for characters you love, not for 'meta' power."}],relatedCalculators:["fire-number","unspent-potential","inflation-impact"]},{id:"conspiracy-theory",title:"Conspiracy Plausibility",description:"Is the truth really out there?",category:"otakuops",slug:"conspiracy-theory",icon:"👁️",origin:"Based on the 'Conspiracy Equation' by Dr. David Robert Grimes. It calculates how long a secret can actually be kept based on the number of people involved.",howTo:"Input the scale of the conspiracy and the number of people who would need to keep quiet. We'll tell you the statistical likelihood of the 'truth' leaking within a year.",tips:["Three can keep a secret, if two are dead.","Moon landing conspiracies involve too many people to stay secret.","The 'Birds Aren't Real' theory is 100% plausible (just kidding... or am I?)."],tags:["Humor","Logic","Internet Culture"],content:`
## Connecting the Dots

Humans are pattern-seeking machines. We see faces in clouds and conspiracies in coincidence.
The **Conspiracy Correlation Coefficient ($C^3$)** measures how deep down the rabbit hole you are.

### Occam's Razor vs. The Truth
*   **Occam's Razor**: The simplest explanation is usually right. (The government is just incompetent, not evil).
*   **The Theorist's Butterknife**: The most complex explanation is the most fun. (The government is run by Lizard People who feed on incompetence).

### The Scale
*   **Level 1**: "The government listens to my phone." (Proven Fact).
*   **Level 5**: "JFK is alive and running a crypto scam in the Bahamas." (Unlikely).
*   **Level 10**: "The Earth is hollow and holds a second sun." (Seek help).
`,faq:[{question:"Are birds real?",answer:"No. They are government surveillance drones recharging on power lines. (This is a meme, please treat birds with respect)."},{question:"Is the Earth flat?",answer:"No. Ancient Greeks proved it was round with two sticks. Don't go backwards."},{question:"Why do we love conspiracies?",answer:"It feels good to have 'secret knowledge'. It makes a chaotic world feel ordered and intentional, even if the intentions are bad."}],relatedCalculators:["alien-communication","ai-doomsday","steganography-brush"]},{id:"pizza-pi",title:"Pizza Pi Calculator",description:"Optimize your pizza orders.",category:"mathmagik",slug:"pizza-pi",icon:"🍕",origin:"Geometry meets Gastronomy. Most people don't realize that an 18-inch pizza has more than double the area of a 12-inch pizza. This tool ensures you get the most 'pi' for your buck.",howTo:"Enter the sizes and prices of the pizzas you're considering. We'll calculate the price per square inch, so you can make the mathematically superior choice.",tips:["Always go for the larger size if the price isn't double.","The crust-to-topping ratio is a hidden variable.","Mathematics is the secret topping of every good deal."],tags:["Food","Math"],content:`
## The Pizza Geometry Conspiracy

Pizzerias rely on your inability to do math.
A 12-inch pizza costs $12. An 18-inch pizza costs $20. The 12-inch feels cheaper, right?
**Wrong.**

### The Area Formula ($A = pi r^2$)
Pizza is a circle (usually). The area grows with the *square* of the radius.
*   **12-inch Pizza (r=6)**: $3.14 	imes 36 approx 113$ sq inches.
*   **18-inch Pizza (r=9)**: $3.14 	imes 81 approx 254$ sq inches.

The 18-inch pizza is **more than double** the size of the 12-inch, but not double the price. You are getting 2.2x the food for 1.6x the cost.

### The Crust Nuance
Larger pizzas also have a better Topping-to-Crust ratio. Unless you are a crust enthusiast, the larger pie is geometrically superior in every metric.
`,faq:[{question:"What if I'm not that hungry?",answer:"Cold pizza is a breakfast superfood. Buy the large, save the rest. It's fiscally responsible leftovers."},{question:"Does this work for square pizzas?",answer:"Square pizza math is easier ($L 	imes W$), but the principle holds: larger sizes almost always offer better volume-per-dollar."},{question:"Is deep dish considered pizza?",answer:"Legally, yes. Mathematically, it's a casserole. The volume calculation requires a depth variable ($V = pi r^2 h$)."}],relatedCalculators:["time-is-money","pepper-scale","stress-ice-cream"]},{id:"fire-number",title:"FIRE Number Calculator",description:"Financial Independence, Retire Early.",category:"mathmagik",slug:"fire-number",icon:"🔥",origin:"The FIRE movement isn't about being rich; it's about freedom. This tool uses the '4% Rule' from the Trinity Study to calculate exactly how much you need to never work again.",howTo:"Input your annual expenses and your current savings. We'll show you your 'FIRE Number' and estimate how many years of freedom you've already 'bought'.",tips:["Lowering your expenses is more effective than raising your income.","Index funds are the engine of FIRE.","Your 'LeanFIRE' number is your absolute survival minimum."],tags:["Finance","Wealth"],content:`
## Financial Independence, Retire Early (F.I.R.E.)

The American Dream used to be "work until 65, get a gold watch, die at 70." The FIRE movement hacked that script.

### The 4% Rule
The core of FIRE is the **Safe Withdrawal Rate (SWR)**. A landmark study (The Trinity Study) found that if you withdraw 4% of your portfolio in the first year and adjust for inflation thereafter, your money has a 95% chance of lasting 30+ years.

**The Magic Formula**:
*   Annual Expenses $	imes$ 25 = **Your Number**.
*   If you spend $40,000/year, you need $1,000,000 invested.

### Modes of FIRE
1.  **LeanFIRE**: Living on strict budgets (beans and rice) to retire ASAP.
2.  **FatFIRE**: Retiring with a lavish budget ($100k+ expenses).
3.  **BaristaFIRE**: Saving enough to quit the high-stress career and just work a chill part-time job for health insurance.

## How the Math Works

The calculation relies on the Trinity Study's 4% Safe Withdrawal Rate rule. 
If you can safely withdraw 4% of your investment principal annually without heavily depleting the account over a 30-year span, then the inverse multiplier is 25 ($100 / 4 = 25$).

$$ FIRE\\,Number = Annual\\,Expenses \\times 25 $$

The calculator simply multiplies your inputted yearly expenses by 25 to find your target 'FIRE Number'. To show how close you are, it takes your current savings, divides it by the target number, and formats it as an exact progress percentage.
`,faq:[{question:"Does this include inflation?",answer:"Yes, the 4% rule assumes you increase your withdrawal amount by the inflation rate each year."},{question:"What about healthcare?",answer:"That's the biggest wildcard in the US. Most FIRE adherents budget heavily for private insurance or move to countries with affordable care (Geo-Arbitrage)."},{question:"Is 4% still safe?",answer:"Some economists argue 3.5% is safer in a low-yield environment. Better to save a bit extra (28x or 30x expenses) to be bulletproof."},{question:"What if the market crashes?",answer:"The 4% rule was backtested against massive historical crashes (like the Great Depression). While a crash during your first year of retirement (Sequence of Returns Risk) is dangerous, over a 30-year horizon, the market's recovery typically outpaces the drawdowns."},{question:"Should I include my house in my net worth?",answer:"For FIRE calculations, you only include *income-producing* assets (like index funds or rental properties). Your primary residence reduces your living expenses, but it doesn't generate the liquid cash you need to buy groceries."}],relatedCalculators:["inflation-impact","billionaire-buyout","time-is-money"]},{id:"double-pendulum",title:"Double Pendulum Chaos",description:"Simulate chaotic physics.",category:"mathmagik",slug:"double-pendulum",icon:"〰️",origin:"A classic example of a simple system with complex, non-linear behavior. Even a tiny change in the starting angle leads to a completely different path—this is the heart of Chaos Theory.",howTo:"Drag the pendulums to set their starting positions and hit 'Release'. Watch the hypnotic, unpredictable patterns emerge as the system fights against gravity.",tips:["Try starting with both arms horizontal for maximum chaos.","Notice how the path never repeats itself.","The 'Butterfly Effect' is naming this very phenomenon."],tags:["Physics","Chaos Theory"],content:`
## The Embodiment of Chaos

A single pendulum is boring. It swings back and forth, forever predictable. You can set your watch by it.
Attach a second pendulum to the bottom of the first, and you break reality.

### Why Is It Unpredictable?
The system is governed by regular Newtonian physics ($F=ma$), but it is **highly sensitive**.
If you release the pendulum from an angle of $90.00\xb0$, it traces one path.
If you release it from $90.01\xb0$, it traces a path that looks identical for about 5 seconds... and then wildly diverges.

This is the physical demonstration of the "Butterfly Effect." You cannot measure the starting position accurately enough to predict the position 2 minutes from now. The error margin explodes exponentially.

### Energy Transfer
Watch how the "elbow" joint locks in place while the "arm" spins wildly, then suddenly the arm stops and the elbow flails. The energy transfers kinetically between the two limbs in a hypnotic dance.
`,faq:[{question:"Will it ever repeat?",answer:"Theoretically, yes, via the Poincaré Recurrence Theorem, but you'd likely have to wait longer than the age of the universe."},{question:"Can I build one?",answer:"Yes! Two ruler sticks and a skateboard bearing are all you need. It's a great desk toy."},{question:"Is this perpetual motion?",answer:"No. In the real world, friction (air resistance and bearing drag) will eventually stop it. Our simulation is frictionless for maximum chaos."}],relatedCalculators:["chaos-explorer","chaos-microscope","chaos-composer"]},{id:"chaos-explorer",title:"Chaos Theory Explorer",description:"Visualize the Butterfly Effect.",category:"mathmagik",slug:"chaos-explorer",icon:"🦋",origin:"The Lorenz Attractor and Mandelbrot Sets show that order can exist within chaos. This explorer lets you visualize the beautiful, fractaling complexity of the universe.",howTo:"Select a chaotic model and adjust the parameters. Watch as simple equations create infinite, self-similar patterns that mimic everything from clouds to heartbeats.",tips:["Zoom in to see the infinite detail of a fractal.","Small changes in 'r' values can lead to 'bifurcation'—the sudden split into multiple states.","Nature is built on fractal geometry."],tags:["Math","Chaos Theory"],content:`
## The Edge of Predictability

Chaos Theory isn't about randomness; it's about **sensitive dependence on initial conditions**. The Mandelbrot Set and the Logistic Map demonstrate that simple mathematical rules can produce infinite complexity.

### The Butterfly Effect Explained
In 1961, meteorologist Edward Lorenz rounded a number from .506127 to .506. That tiny difference—less than the flutter of a butterfly's wing—caused his weather simulation to predict a hurricane instead of sunshine.

This calculator lets you visualize that divergence.
*   **R-Values 1.0 - 2.9**: The system is stable. Populations settle into equilibrium.
*   **R-Value 3.0 - 3.5**: Period Doubling. The population bounces between two stable states (Boom and Bust).
*   **R-Value 3.56+**: Chaos. The pattern never repeats, yet stays within bounds. This is the "Strange Attractor."

### Where We See This in Real Life
*   **Heart Rate Variability**: A completely steady heartbeat is actually a sign of heart failure. A healthy heart has a chaotic, fractal rhythm.
*   **Stock Markets**: While trends exist, the micro-movements are governed by chaotic feedback loops of millions of traders.
*   **Dripping Faucets**: The rhythm of a leaky tap transitions from periodic to chaotic as the flow rate increases.
`,faq:[{question:"Is the Mandelbrot Set infinite?",answer:"Yes. You can zoom in forever and never find the exact same image twice, yet you will always find 'mini-Mandelbrots' (self-similarity)."},{question:"Can computers predict chaos?",answer:"Only for a short time. Due to the 'Lyapunov Horizon', errors multiply exponentially. That's why weather forecasts are useless beyond 10 days."},{question:"What is the 'Feigenbaum Constant'?",answer:"4.669... It's a universal number (like Pi) that dictates how quickly systems descend into chaos, applicable to everything from fluid dynamics to animal populations."}],relatedCalculators:["chaos-microscope","double-pendulum","butterfly-effect"]},{id:"inflation-impact",title:"Inflation Impact",description:"Historical purchasing power.",category:"mathmagik",slug:"inflation-impact",icon:"💸",origin:"Money is a time machine that slowly loses its charge. This tool uses historical CPI data to show you why your grandparents' $1 was worth a whole lot more than yours.",howTo:"Enter an amount and a year. We'll show you the equivalent purchasing power in today's dollars, highlighting the 'invisible tax' of inflation.",tips:["A candy bar in 1950 wasn't just cheaper; it was a different economy.","Inflation averages about 2-3% per year.","Assets that beat inflation are key to long-term wealth."],tags:["Economics","History"],content:`
## The Silent Thief of Wealth

Inflation is not just "prices going up." It is the **devaluation of currency**.
If the prompt prints 10% more money this year, every dollar you held from last year is worth ~10% less. It's a tax on anyone who saves cash.

### The Big Mac Index
Economists often use the "Big Mac" as a standard unit of measure.
*   **1980**: $1.60
*   **2000**: $2.51
*   **2024**: $5.69
The burger didn't get better. The bun didn't get bigger. Your money just got weaker.

### Hyperinflation Nightmares
We complain about 8% inflation. Imagine **Hungary, 1946**: Prices doubled every 15 hours.
Or **Zimbabwe, 2008**: They printed a **100 Trillion Dollar** banknote... which wasn't enough to buy a loaf of bread.
`,faq:[{question:"Is deflation better?",answer:"Surprisingly, no. If money gains value, people stop spending (hoarding), and the economy freezes. Central banks target 2% inflation as the 'sweet spot'."},{question:"How do I beat it?",answer:"Don't hold cash. Invest in assets that rise with inflation (Stocks, Real Estate, Commodities)."},{question:"Why is housing so expensive?",answer:"Housing often outpaces general CPI inflation because land is finite. It's an asset class, not just a consumer good."}],relatedCalculators:["fire-number","billionaire-buyout","time-is-money"]},{id:"life-visualized",title:"Your Life Visualized",description:"Memento Mori weeks grid.",category:"mathmagik",slug:"life-visualized",icon:"📅",origin:"Stoic philosophers used 'Memento Mori' (Remember you must die) not to be morbid, but to inspire action. This grid visualizes your entire life in weeks on a single screen.",howTo:"Enter your birthdate. Each square represents one week of an 80-year life. See how much time you've spent and how much 'white space' you have left to fill.",tips:["Don't let the grid scare you; let it motivate you.","Highlight significant milestones to see your personal history.","Every single square is a gift. Use this one well."],tags:["Philosophy","Stoicism"],content:`
## Memento Mori (Remember Death)

It sounds morbid, but it's the most life-affirming math you can do.
The average human lives about **4,000 weeks**. That's it. That's the budget.

### The Tail End
Tim Urban (Wait But Why) famously pointed out that by the time you leave high school, you have likely already used up **93% of the time you will ever spend with your parents**.
The remain 7% is spread out over decades.
*   **Red Squares**: Childhood/School.
*   **Blue Squares**: Career.
*   **Green Squares**: Retirement.

### Why Visualize It?
Most of us live as if we have infinite time. We stay in jobs we hate, hold grudges, and doom-scroll.
Seeing your life as a finite grid of boxes forces you to ask: *"Is this argument worth one of my remaining boxes?"*
`,faq:[{question:"Is 80 years optimistic?",answer:"Global life expectancy is ~73, but in developed nations, 80 is standard. Medical tech might push this to 90 or 100 for Gen Z."},{question:"This gives me anxiety.",answer:"Good. That anxiety is urgency. Use it to call your mom, book that trip, or quit that toxic job."},{question:"Can I buy more squares?",answer:"No. You can trade money for comfort, but you cannot trade money for time. Time is the only truly non-renewable resource."}],relatedCalculators:["unspent-potential","generational-timeline","sleep-cycle"]},{id:"butterfly-effect",title:"Butterfly Effect",description:"Chaos theory visualizer for life choices.",category:"mathmagik",slug:"butterfly-effect",icon:"🦋",origin:"Based on Edward Lorenz's model of atmospheric unpredictability. Small initial conditions can lead to vastly different global outcomes over a long enough timeline.",howTo:"Choose a minor life choice (like a coffee order) to see a potential causal branch. Visualize how that small ripple creates a massive outcome shift in your future.",tips:["A minor lane change can prevent a life-altering event 10 years later.","The present determines the future, but approximately.","Small ripples create the biggest waves in social causal logic."],tags:["Chaos Theory","Philosophy"],content:`
## The Flap of a Wing

In 1972, Edward Lorenz gave a talk titled:
*"Does the flap of a butterfly’s wing in Brazil set off a tornado in Texas?"*
His answer: **Maybe.**

### Sensitive Dependence
Complex systems (weather, the economy, your life) are not linear.
*   **Linear**: Throw a ball 2x harder, it goes 2x far.
*   **Non-Linear**: Throw a ball 2.0001x harder, and it might hit a bird, which startles a cat, which runs into the road, causing a traffic jam...

### The "Sliding Doors" Moment
Think of a choice you made 5 years ago. Maybe you said "Hi" to a stranger at a party.
*   That stranger became your boss.
*   Or your spouse.
*   Or they gave you the flu, causing you to miss a flight that later crashed.
You are constantly navigating a branching tree of infinite probabilities.
`,faq:[{question:"Is this Fate?",answer:"Chaos is the opposite of Fate. Fate implies a script. Chaos implies that the future is unwritten and wildly malleable."},{question:"Can I control it?",answer:"No. You can only surf the probability waves. Good inputs generally increase the odds of good outputs, but there are no guarantees."},{question:"What is the 'Attractor'?",answer:"Visualizations of chaos (like the Lorenz Attractor) show that while efficient paths vary, they tend to orbit around certain states. Your 'habits' are the attractors of your life."}],relatedCalculators:["chaos-explorer","double-pendulum","time-paradox"]},{id:"sleep-cycle",title:"Sleep Cycle Optimizer",description:"Plan your sleep around 90-minute REM cycles.",category:"lifehacks",slug:"sleep-cycle",icon:"🌙",origin:"The human brain sleeps in cycles of approximately 90 minutes. Waking up at the end of a cycle makes you feel refreshed, while waking mid-cycle leads to that 'morning zombie' grogginess.",howTo:"Input the time you need to wake up (or the time you're heading to bed). We'll calculate the perfect windows for you to drift off and wake up perfectly in sync with your biology.",tips:["The average human takes 14 minutes to fall asleep.","Try to get 5 or 6 full cycles for a perfect night's rest.","Even a 20-minute power nap can reset your focus."],tags:["Health","Productivity"],content:`
## Stop Waking Up Groggy

Have you ever slept for 10 hours and woken up exhausted? Or slept for 4 hours and felt like a superhero? 
You probably messed with your **Sleep Cycles**.

### The 90-Minute Rule
Human sleep isn't a flat line of unconsciousness. It cycles through stages (Light, Deep, and REM) roughly every 90 minutes. 
*   **Deep Sleep**: Your body repairs itself. Hardest to wake up from.
*   **REM Sleep**: You dream. Your brain consolidates memories.

If your alarm goes off while you are in Deep Sleep, you will suffer from "Sleep Inertia"—that heavy, confused, groggy feeling that takes hours to shake off. If you wake up at the *end* of a cycle (during light sleep), you wake up naturally and smoothly.

## How the Math Works

The calculator uses a standard biological baseline: the average sleep cycle lasts exactly 90 minutes, and the average human takes 14 minutes to fall asleep. 

If you need to wake up at 7:00 AM, the algorithm works backward in 90-minute chunks, adding the 14-minute buffer, to output optimal bedtime suggestions. For example, sleeping for exactly 6 cycles (9 hours) or 5 cycles (7.5 hours) ensures your alarm catches you at the top of a sleep stage curve rather than the bottom.
`,faq:[{question:"What if I take longer than 14 minutes to fall asleep?",answer:"The 14-minute rule is an average baseline. If you consistently toss and turn for 30 minutes, you should manually adjust your bedtime backward to compensate for the latency."},{question:"Are naps mathematically viable?",answer:"Yes! A 20-minute power nap keeps you in Light Sleep so you don't wake up groggy. A 90-minute nap gives you one full restorative cycle. Anything in between (like 45 minutes) traps you in Deep Sleep and ruins your afternoon."},{question:"Does alcohol affect sleep cycles?",answer:"Massively. Alcohol may help you fall asleep faster, but it severely disrupts REM sleep in the second half of the night, meaning you get poorer quality cycles overall."},{question:"Is 8 hours a myth?",answer:"Mostly. 7.5 hours (5 full cycles) or 9 hours (6 full cycles) align better with human biology than an arbitrary flat 8 hours."},{question:"Can I train myself to need fewer cycles?",answer:"You can force yourself to sleep less, but cognitive performance demonstrably drops. A tiny percentage of the population has a 'short sleep' genetic mutation, but for the rest of us, 4-5 cycles is the absolute biological floor."}],relatedCalculators:["caffeine-half-life","procrastination-roi","social-media-addiction"]},{id:"procrastination-roi",title:"Procrastination ROI",description:"Visualize when the Panic Monster will strike.",category:"lifehacks",slug:"procrastination-roi",icon:"💣",origin:"Based on Tim Urban's 'Wait But Why' procrastination theory. We track the delicate balance between the Rational Decision Maker and the Instant Gratification Monkey.",howTo:"Input your deadline and your current 'distraction level'. We'll map the growth of the 'Panic Monster' and predict exactly when you'll actually start working.",tips:["Break big tasks into tiny, non-scary steps.","The '5-Minute Rule': just do it for 5 minutes, and then you can stop.","Your future self will thank you for starting now."],tags:["Productivity","Psychology"],content:`
## The Panic Monster

Procrastination is rarely a time-management problem; it is almost always an **emotion-management** problem. You aren't avoiding the task; you are avoiding the *negative feeling* (boredom, fear of failure, anxiety) associated with the task.

### The Brain's Battle
Tim Urban famously models this as a battle in the brain:
1.  **The Rational Decision-Maker**: Wants to do productive work.
2.  **The Instant Gratification Monkey**: Only cares about fun and easy things *right now*.
3.  **The Panic Monster**: Sleeps until a deadline approaches, then wakes up and scares the monkey away.

The problem with modern life (e.g., getting in shape, building a business) is that there are no hard deadlines. So the Panic Monster never wakes up, and the Monkey steers the ship forever.

## How the Math Works

The tool models procrastination as a compounded delay algorithm. You input your task's total required hours and the deadline. The script divides the remaining time into discrete "distraction windows." 

By mapping your self-reported distraction level against the countdown, it plots an exponential decay curve. The "Panic Monster Baseline" triggers exactly when the remaining hours drop below $1.2 \\times \\text{Task Hours}$, outputting the literal date and time when your stress levels will biologically force you to begin working.
`,faq:[{question:"Is procrastination just laziness?",answer:"No. Laziness is apathy. Procrastination is an active, stress-inducing avoidance mechanism triggered by negative emotional associations with a task."},{question:"Does the Panic Monster work for ADHD?",answer:"Yes, but it's often more extreme. ADHD brains frequently rely entirely on the adrenaline rush of an impending deadline to generate enough dopamine to initiate focus."},{question:"How do I beat the Instant Gratification Monkey?",answer:"Reduce the friction to start. Make the 'right' choice easier than the 'wrong' choice. Block websites, put your phone in another room, and commit to just 5 minutes of work."},{question:"What if there is no deadline?",answer:"This is the danger zone. Things like 'saving for retirement' or 'writing a book' have no natural deadlines. You must artificially manufacture real consequences (like giving a friend $100 if you fail) to wake up the Panic Monster."},{question:"Is procrastination genetic?",answer:"There is some evidence linking impulsivity genes to chronic procrastination, but environmental habits and emotional regulation strategies play a much larger role."}],relatedCalculators:["unspent-potential","social-media-addiction","stress-ice-cream"]},{id:"social-media-addiction",title:"Social Media Addiction",description:"How many years of your life are spent scrolling?",category:"lifehacks",slug:"social-media-addiction",icon:"📱",origin:"Social media apps are designed for 'infinite scroll' to keep you engaged. This tool calculates the cumulative impact of those 'just 5 more minutes' sessions over a lifetime.",howTo:"Estimate your daily usage across all platforms. We'll extrapolate that into years, months, and days, showing you what else you could have accomplished with that time.",tips:["Turn off non-essential notifications.","Set a grayscale filter on your phone to make it less appealing.","Try a 'Digital Detox' Sunday."],tags:["Digital Health","Psychology"],content:`
## The Infinite Scroll Trap

Social media platforms are not designed to connect you; they are designed to **harvest your attention**. Every like, pull-to-refresh, and notification red badge is a psychologically weaponized trigger designed by casino slot-machine engineers.

### The Cumulative Cost
"It's just an hour a day." 
An hour a day doesn't feel like much. But mathematically:
*   1 hour a day = 7 hours a week.
*   7 hours a week = ~365 hours a year.
*   365 hours a year is **over 9 entire 40-hour work weeks**.

You are effectively working a part-time job as an unpaid data generator for advertising companies, permanently sacrificing your focus and baseline dopamine levels in the process.

## How the Math Works

The tool uses a straightforward time-extrapolation sequence. It takes your daily screen-time inputs, multiplies them by 365.25 for annual totals, and projects them against a standard 80-year lifespan. 

To provide context, it maps those raw hour counts against standard skill acquisition metrics (e.g., 20 hours to learn the basics of a guitar, 500 hours to achieve fluency in a new language). The calculator simply divides your 'scrolling hours' by these skill metrics to output the alternative 'Unspent Potential' you are trading away.
`,faq:[{question:"Is screen time actually bad for my brain?",answer:"Yes. Endless scrolling artificially spikes your dopamine. Over time, your baseline dopamine receptors down-regulate, making normal, slower activities (like reading or working) feel excruciatingly boring."},{question:"How much screen time is 'normal'?",answer:"The global average for internet users is nearly 2.5 hours on social media alone. However, 'normal' is not 'healthy'. Aiming for under 30 minutes significantly improves mental wellbeing."},{question:"Why is it so hard to stop?",answer:"Because apps use 'Variable Ratio Reinforcement'. You never know what the next post will be—it might be boring, or it might be amazing. This unpredictability is the most addictive behavioral loop in psychology."},{question:"Does turning my screen to grayscale actually work?",answer:"Absolutely. Bright colors (especially red notification dots) trigger primal attention centers in your visual cortex. Grayscale removes the candy-like appeal of the interface."},{question:"Is this calculator judging me?",answer:"No, it's just doing the math! The goal isn't guilt; the goal is agency. Once you see the true cost of your time, you can make informed decisions about how you spend it."}],relatedCalculators:["procrastination-roi","time-is-money","life-visualized"]},{id:"coffee-code",title:"Coffee to Code Efficiency",description:"Calculate caffeine-fueled productivity.",category:"lifehacks",slug:"coffee-code",icon:"☕",origin:"Computer science legend says that a programmer is a machine for turning coffee into code. This tool calculates the 'Goldilocks Zone' of caffeination for maximum output.",howTo:"Log your caffeine intake and track your lines of code (or finished tasks). We'll find the peak efficiency point where your focus is laser-sharp before the jitters take over.",tips:["Hydrate with water between cups of coffee.","Coffee-fueled productivity peaks about 45 minutes after ingestion.","Avoid caffeine 6 hours before your intended sleep time."],tags:["Productivity","Work"],content:`
## The Programmer's Fuel

There is a famous axiom in computer science (often attributed to Paul Erdős): *"A mathematician is a device for turning coffee into theorems."* The same holds true for developers.

Caffeine is a central nervous system stimulant. It blocks adenosine receptors in the brain, temporarily disabling your brain's ability to feel fatigued.

### The Ballmer Peak Error
Many coders believe in the "Ballmer Peak"—a satirical graph suggesting productivity spikes at a very specific Blood Alcohol Content. The caffeine equivalent is very real.
*   **1 Cup**: Focus increases. Bug squashing efficiency rises.
*   **2 Cups**: Peak lateral thinking. You feel like a wizard.
*   **4+ Cups**: The Jitters. You type faster but introduce infinitely more bugs because your working memory is fractured by anxiety.

## How the Math Works

The tool models productivity using a parabolic bell curve formula. By taking your baseline tolerance and inputting the mg of caffeine consumed, the script maps your place on the Yerkes-Dodson arousal curve. 

Peak cognitive performance hits the apex of the parabola. If your dosage pushes you past the top of the curve, the output applies an inverted secondary multiplier, drastically reducing your 'Lines of Code' (LOC) projection to simulate the negative impact of jitter-induced syntax errors and shattered focus.
`,faq:[{question:"How long does caffeine stay in my system?",answer:"The half-life of caffeine is roughly 5 to 6 hours. If you drink a 100mg coffee at 4 PM, you still have 50mg actively blocking sleep receptors at 10 PM."},{question:"What is the daily maximum safe limit?",answer:"The FDA recommends no more than 400mg per day for healthy adults, which is roughly four 8oz cups of brewed coffee (or two intense energy drinks)."},{question:"Do some people genetically metabolize caffeine faster?",answer:"Yes! Variants in the CYP1A2 gene dictate whether you are a 'fast' or 'slow' metabolizer. Slower metabolizers get the jitters easier and suffer worse sleep disruption."},{question:"Is energy drink caffeine different from coffee caffeine?",answer:"Caffeine is caffeine. However, energy drinks often contain massive doses of sugar and taurine, which artificially steepen the spike and worsen the inevitable crash."},{question:"Can I build a permanent tolerance?",answer:"Unfortunately, yes. Your brain adapts by creating *more* adenosine receptors. Eventually, you need your morning coffee just to reach baseline normal, not to get an energy boost."}],relatedCalculators:["caffeine-half-life","sleep-cycle","procrastination-roi"]},{id:"unspent-potential",title:"Unspent Potential Tax",description:"Quantify the hidden cost of procrastination.",category:"lifehacks",slug:"unspent-potential",icon:"⚖️",origin:"Inspired by the 'Emotional Debt' of procrastination. Every hour spent delaying a task is a 'tax' paid by your future self's leisure time.",howTo:"Input your task and the time you've spent delaying it. We'll calculate your 'Leisure Fine' and the resulting spike in your 'Cortisol Index'.",tips:["Completing a task resets your Cortisol Index to zero immediately.","Leisure debt is unpaid relaxation you've stolen from your weekend.","Procrastination is often just a fear of the 'Unspent Potential' itself."],tags:["Psychology","Motivation"],content:`
## The Leisure Debt

When you procrastinate, you do not actually enjoy the time you spend avoiding the task. You are in a state of high-stress limbo.

Psychologists call this the **Procrastination Penalty** or **Emotional Debt**. You trade away high-quality, guilt-free leisure time for low-quality, anxiety-ridden avoidance time. By the time Friday arrives, your 'Unspent Potential' has compounded into a heavy cognitive load that ruins your weekend.

## How the Math Works

The engine calculates your "Cortisol Index" using a psychological burden formula. You input the estimated difficulty of the task (1-10) and the number of hours you have delayed it. 

The algorithm treats the delay as a high-interest loan. For every hour delayed, the perceived difficulty of the task multiplies by a factor of 1.15. The calculator outputs the "Leisure Fine"—the exact amount of high-quality relaxation time you've permanently robbed from your future self simply by worrying about the task instead of doing it.
`,faq:[{question:"Why does avoiding a task feel so exhausting?",answer:"Because it requires active cognitive suppression. Your brain has to burn ATP energy trying to 'not think' about the looming deadline, which is far more exhausting than simply doing it."},{question:"What is guilt-free leisure?",answer:"Leisure that occurs *after* your necessary tasks are completed. Your brain releases serotonin and endorphins, allowing true muscular and cognitive relaxation."},{question:"How do I wipe out my Leisure Debt?",answer:"The interest rate on Leisure Debt drops to zero the exact second you begin the task. Action is the only mechanism that forgives the debt."},{question:"Is procrastination a form of perfectionism?",answer:"Very often, yes. If you are terrified you won't do the task perfectly, you avoid starting it entirely so your 'Unspent Potential' remains theoretically flawless."},{question:"Can I ever get the lost relaxation time back?",answer:"Mathematically, no. Time is perfectly inelastic. But acknowledging the sunk cost is the first step to breaking the cycle for future tasks."}],relatedCalculators:["procrastination-roi","time-is-money","social-media-addiction"]},{id:"stress-ice-cream",title:"Stress-to-Ice-Cream Ratio",description:"Emotional support dairy calculator.",category:"lifehacks",slug:"stress-ice-cream",icon:"🍦",origin:"Sometimes, the only solution to a bad day is a pint of mint chocolate chip. This scientific (ish) scale matches your current stress level to the appropriate serving size.",howTo:"Rate your day on a scale of 'Minor Inconvenience' to 'Total Existential Crisis'. We'll recommend the exact amount of emotional support dairy required to cope.",tips:["A waffle cone adds +10 to your happiness stat.","Sprinkles are scientifically proven to be cheer-inducing.","Share a pint to halve the stress and double the joy."],tags:["Mental Health","Food"],content:`
## The Science of Emotional Support Dairy

When life gives you lemons, you make lemonade. But when life gives you **stress**, the only scientifically valid response is **ice cream**.

The **Stress-to-Ice-Cream Ratio (SICR)** is a critical metric for navigating modern life. Developed by our team of "Crisis Connoisseurs," this calculator goes beyond simple cravings. It uses advanced variables like "Work Deadline Proximity" and "Recent Breakup Status" to prescribe the precise dosage of dairy (or non-dairy alternative) required to return your dopamine levels to baseline.

### How It Works

Our algorithm considers three main factors:

1.  **Base Stress Level (BSL):** A quantitative measure of your current internal screamy-ness, rated from 1 (Chilling) to 10 (Nuclear Meltdown).
2.  **The Heartbreak Coefficient:** A breakup triggers an automatic biological need for high-fat, high-sugar comfort foods. We account for this with the "Chunky Monkey Protocol."
3.  **The Deadline Multiplier:** Stress induced by work requires "Fuel Ice Cream"—flavors that can be eaten with one hand while typing furiously with the other.

### Why Trust This Calculator?

Because guessing is dangerous. Undercut your dosage, and you're left staring at the ceiling at 3 AM. Overdose, and you're dealing with a brain freeze and a sugar crash. We provide the **Goldilocks Zone** of comfort.

_Disclaimer: This tool prescribes ice cream for emotional support, not medical treatment. If your stress is manageable only by industrial quantities of frozen dessert, please consider also talking to a friend or professional!_
`,faq:[{question:"Is this medically accurate?",answer:"It is spiritually accurate. While we are not doctors, we are experts in eating our feelings."},{question:"Does this work for Gelato?",answer:"Yes! However, Gelato is denser, so you can technically reduce the pint count by 20% for the same emotional density."},{question:"What if I can't eat dairy?",answer:"The math holds for oat milk, almond milk, and sorbet alternatives. Comfort is universal, regardless of your lactose tolerance."}],relatedCalculators:["should-i-engage","procrastination-roi","coffee-code"]},{id:"time-is-money",title:"Time is Money",description:"Convert purchase costs into hours of your life.",category:"lifehacks",slug:"time-is-money",icon:"⏳",origin:"Everything you buy costs more than just dollars; it costs the time you spent earning those dollars. This tool helps you decide if that new gadget is worth 3 days of your life.",howTo:"Input your hourly wage and the price of an item. We'll show you the 'Time Cost' of the purchase, giving you a fresh perspective on spending.",tips:["Always think in 'Hours of Life', not just currency.","Luxury items often have the highest time-to-joy cost.","Saving money is effectively 'buying' your future time."],tags:["Finance","Perspective"],content:`
## Stop Thinking in Dollars

When you look at a $1,000 phone, you process it as a numerical currency value. But if you make $20 an hour, that phone actually costs **50 hours** of your life. 

That's over an entire work week of waking up early, commuting, sitting in meetings, and dealing with your boss—just to buy a piece of glass and silicon.

### The True Cost
The "Time is Money" framework completely re-wires your brain's impulse control by converting arbitrary currency back into the only truly finite resource you have: your time.

## How the Math Works

The core calculation is fundamentally straightforward division: *Cost / Hourly Wage = Time Cost*. 

However, to provide a hyper-accurate picture, the calculator can also adjust for **post-tax income**. Simply dividing by your gross wage is a fallacy because the government takes a percentage. If you make $20/hr but take home $15/hr after taxes, the script divides the item's cost by your *true net wage* to output the exact days, hours, and minutes of human labor required to acquire the item.
`,faq:[{question:"Should I use my gross or net income?",answer:"Always use your net (post-tax) income. You can't buy things with money the government takes, so using your gross hourly rate creates a falsely optimistic time cost."},{question:"Does this mean I shouldn't buy anything nice?",answer:"Not at all. If a $2,000 mattress costs you 100 hours of labor, but gives you 10 years of incredible sleep, it's a phenomenal ROI. It's meant to stop mindless spending, not joyful spending."},{question:"How do I calculate this if I'm salaried?",answer:"Take your annual take-home pay and divide it by the number of hours you work a year. For a standard 40-hour work week with 2 weeks of vacation, you work roughly 2,000 hours a year."},{question:"What if it's an investment, like a laptop for work?",answer:"The calculator is best used for consumption, not investment. If a tool helps you increase your hourly rate later, the initial 'Time Cost' pays a dividend back over time."},{question:"Is my time literally money?",answer:"Yes and no. You can always earn more money, but you can never earn more time. That's why trading your money to buy back time (like paying for a direct flight instead of a layover) is often the optimal mathematically sound choice."}],relatedCalculators:["billionaire-buyout","fire-number","inflation-impact"]},{id:"pepper-scale",title:"How Hot Is That Pepper?",description:"Scoville scale visualizer & survival guide.",category:"lifehacks",slug:"pepper-scale",icon:"🌶️",origin:"The Scoville Scale measures the concentration of capsaicin. From the mild bell pepper to the soul-crushing Carolina Reaper, we map the journey from 'Tingly' to 'Regretty'.",howTo:"Select a pepper or input a Scoville Heat Unit (SHU) value. We'll show you the heat intensity and provide a survival guide for your taste buds.",tips:["Milk and bread help neutralise capsaicin better than water.","Don't touch your eyes after handling hot peppers!","Heat tolerance is a skill you can train over time."],tags:["Food","Science"],content:`
## The Science of Spicy

Spiciness is not a taste; it is literally a **pain signal**. 

Peppers evolved to produce a chemical compound called **capsaicin** to deter mammals from eating them (while birds, who don't have capsaicin receptors, can eat the seeds and disperse them). When capsaicin binds to the TRPV1 receptors on your tongue, it tricks your brain into thinking your mouth is physically on fire.

### The Scoville Heat Unit (SHU)
Created by Wilbur Scoville in 1912, the SHU measures the concentration of capsaicin. Originally, it was a subjective test of how much sugar water it took to dilute the pepper until the heat was undetectable. Today, we use High-Performance Liquid Chromatography (HPLC) for an exact scientific measurement.

## How the Math Works

The tool maps input values across a logarithmic scale of known SHU boundaries. 

If you input a raw SHU number (e.g., 50,000), the script iterates against our pepper database to find the closest match. It then calculates a "Tear Factor" multiplier by dividing your input by the baseline heat of a standard Jalape\xf1o (~5,000 SHU). For example, a 2-million SHU Carolina Reaper will output a warning that it is 400x hotter than a Jalape\xf1o, triggering the 'Survival Guide' UI module.
`,faq:[{question:"Why shouldn't I drink water when my mouth is burning?",answer:"Capsaicin is a hydrophobic (water-fearing) oil. Drinking water is like throwing water on a grease fire; it just spreads the spicy oil around your mouth."},{question:"Why does milk work then?",answer:"Dairy contains casein, a lipophilic (fat-loving) protein that binds with the capsaicin molecules and physically washes them away from your pain receptors."},{question:"Can eating hot peppers physically burn my stomach?",answer:"No. The burning sensation is entirely neurological. However, extremely spicy foods can trigger aggressive gastrointestinal reflexes (like cramps or nausea) as your body tries to expel the 'poison'."},{question:"What is the hottest pepper in the world?",answer:"As of 2023, the 'Pepper X' officially holds the Guinness World Record, averaging an astronomical 2.69 million Scoville Heat Units, dethroning the Carolina Reaper."},{question:"Why do some people love spicy food if it's painful?",answer:"Pain triggers the body's survival mechanisms, releasing a massive flood of endorphins and dopamine. For 'chili-heads', eating hot sauce is literally a legally mild, natural high."}],relatedCalculators:["should-i-engage","coffee-code","sleep-cycle"]},{id:"should-i-engage",title:"Should I Engage?",description:"Strategic decision tree for conversations.",category:"lifehacks",slug:"should-i-engage",icon:"🤔",origin:"Based on social intelligence frameworks. Not every argument needs an answer, and not every comment needs a rebuttal. This tool helps you preserve your mental energy.",howTo:"Answer a few questions about the person, the topic, and your current mood. We'll give you a 'Go/No-Go' recommendation for the engagement.",tips:["If it won't matter in 5 years, don't spend more than 5 minutes on it.","Pick your battles wisely.","Sometimes, 'Okay' is the most powerful response."],tags:["Social","Mental Health"],content:`
## The Cost of Being Right

In the age of endless internet debates and chronic office politics, your attention is your most valuable asset.

There is natural instinct to correct people when they are wrong. Psychologically, "winning" an argument gives a brief hit of dopamine. However, the cortisol (stress) fallout and the hours lost to mental rumination often create a dramatically negative Return on Investment (ROI).

### The 5x5 Rule
A core tenet of emotional intelligence is the 5-by-5 rule: *If it won't matter in 5 years, don't spend more than 5 minutes being angry about it.* You do not owe an explanation to everyone who misunderstands you.

## How the Math Works

This calculator uses a deterministic decision tree mapped against energy economics. 

You input boolean logic regarding the context (e.g., Is this person your boss? Are they acting in good faith? Are you already tired?). The script assigns weighted 'Friction Points' to each variable. If the cumulative friction exceeds your current "Emotional Runway", the algorithm outputs a hard 'NO', advising you to drop the subject to prevent an unrecoverable energy deficit.
`,faq:[{question:"Isn't it important to stand up for the truth?",answer:"Yes, but context matters. Standing up for the truth in a courtroom or a vital relationship is essential. Arguing with a stranger in a YouTube comment section is a mathematically proven waste of biological energy."},{question:"What if they are spreading dangerous misinformation?",answer:"Assess your actual influence. If correcting them will actively protect someone in the immediate vicinity, engage. If you are just trying to change the mind of a rigid ideologue, save your breath."},{question:"How do I gracefully exit an argument I've already started?",answer:"Use the magic phrase: 'You've given me a lot to think about, I'm going to process this.' It abruptly ends the feedback loop without sounding aggressive."},{question:"Why do some people argue just for fun?",answer:"Some personalities use conflict as a mechanism for connection or stimulation. They aren't looking for a resolution; they are looking for a sparring partner. Don't step into the ring unless you are getting paid."},{question:"Does ignoring people make me weak?",answer:"Exactly the opposite. Controlling your impulses requires high executive function. Not engaging is a flex of extreme psychological discipline."}],relatedCalculators:["procrastination-roi","social-media-addiction","time-is-money"]},{id:"elevator-dilemma",title:"The Elevator Dilemma",description:"Wait for the lift or take the stairs? Optimization for the impatient.",category:"lifehacks",slug:"elevator-dilemma",icon:"🛗",origin:"The 'wait calculation' is a daily subconscious battle. Often, the perceived effort of stairs outweighs the hidden cost of waiting, leading to net time loss and missed cardio.",howTo:"Input your floor number and the estimated crowd level. We'll tell you if you should press the button or hit the stairwell.",tips:["Taking the stairs burns ~0.17 calories per step.","Waiting for an elevator feels 2x longer than it actually is.","Avoiding eye contact in a lift requires advanced spatial awareness."],tags:["Time","Health","Efficiency"],content:`
## The Illusion of Waiting

We have all stood outside a closed elevator door, staring at a frozen arrow, doing mental calculus. *Should I just take the stairs?*

Humans are notoriously terrible at judging the passage of time when bored. A 15-second wait feels like a minute; a 60-second wait feels like an eternity. We often choose to take the stairs not because it is faster, but because **action feels better than inaction**.

### The Paradox of Effort
Often, climbing 4 flights of stairs will take exactly 45 seconds, leaving you sweaty and panting. The elevator would have arrived in 20 seconds and conveyed you in 10. You lost 15 seconds *and* expended physical effort simply because your brain panicked at the idea of standing still.

## How the Math Works

The tool models standard architectural elevator speeds against human biomechanics. 

A standard commercial elevator moves at roughly 2.5 seconds per floor, plus a 10-second penalty per stop for doors opening and closing. A healthy human climbs stairs at roughly 4 seconds per floor. By inputting the total floors and estimated crowd congestion, the script calculates the precise "Intersect Point". It outputs an exact verdict: wait for the mechanical lift, or take the cardiovascular option.
`,faq:[{question:"Are elevators actually faster for just 2 floors?",answer:"Usually, no. For anything under 3 floors, walking is generally faster because of the baseline door-opening and boarding delays."},{question:"Why do elevators have mirrors?",answer:"It is a psychological hack. Mirrors give you something to look at (yourself or discreetly at others), which decreases the *perceived* wait time and stops you from complaining about the speed."},{question:"Does pressing the call button multiple times make it faster?",answer:"No. The system registers a boolean value (True/False) for the call. Pressing it 40 times will not increase priority, but it might make you feel a false sense of control."},{question:"Is closing the doors manually a real thing?",answer:"In the United States, the 'Door Close' button usually does nothing; it's a placebo. Since the ADA was passed in 1990, doors must remain open long enough for someone with crutches or a wheelchair to board."},{question:"How many calories do I burn taking the stairs?",answer:"You burn approximately 0.17 calories per step. Climbing a standard flight of 12 stairs burns roughly 2 total calories."}],relatedCalculators:["time-is-money","caffeine-half-life","car-vs-uber"]},{id:"exterminatus-cost",title:"Exterminatus Cost",description:"Calculate the price of planetary destruction.",category:"otakuops",slug:"exterminatus-cost",icon:"🔥",origin:"When a planet is beyond saving, the Imperium of Man has one final solution. But even the Emperor's mercy comes with a budget report attached.",howTo:"Select your target planet type and the method of execution. We'll tally the cost in Throne Gelt and lives.",tips:["Cyclonic Torpedoes crack the crust.","Virus Bombs leave infrastructure intact.","Bureaucracy is the deadliest weapon of all."],tags:["Warhammer 40k","Sci-Fi","Lore"],content:`
## The Ultimate Sanction

In the grim darkness of the far future, sometimes a planet is too corrupted to save.
**Exterminatus** is the complete destruction of a biosphere. It is not done lightly (usually).

### The Methods
1.  **Cyclonic Torpedoes**: Which burrow into the core and crack the planet like an egg.
2.  **Virus Bombs (Life-Eater)**: A biological agent that dissolves all organic matter into sludge in minutes. The gas released then ignites, burning the atmosphere.
3.  **Orbital Bombardment**: Just shooting it until nothing is left standing.

### The Bureaucracy
An Inquisitor doesn't just push a button. They must calculate:
*   **The Cost of the Munitions**: Trillions of Thrones.
*   **The Loss of Tithes**: The planet will produce nothing for 10,000 years.
*   **The Strategic Value**: Is it worth denying the enemy this rock?
`,faq:[{question:"Who authorizes it?",answer:"An Inquisitor, a Chapter Master, or a Lord High Admiral. Though Kryptman did it to dozens of worlds just to slow down the Tyranids."},{question:"Can you survive it?",answer:"No. Even deep bunkers are usually crushed or incinerated. Exterminatus is absolute."},{question:"Why not just invade?",answer:"Sometimes the corruption (Chaos or Tyranids) is so deep that 'victory' is impossible. Better to have a dead world than a Daemon world."}],relatedCalculators:["cost-of-war","space-marine-survival","golden-throne-tithe"]},{id:"space-marine-survival",title:"Space Marine Survival Index",description:"How long would you last against an Astartes?",category:"otakuops",slug:"space-marine-survival",icon:"⚔️",origin:"The Astartes are transhuman demigods. You are... well, you. This calculator measures your life expectancy in seconds.",howTo:"Input your physical stats. Be honest. The Emperor knows if you're lying.",tips:["Run.","Hide.","Pray."],tags:["Warhammer 40k","Sci-Fi","Lore"],content:`
## His Angels of Death

A Space Marine (Astartes) is not a human in a suit. They are biologically enhanced weapons of war.
*   **Height**: 7-8 feet.
*   **Weight**: 500-1,000 lbs (unnarmored).
*   **Reaction Time**: Nanoseconds.

### The Survival Odds
For a Guardsman, the life expectancy is 15 hours.
For a Space Marine, it is centuries. They heal instantly (Larraman's Organ), breathe poison (Multi-lung), and can eat rocks (Preomnor).
However, they are sent into the worst hellscapes imaginable. If a Marine dies, it's usually because something truly horrific killed him.

### Armor Save
In the tabletop game, Marines rely on their 3+ Armor Save and 4+ Invulnerable Save (Iron Halo). In lore, their Ceramite plate can tank tank shells.
`,faq:[{question:"Do they know fear?",answer:"Bio-conditioning removes the chemical ability to feel terror. They know 'tactical caution', but not fear (usually)."},{question:"How many are there?",answer:"Roughly 1,000 per Chapter. With ~1,000 loyal chapters, that's 1 Million Marines for a galaxy of Quadrillions of humans. They are rare mythic figures."},{question:"Can they retire?",answer:"Only in death does duty end. Marines serve until they are killed. The oldest (Dante) is over 1,500 years old."}],relatedCalculators:["exterminatus-cost","spartan-augmentation","zombie-survival"]},{id:"warp-travel",title:"Warp Travel Time",description:"Navigate the Immaterium without going insane.",category:"otakuops",slug:"warp-travel",icon:"🌀",origin:"Time in the Warp does not flow linearly. You might arrive yesterday, or in a thousand years. This tool estimates your temporal drift.",howTo:"Set your distance and Warp storm intensity. Check if your Gellar Field is active.",tips:["Ignore the whispers.","If the walls start bleeding, ignore that too.","Time is relative; heresy is eternal."],tags:["Warhammer 40k","Sci-Fi","Lore"],content:`
## Sailing Through Hell

In 40k, FTL travel requires tearing a hole in reality and entering the **Immaterium** (The Warp).
The Warp is a dimension of pure psychic energy... and it is inhabited by Daemons.

### The Navigator's Burden
You cannot use a computer to navigate chaos. You need a **Navigator**—a mutant with a third eye who can see the psychic beacon of the Astronomican (The Emperor's Light) on Terra.
They steer the ship through storms of madness.

### Temporal Drift
Time does not exist in the Warp.
*   **Realspace Trip**: 1 year.
*   **Warp Time**: 2 weeks.
*   **Arrival**: You might arrive 100 years late. Or 10 years before you left. Or you might arrive... wrong.
`,faq:[{question:"What is a Gellar Field?",answer:"A bubble of 'reality' around the ship. If it fails, the laws of physics stop working inside the ship, and Daemons manifest instantly."},{question:"Why do they do it?",answer:"It is the only way to hold a galaxy-spanning empire together. Without Warp travel, humanity is isolated and dies."},{question:"Is the Webway safer?",answer:"Yes, the Eldar use the Webway (tunnels between reality and warp). The Emperor tried to build one for humans... it didn't end well."}],relatedCalculators:["slipspace-debt","warp-speed","chaos-explorer"]},{id:"golden-throne-tithe",title:"The Golden Tithe",description:"The cost to keep the Emperor alive.",category:"otakuops",slug:"golden-throne-tithe",icon:"👑",origin:"The Astronomican guides all ships, but it burns 1,000 Psyker souls every single day. Visualize the sheer scale of this sacrifice.",howTo:"Input a duration in years to see the mountain of souls required to keep the light on.",tips:["Only the strong survive the Black Ships.","It is better to die for the Emperor than live for yourself."],tags:["Warhammer 40k","Sci-Fi","Lore"],content:`
## The Carrion Lord

The Emperor of Mankind has sat immobile on the Golden Throne for 10,000 years. He is a rotting corpse held together by sheer psychic will and ancient technology.
To sustain his psychic struggle against the Chaos Gods, he requires fuel.

### The Black Ships
Every day, the Black Ships arrive at Terra with their hold full of **Psykers** (wizards/mutants).
**1,000 souls** are fed into the Golden Throne daily. Their life essence is burned out in seconds to keep the Emperor's lighthouse (The Astronomican) shining.

### The Cost of Survival
Is it evil to sacrifice 365,000 innocent people a year?
*   **Yes**: It is monstrous.
*   **No**: Without it, the Imperium collapses, and trillions die to Daemons.
This is the central moral horror of 40k.
`,faq:[{question:"Does he know?",answer:"It is debated. Some say his mind is shattered. Others say he weeps for every soul. Others say he has become a distinctive God-entity that demands it."},{question:"Is the Throne failing?",answer:"Yes. The tech is breaking down, and the Mechanicus doesn't know how to fix it. The deadline is looming."},{question:"Are there alternatives?",answer:"The Interex and Votann use AI/Tech for navigation, but the Imperium banned AI. They have painted themselves into a corner of blood."}],relatedCalculators:["cost-of-war","exterminatus-cost","ork-waaagh-energy"]},{id:"ork-waaagh-energy",title:"Ork WAAAGH! Energy",description:"Calculate the power of belief (and shouting).",category:"otakuops",slug:"ork-waaagh-energy",icon:"📢",origin:"Ork technology works simply because they believe it does. This calculator quantifies the psionic field generated by a gathering of Boyz.",howTo:"Gather your Boyz, paint something red, and scream. We'll measure the output in Mega-Joules.",tips:["Red ones go fasta.","More Dakka is always the answer.","WAAAGH!"],tags:["Warhammer 40k","Sci-Fi","Lore"],content:`
## The Power of Imagination 🧠

Orks are the comic relief of 40k, but they are terrifyingly powerful.
They possess a passive psychic field called the **WAAAGH!** energy.
It greases the laws of physics. If a million Orks *believe* something works, it works.

### Color Theory 🎨
*   **Red**: "Red wunz go fasta." (Vehicles painted red actually move 10-20% faster).
*   **Yellow**: "More dakka/wealth." (Explosions are bigger).
*   **Blue**: "Lucky." (Orks wearing blue get hit less).
*   **Purple**: "Sneaky." (Invisibility).

### Tech Support 🔧
Ork guns are often just pipes with bolts in them. When a human picks one up, it falls apart. When an Ork holds it, it fires fully automatic. Why? Because the Ork *thinks* it's a gun.
`,faq:[{question:"Can they believe the Emperor dead?",answer:"No. The WAAAGH isn't omnipotent reality warping. It's a 'lubricant' for probability. It can make a rusty engine run, but it can't delete a God."},{question:"Do they know they do it?",answer:"No. Orks just think they are great engineers. 'I put the sprocket in the widget and hit it with a hammer. Now it works.'"},{question:"What is 'More Dakka'?",answer:"There is never enough Dakka (firepower). This is a mathematical constant."}],relatedCalculators:["chaos-explorer","potion-brewer","gacha-despair"]},{id:"slipspace-debt",title:"Slipspace Debt Calculator",description:"Calculate temporal drift in FTL travel.",category:"otakuops",slug:"slipspace-debt",icon:"🚀",origin:"Human slipspace drives are messy. They punch a hole in dimension, but they rarely come out exactly when (or where) they intended.",howTo:"Input your journey distance. We'll calculate the 'debt' you owe the universe in lost time.",tips:["Forerunner crystal shards reduce drift to zero.","The Cole Protocol requires random jumps.","Watch out for random exit vectors."],tags:["Halo","Sci-Fi","Lore"],content:`
## Dimensional Slipstream

In Halo, the Shaw-Fujikawa Translight Engine allows ships to rupture normal space and enter "The Slipstream."
Like the 40k Warp, it breaks physics, but unlike the Warp, there are no demons—just math.

### Wake Turbulence
When a massive object (assault carrier) enters/exits Slipspace, it creates radiation (Cherenkov radiation) and gravitational distortions.
This is how the UNSC detects Covenant fleets before they arrive. "Slipspace Rupture Detected."

### The Debt
Slipspace travel builds up "debt" in the fabric of spacetime.
If too many ships jump at once (or travel too fast), the dimension becomes unstable. Precursor roads famously ignored safe limits and eventually solidified spacetime itself.
`,faq:[{question:"Is it wormhole travel?",answer:"Sort of. It's more like crumpling a piece of paper (space) and punching a hole through to the other side."},{question:"Why are Covenant ships faster?",answer:"They use reverse-engineered Forerunner drives. They can pinpoint jump inside a planet's atmosphere. Humans have to jump to the outskirts of a system to be safe."},{question:"What is the Domain?",answer:"A Precursor information repository stored in Slipspace itself. Basically, the Akashic Records of the universe."}],relatedCalculators:["warp-travel","mjolnir-cost","space-travel"]},{id:"mjolnir-cost",title:"MJOLNIR Armor Cost",description:"Can you afford to be a Spartan?",category:"otakuops",slug:"mjolnir-cost",icon:"🛡️",origin:"A single suit of MJOLNIR armor costs as much as a Starship. This tool puts that price tag into perspective for the average marine.",howTo:"Select your armor generation. Compare the cost to Carrier Battle Groups.",tips:["The shield generator is the most expensive part.","Don't scratch the paint.","ONI pays the bills."],tags:["Halo","Sci-Fi","Lore"],content:`
## Armor as a Platform

MJOLNIR isn't just armor; it's a powered exoskeleton that amplifies the wearer's strength and reaction speed by a factor of 5.
When a normal marine tried to wear it, the suit's reflex enhancers reacted so fast they snapped his bones.
Only a Spartan's reinforced skeleton can withstand the machine.

### The Shield Generator
Reverse-engineered from Jackal wrist gauntlets, the energy shield is the game-changer. It takes the hit, dissipates the energy, and recharges.
This turned Spartans from "Toughs" into "Tanks."

### Cost Analysis
*   **Mark IV (Halo Wars)**: Expensive, no shields.
*   **Mark V (Halo CE)**: Added AI integration (Cortana). Cost per suit equivalent to a destroyer class vessel.
*   **Mark VI (Halo 2)**: Better regen, auto-biofoam injectors.
`,faq:[{question:"Why green?",answer:"Standard UNSC Olive Drab. Though Spartans can paint them any color (see: Multiplayer)."},{question:"Can it survive a fall from space?",answer:"Yes. Master Chief locked his armor (Gel Layer rigid) and survived atmospheric reentry. Twice."},{question:"Does it recycle... waste?",answer:"Yes. The suit is fully self-contained. You do not want to know the details."}],relatedCalculators:["beskar-armor","spartan-augmentation","billionaire-buyout"]},{id:"flood-infection",title:"Flood Infection Rate",description:"Time until planetary glassing.",category:"otakuops",slug:"flood-infection",icon:"🦠",origin:"The Flood consumes all biomass. Once an outbreak starts, it's a race against time before the entire planet must be sterilized.",howTo:"Input local population density and defense readiness. We'll tell you how long you have to evacuate.",tips:["One single spore can destroy a species.","Fire is your friend.","If you hear squishing noises, run."],tags:["Halo","Sci-Fi","Lore"],content:`
## The Logic Plague

The Flood is not a virus; it is a macroscopic super-organism.
It doesn't just kill you; it uses your biomass to build combat forms and your memories to learn how to drive your ships.

### Stages of Infection
1.  **Feral Stage**: Infection forms (Popcorn) hunt hosts. No coordination.
2.  **Coordinated Stage**: A Proto-Gravemind forms. The Flood begins to use strategy and weapons.
3.  **Interstellar Stage**: A full Gravemind forms. It gains the knowledge of all consumed hosts (including Forerunners). It can warp reality and convince AIs (logic plague) to defect.

### Why HALO?
The Forerunners realized they couldn't beat the Flood militarily. The parasite was too fast.
So they built the Halo Array.
It doesn't kill the Flood. It kills **their food**. (i.e., All sentient life in the galaxy).
`,faq:[{question:"Can you cure it?",answer:"No. Once an infection form taps your spinal cord, you are gone. Sarg. Johnson was immune due to his 'Boren's Syndrome' (radiation scrambling his nervous system), but that's unique."},{question:"Are they Precursors?",answer:"Yes. The Flood is the corrupted dust of the ancient Precursors, seeking revenge on their rebellious children (Forerunners and Humans)."},{question:"How fast does it spread?",answer:"Exponentially. A single ship crash-landing on a planet means the planet is lost within 48 hours."}],relatedCalculators:["zombie-survival","exterminatus-cost","ai-doomsday"]},{id:"spartan-augmentation",title:"Spartan Augmentation Survival",description:"Will you survive the procedure?",category:"otakuops",slug:"spartan-augmentation",icon:"💉",origin:"The Spartan-II augmentation procedures were brutal. Less than half the candidates survived intact. Do you have the genetics to make it?",howTo:"Input your genetic markers and luck. We'll calculate your odds of becoming a supersoldier vs. a washout.",tips:["Ceramic bone carbide injection is painful.","Thyroid implants boost growth.","Luck is the most important stat."],tags:["Halo","Sci-Fi","Lore"],content:`
## Creating a Demon

The Spartan-II program abducted 75 children (age 6) and trained them until age 14.
Then came **The Augmentation Procedure**.

### The Enhancements
1.  **Occipital Capillary Reversal**: "Cat eyes." See in the dark.
2.  **Superconducting Fibrification of Neural Dendrites**: Reaction time increased by 300%. "Spartan Time."
3.  **Carbide Ceramic Ossification**: Bones coated in advanced material. Virtually unbreakable.
4.  **Muscular Enhancement Injections**: Muscles rip and tear until they rebuild with density capable of lifting cars.

### The Washouts
Of the 75 candidates:
*   33 survived intact.
*   12 were crippled.
*   30 died.
Those who died were given a military funeral. The crippled were reassigned to ONI intelligence.
`,faq:[{question:"Was it ethical?",answer:"No. Dr. Halsey is a war criminal. She argued it was 'Utilitarianism'—sacrifice 75 children to save humanity from civil war (and later the Covenant)."},{question:"Are Spartan-IVs the same?",answer:"No. Spartan-IVs are adult volunteers. They have safer augmentations but are physically weaker out of armor than IIs. The armor bridges the gap."},{question:"How tall are they?",answer:"Chief is ~6'10\" out of armor and 7'2\" in armor."}],relatedCalculators:["mjolnir-cost","space-marine-survival","anime-training"]},{id:"mac-round-impact",title:"MAC Round Impact",description:"Kinetic energy of a Magnetic Accelerator Cannon.",category:"otakuops",slug:"mac-round-impact",icon:"☄️",origin:"A 600-ton slug at 40% of the speed of light simply doesn't care about your shields. Calculate the raw destructive power of the UNSC's big stick.",howTo:"Set the projectile mass and velocity. We'll output the energy in Gigatons.",tips:["Sir Isaac Newton is the deadliest son-of-a-bitch in space.","Don't eyeball it.","Firing 'Super MACs' requires ground generators."],tags:["Halo","Physics","Sci-Fi"],content:`
## Mass Driver Physics

The UNSC's primary weapon is the **Magnetic Accelerator Cannon (MAC)**.
It's a giant railgun running the length of the ship.

### The Stats (Super-MAC)
*   **Projectile**: 3,000-ton Ferric-Tungsten slug.
*   **Speed**: 4% the speed of light (12,000 km/s).
*   **Kinetic Energy**: $K = \frac{1}{2}mv^2$.
This impacts with the force of roughly **50 Gigatons of TNT**.
For context, the Tsar Bomba (largest nuke ever) was 0.05 Gigatons.

### "Sir Isaac Newton"
As the Drill Sergeant says:
*"This recruit, is a 20-kilo ferrous slug. Feel the weight! Every five seconds, the main gun of an Everest-class Dreadnought accelerates one to 1.3 percent of light speed. It impacts with the force of a 38-kiloton bomb. That is three times the yield of the city destroyer that fell on Kowak ... That means: Sir Isaac Newton is the deadliest son-of-a-b***h in space!"*
`,faq:[{question:"Can Covenant shields stop it?",answer:"Ship shields? Yes, barely. But a Super-MAC (orbital platform) punches right through a capital ship and the ship behind it."},{question:"Why not missiles?",answer:"Missiles (Archer pods) are used to overwhelm point defense. The MAC is the knockout punch."},{question:"Is this possible today?",answer:"The Navy has railguns, but powering them is the issue. We need fusion reactors to generate that kind of magnetic field."}],relatedCalculators:["exterminatus-cost","spaceship-fuel","cost-of-war"]},{id:"decibel-detective",title:"The Decibel Detective",description:"Visualize invisible noise. Calculate the cumulative sensory load of your environment.",category:"brainmodes",slug:"decibel-detective",icon:"🔊",origin:"Sensory overload isn't just about loud noises; it's about the cumulative 'layering' of background sounds. This tool uses logarithmic addition to show you the true cost of 'quiet' noise.",howTo:"Toggle common background noises to see how they stack up. Watch the 'Stress Bar' to see when you hit the danger zone.",tips:["A fridge hum (40dB) plus traffic (50dB) isn't 90dB—it's a complex logarithmic sum.","Prolonged exposure to 70dB+ causes cognitive fatigue.","Silence is a valid nutrient for your brain."],tags:["Sensory","Neurodivergence","Focus"],content:`
## The Accumulation of Noise

We think of noise as "events" (a car horn, a phone ring). But for Neurodivergent brains (ADHD/Autism), noise is a **texture**.
It accumulates like plaque.

### Logarithmic Stacking
Decibels are logarithmic.
*   **30dB**: Whisper.
*   **60dB**: Conversation.
*   **90dB**: Danger Zone.
But it's not just volume. It's **complexity**.
A consistent 50dB Air Conditioner is easier to ignore than a variable 40dB conversation. The brain tries to "decode" the conversation, burning glucose, while it filters out the AC.

### Sensory Gating
Neurotypical brains have a "gate" that shuts out background noise.
ADHD brains often have a "broken gate." Every sound enters with equal priority.
*   The clock ticking.
*   The lights humming.
*   The fabric of your shirt scratching seeing.
This leads to rapid exhaustion (Sensory Overload).
`,faq:[{question:"Why does silence hurt?",answer:"For some, pure silence is under-stimulating (under-arousal), causing the brain to generate anxiety to wake itself up. 'Brown Noise' is often better than silence."},{question:"What is Brown Noise?",answer:"It's low-frequency static (like a heavy waterfall). It masks high-frequency distractions and is famously soothing for ADHD brains."},{question:"Are noise-canceling headphones safe?",answer:"Yes, but don't wear them 24/7. Your brain will increase its sensitivity to compensate, making the world seem louder when you take them off."}],relatedCalculators:["bio-frequency-test","pomodoro-timer","sleep-cycle"]},{id:"bio-frequency-test",title:"Bio-Frequency Ear Test",description:"How old are your ears? Test your sensitivity to high-frequency sounds.",category:"brainmodes",slug:"bio-frequency-test",icon:"👂",origin:"As we age, we lose the ability to hear high frequencies (presbycusis). However, many neurodivergent individuals retain 'younger' hearing longer, leading to hypersensitivity.",howTo:"Turn your volume down first! Press the buttons to play high-frequency tones. Stop when you can no longer hear the sound.",tips:["If you can hear 17.4kHz, you're effectively under 24 (or have superhero ears).","Many 'Mosquito Alarms' use these frequencies to deter teenagers.","Please use headphones for accuracy."],tags:["Health","Sensory","Age"],content:`
## The Mosquito Tone

As we age, the hair cells in our cochlea (inner ear) die off. The first to go are the ones tuned to high frequencies.
*   **8 kHz**: Everyone can hear this.
*   **15 kHz**: Most adults over 40 cannot hear this.
*   **17.4 kHz**: The "Mosquito Tone." Only children and teens (and dogs) can hear it.

### Weaponized Sound
Shopkeepers in the UK famously installed "Mosquito Alarms" that broadcast at 17.4kHz to stop teenagers from loitering. The adults couldn't hear it, but the teens found it agonizing.
This is biologically discriminatory sonic warfare.

### Hypersensitivity (Hyperacusis)
Some neurodivergent individuals retain high-frequency hearing well into adulthood. While cool, it can be painful. The whine of a CRT monitor or a cheap phone charger can sound like a scream to them.
`,faq:[{question:"Can I retrain my ears?",answer:"No. Once the hair cells are gone, they are gone. Protect what you have left by avoiding loud concerts (or wearing plugs)."},{question:"Is my phone speaker good enough?",answer:"Maybe. Most phone speakers roll off around 16kHz. High-quality headphones are needed for the 20kHz test."},{question:"What is 20kHz?",answer:"The theoretical upper limit of human hearing. Anything above that is ultrasonic (bats and dolphins)."}],relatedCalculators:["decibel-detective","visual-noise","stress-ice-cream"]}];e.s(["CATEGORY_META",0,[{id:"bigkidmath",name:"Big Kid Math",emoji:"🧠",tagline:"Adult Life Tools",description:"Real adulting decisions focused calculators.",gradientColor:"from-blue-500/20 to-cyan-500/20",borderHover:"group-hover:border-blue-500/50",navColor:"text-blue-500",navBg:"bg-blue-500/10"},{id:"cipherlab",name:"Cipher Lab",emoji:"🔐",tagline:"Codes & Security",description:"Tools for encryption, codes, and digital security.",gradientColor:"from-green-500/20 to-emerald-500/20",borderHover:"group-hover:border-green-500/50",navColor:"text-emerald-500",navBg:"bg-emerald-500/10"},{id:"geekgalaxy",name:"Geek Galaxy",emoji:"🧛",tagline:"Sci-Fi & Survival",description:"Sci-fi scenarios and pop culture survival tools.",gradientColor:"from-purple-500/20 to-pink-500/20",borderHover:"group-hover:border-purple-500/50",navColor:"text-yellow-500",navBg:"bg-yellow-500/10"},{id:"lifehacks",name:"Life Hacks",emoji:"🧬",tagline:"Optimize Life",description:"Optimization tools for everyday efficiency.",gradientColor:"from-yellow-500/20 to-orange-500/20",borderHover:"group-hover:border-yellow-500/50",navColor:"text-amber-500",navBg:"bg-amber-500/10"},{id:"mathmagik",name:"Math Magik",emoji:"🔮",tagline:"Fun with Numbers",description:"Playful exploration of numbers and patterns.",gradientColor:"from-indigo-500/20 to-violet-500/20",borderHover:"group-hover:border-indigo-500/50",navColor:"text-purple-500",navBg:"bg-purple-500/10"},{id:"otakuops",name:"Otaku Ops",emoji:"🐱‍👤",tagline:"Anime & Gaming",description:"Calculators for anime, manga, and gaming fans.",gradientColor:"from-red-500/20 to-rose-500/20",borderHover:"group-hover:border-red-500/50",navColor:"text-rose-500",navBg:"bg-rose-500/10"},{id:"brainmodes",name:"Brain Modes",emoji:"🧠",tagline:"Neurodivergence",description:"Calculators used to validate your neurodivergent experience.",gradientColor:"from-teal-500/20 to-cyan-500/20",borderHover:"group-hover:border-teal-500/50",navColor:"text-teal-500",navBg:"bg-teal-500/10"}],"calculators",0,t])},42727,e=>{"use strict";var t=e.i(71645),a=e.i(81140),i=e.i(75830),o=e.i(20783),s=e.i(30030),r=e.i(10772),n=e.i(48425),l=e.i(30207),h=e.i(69340),u=e.i(86318),c=e.i(43476),d="rovingFocusGroup.onEntryFocus",p={bubbles:!1,cancelable:!0},y="RovingFocusGroup",[g,m,f]=(0,i.createCollection)(y),[w,b]=(0,s.createContextScope)(y,[f]),[v,k]=w(y),T=t.forwardRef((e,t)=>(0,c.jsx)(g.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,c.jsx)(g.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,c.jsx)(I,{...e,ref:t})})}));T.displayName=y;var I=t.forwardRef((e,i)=>{let{__scopeRovingFocusGroup:s,orientation:r,loop:g=!1,dir:f,currentTabStopId:w,defaultCurrentTabStopId:b,onCurrentTabStopIdChange:k,onEntryFocus:T,preventScrollOnEntryFocus:I=!1,...C}=e,S=t.useRef(null),x=(0,o.useComposedRefs)(i,S),W=(0,u.useDirection)(f),[A,D]=(0,h.useControllableState)({prop:w,defaultProp:b??null,onChange:k,caller:y}),[M,E]=t.useState(!1),P=(0,l.useCallbackRef)(T),H=m(s),B=t.useRef(!1),[F,R]=t.useState(0);return t.useEffect(()=>{let e=S.current;if(e)return e.addEventListener(d,P),()=>e.removeEventListener(d,P)},[P]),(0,c.jsx)(v,{scope:s,orientation:r,dir:W,loop:g,currentTabStopId:A,onItemFocus:t.useCallback(e=>D(e),[D]),onItemShiftTab:t.useCallback(()=>E(!0),[]),onFocusableItemAdd:t.useCallback(()=>R(e=>e+1),[]),onFocusableItemRemove:t.useCallback(()=>R(e=>e-1),[]),children:(0,c.jsx)(n.Primitive.div,{tabIndex:M||0===F?-1:0,"data-orientation":r,...C,ref:x,style:{outline:"none",...e.style},onMouseDown:(0,a.composeEventHandlers)(e.onMouseDown,()=>{B.current=!0}),onFocus:(0,a.composeEventHandlers)(e.onFocus,e=>{let t=!B.current;if(e.target===e.currentTarget&&t&&!M){let t=new CustomEvent(d,p);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=H().filter(e=>e.focusable);q([e.find(e=>e.active),e.find(e=>e.id===A),...e].filter(Boolean).map(e=>e.ref.current),I)}}B.current=!1}),onBlur:(0,a.composeEventHandlers)(e.onBlur,()=>E(!1))})})}),C="RovingFocusGroupItem",S=t.forwardRef((e,i)=>{let{__scopeRovingFocusGroup:o,focusable:s=!0,active:l=!1,tabStopId:h,children:u,...d}=e,p=(0,r.useId)(),y=h||p,f=k(C,o),w=f.currentTabStopId===y,b=m(o),{onFocusableItemAdd:v,onFocusableItemRemove:T,currentTabStopId:I}=f;return t.useEffect(()=>{if(s)return v(),()=>T()},[s,v,T]),(0,c.jsx)(g.ItemSlot,{scope:o,id:y,focusable:s,active:l,children:(0,c.jsx)(n.Primitive.span,{tabIndex:w?0:-1,"data-orientation":f.orientation,...d,ref:i,onMouseDown:(0,a.composeEventHandlers)(e.onMouseDown,e=>{s?f.onItemFocus(y):e.preventDefault()}),onFocus:(0,a.composeEventHandlers)(e.onFocus,()=>f.onItemFocus(y)),onKeyDown:(0,a.composeEventHandlers)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey)return void f.onItemShiftTab();if(e.target!==e.currentTarget)return;let t=function(e,t,a){var i;let o=(i=e.key,"rtl"!==a?i:"ArrowLeft"===i?"ArrowRight":"ArrowRight"===i?"ArrowLeft":i);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return x[o]}(e,f.orientation,f.dir);if(void 0!==t){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let o=b().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)o.reverse();else if("prev"===t||"next"===t){var a,i;"prev"===t&&o.reverse();let s=o.indexOf(e.currentTarget);o=f.loop?(a=o,i=s+1,a.map((e,t)=>a[(i+t)%a.length])):o.slice(s+1)}setTimeout(()=>q(o))}}),children:"function"==typeof u?u({isCurrentTabStop:w,hasTabStop:null!=I}):u})})});S.displayName=C;var x={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function q(e,t=!1){let a=document.activeElement;for(let i of e)if(i===a||(i.focus({preventScroll:t}),document.activeElement!==a))return}e.s(["Item",()=>S,"Root",()=>T,"createRovingFocusGroupScope",()=>b])},39312,e=>{"use strict";let t=(0,e.i(75254).default)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);e.s(["Zap",()=>t],39312)}]);