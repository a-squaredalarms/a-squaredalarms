import type { BlogPost } from '@/types'

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'lockdown-alarm-sounds-all-32-tones',
    seoTitle: 'Lockdown Alarm Sounds: All 32 Tones',
    seoDescription: 'Listen to all 32 sounder tones with frequency patterns and DIP switch codes. Choose a lockdown tone that cannot be confused with your fire alarm.',
    title: 'Lockdown Alarm Sounds: Listen to All 32 Sounder Tones',
    excerpt:
      'Every tone available on the sounder range, with the frequency pattern, DIP switch code and an audio sample you can play. Useful for choosing a lockdown tone that cannot be confused with your fire alarm.',
    category: 'Lockdown Alarm Systems',
    publishedAt: '2026-07-27',
    displayDate: '27 July 2026',
    readTime: '8 min read',
    author: 'A-Squared Editorial Team',
    serviceHref: '/lockdown-alarms',
    serviceLabel: 'Explore Lockdown Alarm Systems',
    soundLibrary: true,
    atAGlance: [
      'All 32 tones with playable samples, frequency patterns and DIP switch codes.',
      'Your lockdown tone must be unmistakably different from your fire alarm.',
      'Low frequency carries further; high frequency cuts through noise but is more directional.',
      'Codes are set with a five-position DIP switch on the device (D = down, U = up).',
    ],
    keyTakeaways: [
      'Choose the lockdown tone by how different it sounds from your fire alarm, not by preference.',
      'Play candidate tones to staff before committing, and listen in the noisiest space you have.',
      'Record the tone and DIP code you chose, so future devices are set the same way.',
    ],
    sections: [
      {
        heading: 'Why the tone matters more than people expect',
        paragraphs: [
          'A fire alarm means leave the building. A lockdown alert means stay inside and secure the room. Those are opposite instructions, and the only thing separating them for most people is what the alert sounds like.',
          'Under stress, people do not carefully evaluate which of two similar sounds they are hearing. They pattern-match to the most familiar one and act. In almost every British school and workplace, the most practised alarm by a wide margin is the fire alarm.',
          'That is the whole reason this list matters. Selecting a lockdown tone is not an aesthetic decision, it is a safety decision, and the right answer is whichever tone is least likely to be mistaken for the one your site already uses.',
        ],
      },
      {
        heading: 'How to use this list',
        paragraphs: [
          'The library below contains every tone the sounders can produce. Each entry gives the tone number, the manufacturer’s name for it, the frequency and pattern, and the DIP switch code used to select it on the device.',
          'A practical way to work through it is to identify your existing fire alarm tone first, then play candidates and rule out anything that sits close to it in pitch or rhythm.',
        ],
        bullets: [
          'Identify what your fire alarm currently sounds like',
          'Play candidate lockdown tones and rule out anything similar',
          'Listen in your noisiest space, not a quiet office',
          'Check it is distinguishable outdoors if you have external coverage',
          'Play the shortlist to staff before deciding',
          'Record the tone number and DIP code once chosen',
        ],
      },
      {
        heading: 'Low frequency or high frequency',
        paragraphs: [
          'The tones split broadly into low frequency, around 800 to 950 Hz, and high frequency, around 2400 to 2900 Hz. The difference is not loudness but how the sound behaves as it travels.',
          'Lower frequencies travel further and pass through structure more effectively, which makes them useful where sound has to reach through doors and around corners. Higher frequencies are more directional and cut through background noise well, but are absorbed more readily by soft furnishings and lose energy faster over distance.',
          'In practice, most sites end up using low frequency for general coverage and high frequency where there is significant background noise to overcome. What matters most is that whatever you choose remains clearly distinct from the fire signal.',
        ],
      },
      {
        heading: 'Reading the DIP switch codes',
        paragraphs: [
          'Each tone is selected on the device using a five-position DIP switch, and the code column gives the switch positions. D means the switch is down, U means it is up, read left to right across the five positions.',
          'So tone 19, the Slow Whoop, is DUDDU: first switch down, second up, third down, fourth down, fifth up. The device produces that tone until the switches are changed.',
          'Worth noting for anyone maintaining a system: because the tone lives in the switch positions rather than in software, a replacement device will produce whatever its switches are set to. Recording your chosen code somewhere durable saves a lot of confusion when a unit is swapped years later.',
        ],
      },
      {
        heading: 'Tones that mean something specific',
        paragraphs: [
          'Several entries in the list are not arbitrary sounds but recognised national or standard signals, and it is worth knowing which ones carry existing meaning before selecting them.',
          'The Slow Whoop is widely associated with evacuation in the UK. The ISO 8201 pattern, sometimes called the temporal three, is an internationally recognised fire evacuation signal. The Australian Alert and Evacuation signals are defined in Australian standards, and the Swedish, French and Danish tones are national fire signals.',
          'Choosing one of these for a lockdown alert is usually a mistake, because anyone who recognises it will act on the meaning they already know, which in most cases is evacuate. If your site has international staff or visitors, that risk is higher rather than lower.',
        ],
        bullets: [
          'Slow Whoop (19) — widely associated with evacuation in the UK',
          'ISO 8201 LF and HF (28, 29) — international fire evacuation pattern',
          'US Temporal Tone LF and HF (24, 25) — standard fire signal pattern',
          'Australian Alert and Evacuation (22, 23) — defined in Australian standards',
          'Swedish, French and Din tones (20, 21, 26, 27) — national fire signals',
        ],
      },
      {
        heading: 'What we usually recommend',
        paragraphs: [
          'We do not publish a single recommended lockdown tone, because the right answer depends entirely on what your fire alarm already sounds like. A tone that is ideal on one site is a poor choice on another for that reason alone.',
          'The pattern we see work well is a lockdown alert that differs from the fire signal in both pitch and rhythm, not just one of them. A continuous tone against an intermittent fire signal, or a sweeping tone against a steady one, gives people two distinguishing features rather than one.',
          'It is also worth pairing the tone with a visual difference. Blue beacons where fire uses red gives a second channel that does not depend on hearing or on remembering which sound means what. Where clarity matters most, voice announcements remove the interpretation step entirely.',
        ],
      },
      {
        heading: 'Test it properly before you commit',
        paragraphs: [
          'A tone that sounds obviously distinct through headphones in an office can be far less distinct through a sounder in a busy corridor. Listening conditions matter, and the decision deserves testing in the environment it will actually be used in.',
          'If you are already having a system installed, ask for candidate tones to be demonstrated on site during commissioning. Hearing them through the actual devices, in the actual spaces, is the only reliable test.',
          'Once chosen, tell staff what it sounds like and practise with it. A distinct tone that nobody has heard before the day it matters is only half a solution, and the training is what turns the signal into a response.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Which tone should we use for lockdown?',
        answer:
          'There is no single right answer, because it depends on what your fire alarm sounds like. Choose a tone that differs from your fire signal in both pitch and rhythm, and avoid the recognised national fire signals such as Slow Whoop and the ISO 8201 pattern, which people may already associate with evacuation.',
      },
      {
        question: 'Can we use the same sounders for fire and lockdown?',
        answer:
          'We would advise against it. Putting both signals on the same devices, driven by the same system, creates exactly the ambiguity you are trying to remove. A dedicated lockdown system stays independent of your fire alarm, which is the point.',
      },
      {
        question: 'What is the difference between low and high frequency tones?',
        answer:
          'Low frequency, around 800 to 950 Hz, travels further and passes through structure more effectively. High frequency, around 2400 to 2900 Hz, cuts through background noise well but is more directional and loses energy faster over distance.',
      },
      {
        question: 'How do I set the tone on a device?',
        answer:
          'Tones are selected using a five-position DIP switch on the device. The code column in the library gives the switch positions, where D is down and U is up, read left to right. Devices are normally supplied pre-programmed to your chosen tone.',
      },
      {
        question: 'Can we change the tone after installation?',
        answer:
          'Yes. Because the tone is set by physical switches on each device rather than centrally, changing it means adjusting each unit. That is straightforward but it is a job across every device, so it is worth getting the choice right at the start.',
      },
      {
        question: 'Can I download these sounds?',
        answer:
          'Yes, each tone has a download link. They are provided for identification and specification, so you can play them to staff or governors when deciding which to use.',
      },
      {
        question: 'Why do some tones have the same name?',
        answer:
          'Several names appear more than once at different frequencies or sweep rates, and the numbering follows the manufacturer’s tone chart. Where two entries share a name, the frequency and pattern column shows what actually differs between them.',
      },
    ],
  },
  {
    slug: 'how-much-does-a-lockdown-alarm-system-cost',
    seoTitle: 'Lockdown Alarm System Cost UK',
    seoDescription: 'What actually drives the price of a lockdown alarm system, what to check in a quote, and how to budget for a school or commercial site.',
    title: 'How Much Does a Lockdown Alarm System Cost in the UK?',
    excerpt:
      'The honest answer is that it depends on your site, not on the brand. Here is exactly what moves the price, what to watch for in a quote, and how to budget realistically for a school or commercial building.',
    category: 'Planning & Costs',
    publishedAt: '2026-07-24',
    displayDate: '24 July 2026',
    readTime: '7 min read',
    author: 'A-Squared Editorial Team',
    serviceHref: '/lockdown-alarms',
    serviceLabel: 'Explore Lockdown Alarm Systems',
    atAGlance: [
      'Device count and coverage area drive the price far more than the brand does.',
      'Wireless installation removes the biggest hidden cost: the building work.',
      'Outdoor coverage is the single most commonly missed item in a budget.',
      'Any firm price given without a site survey is an estimate, not a quote.',
    ],
    keyTakeaways: [
      'Ask every supplier what is excluded, not just what is included.',
      'Get outdoor coverage priced from the start rather than added later.',
      'A free survey should leave you with a specification you can compare elsewhere.',
    ],
    sections: [
      {
        heading: 'Why there is no published price list',
        paragraphs: [
          'Lockdown alarm systems are not sold like laptops, because two buildings of identical floor area can need very different systems. The number that matters is not square metres, it is how many places a person needs to reliably hear or see the alert.',
          'A compact building with solid walls and many small rooms often needs more devices than a larger open-plan space. Sound does not travel through structure the way people expect, and a single sounder in a corridor does not cover the classrooms off it.',
        ],
      },
      {
        heading: 'The five factors that actually move the price',
        paragraphs: [
          'Almost every quote you receive will vary on the same handful of variables. If you understand these, you can compare quotes on equal terms instead of comparing headline numbers that cover different scopes.',
        ],
        bullets: [
          'Number of devices needed for full audible and visual coverage',
          'Whether outdoor areas such as playgrounds, pitches and yards are included',
          'Wireless or hard-wired, which mostly determines the installation cost',
          'Whether you need zoning, so different areas can be alerted separately',
          'Whether you want central monitoring of device and battery status',
        ],
      },
      {
        heading: 'Outdoor coverage is the most common budget surprise',
        paragraphs: [
          'Extending coverage outdoors is the item most often left out of an initial figure and added later. Playgrounds, sports pitches, car parks and yards need external devices rated for weather and loud enough to carry over open ground and ambient noise.',
          'For most schools this is not optional. Outdoor space is where the largest number of people are furthest from the building and least likely to hear an indoor alert. Price it at the start and your budget will hold.',
        ],
      },
      {
        heading: 'Wireless removes the cost people forget to ask about',
        paragraphs: [
          'On a hard-wired system the equipment is often not the expensive part. The expensive part is the cable routes, the containment, the making good afterwards, and the disruption while it happens. On an older building, or one with asbestos considerations, that work can cost more than the system itself.',
          'Wireless systems avoid nearly all of it. No cable between devices means no chasing walls, no ceiling access across the building, and far less time on site. For an occupied school this is frequently the difference between a project that fits a half-term and one that does not.',
        ],
      },
      {
        heading: 'What a good quote should tell you',
        paragraphs: [
          'A quote that is only a number is difficult to judge. What you want is a specification: what goes where, why that many devices, what is covered, and just as importantly what is not.',
        ],
        bullets: [
          'Device count and locations, not just a total figure',
          'Whether outdoor coverage is included or excluded',
          'What the installation involves and how many days on site',
          'Ongoing costs, including battery replacement intervals',
          'What happens when you want to expand later',
        ],
      },
      {
        heading: 'How device counts are actually worked out',
        paragraphs: [
          'The most common question after a survey is why the number of devices is what it is. It is not a formula applied to floor area. It comes from working through the site room by room and asking whether someone standing in that space, with the door closed and normal activity going on, would reliably register the alert.',
          'Solid walls, heavy fire doors, suspended ceilings, plant noise, and the ordinary background sound of a busy building all reduce how far an alert carries. A corridor sounder that seems more than loud enough when the building is empty can be barely noticeable from inside a classroom with thirty children in it.',
          'This is also why the same building can need a different number of devices depending on how it is used. A hall used for assemblies and PE needs different treatment from the same space used only for storage. The survey is looking at occupancy and activity, not just geometry.',
        ],
      },
      {
        heading: 'Costs that appear after installation',
        paragraphs: [
          'The purchase price is not the whole cost of ownership, and the items below are the ones most often missed when a business case is being written. None of them are large individually, but they are easier to plan for than to discover.',
          'Battery replacement is the main recurring item on a wireless system. Intervals are typically measured in years, and monitoring means you replace batteries in the specific devices that need it rather than sweeping the whole estate on a schedule.',
        ],
        bullets: [
          'Battery replacement, typically every few years depending on device type',
          'Periodic testing time, which is staff time rather than a supplier cost',
          'Additional devices when you reconfigure or extend the building',
          'Occasional device replacement over the life of the system',
        ],
      },
      {
        heading: 'Budgeting across more than one financial year',
        paragraphs: [
          'Many schools and trusts cannot fund complete coverage in a single year, and there is no reason they should have to. A phased approach is entirely normal, and with a wireless system the second phase genuinely adds to the first rather than repeating work.',
          'The sensible way to phase is by risk rather than by convenience. Cover the areas where an alert is least likely to be heard today, or where the assessed risk is highest, and leave the areas already served by existing arrangements until later.',
          'It is worth writing the full scope down even if you are only funding part of it. A specification that shows the complete picture, with phases marked, is far easier to take to a governing body than a series of unrelated requests, and it stops the later phases being forgotten.',
        ],
      },
      {
        heading: 'Comparing quotes fairly',
        paragraphs: [
          'Two quotes that differ substantially are usually covering different scopes rather than offering different value. Before comparing headline figures, check that both are solving the same problem across the same area of the site.',
          'The questions below will usually explain most of a gap between quotes, and asking them tends to be more productive than negotiating on price alone.',
        ],
        bullets: [
          'Does this cover outdoor areas, or is that a separate item?',
          'How many devices, and where exactly are they going?',
          'Is commissioning, testing and staff handover included?',
          'What making good is included if any building work is required?',
          'What is the process and cost for adding devices in future?',
          'Are batteries, warranty and any monitoring included, and for how long?',
        ],
      },
      {
        heading: 'Warning signs worth noticing',
        paragraphs: [
          'Most suppliers in this sector are straightforward, but a few patterns are worth treating carefully. A firm price given over the phone without any site visit is the clearest one, because the variables that drive cost simply cannot be assessed remotely.',
          'Be equally cautious about a quote that covers indoor spaces only without saying so explicitly, or one that presents a device count without saying where those devices go. Both can look competitive on paper and then require a second phase to become usable.',
          'Finally, treat pressure to decide quickly as a reason to slow down. Lockdown systems are not a distress purchase, and a supplier confident in their specification will be happy for you to compare it.',
        ],
      },
      {
        heading: 'What you are actually buying',
        paragraphs: [
          'It helps to separate the system into its parts, because quotes present them differently and the differences are where confusion arises. Broadly, you are buying alerting devices, triggers, a way to manage the system, and the work of installing and commissioning it.',
          'Alerting devices are sounders, beacons or voice units placed so that everyone can hear or see the alert. Triggers are the call points and fobs that let someone raise it. Management is how you monitor status and know the system is healthy. Installation is the labour, configuration and testing.',
          'Understanding the split matters because two quotes may weight them very differently. A low device count with a generous installation allowance and a high device count with minimal commissioning can arrive at similar totals while delivering quite different outcomes.',
        ],
      },
      {
        heading: 'How site type changes the answer',
        paragraphs: [
          'Different kinds of building tend to produce recognisably different specifications, and knowing where yours sits gives you a sense of scale before anyone visits.',
          'Single-block primary schools are usually the most straightforward, with a modest device count and one clear decision about outdoor coverage. Secondary schools and all-through sites are more involved, because of scale, detached blocks and larger grounds.',
          'Commercial premises vary most of all. An open-plan office may need surprisingly few devices, while a multi-tenant building raises questions about who is alerted, who decides, and whether neighbouring occupiers are included. Those are procedural questions with cost implications.',
        ],
        bullets: [
          'Single-block primary: lowest device count, one outdoor decision',
          'Secondary or all-through: multiple blocks, larger grounds, more triggers',
          'Multi-academy trust: per-site design against one shared standard',
          'Commercial and multi-tenant: fewer devices, more procedural questions',
        ],
      },
      {
        heading: 'Funding routes worth checking',
        paragraphs: [
          'Before assuming this comes out of a general maintenance budget, it is worth checking whether other routes apply. Schools in particular sometimes have access to funding streams that are not obvious, and the position changes from year to year.',
          'Condition improvement funding, trust capital allocations, local authority safety programmes and delegated safeguarding budgets have all been used by sites we have worked with. Insurers occasionally take an interest too, since demonstrable risk reduction is relevant to them.',
          'We cannot advise on eligibility, and none of these are guaranteed. But it is worth a conversation with your finance lead before the business case is written, because the framing of a bid often differs from the framing of a purchase order.',
        ],
      },
      {
        heading: 'The cost of not having one',
        paragraphs: [
          'Business cases for safety systems are awkward because the return is the absence of something. It is still worth setting out, because governing bodies and boards are being asked to weigh a certain cost against an uncertain one.',
          'The honest framing is not that a lockdown alarm prevents incidents, because it does not. What it changes is the speed and consistency of the response when something happens, and the range of situations your site can handle without improvisation.',
          'There are also costs to the status quo that are easy to overlook. Staff time spent on procedures that cannot be executed reliably, the reputational exposure of an incident handled badly, and the practical difficulty of demonstrating a maintained procedure to inspectors or insurers without a means of alerting people.',
          'None of that is a reason to overspend. It is a reason to be clear that the alternative to buying is not zero cost, it is a different set of risks carried by the organisation, and that comparison is what a board is actually being asked to make.',
        ],
      },
    ],
    comparison: {
      title: 'How sites commonly raise a lockdown alert, compared',
      columns: ['Reaches whole site', 'Distinct from fire alarm', 'Works outdoors', 'Works without staff nearby'],
      rows: [
        { label: 'Word of mouth / runners', cells: ['No', 'N/A', 'No', 'No'] },
        { label: 'School bell', cells: ['Partly', 'No', 'Rarely', 'Yes'] },
        { label: 'Fire alarm panel', cells: ['Yes', 'No — dangerous overlap', 'Sometimes', 'Yes'] },
        { label: 'PA / tannoy system', cells: ['Partly', 'Yes', 'Rarely', 'Needs an operator'] },
        { label: 'Dedicated lockdown alarm', cells: ['Yes', 'Yes', 'Yes, with external units', 'Yes'] },
      ],
    },
    faqs: [
      {
        question: 'Can you give me a rough price over the phone?',
        answer:
          'We can give you an indicative range once we know roughly how many buildings you have, whether outdoor coverage is needed, and the approximate number of rooms. We will not give a firm figure without a survey, because the variables above genuinely change the answer and a number that moves later is no use for budgeting.',
      },
      {
        question: 'Is a wireless system cheaper than a hard-wired one?',
        answer:
          'The equipment is broadly comparable. The saving is in installation, because there is no cable to route, no making good, and far fewer days on site. On an occupied or older building that difference is usually substantial.',
      },
      {
        question: 'Are there ongoing costs?',
        answer:
          'The main one is battery replacement on wireless devices, typically measured in years rather than months. Systems with monitoring will tell you when a battery is low rather than requiring someone to check devices manually.',
      },
      {
        question: 'Can we start small and expand later?',
        answer:
          'Yes, and with a wireless system this is straightforward. Many sites cover the highest priority areas first and add devices in a later budget year. Expanding a hard-wired system is a bigger job because it means new cable routes.',
      },
      {
        question: 'Do you charge for a site survey?',
        answer:
          'No. The survey is free and you keep the specification, which you are welcome to use to obtain comparable quotes from other suppliers.',
      },
    ],
  },
  {
    slug: 'lockdown-alarm-site-survey-what-to-expect',
    seoTitle: 'Lockdown Alarm Site Survey Explained',
    seoDescription: 'What happens during a free site survey, who to have in the room, and what you should receive afterwards.',
    title: 'Lockdown Alarm Site Survey: What to Expect and How to Prepare',
    excerpt:
      'A survey is where your procedures, your building and the system design get reconciled. Knowing what happens and who to have in the room turns a routine visit into a genuinely useful one.',
    category: 'Planning & Costs',
    publishedAt: '2026-07-21',
    displayDate: '21 July 2026',
    readTime: '6 min read',
    author: 'A-Squared Editorial Team',
    serviceHref: '/contact',
    serviceLabel: 'Book a Free Site Survey',
    atAGlance: [
      'Surveys typically take one to two hours depending on site size.',
      'The most valuable part is the conversation about procedures, not the walk-round.',
      'Bring whoever would actually make the call during an incident.',
      'You should leave with a specification you can compare against other quotes.',
    ],
    keyTakeaways: [
      'Have your existing emergency procedure to hand, even if it is only a draft.',
      'Include an operational person, not only the budget holder.',
      'Flag outdoor areas and detached buildings early, as they change the design.',
    ],
    sections: [
      {
        heading: 'What happens on the day',
        paragraphs: [
          'A survey is not a sales visit with a tape measure. It is a working session that produces the specification your quote is based on, and it usually follows the same shape.',
        ],
        bullets: [
          'A conversation about what you want to happen when the alert sounds',
          'A walk of the site following how people actually move through it',
          'Identifying trigger point locations and who needs to reach them',
          'Checking outdoor areas, detached buildings and low-supervision spaces',
          'Discussing zoning, monitoring and how the all-clear will work',
        ],
      },
      {
        heading: 'It starts with your procedure, not your building',
        paragraphs: [
          'Before looking at walls and ceilings, the useful question is what should happen when the alert sounds. Who decides to trigger it. What staff are expected to do. Whether different buildings respond differently. Whether there is an all-clear and who gives it.',
          'Sites that have thought this through get a better system, because the design follows the procedure. If you have not, that is a perfectly normal place to start, and it is time well spent before anyone quotes for equipment.',
        ],
      },
      {
        heading: 'Who should be in the room',
        paragraphs: [
          'The most productive surveys include someone operational as well as someone financial. A site manager, designated safeguarding lead, head of estates, or whoever would realistically make the decision during an incident.',
          'That person tends to know the things that change a design: which door is propped open every lunchtime, which building loses phone signal, which part of the site nobody can hear the existing bell in. None of that appears on a floor plan.',
        ],
      },
      {
        heading: 'What to have ready',
        paragraphs: [
          'You do not need to prepare much, but a few things make the visit considerably more productive and reduce the chance of a second visit.',
        ],
        bullets: [
          'A site plan or floor plan, even a rough one',
          'Your current emergency or lockdown procedure if one exists',
          'A note of any areas with restricted access or asbestos considerations',
          'Term dates, exam periods and any weeks work cannot happen',
          'Any known problem areas where the existing alarm is hard to hear',
        ],
      },
      {
        heading: 'What you should receive afterwards',
        paragraphs: [
          'You should get a specification that says what is proposed, where it goes and why, in language you can take to a governing body or finance lead without translation. If a document cannot be understood by the people approving it, it is not finished.',
          'You should also be able to use that specification to obtain comparable quotes elsewhere. A survey that only produces a price locks you in. One that produces a specification leaves you informed.',
        ],
      },
      {
        heading: 'The questions we will ask you',
        paragraphs: [
          'Much of the survey is a conversation, and it goes faster if you know what is coming. None of these need a prepared answer, and uncertainty about them is itself useful information, because it usually points at the part of the plan that needs the most attention.',
        ],
        bullets: [
          'What would make you decide to lock the site down?',
          'Who would make that call at ten in the morning, and who at four in the afternoon?',
          'What do you want staff to do in the first thirty seconds?',
          'How would someone in the furthest classroom find out?',
          'What happens to people who are outside when the alert sounds?',
          'How does the site return to normal, and who decides that?',
        ],
      },
      {
        heading: 'What we are looking at while we walk',
        paragraphs: [
          'The walk-round follows how people actually move and where they actually are, rather than following a floor plan in order. Entrances and reception, corridors and stairwells, teaching or working spaces, detached buildings, outdoor areas, and the quiet corners with low supervision that rarely appear on a drawing.',
          'We are listening as much as looking. Solid walls, long corridors, plant noise and heavy doors all affect where devices need to go. Buildings that have been extended over time are particularly worth walking slowly, because the junctions between old and new structure are where coverage tends to break down.',
          'Outdoor space gets specific attention, because it is the most commonly under-specified part of a site and the hardest to judge from a plan. Where the field ends, where the boundary is, and where a class might be at the furthest point all matter.',
        ],
      },
      {
        heading: 'Things that commonly change the design',
        paragraphs: [
          'A handful of site features come up repeatedly and materially affect what gets specified. If any of these apply to you, mentioning them early will save time.',
        ],
        bullets: [
          'Detached buildings, nurseries, or a separate sixth form block',
          'Listed building status or conservation area restrictions',
          'Known or suspected asbestos in ceilings or risers',
          'Large outdoor areas, sports pitches or a swimming pool',
          'Shared occupancy with another organisation or community use',
          'Existing systems that the lockdown alert must not be confused with',
        ],
      },
      {
        heading: 'What happens after the visit',
        paragraphs: [
          'You should receive the written specification and quote within a few working days. If a survey produces nothing in writing, or produces only a headline price, that is worth questioning, because you have no basis for comparing it to anything else.',
          'It is entirely normal to go back and forth once or twice after that. Sites often decide to add outdoor coverage, remove a phase, or split the work across two budget years once they can see the full picture. That is what the specification is for.',
          'There is no obligation at any point. If you use our specification to buy elsewhere, that is a reasonable outcome of a free survey, and we would rather you had a well-specified system than a badly specified one from us.',
        ],
      },
      {
        heading: 'Why a remote quote is rarely reliable',
        paragraphs: [
          'It is a fair question why anyone needs to visit when floor plans exist. The answer is that plans show geometry and lockdown design depends on acoustics, occupancy and behaviour, none of which appear on a drawing.',
          'A plan will not tell you that the wall between two classrooms is solid brick rather than stud, that the hall has a ventilation unit running constantly, that a fire door is propped open every lunchtime, or that the far end of the field is further from the building than it looks.',
          'Every one of those changes the device count or placement. A quote produced without them is arithmetic applied to floor area, which is why remote figures so often move once someone attends.',
        ],
      },
      {
        heading: 'Surveying a multi-site estate',
        paragraphs: [
          'Trusts and organisations with several buildings occasionally ask whether every site needs visiting. In practice yes, because device counts genuinely differ, but the process is lighter than doing each one from scratch.',
          'The procedural conversation only needs to happen once at trust level, covering the standard everyone will work to. After that, each site visit is a shorter exercise focused on the building rather than on first principles.',
          'We would normally survey all sites before quoting any, so the programme and the per-site breakdown can be presented together. Boards approving a phased rollout generally want to see the whole picture rather than approving sites one at a time.',
        ],
      },
      {
        heading: 'Turning the survey into a decision',
        paragraphs: [
          'A specification is only useful if it leads somewhere. Most sites find the decision easier if they separate it into three questions rather than treating it as one.',
          'First, is the scope right, meaning does it cover the areas and scenarios you are actually worried about. Second, is the phasing right for your budget cycle. Third, is the timing right against your calendar. Those are different conversations and they involve different people.',
        ],
        bullets: [
          'Is the coverage right, including outdoor areas?',
          'Does the phasing fit the budget years available?',
          'Does the timing work against term dates and exams?',
          'Who needs to approve it, and when do they next meet?',
          'What would we want in place before the first drill?',
        ],
      },
      {
        heading: 'Preparing your governing body for the decision',
        paragraphs: [
          'For most schools the survey is not the hard part. Getting a decision through the governing body or trust board is, and the specification you receive is the main tool for that conversation.',
          'Governors are generally not specialists, and they are being asked to approve spending on something that will hopefully never be used. What persuades them is not technical detail but a clear statement of the current gap, what the proposal changes, and what happens if nothing is done.',
          'It helps to lead with the gap rather than the product. A sentence such as "an alert raised at reception today would not be heard on the field or in the nursery" tells a governing body more than a device schedule does, and it frames the spending as closing a specific hole.',
          'It is also worth being ready for the question of why now. The honest answer is usually a combination of the legislative direction of travel, a gap identified in your own review, and the practical point that installation windows are limited. That is a reasonable case and it does not need overstating.',
        ],
        bullets: [
          'Lead with the specific coverage gap, not the equipment',
          'Show the total cost and how it splits across budget years',
          'Include what happens after installation: drills, review, ownership',
          'Be clear about what the system does not do',
          'Bring the specification, not just a price',
        ],
      },
    ],
    faqs: [
      {
        question: 'How long does a site survey take?',
        answer:
          'Usually one to two hours for a single building, longer for a large or multi-building site. Multi-academy trusts are normally surveyed site by site, though the procedural conversation only needs to happen once.',
      },
      {
        question: 'Is there any obligation after a survey?',
        answer:
          'None. The survey is free and the specification is yours to keep, including to compare quotes from other suppliers.',
      },
      {
        question: 'Do you need to access every room?',
        answer:
          'Not usually. We need to see representative spaces of each type, plus corridors, entrances, outdoor areas and anywhere with unusual construction or known audibility problems.',
      },
      {
        question: 'Can a survey happen during the school day?',
        answer:
          'Yes. A survey is non-intrusive and normally takes place during normal hours, which is often better because we can see how the site is actually used.',
      },
      {
        question: 'What if we do not have a lockdown procedure yet?',
        answer:
          'That is common and it is not a problem. We will work through the key decisions with you, and many sites find that conversation is the most useful part of the visit.',
      },
    ],
  },
  {
    slug: 'wireless-vs-hard-wired-lockdown-alarm-systems',
    seoTitle: 'Wireless vs Hard-Wired Lockdown Alarms',
    seoDescription: 'Which suits your building, the honest trade-offs including battery maintenance, and why occupied sites usually go wireless.',
    title: 'Wireless vs Hard-Wired Lockdown Alarms: Which Is Right for Your Site?',
    excerpt:
      'This question comes up on almost every project. The answer depends on your building, your timescale and how much disruption you can absorb, and the trade-offs are more practical than technical.',
    category: 'Lockdown Alarm Systems',
    publishedAt: '2026-07-16',
    displayDate: '16 July 2026',
    readTime: '6 min read',
    author: 'A-Squared Editorial Team',
    serviceHref: '/lockdown-alarms',
    serviceLabel: 'Explore Lockdown Alarm Systems',
    atAGlance: [
      'For occupied and older buildings, wireless usually wins on disruption.',
      'Hard-wired suits new builds where cable routes are going in anyway.',
      'Battery management is the genuine wireless trade-off, and monitoring largely solves it.',
      'Expanding later is far cheaper on wireless.',
    ],
    keyTakeaways: [
      'Ask what the installation involves, not just what the equipment costs.',
      'If you go wireless on a large site, treat monitoring as part of the system.',
      'Think about the site you will have in five years, not just today.',
    ],
    sections: [
      {
        heading: 'What each approach involves',
        paragraphs: [
          'A hard-wired system connects devices with cable back to a panel. It is well understood, has no batteries to manage, and suits new-build projects where cable routes are being installed anyway and the building is empty.',
          'A wireless system uses devices that communicate by radio, typically forming a mesh so each device relays the signal onward. With no cable between devices, installation becomes a fixing exercise rather than a building project.',
        ],
      },
      {
        heading: 'Disruption is usually the deciding factor',
        paragraphs: [
          'On an occupied site the question is rarely which technology performs better, because both will sound an alarm reliably. The question is what it takes to install. Wiring an occupied school means access above ceilings, through walls and across corridors, usually in holidays and usually with making good afterwards.',
          'Wireless installations are measured in days rather than weeks and can often proceed around normal operations. On older buildings, listed buildings, or anywhere with asbestos considerations, avoiding intrusive work is a genuine constraint rather than a convenience.',
        ],
      },
      {
        heading: 'The battery trade-off, stated honestly',
        paragraphs: [
          'Wireless devices need batteries, and that is a real ongoing task rather than a footnote. Replacement intervals are typically measured in years rather than months depending on device type and usage, but across a large estate it is still a maintenance routine someone has to own.',
          'What turns this from a burden into a formality is monitoring. A system that reports low batteries by email means nobody walks the site with a checklist and nothing is found flat at the worst moment.',
        ],
      },
      {
        heading: 'Think about the site you will have in five years',
        paragraphs: [
          'Estates change. New blocks, converted spaces, temporary classrooms and reorganised departments are normal. Extending a wired system means new cable routes. Extending a wireless system usually means adding devices and programming them in.',
          'This matters most for organisations that grow in phases or run multiple sites, because it lets coverage follow the budget rather than requiring one large project up front.',
        ],
      },
      {
        heading: 'How a wireless mesh actually works',
        paragraphs: [
          'The word wireless makes some people assume the system depends on Wi-Fi, and therefore on the network being up. That is not how these systems work. Devices communicate with each other on a dedicated radio link, independent of your IT infrastructure.',
          'In a mesh arrangement, each device can relay the signal onward to its neighbours rather than every device needing to reach a single central point. That gives the system multiple paths through the building, so one device being obstructed does not create a dead area behind it.',
          'The practical consequence is that there is no single cable, link or panel whose failure removes coverage from a wing of the building. It is a genuinely different reliability model from a wired system rather than a compromise on one.',
        ],
      },
      {
        heading: 'Where hard-wired still makes sense',
        paragraphs: [
          'It would be dishonest to present wireless as the answer to everything. There are situations where a wired system is the better engineering decision, and it is worth being clear about them.',
          'The clearest case is new construction. If the building is empty and cable routes are already being installed for other services, much of the cost argument for wireless disappears, and a wired system removes battery management entirely.',
        ],
        bullets: [
          'New build projects where first fix is already happening',
          'Major refurbishment where ceilings and walls are open anyway',
          'Sites with an existing wired infrastructure being extended slightly',
          'Environments where battery maintenance would be genuinely impractical',
        ],
      },
      {
        heading: 'Questions to ask either way',
        paragraphs: [
          'Whichever direction you lean, the same questions separate a well-specified system from a cheap one. Ask them of every supplier and the differences between quotes usually become obvious.',
        ],
        bullets: [
          'What happens to coverage if one device fails?',
          'Does the alerting depend on our network or power supply?',
          'How will we know a battery or device needs attention?',
          'What is involved in adding devices in two years?',
          'How many days on site, and what disruption should we expect?',
          'What is included in the warranty, and what is not?',
        ],
      },
      {
        heading: 'The retrofit question for older buildings',
        paragraphs: [
          'A large proportion of UK schools occupy buildings that were not designed with modern services in mind. Victorian primaries, post-war blocks and buildings extended repeatedly over decades all present the same problem: there is nowhere sensible to run new cable without significant intrusion.',
          'This is where the decision often makes itself. Where asbestos is present or suspected in ceiling voids and risers, any work that disturbs those areas carries survey requirements, specialist contractors and cost that dwarfs the alarm system itself.',
          'A wireless system fixed to wall surfaces avoids most of that entirely. It is not a loophole, it is simply a different installation method, and it is why so many retrofit projects in older estates end up wireless regardless of the initial preference.',
        ],
      },
      {
        heading: 'What happens when the power or network goes down',
        paragraphs: [
          'This is the question that most often decides the argument, and it is worth asking of any system you are considering. An alert that fails during a power cut is not much use, because the circumstances that cause power failures are not unrelated to the circumstances that cause emergencies.',
          'Battery-powered wireless devices continue operating independently of mains power, which is a genuine resilience advantage rather than a marketing point. There is no central panel whose power supply is a single point of failure.',
          'Network independence matters for the same reason. Because the devices communicate on their own radio link rather than over your IT network, an outage affecting your systems does not affect the ability to raise an alert. Only the remote monitoring layer depends on connectivity.',
        ],
      },
      {
        heading: 'Coverage across separate buildings and outdoor areas',
        paragraphs: [
          'Sites are rarely a single rectangle. Detached nurseries, sports halls, outbuildings, temporary classrooms and sites split by a road are all common, and they are where the wireless and wired question becomes concrete rather than theoretical.',
          'Running cable between separate buildings means external containment or ducting, which on many sites is the single most expensive element of the whole project. Wireless links between buildings avoid that entirely, subject to distance and what sits in between.',
          'Outdoor coverage follows the same logic. Adding external units to a wireless system is a matter of siting and power, not of trenching a cable to the far side of a field, which is why outdoor coverage so often gets specified out of wired projects on cost grounds.',
        ],
      },
      {
        heading: 'Making the decision',
        paragraphs: [
          'In practice the decision usually resolves itself once you answer a small number of questions honestly. If most of your answers point one way, that is your system.',
        ],
        bullets: [
          'Is the building occupied, and can it realistically be closed?',
          'Is there asbestos, listed status, or another reason to avoid intrusive work?',
          'Are there separate buildings or large outdoor areas to cover?',
          'Do you expect the site to change or expand in the next few years?',
          'Is there a maintenance routine that could absorb battery replacement?',
          'Is other work already opening up ceilings and walls?',
        ],
      },
      {
        heading: 'Lifespan, servicing and what to expect over ten years',
        paragraphs: [
          'Buying decisions tend to focus on installation, but the system will be in place for a long time and the ownership experience differs between the two approaches in ways worth knowing before you choose.',
          'A wired system, once in, is largely static. There is a panel to service, cabling that should last the life of the building, and devices that occasionally need replacing. The maintenance burden is low but the system is also fixed, and any change means returning to cable routes.',
          'A wireless system has a lighter physical footprint but a more active maintenance rhythm. Batteries are replaced periodically, devices report their own status, and the system is straightforward to modify as the building changes. Over ten years, most sites will reconfigure spaces at least once, and that is where the flexibility pays back.',
          'Neither is maintenance-free, and any supplier suggesting otherwise is overselling. What matters is that the ongoing commitment is understood at the point of purchase rather than discovered in year three.',
        ],
        bullets: [
          'Wired: minimal routine maintenance, higher cost to change anything',
          'Wireless: periodic battery replacement, low cost to reconfigure',
          'Both: occasional device replacement over the system lifetime',
          'Both: periodic testing, which is staff time rather than supplier cost',
          'Monitoring reduces the wireless maintenance burden substantially',
        ],
      },
    ],
    comparison: {
      title: 'Wireless vs hard-wired at a glance',
      columns: ['Wireless', 'Hard-wired'],
      rows: [
        { label: 'Installation time', cells: ['Days', 'Weeks on a typical site'] },
        { label: 'Building work needed', cells: ['Minimal', 'Cable routes and making good'] },
        { label: 'Suits occupied buildings', cells: ['Yes', 'Usually holidays only'] },
        { label: 'Ongoing maintenance', cells: ['Battery replacement', 'Minimal'] },
        { label: 'Cost to expand later', cells: ['Low — add devices', 'Higher — new cable runs'] },
        { label: 'Best suited to', cells: ['Occupied, older, multi-site', 'New build and major refurbishment'] },
      ],
    },
    faqs: [
      {
        question: 'Are wireless lockdown alarms reliable enough?',
        answer:
          'Yes. Mesh systems have each device relay the signal, so there is no single cable or link whose failure takes out coverage. Devices are monitored so faults are reported rather than discovered.',
      },
      {
        question: 'How often do batteries need replacing?',
        answer:
          'It depends on device type and how often the system is used, but intervals are generally measured in years. Monitoring tells you which specific devices need attention rather than requiring a scheduled sweep of every unit.',
      },
      {
        question: 'Does a wireless system need Wi-Fi or a network?',
        answer:
          'The alerting itself does not depend on your Wi-Fi. Devices communicate on their own radio link, which means the alarm still works if your network is down. A network connection is only needed if you want remote monitoring and email alerts.',
      },
      {
        question: 'Can we mix wireless and hard-wired?',
        answer:
          'On some sites yes, typically where a new wireless system extends coverage from an existing wired installation. It is worth discussing at survey stage because it affects how the alert is triggered and managed.',
      },
      {
        question: 'Will a wireless system work across separate buildings?',
        answer:
          'Usually yes, depending on distance and construction. Detached buildings, nurseries and outbuildings are a normal part of a site design and are assessed during the survey.',
      },
    ],
  },
  {
    slug: 'install-lockdown-alarm-without-closing-your-site',
    seoTitle: 'Lockdown System Installation Without Closing',
    seoDescription: 'Lockdown system installation in occupied schools and workplaces: how to plan around term dates, exams and opening hours with minimal disruption.',
    title: 'How to Install a Lockdown Alarm Without Closing Your Site',
    excerpt:
      'Most buildings cannot shut for a week while equipment goes in. Planning around occupancy, term dates and exams is usually what separates a smooth project from a disruptive one.',
    category: 'Project Planning',
    publishedAt: '2026-07-13',
    displayDate: '13 July 2026',
    readTime: '6 min read',
    author: 'A-Squared Editorial Team',
    serviceHref: '/lockdown-alarms',
    serviceLabel: 'Explore Lockdown Alarm Systems',
    atAGlance: [
      'Wireless installation is what makes term-time work realistic on most sites.',
      'Work is sequenced by area, so disruption stays local rather than site-wide.',
      'Commissioning is the loud part and needs announcing in advance.',
      'Typical school installs are measured in days, not weeks.',
    ],
    keyTakeaways: [
      'Give us your term dates and exam periods at survey stage, not later.',
      'Tell staff what the testing will sound like before it happens.',
      'Book the handover session when the right people can actually attend.',
    ],
    sections: [
      {
        heading: 'Occupancy is a design input, not an obstacle',
        paragraphs: [
          'A building in use imposes real constraints. Areas cannot be closed at will, noise has limits, contractors need supervision around children and vulnerable people, and there are hours when certain spaces simply cannot be entered.',
          'These are inputs to the plan rather than problems to solve at the end. The practical effect is that installation is sequenced by area rather than by task, so work moves through the building space by space and disruption stays local and short.',
        ],
      },
      {
        heading: 'Working with the calendar rather than against it',
        paragraphs: [
          'Schools have term dates, inset days, exam periods and holiday clubs. Offices have quiet weeks and busy quarters. Construction sites have phases. Any of these can be worked with, and the plan is always better when the calendar comes up in the first conversation.',
        ],
        bullets: [
          'Exam periods rule out noisy commissioning for weeks, not days',
          'Inset days are often ideal for testing and staff handover together',
          'Half-terms suit larger sites that need several consecutive days',
          'Holiday clubs and lettings mean the site may not be as empty as assumed',
        ],
      },
      {
        heading: 'Commissioning is the loud part',
        paragraphs: [
          'Installation itself is generally quiet. Commissioning is not, because devices have to be sounded to confirm coverage and audibility across the site. This is the stage that surprises people, and it is easily managed if it is communicated.',
          'Tell staff in advance what will happen, when, and what it will sound like, with an explicit statement that it is a test. An unannounced alarm in a building that has recently been discussing lockdown procedures causes exactly the reaction you would expect.',
        ],
      },
      {
        heading: 'Handover matters more than the installation',
        paragraphs: [
          'A system nobody has been shown is a system that will not be used well. Handover should cover who can trigger it, how the all-clear works, what the indicators mean and what to do if a device shows a fault.',
          'Schedule that session when the relevant people can actually attend, rather than on the last afternoon of the works. The installation is a few days. The procedure is what you live with.',
        ],
      },
      {
        heading: 'What a typical installation week looks like',
        paragraphs: [
          'Every site differs, but the shape of the work is fairly consistent and knowing it helps you plan cover, access and communications. On a single-site school with wireless devices, the sequence usually runs as follows.',
        ],
        bullets: [
          'Day one: arrival, access briefing, and fixing devices in the first zone',
          'Days two to three: working through remaining zones area by area',
          'Programming and configuration, which is quiet and can happen alongside',
          'Commissioning: sounding devices to confirm coverage, the noisy stage',
          'Handover: walking the responsible staff through triggering and all-clear',
        ],
      },
      {
        heading: 'Telling staff, pupils and parents',
        paragraphs: [
          'Communication around the work matters more than people expect, because the subject itself is sensitive. Staff who arrive to find contractors fitting alarm devices without explanation will draw their own conclusions, and those conclusions travel.',
          'A short note in advance covering what is being installed, why, and when the testing will happen removes almost all of that. For parents, a brief line in a newsletter framing it as part of routine safety improvement is usually enough, and it is far better than the question arriving unprompted.',
          'For pupils, the framing depends on age and your safeguarding judgement. Younger children in particular benefit from knowing that a new sound exists and that hearing it during testing does not mean anything is wrong.',
        ],
      },
      {
        heading: 'Access, keys and supervision',
        paragraphs: [
          'The practical logistics are what usually determine whether an install runs to programme. Someone needs to provide access to every space, including cupboards, plant rooms and any locked areas that turn out to matter.',
          'On school sites, safeguarding requirements mean contractors need appropriate checks and supervision arrangements agreed in advance. This is routine, but it is worth confirming before the first day rather than discovering a gap on the morning.',
        ],
        bullets: [
          'A named point of contact available across the working days',
          'Access arrangements for locked and restricted spaces',
          'Agreed safeguarding and supervision arrangements',
          'Somewhere to store equipment securely overnight',
          'Confirmed parking or loading arrangements, particularly on urban sites',
        ],
      },
      {
        heading: 'After the installers leave',
        paragraphs: [
          'The system being installed is not the same as the system being embedded. The weeks after handover are when a site either builds confidence in it or quietly forgets it exists.',
          'The most effective sites schedule the first drill within a few weeks of handover, while the system is still front of mind and while any coverage issues can still be addressed easily. Waiting a year means the first real test of the design happens when nobody remembers the detail.',
          'It is also worth confirming who owns the system day to day. Someone needs to be responsible for responding to a fault indication, arranging battery replacement and briefing new staff. Without a named role, that responsibility tends to evaporate.',
        ],
      },
      {
        heading: 'Installing in a live commercial building',
        paragraphs: [
          'Schools have the clearest calendar constraints, but offices, healthcare sites and multi-tenant buildings have their own, and they are often tighter because there is no equivalent of a school holiday.',
          'In an office, the usual approach is early mornings, evenings or weekends for anything disruptive, with quieter work during the day. In healthcare settings, clinic timetables and patient areas dictate the sequence, and access to some spaces may be genuinely unpredictable.',
          'Multi-tenant buildings add a coordination layer, because landlord permission, shared area access and other occupiers all need factoring in. That is usually the longest lead item, and it is worth starting before the installation is booked rather than after.',
        ],
      },
      {
        heading: 'Keeping disruption genuinely local',
        paragraphs: [
          'The principle that makes occupied-building work tolerable is that at any moment, only one small part of the site is affected. Achieving that is a matter of sequencing rather than speed.',
          'In a school, this normally means working through one corridor or block at a time, coordinated with the timetable so that rooms are entered when they are free. A room typically needs only a short window, so a single free period is often enough.',
        ],
        bullets: [
          'Work one zone at a time rather than across the whole site',
          'Use free periods, PPA time and lunch for individual rooms',
          'Keep a running schedule the site contact can see and adjust',
          'Do noisy commissioning in agreed blocks, announced in advance',
          'Leave each area finished and tidy before moving to the next',
        ],
      },
      {
        heading: 'What to do if something is not right',
        paragraphs: [
          'Occasionally a first drill reveals somewhere the alert is harder to hear than expected, or a room that turns out to be used differently from how it was described. This is normal and worth raising rather than living with.',
          'On a wireless system, adding or relocating a device is straightforward, and a reputable installer should expect a small amount of adjustment after the site starts using the system in earnest. Coverage design is informed by survey, but real use is the actual test.',
          'Agree before installation what happens in that situation and whether it is covered. Knowing the answer in advance turns a potential dispute into a routine visit.',
        ],
      },
      {
        heading: 'What handover day should actually cover',
        paragraphs: [
          'Handover is frequently treated as a signature on a form, and it is the point at which most of the value of the project is either secured or lost. A system nobody has been walked through is equipment rather than capability.',
          'The session does not need to be long. Forty minutes with the right people covers everything, provided it is a demonstration rather than a document handover. People need to have physically triggered the system and heard what it sounds like.',
          'The right people are usually broader than expected. Leadership need to understand the decision-making, office and reception staff need to know how to trigger it, and site staff need to know what a fault indication means and who to call.',
          'It is also the moment to agree the practical ownership questions. Who receives monitoring emails, who arranges battery replacement, who briefs new starters, and who schedules the first drill. Left unassigned at handover, these tend to stay unassigned.',
        ],
        bullets: [
          'A live demonstration of triggering and the all-clear',
          'What each indicator and fault condition means',
          'Who receives monitoring alerts, and what to do with them',
          'Documentation, warranty terms and support contact details',
          'An agreed date for the first drill',
        ],
      },
    ],
    faqs: [
      {
        question: 'How long does installation take?',
        answer:
          'For a typical single-site school, a wireless system is usually installed and commissioned in a small number of days. Larger or multi-building sites take longer, and we will give you a programme based on the survey.',
      },
      {
        question: 'Do you need to work in the school holidays?',
        answer:
          'Usually not for a wireless system. Much of the work can happen during term time around normal operations. Hard-wired installations are a different matter and generally do need holiday access.',
      },
      {
        question: 'Will the work be noisy or dusty?',
        answer:
          'Wireless installation involves fixing devices rather than chasing walls, so it is far less intrusive than cabling. The noisy stage is commissioning, when devices are sounded to confirm coverage.',
      },
      {
        question: 'Can you work around exams?',
        answer:
          'Yes, provided we know the dates early. Exam periods block noisy commissioning, so they need to be on the programme from the start rather than discovered mid-project.',
      },
      {
        question: 'Do you need someone from the school on site?',
        answer:
          'Yes, someone who can provide access and answer questions about how spaces are used. It does not need to be the same person all day, but a point of contact makes the work considerably faster.',
      },
    ],
  },
  {
    slug: 'how-to-run-a-school-lockdown-drill',
    seoTitle: 'How to Run a School Lockdown Drill',
    seoDescription: 'Designing a drill that finds real gaps, which awkward times to test, and what to record afterwards for governors.',
    title: 'How to Run a School Lockdown Drill: A Practical Guide',
    excerpt:
      'A drill everyone knew about, at a convenient time, in good weather, tells you very little. Here is how to design one that surfaces the gaps you would rather find in practice than during a real incident.',
    category: 'Drills & Training',
    publishedAt: '2026-07-08',
    displayDate: '8 July 2026',
    readTime: '7 min read',
    author: 'A-Squared Editorial Team',
    serviceHref: '/lockdown-alarms',
    serviceLabel: 'Explore Lockdown Alarm Systems',
    atAGlance: [
      'The purpose of a drill is to find problems, so one that finds none was too easy.',
      'Drill the awkward moments — lunch, break, outdoor lessons — not just mid-morning.',
      'Debrief within a day, while people still remember what confused them.',
      'Record what you changed as a result. That record matters to governors and inspectors.',
    ],
    keyTakeaways: [
      'Name the specific question the drill is testing before you run it.',
      'Include site staff, kitchen teams, supply staff, contractors and visitors.',
      'Frame the first drill as a diagnostic, not a performance.',
    ],
    sections: [
      {
        heading: 'Decide what you are testing',
        paragraphs: [
          'Running a drill simply to have run one produces a tick and little else. It helps to name the question first: can everyone hear it outdoors, do visitors know what to do, does the reception team have a workable action when they are closest to the entrance.',
          'A drill built around a specific question gives you a specific answer. Testing everything at once usually means you only learn whether the alarm sounded, which a device test would have told you.',
        ],
      },
      {
        heading: 'Drill the awkward times',
        paragraphs: [
          'Most drills happen mid-morning when everyone is in a room with a member of staff. That is the easiest possible scenario and not the one that worries people.',
        ],
        bullets: [
          'Break and lunchtime, when pupils are spread across the site',
          'Outdoor lessons and PE, including the far end of the field',
          'Changeover between lessons, when corridors are full',
          'Start and end of day, with parents and visitors on site',
          'After-school clubs, when staffing is thinner',
        ],
      },
      {
        heading: 'Include the people usually forgotten',
        paragraphs: [
          'Site staff, cleaners, kitchen teams, peripatetic staff, contractors and visitors are all present during the day and often absent from the plan. So are staff working in detached buildings or spending most of their time outdoors.',
          'Supply staff and new starters are a recurring gap. If the procedure lives in an induction pack nobody reads on their first morning, a drill will reveal it, which is considerably better than an incident revealing it.',
        ],
      },
      {
        heading: 'Debrief quickly and write down the friction',
        paragraphs: [
          'The value is in the debrief and it decays fast. Within a day people can tell you exactly where they hesitated. A week later they remember that it went fine.',
        ],
        bullets: [
          'Where did people hesitate or look for guidance?',
          'Could everyone hear or see the alert, including outdoors?',
          'Did anyone do the wrong thing, and was the instruction unclear?',
          'How long did it take for the site to be secure?',
          'Was the all-clear understood without confusion?',
        ],
      },
      {
        heading: 'Expect the first one to be untidy',
        paragraphs: [
          'The first drill on a new system is usually the messiest, and that is the point. Doors that do not lock quickly, a corridor where the alert is hard to hear, uncertainty about the all-clear. These are cheap lessons in a drill and expensive ones in an incident.',
          'Sites that treat the first drill as a diagnostic rather than a performance improve faster, because staff will report confusion honestly when the exercise is framed as finding problems rather than demonstrating competence.',
        ],
      },
      {
        heading: 'Building up over a school year',
        paragraphs: [
          'Trying to test everything in one exercise produces a stressful morning and few clear findings. A more useful pattern is a sequence across the year, each one slightly harder than the last, so confidence builds alongside complexity.',
          'A progression like the one below lets staff and pupils get used to the process before you introduce the harder variables, and it means each exercise produces a specific answer rather than a general impression.',
        ],
        bullets: [
          'First: announced, mid-morning, everyone indoors, walk-through pace',
          'Second: announced, but during break or lunch with pupils spread out',
          'Third: shorter notice, including an outdoor class and the far field',
          'Fourth: include a complication, such as the usual decision-maker being absent',
        ],
      },
      {
        heading: 'Handling the safeguarding side',
        paragraphs: [
          'Lockdown drills touch on frightening subject matter, and running them badly can cause genuine distress. This is not a reason to avoid them, but it is a reason to plan the human side as carefully as the operational side.',
          'Language matters considerably. Most schools find that describing the exercise in neutral terms, focused on practising a procedure rather than on the scenario behind it, keeps anxiety low while still achieving the practical aim.',
          'Some pupils will need individual planning. Children with sensory sensitivities, anxiety, or mobility needs may find alarms or confinement distressing, and staff should know in advance what the plan is for those individuals rather than improvising.',
        ],
      },
      {
        heading: 'What to record afterwards',
        paragraphs: [
          'A drill with no record is an event rather than a process. The written record is what turns findings into improvements, and it is also what demonstrates to governors, inspectors and insurers that your procedure is genuinely maintained.',
          'It does not need to be long. A single page per drill, kept consistently, is far more valuable than an occasional detailed report.',
        ],
        bullets: [
          'Date, time of day and which scenario was tested',
          'Who was on site, including any visitors or contractors',
          'How long until the site was secure',
          'Specific problems observed, with locations',
          'What you decided to change, and who owns each action',
          'Whether previous actions from the last drill had been completed',
        ],
      },
      {
        heading: 'Common findings and what they usually mean',
        paragraphs: [
          'Certain problems come up repeatedly across very different sites, and recognising them early saves time. If your drill surfaces one of these, it usually points at a specific fix rather than a general failing.',
          'Staff being unsure whether to move pupils or stay put almost always means the written procedure is too long or too conditional. Simplifying to a single default action, with exceptions listed separately, resolves it more reliably than further training on the existing document.',
          'People not hearing the alert in a specific location is a coverage issue rather than a training issue, and it is worth raising with your installer. Adding a device is usually straightforward on a wireless system, and it is exactly the kind of thing a first drill exists to find.',
        ],
      },
      {
        heading: 'Preparing staff before the first one',
        paragraphs: [
          'A drill run without preparation tests how staff cope with surprise rather than how well the procedure works. For a first exercise, that is the wrong thing to measure, and it damages confidence in a process you want people to trust.',
          'A short briefing beforehand covering the signal, the expected action and the fact that questions are welcome makes the exercise considerably more productive. Staff who understand the purpose report problems honestly, which is the entire value of the drill.',
          'It is also worth being explicit that nobody is being assessed. The moment staff believe a drill is a performance review, they stop reporting the confusion you most need to hear about.',
        ],
      },
      {
        heading: 'Communicating with parents',
        paragraphs: [
          'Parents will hear about a lockdown drill, either from the school or from their child, and the second route generates far more anxiety than the first. A brief message in advance is almost always worth sending.',
          'What works is framing it as routine practice alongside fire drills, stating that it is planned and age-appropriate, and being clear that it does not indicate any specific concern. Most parents respond well to knowing the school has thought about it.',
          'Afterwards, a short line confirming the drill happened and went well closes the loop. It is a small effort that prevents the speculation that otherwise fills the gap.',
        ],
      },
      {
        heading: 'Testing the system as well as the people',
        paragraphs: [
          'A drill exercises your procedure. It is worth also testing the equipment separately, because the two failure modes are different and a full drill is a heavy way to discover a flat battery.',
          'Most sites settle on a short technical test more frequently than full drills, checking that devices sound and that any monitoring reports as expected. On a monitored system much of this is automatic, which is one of the practical arguments for monitoring.',
        ],
        bullets: [
          'Confirm every device sounds and any beacon operates',
          'Check monitoring reports match what you observed',
          'Verify triggers work, including portable fobs',
          'Note any device that seems quieter than expected',
          'Record the test date alongside your drill records',
        ],
      },
      {
        heading: 'Building the evidence trail for governors and inspectors',
        paragraphs: [
          'Drills produce operational improvement, and they also produce evidence. Both matter, and the second is easy to neglect because it feels like administration rather than safety work.',
          'What scrutiny generally looks for is not a single impressive document but a visible cycle: a procedure exists, it was tested, problems were found, changes were made, and a further test confirmed the changes worked. That pattern is far more convincing than a thorough policy with no testing behind it.',
          'Reporting to governors once a year is usually sufficient, and it can be brief. When the last drill was, what it tested, what was found, what changed, and when the next one is scheduled. Five lines is enough if the underlying record is real.',
          'Keeping this current also protects the people involved. If something ever goes wrong, the difference between an organisation that can demonstrate a maintained procedure and one that cannot is substantial, both practically and in terms of how the response is judged afterwards.',
        ],
        bullets: [
          'Keep one page per drill rather than occasional long reports',
          'Record actions with owners and completion dates',
          'Confirm at the next drill that previous actions were done',
          'Report annually to governors in summary form',
          'Note staff briefing dates, including new starters',
        ],
      },
    ],
    faqs: [
      {
        question: 'How often should we run a lockdown drill?',
        answer:
          'There is no single mandated frequency in the way there is for fire drills, but most schools find at least annually is the minimum for staff confidence, with additional practice after significant staff changes or procedure updates. Check your local authority or trust policy, which may set its own expectation.',
      },
      {
        question: 'Should we tell pupils in advance?',
        answer:
          'For early drills, generally yes, particularly with younger children. The aim is to build familiarity without causing distress. Unannounced drills are something to build towards once the procedure is well understood, and should be judged against your safeguarding context.',
      },
      {
        question: 'Do we need to involve the police?',
        answer:
          'Not for a routine internal drill. For larger exercises, or if you want to test your procedure against a specific scenario, many forces have officers who will advise. It is worth asking rather than assuming.',
      },
      {
        question: 'What should staff actually do during a lockdown?',
        answer:
          'That depends on your procedure, but it usually means securing the room, moving away from doors and windows, accounting for who is present, and waiting for a recognised all-clear. The important thing is that it is written down, short, and practised.',
      },
      {
        question: 'How do we handle pupils with additional needs?',
        answer:
          'Plan it explicitly rather than leaving it to the moment. Some pupils will find alarms distressing, and some will need support to move or stay still. Visual alerts and spoken messages can help where a tone alone causes distress.',
      },
    ],
  },
  {
    slug: 'who-can-trigger-a-lockdown-alarm',
    seoTitle: 'Who Can Trigger a Lockdown Alarm?',
    seoDescription: 'How to decide who raises the alert, where trigger points go, and why hesitation is a bigger risk than false alarms.',
    title: 'Who Should Be Able to Trigger a Lockdown Alarm?',
    excerpt:
      'Restrict the trigger too tightly and nobody can raise the alarm when it matters. Leave it too open and confidence drops. This decision shapes how the whole system gets used.',
    category: 'Lockdown Planning',
    publishedAt: '2026-07-03',
    displayDate: '3 July 2026',
    readTime: '6 min read',
    author: 'A-Squared Editorial Team',
    serviceHref: '/lockdown-alarms',
    serviceLabel: 'Explore Lockdown Alarm Systems',
    atAGlance: [
      'A trigger only one person can reach is a single point of failure.',
      'Hesitation is a bigger practical risk than accidental activation on most sites.',
      'Most sites use fixed call points plus portable fobs for staff who move around.',
      'Say explicitly that staff will be supported for triggering in good faith.',
    ],
    keyTakeaways: [
      'Write down the threshold for triggering, not just who is permitted to.',
      'Make the all-clear easy, so raising the alert feels less consequential.',
      'Check there is never an hour when nobody who can trigger is on site.',
    ],
    sections: [
      {
        heading: 'The two failure modes',
        paragraphs: [
          'Restrict the trigger to a couple of senior people and you create a delay at the worst possible moment, because the person who sees the problem has to find the person allowed to act. If that person is teaching, off site or in a meeting, the delay grows.',
          'Open it to everyone with no guidance and you get uncertainty about thresholds and a system people are nervous about using. Both extremes produce hesitation, which is precisely what a lockdown alert exists to remove.',
        ],
      },
      {
        heading: 'Trigger types and who they suit',
        paragraphs: [
          'Most sites end up with a combination, so that reaching a trigger never depends on being in one particular room at one particular moment.',
        ],
        bullets: [
          'Fixed call points at reception and main entrances, where incidents most often begin',
          'Portable key fobs for duty leads, site staff and those supervising outdoors',
          'Additional call points in detached buildings and remote areas',
          'A clearly identified point in the school office as the default fallback',
        ],
      },
      {
        heading: 'Write down the threshold, not just the permission',
        paragraphs: [
          'Naming who may trigger is only half the decision. The more useful half is describing when. Staff act more decisively when the procedure gives concrete examples rather than asking them to judge whether something is serious enough.',
          'Examples need not be exhaustive. A few clear illustrations of situations warranting a lockdown, plus a stated principle that it is better to raise it and stand down than to wait, tells people what is expected of them.',
        ],
      },
      {
        heading: 'Say what happens if someone gets it wrong',
        paragraphs: [
          'The unspoken worry is being blamed for a false alarm. If that is not addressed, people hesitate. Stating plainly that staff acting in good faith will be supported, even if the alert proves unnecessary, removes the main reason for delay.',
          'Sites that pair this with an easy, well-understood all-clear tend to see confident use. If standing down is straightforward, raising the alert feels less consequential, which is exactly the balance you want.',
        ],
      },
      {
        heading: 'Coverage of the decision, not just the building',
        paragraphs: [
          'Most sites check that their alarm covers the whole building. Fewer check that their decision-making covers the whole week. It is worth mapping the hours when the site is occupied against the hours when someone who can and would trigger the alert is present.',
          'The gaps tend to appear at the edges of the day and week. Breakfast club, after-school provision, evening lettings, weekend sports fixtures and holiday clubs all put people on site at times when the usual leadership presence is thinner or absent entirely.',
          'If those hours are genuinely uncovered, the answer is usually to widen who holds a trigger rather than to accept the gap. A site manager or club lead holding a fob is a simple fix to a real problem.',
        ],
      },
      {
        heading: 'Writing the threshold in plain terms',
        paragraphs: [
          'Abstract criteria such as a credible threat to the safety of the site are technically correct and practically useless at speed. Staff need to recognise the situation they are in without having to interpret a definition.',
          'Concrete examples work far better. They do not need to be exhaustive, and stating that they are illustrative rather than a complete list keeps the procedure honest while still giving people something to recognise.',
        ],
        bullets: [
          'An aggressive or threatening person refusing to leave the site',
          'An intruder in the building who cannot be accounted for',
          'A serious incident immediately outside the boundary',
          'Police instruction to secure the premises',
          'A credible warning received by phone or in person',
        ],
      },
      {
        heading: 'Training people who hold a trigger',
        paragraphs: [
          'Handing someone a fob is not the same as preparing them to use it. Anyone who can trigger the alert should have had the conversation about when, and should have done it at least once in a drill so the physical action is familiar.',
          'This matters most for people outside the teaching staff. Site managers, office staff and club leads are often the people most likely to encounter a problem first, and are frequently the least included in procedural training.',
          'It is also worth revisiting after staff changes. A trigger held by someone who left last term is a gap that nobody notices until it matters, which is a good argument for reviewing the list of holders each year alongside the procedure itself.',
        ],
      },
      {
        heading: 'The all-clear deserves as much thought as the alert',
        paragraphs: [
          'Sites spend most of their planning effort on raising the alarm and comparatively little on ending it. In practice, an ambiguous all-clear causes nearly as much disruption as an unclear alert, because people do not know when it is safe to resume.',
          'Decide who is authorised to give it, how it is communicated, and how someone in a secured room can distinguish a genuine all-clear from someone simply knocking on the door. That last question is the one most procedures leave unanswered.',
          'Some sites use a distinct signal for the all-clear, others use a spoken message, and others rely on a named person attending each area. Any of these can work, provided it is decided in advance and practised rather than improvised.',
        ],
      },
      {
        heading: 'Zoned alerts and partial lockdowns',
        paragraphs: [
          'Some sites ask whether they can alert one part of the building rather than everywhere. The capability exists, and on large or mixed-use sites it can be genuinely useful, but it introduces a decision that has to be made under pressure.',
          'The risk is that zoning turns a simple action into a judgement. Someone raising the alarm now has to decide not just whether to trigger it but where, and getting that wrong may leave people uninformed in an area that turns out to matter.',
          'Where zoning works well is when the zones map onto genuinely separate operations, such as a detached nursery or a sixth form block on the other side of a road. Where it works badly is when zones are drawn on a floor plan without a procedural reason.',
        ],
      },
      {
        heading: 'Recording who holds a trigger',
        paragraphs: [
          'Portable triggers move around, and over a few years they have a tendency to end up in drawers, in the wrong building, or with someone who has left. A short register solves this and takes almost no maintenance.',
          'What matters is not the formality but that someone checks it periodically. An annual review alongside your procedure review is usually enough, and it catches the drift before it becomes a gap.',
        ],
        bullets: [
          'Who holds each portable trigger, by role and by name',
          'Where fixed call points are located',
          'When each was last tested',
          'What happens when a holder leaves or changes role',
          'Who to tell if a trigger is lost or damaged',
        ],
      },
      {
        heading: 'When the decision-maker is the incident',
        paragraphs: [
          'Procedures usually assume the person who decides is available to decide. Occasionally they are not, either because they are dealing directly with the situation or because they are the person it involves.',
          'This is worth thinking through once rather than discovering in the moment. A simple deputising chain, naming roles in order, covers most of it, and it is the same approach used for other emergency responsibilities.',
          'It is also a good argument for widening who can trigger. If the alert can be raised by anyone who sees a problem, the absence of one particular person stops being a single point of failure.',
        ],
      },
      {
        heading: 'Reception is usually where it starts',
        paragraphs: [
          'On the majority of sites, the first point of contact with a problem is reception or the school office. It is the controlled entry point, it is where visitors present themselves, and it is where someone behaving unusually is most likely to be encountered first.',
          'That makes reception staff disproportionately important to this decision, and they are frequently among the least trained. They are not usually included in teaching staff briefings, they may be part-time, and the role often has higher turnover than teaching posts.',
          'The practical implications are straightforward. Reception should always have a trigger within reach, more than one person covering the desk should know how to use it, and the briefing they receive should be at least as thorough as anyone else’s rather than an afterthought.',
          'It is also worth thinking about what reception staff are expected to do after raising the alert. They are closest to the entrance, which is often the least safe place to be, and a procedure that tells everyone else to secure their room should say what the person at the front door does.',
        ],
        bullets: [
          'A trigger within arm’s reach of the desk, not down a corridor',
          'Every person who covers reception trained, including part-time staff',
          'A clear instruction for what reception staff do after triggering',
          'Consideration of how the entrance itself is secured',
          'Refresher briefing whenever office staffing changes',
        ],
      },
    ],
    faqs: [
      {
        question: 'Should every member of staff be able to trigger a lockdown?',
        answer:
          'On most sites, yes, with clear guidance on when. The alternative creates a delay while someone finds an authorised person. What matters is that the threshold is written down and staff know they will be supported for acting in good faith.',
      },
      {
        question: 'What stops accidental activation?',
        answer:
          'Call points are designed to require a deliberate action rather than a brush past. In practice, most sites find under-triggering a bigger problem than over-triggering, and an occasional false alarm is a much smaller risk than a delayed real one.',
      },
      {
        question: 'Can we have different trigger levels?',
        answer:
          'Some sites zone their system so an alert can be raised in one area rather than site-wide. Whether that helps depends on your procedures. It adds capability and some complexity, so it is worth deciding on operational grounds.',
      },
      {
        question: 'Who gives the all-clear?',
        answer:
          'That should be named by role in your procedure, along with how it is communicated. An all-clear that is ambiguous is almost as disruptive as an unclear alert, because people do not know when normal activity can resume.',
      },
      {
        question: 'What about visitors and contractors?',
        answer:
          'They will not know your procedure, so they should not be relied on to trigger. What matters more is that they understand what to do when the alert sounds, which is a strong argument for spoken announcements over tone-only alerts.',
      },
    ],
  },
  {
    slug: 'martyns-law-lockdown-requirements',
    seoTitle: 'Martyn\'s Law: Lockdown Requirements',
    seoDescription: 'A plain-language guide to the tiers, the four public protection procedures, and what to do before enforcement begins.',
    title: 'Martyn’s Law and Lockdown: What UK Premises Need to Do',
    excerpt:
      'The Terrorism (Protection of Premises) Act introduces duties for many publicly accessible places. Here is a plain-language explanation of the tiers, the four procedures, and what to do before enforcement begins.',
    category: 'Compliance',
    publishedAt: '2026-06-30',
    displayDate: '30 June 2026',
    readTime: '7 min read',
    author: 'A-Squared Editorial Team',
    serviceHref: '/compliance',
    serviceLabel: 'See Compliance & Martyn’s Law',
    atAGlance: [
      'The Act is built around procedures first, with equipment supporting them.',
      'Duties are tiered by how many people a premises can host.',
      'There is an implementation period, so preparation now is sensible rather than urgent.',
      'Most organisations already have evacuation covered and lockdown less so.',
    ],
    keyTakeaways: [
      'Start with procedures, because that is the substance and it costs nothing but time.',
      'Communication is the duty hardest to satisfy without a reliable way to alert everyone.',
      'Check current official guidance for thresholds and dates, which can be refined.',
    ],
    sections: [
      {
        heading: 'What the legislation is for',
        paragraphs: [
          'The Terrorism (Protection of Premises) Act, widely known as Martyn’s Law, exists to make sure publicly accessible premises have thought in advance about what they would do during an attack. It follows the Manchester Arena attack in 2017 and the campaigning that came after it.',
          'The important point is that it is not primarily a shopping list of equipment. It is about having considered, documented and communicated procedures so that staff are not improvising under pressure.',
        ],
      },
      {
        heading: 'The four public protection procedures',
        paragraphs: [
          'The procedural thinking generally covers four responses. Most organisations find they are strong on the first and weaker on the rest.',
        ],
        bullets: [
          'Evacuation — getting people out of the premises safely',
          'Invacuation — bringing people inside to a safer place',
          'Lockdown — securing the building against entry',
          'Communication — making sure people are actually told what is happening',
        ],
      },
      {
        heading: 'The tiered approach',
        paragraphs: [
          'Duties are tiered according to how many people a premises may host, with a lighter set of requirements for smaller-capacity venues and a more demanding set for larger ones. The lighter tier centres on having appropriate procedures in place and making staff aware of them.',
          'The heavier tier adds further requirements around measures and documentation. Exact thresholds, definitions, penalties and timescales are set out in the legislation and in official guidance, and these are the details most likely to be refined, so work from current guidance rather than a summary like this one.',
        ],
      },
      {
        heading: 'Where alerting fits in',
        paragraphs: [
          'Equipment does not make you compliant, but the communication element is difficult to satisfy without a reliable way to tell everyone at once. A procedure that depends on someone physically finding each room does not work at pace or at scale.',
          'This is where a distinct lockdown alert earns its place, and why it must be unmistakably different from your fire alarm. The response to a fire alarm and the response to a lockdown are opposites, so the signals cannot be ambiguous.',
        ],
      },
      {
        heading: 'What to do now',
        paragraphs: [
          'Working in this order tends to produce a better result, and means you buy what your plan needs rather than hoping equipment substitutes for a plan.',
        ],
        bullets: [
          'Write down what you would do, who decides, and how people are told',
          'Identify which tier your premises is likely to fall into',
          'Test the procedure and record where it did not work',
          'Check whether everyone on site can actually be alerted, including outdoors',
          'Only then specify equipment, based on what the procedure requires',
        ],
      },
      {
        heading: 'Why lockdown is usually the weakest of the four',
        paragraphs: [
          'Ask most organisations about evacuation and you will get a confident answer, because fire legislation has driven decades of drills, signage and assembly points. Ask about lockdown and the answer is often less certain, even in places that have thought about it.',
          'Part of the reason is that evacuation has an obvious success condition: everyone is outside and accounted for. Lockdown is harder to define, because it depends on where people are, what they can secure, and how long it needs to hold.',
          'The other reason is practice. Evacuation is rehearsed regularly and lockdown frequently is not, so staff have a well-worn response for one and a theoretical one for the other. That imbalance is exactly what a written procedure and regular drills exist to correct.',
        ],
      },
      {
        heading: 'Invacuation is the one people forget entirely',
        paragraphs: [
          'Of the four procedures, invacuation is the least familiar and the most often absent from existing plans. It means bringing people inside from outdoor areas to a safer place, which is the correct response to a threat outside the building rather than inside it.',
          'It matters because it is the opposite of the response most people have practised. A fire alarm sends everyone outside. If the danger is outside, sending people out is precisely wrong, and staff need a way of knowing which situation they are in.',
          'For schools with large outdoor areas this is a practical rather than theoretical concern. A class on a field needs to know where to go, by which route, and how they will be told. That is a conversation worth having before it is needed.',
        ],
      },
      {
        heading: 'Documenting it in a way that stands up',
        paragraphs: [
          'The legislation places weight on procedures being documented and staff being made aware of them. In practice that means the paperwork needs to demonstrate a live process rather than a one-off exercise.',
          'What tends to satisfy scrutiny is not length but evidence of a cycle: a plan, a test, findings, changes, and a next review date. A short document with that trail behind it is stronger than a long one written once and never revisited.',
        ],
        bullets: [
          'The written procedure itself, with a version date and owner',
          'Evidence that staff have been made aware of it',
          'Records of drills, including what did not work',
          'Actions taken as a result, with dates',
          'A scheduled review point, and evidence the last one happened',
        ],
      },
      {
        heading: 'Common misconceptions',
        paragraphs: [
          'The most persistent misconception is that Martyn’s Law is an equipment purchase. It is not. No product makes an organisation compliant, and any supplier suggesting otherwise is overstating what they can offer.',
          'A second is that having a fire evacuation plan covers it. It does not, because the four procedures include responses that are the opposite of evacuation, and because communication needs to reach people wherever they happen to be.',
          'A third is that small organisations are automatically out of scope. Whether you are in scope depends on the definitions in the legislation rather than on an intuition about size, which is why it is worth checking the current official guidance for your specific circumstances rather than assuming.',
        ],
      },
      {
        heading: 'How this interacts with what you already do',
        paragraphs: [
          'Very few organisations are starting from nothing. Fire safety obligations, health and safety duties, safeguarding responsibilities and existing emergency plans all overlap with this, and the sensible approach is to extend rather than duplicate.',
          'The overlap is largest with fire procedures, which already establish alarm systems, drills, roles and record-keeping. What they do not cover is the response that is the opposite of evacuation, and communication that reaches people wherever they are.',
          'Treating this as an extension of existing arrangements also avoids the common failure of producing a separate document nobody reads. A plan that sits alongside the emergency procedures staff already know is far more likely to be used.',
        ],
      },
      {
        heading: 'Practical steps that cost nothing',
        paragraphs: [
          'A great deal of useful preparation involves no purchase at all. Working through the list below will tell you where your genuine gaps are, and it may reveal that your position is stronger than you assumed.',
        ],
        bullets: [
          'Write down what you would do in each of the four procedures',
          'Name the roles that make decisions, and check they are always filled',
          'Walk the site asking whether an alert would reach every occupied area',
          'Identify who is on site that your current plans do not cover',
          'Run a tabletop exercise with the people who would be involved',
          'Record what you found and set a date to review it',
        ],
      },
      {
        heading: 'Getting the timing right',
        paragraphs: [
          'There is an implementation period built into the legislation, which means this is not an emergency. It also means it is easy to defer, and deferring has a cost when the deadline eventually concentrates everyone at once.',
          'The organisations we see handling this well are treating it as a normal improvement cycle rather than a compliance scramble. They are writing procedures now, testing them over the coming year, and specifying equipment once they know what the plan requires.',
          'That sequence also produces better buying decisions. A site that knows its procedure can specify precisely what it needs. A site buying against a deadline tends to over-specify, under-specify, or both in different places.',
        ],
      },
      {
        heading: 'Who should own this in your organisation',
        paragraphs: [
          'Legislation creates duties for organisations, but organisations act through individuals, and this is the point where preparation most often stalls. If ownership is not assigned, the work sits between roles and nobody moves it forward.',
          'The natural owner varies by sector. In schools it usually sits between the designated safeguarding lead and whoever holds estates responsibility. In commercial premises it is often facilities or health and safety. In healthcare it may sit with a governance or risk function.',
          'What matters more than which role is that it is a role rather than a person, that they have the authority to convene the people needed, and that there is a route to whoever approves spending. Preparation that depends on an enthusiastic individual with no mandate rarely survives their next job move.',
          'Board or governor visibility is the other half. Someone at that level should know what the current position is, what the plan is, and when it was last reviewed. That is not bureaucracy for its own sake, it is what keeps the work from quietly slipping down the list.',
        ],
        bullets: [
          'Name a role, not an individual, as owner',
          'Give that role authority to convene the relevant people',
          'Establish a route to whoever approves spending',
          'Put the position in front of the board or governors at least annually',
          'Record decisions, including any decision to defer',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does Martyn’s Law apply to my premises?',
        answer:
          'It applies to qualifying publicly accessible premises, with duties tiered by the number of people the premises can host. Whether you are in scope, and at which tier, depends on definitions set out in the legislation, so check the current official guidance for your specific situation.',
      },
      {
        question: 'When does it come into force?',
        answer:
          'The Act includes an implementation period before enforcement begins, intended to give organisations time to prepare. Confirm the current timetable from official sources, as it is the kind of detail that gets updated.',
      },
      {
        question: 'Do we have to install a lockdown alarm to comply?',
        answer:
          'No. The legislation is about procedures rather than mandating specific products. That said, the communication element is hard to satisfy on a large site without a reliable way to alert everyone at once, which is why many organisations conclude they need one.',
      },
      {
        question: 'Who enforces it?',
        answer:
          'A regulatory function sits with the Security Industry Authority. The detail of inspection and enforcement is set out in the legislation and accompanying guidance.',
      },
      {
        question: 'We already have fire procedures. Is that enough?',
        answer:
          'Not on its own. Fire procedures cover evacuation well, but lockdown and invacuation require the opposite response, and communication needs to reach people wherever they are. Those are usually the gaps.',
      },
    ],
  },
  {
    slug: 'martyns-law-for-schools-checklist',
    seoTitle: 'Martyn\'s Law for Schools: Checklist',
    seoDescription: 'A practical checklist for schools, covering outdoor coverage, lettings, visitors and who should own the procedure.',
    title: 'Martyn’s Law for Schools: A Practical Checklist',
    excerpt:
      'Schools already run drills, control access and plan for emergencies. The useful question is not whether you are starting from zero, but which parts of what you already do need extending.',
    category: 'Compliance',
    publishedAt: '2026-06-25',
    displayDate: '25 June 2026',
    readTime: '6 min read',
    author: 'A-Squared Editorial Team',
    serviceHref: '/industries/schools',
    serviceLabel: 'See Schools & Colleges',
    atAGlance: [
      'Schools usually have strong evacuation practice and weaker lockdown practice.',
      'Lettings, community use and visitors are the areas most often missed.',
      'Outdoor space is the most common coverage gap on a school site.',
      'Trusts should standardise the signal and expectation, not the layout.',
    ],
    keyTakeaways: [
      'Work through who is on site that your drills have never trained.',
      'Resolve explicitly what happens if the alert sounds during an outdoor lesson.',
      'Keep a record of what you tested and what changed as a result.',
    ],
    sections: [
      {
        heading: 'You are further along than you think',
        paragraphs: [
          'Schools have a considerable head start. Fire drills are routine, registers exist, staff are used to structured emergency procedures, and there is already a culture of practising things rather than only writing them down.',
          'The gap is rarely whether procedures exist. It is that evacuation has been drilled for decades while lockdown has often been discussed rather than practised, so staff confidence between the two is very different.',
        ],
      },
      {
        heading: 'A practical checklist',
        paragraphs: [
          'Working through these questions will tell you fairly quickly where your genuine gaps are, and most of them cost nothing but time to answer.',
        ],
        bullets: [
          'Is there a written lockdown procedure, and can staff summarise it?',
          'Can the alert be heard everywhere, including playgrounds and fields?',
          'Is the lockdown signal unmistakably different from the fire alarm?',
          'Who can trigger it, and is one of them always on site?',
          'Do visitors, contractors and supply staff know what to do?',
          'Does the procedure cover lettings and out-of-hours community use?',
          'When was it last practised, and what changed afterwards?',
        ],
      },
      {
        heading: 'The site is busier than the plan assumes',
        paragraphs: [
          'A school day includes far more than pupils and teaching staff. Visitors, contractors, peripatetic teachers, supply staff, parents at drop-off and pick-up, and sports fixtures all put people on site who have never seen your procedure.',
          'Lettings and community use extend this further. If the hall is used by external groups in the evening, or the site hosts holiday provision, the people present at that moment are not the ones your drills have trained.',
        ],
      },
      {
        heading: 'Outdoor space is the recurring weak point',
        paragraphs: [
          'Playgrounds, fields and sports pitches are where the largest number of people are furthest from the building and least likely to hear an indoor alert. On many sites this is the single biggest gap in coverage.',
          'It is also the scenario staff find hardest to answer confidently. If the alert sounds while a class is outside, what are they expected to do, where do they go, and how do they know. That is worth resolving explicitly rather than leaving to judgement.',
        ],
      },
      {
        heading: 'What good already looks like in most schools',
        paragraphs: [
          'It is worth being specific about the strengths, because they are genuine and they shorten the work considerably. Schools generally have a single point of entry with supervision, a visitor signing process, staff who know their pupils, and an established route for communicating with parents quickly.',
          'They also have governance that is used to reviewing safety matters, and a rhythm of training days that can absorb a briefing without special arrangements. Very few other sectors have all of that already in place.',
          'The practical implication is that this is usually an extension exercise rather than a new programme. The question is which existing habits need widening, not whether the school needs to start thinking about emergencies.',
        ],
      },
      {
        heading: 'Where school plans most often fall short',
        paragraphs: [
          'Across the sites we visit, the same handful of gaps appear repeatedly, and none of them are signs of a badly run school. They are simply the parts that fire-focused planning never had reason to cover.',
        ],
        bullets: [
          'No way to alert the field or playground reliably',
          'A lockdown signal too similar to the fire alarm',
          'Only one or two people able to raise the alert',
          'Nothing written down for lettings and out-of-hours use',
          'Supply and new staff not briefed before their first day on site',
          'No record of what the last drill found or what changed',
        ],
      },
      {
        heading: 'Governance and who signs it off',
        paragraphs: [
          'Ownership tends to sit across two roles: the designated safeguarding lead for the procedural and pupil-facing side, and whoever holds estates or site responsibility for the physical side. Problems usually arise when only one of them is involved.',
          'Governor oversight matters for the same reason it does elsewhere in safeguarding. A governing body that has seen the procedure, knows when it was last tested, and knows what changed as a result is in a much stronger position than one that has only seen a policy title on a list.',
          'For trusts, the useful split is a trust-level standard approved centrally and a site-level annexe approved locally. That keeps consistency where it matters while leaving room for genuine differences between schools.',
        ],
      },
      {
        heading: 'Trusts should aim for consistency, not uniformity',
        paragraphs: [
          'For a multi-academy trust, the value is staff being able to move between sites and understand the response immediately. That argues for the same alert meaning the same thing everywhere, and the same basic expectations of staff.',
          'It does not mean identical plans. A large secondary with detached blocks and a small infant school have genuinely different needs. Consistency of signal and expectation, with site-specific detail underneath, is the arrangement that works.',
        ],
      },
      {
        heading: 'Lettings and out-of-hours use',
        paragraphs: [
          'This is the single most commonly missing element in school plans, and it is worth addressing specifically because the answer is rarely obvious. When the hall is hired to a community group on a Tuesday evening, who is responsible if something happens?',
          'The people on site at that moment are typically a caretaker, a hirer, and a group of adults or children who have never seen your procedure. The usual leadership presence is absent, and the systems people rely on during the day may not be staffed.',
          'The fix is usually straightforward once it is named. Decide who holds responsibility during lettings, make sure they can raise an alert, and give hirers a short written statement of what to do. It is one paragraph in a hire agreement and it closes a genuine gap.',
        ],
        bullets: [
          'Name who is responsible during each category of out-of-hours use',
          'Ensure that person can raise the alert and knows when to',
          'Include a short instruction in hire agreements',
          'Check the alert reaches the areas actually being used',
          'Cover holiday clubs and summer provision explicitly',
        ],
      },
      {
        heading: 'Working it into the school year',
        paragraphs: [
          'Trying to do all of this at once competes with everything else a school is managing. Spreading it across the year makes it considerably more achievable and tends to produce a better result.',
          'A workable rhythm is to write or review the procedure in the autumn term, brief staff at a training day, run the first drill before Christmas, and use the spring and summer terms for a harder exercise and any equipment work identified along the way.',
        ],
        bullets: [
          'Autumn: review the procedure and brief all staff, including new starters',
          'Autumn: run a straightforward announced drill',
          'Spring: harder scenario, including outdoor areas',
          'Spring: review findings with governors',
          'Summer: address any coverage gaps and plan installation windows',
        ],
      },
      {
        heading: 'Working with your local authority and the police',
        paragraphs: [
          'Schools do not have to work this out alone, and the external support available is often better than people expect. It tends to be under-used simply because nobody thinks to ask.',
          'Many police forces have officers whose role includes advising schools on security and emergency planning, and they will often review a procedure or attend an exercise. Their perspective is genuinely different from a supplier’s, because they are thinking about how an incident unfolds rather than about equipment.',
          'Local authorities frequently have emergency planning teams who can advise, and some maintain template procedures for schools in their area. Where those exist they are a reasonable starting point, though they still need adapting to your specific site.',
          'For trusts, there is also value in comparing notes with other trusts. The problems are common, the solutions are not commercially sensitive, and a conversation with a neighbouring trust that has already been through this is often the fastest route to a workable plan.',
        ],
        bullets: [
          'Ask your local force whether they have a schools liaison or CT security adviser',
          'Check whether your local authority has emergency planning support',
          'Look for existing template procedures you can adapt',
          'Compare approaches with neighbouring schools or trusts',
          'Involve them in an exercise rather than only in document review',
        ],
      },
    ],
    faqs: [
      {
        question: 'Are schools covered by Martyn’s Law?',
        answer:
          'Educational premises are addressed in the legislation, and the treatment of schools has specific provisions. Because the detail matters and guidance is refined over time, check the current official guidance for how it applies to your setting rather than relying on a general summary.',
      },
      {
        question: 'Do we need a separate lockdown alarm, or can we use the fire alarm?',
        answer:
          'You should not use the fire alarm. It instructs people to leave the building, which is the opposite of a lockdown response. Reusing it creates exactly the ambiguity that causes people to do the wrong thing under pressure.',
      },
      {
        question: 'How does this fit with our safeguarding responsibilities?',
        answer:
          'It complements them. A clear lockdown procedure supports the same aim as your wider safeguarding work, and the documentation is typically reviewed by the same people and governance route.',
      },
      {
        question: 'What if we hire out the hall in the evenings?',
        answer:
          'Then your procedure needs to cover who is responsible during those hours and how hirers are told what to do. This is one of the most commonly missed parts of a school plan.',
      },
      {
        question: 'Who in school should own this?',
        answer:
          'Usually a combination of the designated safeguarding lead and whoever holds estates or site responsibility, with governor oversight. What matters is that it is owned by a role rather than an individual, so it survives staff changes.',
      },
    ],
  },
  {
    slug: 'lockdown-alarm-vs-fire-alarm',
    seoTitle: 'Lockdown Alarm vs Fire Alarm',
    seoDescription: 'Why the two signals must sound different, how to make the distinction obvious, and what to do if both could apply.',
    title: 'Lockdown Alarm vs Fire Alarm: Why They Must Sound Different',
    excerpt:
      'A fire alarm tells people to leave the building. A lockdown alert tells them to stay inside and secure. If the two can be confused, the response can be exactly wrong.',
    category: 'Lockdown Alarm Systems',
    publishedAt: '2026-06-18',
    displayDate: '18 June 2026',
    readTime: '5 min read',
    author: 'A-Squared Editorial Team',
    serviceHref: '/lockdown-alarms',
    serviceLabel: 'Explore Lockdown Alarm Systems',
    atAGlance: [
      'The two alerts demand opposite actions, so ambiguity is itself a safety risk.',
      'Use a different tone and a different visual indicator, not just a different pattern.',
      'Blue beacons are commonly used to distinguish lockdown from fire’s red.',
      'Spoken announcements remove the interpretation step entirely.',
    ],
    keyTakeaways: [
      'Never reuse fire sounders for a lockdown alert.',
      'Under stress people default to the response they have practised most.',
      'Visitors will not recognise a tone, which favours spoken messages.',
    ],
    sections: [
      {
        heading: 'Opposite instructions',
        paragraphs: [
          'A fire alarm means leave the building and gather at an assembly point outside. A lockdown alert means stay inside, secure the room and move away from doors and windows. There is no scenario in which confusing the two is harmless.',
          'This is why a lockdown system that reuses fire sounders, or a similar tone, undermines its own purpose. Under stress, people fall back on the response they have practised most, which for almost everyone is evacuation.',
        ],
      },
      {
        heading: 'Make the difference obvious on more than one channel',
        paragraphs: [
          'Relying on a single difference is fragile, particularly for anyone with hearing difficulties or in a noisy space. Layering the signal is what makes it unambiguous.',
        ],
        bullets: [
          'A clearly different tone, not just a different pattern of the same sound',
          'A different colour beacon, commonly blue where fire uses red',
          'Spoken announcements that state the instruction in plain language',
          'External units so the distinction carries to outdoor areas too',
        ],
      },
      {
        heading: 'Distinct is not the same as understood',
        paragraphs: [
          'A different tone only helps if people know what it means. The signal is the easy part; training is what makes it work. That means telling staff what each alert sounds like and practising both, not only the fire drill.',
          'It also means covering people outside your induction cycle. Visitors, contractors and hirers will not recognise a tone. This is one of the strongest arguments for a spoken message, which needs no prior knowledge to act on.',
        ],
      },
      {
        heading: 'Why people default to the wrong response',
        paragraphs: [
          'Under acute stress, people do not carefully evaluate which of two similar signals they are hearing. They pattern-match to the most familiar one and act. In a British school, the most familiar alarm by a very wide margin is the fire alarm.',
          'That is the whole problem in one sentence. A lockdown alert that is merely a variation on a fire tone will, for a meaningful proportion of people, be processed as a fire alarm. They will begin evacuating, which in a lockdown scenario may move them towards the danger.',
          'This is also why training alone does not fix an ambiguous signal. You are asking people to override a well-practised reflex using a briefing they received months ago. The signal itself has to do the work.',
        ],
      },
      {
        heading: 'What to do when the site is outdoors',
        paragraphs: [
          'The fire alarm and lockdown distinction gets harder outdoors, because outdoor staff are already where a fire alarm would send them. Hearing an alarm in the playground does not, on its own, tell a member of staff whether to stay put or bring the class inside.',
          'This is why external units matter and why the signal needs to be distinguishable outside as well as in. It is also a strong argument for spoken announcements in outdoor areas, since a voice instruction removes the ambiguity completely.',
          'Whatever you choose, the outdoor case needs to be written into the procedure explicitly. What does a class on the field do, where do they go, and by which route. Leaving that to judgement in the moment is exactly the gap drills tend to expose.',
        ],
      },
      {
        heading: 'Getting the distinction into staff memory',
        paragraphs: [
          'Making the signals different is a one-off engineering decision. Keeping the difference in people’s heads is an ongoing one, and it takes surprisingly little effort if it is built into things that already happen.',
        ],
        bullets: [
          'Include both alarms in induction, not just the fire alarm',
          'Play the lockdown tone at a staff meeting so people have heard it',
          'Put the one-line meaning of each signal on the wall in staff areas',
          'Practise lockdown as well as fire, even briefly',
          'Brief supply staff and regular contractors, not only permanent employees',
        ],
      },
      {
        heading: 'What about sites with existing systems',
        paragraphs: [
          'Many buildings already have a PA system, a bell, or a fire panel with multiple tone options, and it is reasonable to ask whether one of those can serve as a lockdown alert rather than installing something new.',
          'A PA system can work in principle, since a spoken instruction is unambiguous. The practical limitations are that it usually requires someone to operate it from a fixed location, coverage rarely extends properly outdoors, and it often depends on power and network in a way a dedicated system does not.',
          'Using spare tones on the fire panel is the option we would advise against most firmly. It puts both signals on the same devices, driven by the same system, which is precisely the ambiguity you are trying to remove.',
        ],
      },
      {
        heading: 'Choosing between tone, voice and visual',
        paragraphs: [
          'Once you accept the signals must differ, the next question is how. There are three channels available and most well-designed systems use at least two of them, because each covers a weakness in the others.',
          'A distinct tone is simple, carries well, and needs no interpretation once learned. Its weakness is that it must be learned, which makes it less effective for visitors and anyone new to the site.',
          'Voice removes that weakness entirely by stating the instruction, and it is particularly valuable in outdoor areas and for younger children who respond better to words than tones. Visual indicators cover people who cannot hear the alert, and reinforce the distinction at a glance.',
        ],
        bullets: [
          'Tone: simple and carries well, but has to be learned',
          'Voice: no prior knowledge needed, strongest for visitors and outdoors',
          'Beacon: reaches people who cannot hear, reinforces the distinction',
          'Combination: what most well-specified sites end up using',
        ],
      },
      {
        heading: 'Accessibility and people who cannot hear the alert',
        paragraphs: [
          'Any alerting design needs to account for people who will not hear a sounder. That includes deaf and hard-of-hearing staff and pupils, people wearing ear defenders, and anyone in a space with high background noise.',
          'Visual indicators are the primary answer, which is a further argument for beacons rather than sounders alone. Where a specific individual needs it, some sites supplement this with a personal alerting device.',
          'It is worth checking this as part of your accessibility planning rather than treating it as a separate exercise. The question is simply whether every person on site has a route by which they would learn that a lockdown has been declared.',
        ],
      },
      {
        heading: 'What to tell visitors and contractors',
        paragraphs: [
          'Visitors will not know your tones and cannot be trained. What they can be given is a single line at sign-in, and most sites find this is the highest-value thing they can do for people outside the staff body.',
          'A short statement on the visitor badge or sign-in screen covering what the lockdown alert sounds like and what to do is enough. It costs nothing and it converts a group of people who would otherwise be entirely dependent on staff into people who can act.',
          'The same applies to regular contractors, who are on site often enough to be worth briefing properly. Cleaning teams, catering staff and grounds contractors are frequently present outside normal hours, which makes them more important to include, not less.',
        ],
      },
      {
        heading: 'When both situations could apply at once',
        paragraphs: [
          'The scenario people find hardest is one where both responses have a claim: a fire during a lockdown, or a fire alarm activating while an intruder is on site. It is uncommon, but it is exactly the situation where an unprepared procedure produces paralysis.',
          'This needs deciding in advance, in writing, because it cannot be worked out sensibly in the moment. The decision is yours to make with your own risk assessment, and it should name who has the authority to make the call on the day.',
          'The general principle most organisations adopt is that an immediate life-safety threat takes precedence, and that a fire alarm during a lockdown requires a judgement about whether the fire is real rather than an automatic evacuation. But the specifics depend on your building, your risk assessment and any advice you have received.',
          'What matters most is that staff are not left to resolve the conflict individually. A procedure that says who decides, and what the default is if that person cannot be reached, removes the worst outcome, which is different parts of the building doing opposite things.',
        ],
        bullets: [
          'Decide the priority in advance and write it down',
          'Name who has authority to make the call',
          'State the default if that person cannot be reached',
          'Cover how the decision is communicated to secured rooms',
          'Test this scenario in a tabletop exercise rather than a live drill',
        ],
      },
    ],
    comparison: {
      title: 'Fire alarm and lockdown alert compared',
      columns: ['Fire alarm', 'Lockdown alert'],
      rows: [
        { label: 'Required action', cells: ['Leave the building', 'Stay inside and secure'] },
        { label: 'Where people go', cells: ['External assembly point', 'Away from doors and windows'] },
        { label: 'Doors', cells: ['Exit through them', 'Secure them'] },
        { label: 'Typical beacon colour', cells: ['Red', 'Blue'] },
        { label: 'Outdoor staff', cells: ['Move to assembly point', 'Move inside or to a safe area'] },
        { label: 'How often practised', cells: ['Termly in most schools', 'Often far less'] },
      ],
    },
    faqs: [
      {
        question: 'Can we just use a different ring pattern on the fire alarm?',
        answer:
          'We would strongly advise against it. Under stress, a variation of a familiar sound is likely to be interpreted as the familiar sound. A genuinely distinct tone and a separate visual indicator are far safer.',
      },
      {
        question: 'What if the fire alarm sounds during a lockdown?',
        answer:
          'This is a scenario worth deciding in advance rather than in the moment, and it should be written into your procedure. Because the two responses conflict, staff need to know which takes precedence and who makes that call.',
      },
      {
        question: 'Why blue beacons?',
        answer:
          'Red is strongly associated with fire, so using a different colour removes the visual ambiguity. Blue is widely used for lockdown, which also helps staff who move between sites recognise it.',
      },
      {
        question: 'Do voice announcements work in noisy areas?',
        answer:
          'They can, provided the units are specified for the environment and volume levels are set during commissioning. In very noisy or large open areas, voice is often combined with beacons so the message reaches people visually too.',
      },
      {
        question: 'Does a lockdown system interfere with the fire alarm?',
        answer:
          'No. A dedicated lockdown system is independent of your fire alarm, which is precisely the point. They remain separate systems with separate signals and separate responses.',
      },
    ],
  },
  {
    slug: 'lockdown-procedure-risk-assessment',
    seoTitle: 'Writing a Lockdown Procedure',
    seoDescription: 'How to turn a risk assessment into a one-page procedure staff can actually follow under pressure.',
    title: 'Lockdown Procedures: Turning a Risk Assessment Into a Plan Staff Can Follow',
    excerpt:
      'Plenty of organisations have a thorough risk assessment and a procedure nobody can recall under pressure. Bridging that gap is mostly about making the plan short, concrete and practised.',
    category: 'Compliance',
    publishedAt: '2026-06-11',
    displayDate: '11 June 2026',
    readTime: '6 min read',
    author: 'A-Squared Editorial Team',
    serviceHref: '/compliance',
    serviceLabel: 'See Compliance & Martyn’s Law',
    atAGlance: [
      'If the procedure cannot be summarised on one page, it will not be followed.',
      'Name roles rather than individuals, so the plan survives absence and turnover.',
      'A plan that has never been tested is an assumption, not a procedure.',
      'Keep a short record of what you tested and what changed.',
    ],
    keyTakeaways: [
      'Write an operational one-page version underneath the full assessment.',
      'Check the named role is always filled, including out of hours.',
      'Review after every drill, not annually by default.',
    ],
    sections: [
      {
        heading: 'The gap between the document and the moment',
        paragraphs: [
          'Risk assessments are written calmly, at a desk, with time to think. They are used, if at all, in the opposite conditions. That mismatch is why thorough documents often produce hesitant responses.',
          'The test is simple. Can someone who read the procedure once, months ago, do the right thing in the first ten seconds. If the honest answer is no, the issue is usually the format rather than the content.',
        ],
      },
      {
        heading: 'What the one-page version should contain',
        paragraphs: [
          'Underneath the full assessment there should be a short operational version, brief enough to be read in a minute and displayed where people work.',
        ],
        bullets: [
          'What the signal sounds and looks like',
          'The first action, stated in one sentence',
          'Where to go and where not to go',
          'What not to do, such as opening doors or leaving the room',
          'How the all-clear is given and by whom',
        ],
      },
      {
        heading: 'Name roles, not people',
        paragraphs: [
          'Plans that depend on named individuals fail predictably, because people are on leave, off site, in meetings, or have left the organisation. A plan that says the duty lead makes the call still works when the post holder changes.',
          'Then check the role is always filled. If there are hours in the week when nobody holds it, that is a genuine gap, and it is far better identified during a review than during an incident.',
        ],
      },
      {
        heading: 'Test it, then change it',
        paragraphs: [
          'A procedure that has never been exercised is a set of assumptions. Testing turns those assumptions into findings, and the findings are what make the next version better.',
          'Keep a short record of what was tested, what did not work and what changed as a result. That record demonstrates a genuine cycle of review, which is exactly what governors, insurers and inspectors look for.',
        ],
      },
      {
        heading: 'Where risk assessments usually go wrong',
        paragraphs: [
          'The most common failure is not an absent assessment but an unusable one. A document that is thorough, well researched and forty pages long will satisfy a review and fail completely at the moment it is needed.',
          'The second most common failure is conditionality. Procedures that branch repeatedly, asking staff to assess the situation and choose between several responses, produce hesitation. People need one default action they can take immediately, with exceptions handled separately.',
          'The third is drift. A procedure written three years ago may name a room that has been repurposed, a role that no longer exists, or a phone number that nobody answers. None of this is visible until it is tested, which is the argument for testing.',
        ],
      },
      {
        heading: 'Translating findings into a shorter document',
        paragraphs: [
          'The full assessment and the operational summary serve different readers and should be written differently. The assessment justifies the decisions; the summary tells someone what to do. Trying to make one document do both produces something that does neither well.',
          'A practical approach is to write the assessment first, then extract from it the smallest set of instructions that would produce the right behaviour. If that extraction is difficult, it is usually a sign the underlying plan has too many branches.',
        ],
        bullets: [
          'Full assessment: rationale, scenarios, governance, review history',
          'One-page summary: signal, first action, where to go, all-clear',
          'Site annexe: local detail such as secure areas and assembly points',
          'Role card: for those who can trigger or give the all-clear',
        ],
      },
      {
        heading: 'Making it survive staff turnover',
        paragraphs: [
          'A procedure that depends on institutional memory degrades every time someone leaves. Within a few years, the people who understood why decisions were made have gone, and what remains is a document nobody feels ownership of.',
          'Naming roles rather than individuals is the first defence. The second is including the procedure in induction properly, rather than as a document in a pack. A five-minute conversation on day one is worth more than twenty pages nobody opens.',
          'The third is the review cycle. If the procedure is genuinely revisited after each drill, the knowledge is continually refreshed across whoever currently holds the roles, rather than sitting with one long-serving member of staff.',
        ],
      },
      {
        heading: 'Working with your wider safeguarding and estates plans',
        paragraphs: [
          'A lockdown procedure does not sit on its own. It overlaps with safeguarding policy, critical incident planning, business continuity and site security, and it is worth checking those documents say compatible things.',
          'Contradictions between documents are common and usually accidental. A safeguarding policy that describes one response and an emergency plan that describes another will be resolved, under pressure, by whichever the individual read most recently.',
          'A short cross-check when any of these documents is updated prevents most of it. It is also the kind of joined-up review that governing bodies tend to look for, because it demonstrates the plans are managed together rather than separately.',
        ],
      },
      {
        heading: 'Running a tabletop exercise',
        paragraphs: [
          'Before committing to a full drill, a tabletop exercise is an efficient way to test a procedure. It takes an hour, involves no disruption, and typically finds more problems per minute spent than a physical drill does.',
          'The format is simple. Gather the people who would be involved, describe a scenario, and work through what each of them would actually do, minute by minute. The gaps appear quickly, usually as silences when nobody is sure who acts.',
          'It is particularly good for testing the decision-making layer, which a physical drill tends to skip because the decision has already been made by whoever scheduled it. Asking who would decide, on what information, and how quickly, is where most procedures show their weak points.',
        ],
        bullets: [
          'Pick a plausible scenario rather than a dramatic one',
          'Include site staff and office staff, not only leadership',
          'Work through it in real time, minute by minute',
          'Write down every point where someone hesitated',
          'Finish by agreeing who will change what, and by when',
        ],
      },
      {
        heading: 'Reviewing after a real incident',
        paragraphs: [
          'If you ever use the procedure for real, even for something minor that stands down quickly, the review afterwards is the most valuable one you will ever do. Real use surfaces things no exercise does.',
          'Do it quickly, while detail is fresh, and separate it from any investigation of the incident itself. The question is not whether people did the right thing but whether the procedure made the right thing obvious.',
          'It is also worth capturing what worked. Procedures tend to accumulate changes after problems and never record the parts that functioned well, which makes later reviewers uncertain about what they can safely simplify.',
        ],
      },
      {
        heading: 'Keeping the document short as it ages',
        paragraphs: [
          'Every review adds. Over several cycles, a one-page procedure becomes three pages, then a booklet, and the qualities that made it usable disappear one clarification at a time.',
          'The discipline is to treat length as a constraint rather than an outcome. If a review adds something, ask what can come out, and push detail into the full assessment rather than the operational summary.',
          'A useful test is to hand the current version to someone who has not read it and ask them what they would do. If they hesitate or start scanning, the document has grown past the point where it works, regardless of how accurate it has become.',
        ],
      },
      {
        heading: 'Using a template without inheriting its assumptions',
        paragraphs: [
          'Templates are a reasonable starting point and a poor finishing point. Local authorities, trusts and sector bodies all publish them, and they save real time on structure and wording.',
          'The risk is that a template carries assumptions about the site it was written for. It may assume a single building, a full-time senior leadership presence, no outdoor areas of consequence, or a particular alerting capability you do not have.',
          'Those assumptions are invisible until tested, because the document reads as complete. A procedure adopted from a template and never exercised is one of the more common ways a site ends up confident in a plan that would not work.',
          'The way to use one well is to treat it as a checklist of things to decide rather than a set of decisions already made. Work through each statement and ask whether it is true of your site. Where it is not, change it, and where you are unsure, that is the item to test first.',
        ],
        bullets: [
          'Check every named location actually exists and is suitable',
          'Check every named role exists and is filled during opening hours',
          'Check the alerting method described matches what you have',
          'Check outdoor areas and detached buildings are covered',
          'Test the adapted version rather than assuming it transfers',
        ],
      },
    ],
    faqs: [
      {
        question: 'How long should a lockdown procedure be?',
        answer:
          'The full document can be as long as your governance requires, but the operational version staff actually use should fit on one page. Length is the enemy of recall when people are under pressure.',
      },
      {
        question: 'How often should we review it?',
        answer:
          'After every drill or incident, plus at least annually. Reviewing only on a calendar cycle means findings from a drill sit unused for months.',
      },
      {
        question: 'Should the procedure be public?',
        answer:
          'The existence of a procedure can be public, but the operational detail generally should not be. Most organisations share the principles with parents or stakeholders and keep specifics internal.',
      },
      {
        question: 'Who should sign it off?',
        answer:
          'Typically senior leadership with governor or board oversight. The important thing is that whoever approves it has read the one-page version and believes staff could follow it.',
      },
      {
        question: 'Do we need a separate procedure for each building?',
        answer:
          'The response should be consistent, but site-specific detail such as where to go and which areas are secure will differ. Keep one procedure with site annexes rather than entirely separate documents.',
      },
    ],
  },
  {
    slug: 'lockdown-alarms-for-multi-academy-trusts',
    seoTitle: 'Lockdown Alarms for Academy Trusts',
    seoDescription: 'Rolling out across several schools: standardising the signal, central monitoring, phasing and building the business case.',
    title: 'Lockdown Alarms for Multi-Academy Trusts: Rolling Out Across Sites',
    excerpt:
      'Running the same procedure across several schools is harder than running it well at one. Here is how trusts across Greater Manchester and elsewhere handle the tension between consistency and site reality.',
    category: 'Multi-Site Planning',
    publishedAt: '2026-06-04',
    displayDate: '4 June 2026',
    readTime: '6 min read',
    author: 'A-Squared Editorial Team',
    serviceHref: '/industries/schools',
    serviceLabel: 'See Schools & Colleges',
    atAGlance: [
      'Standardise the signal and the expectation, then allow site-specific design underneath.',
      'Central monitoring is what makes a multi-site estate maintainable.',
      'Phasing by site lets coverage follow the budget rather than waiting for all of it.',
      'Staff move between sites, which is exactly why consistency matters.',
    ],
    keyTakeaways: [
      'Agree the trust-wide standard before individual sites specify equipment.',
      'Treat the standard as the outcome, not the device layout.',
      'Start with the sites that have the weakest current coverage.',
    ],
    sections: [
      {
        heading: 'The problem is people moving between sites',
        paragraphs: [
          'In a trust, staff move. Cover teachers, central team members, site staff and leadership all work across more than one building. If the alert means one thing at one school and something else at another, that mobility becomes a hazard.',
          'The fix is not complicated but it has to be deliberate. Agree that the same signal means the same thing everywhere, and that the expectation of staff is the same everywhere, before individual sites start specifying equipment.',
        ],
      },
      {
        heading: 'Standardise the signal, vary the design',
        paragraphs: [
          'Sites genuinely differ. A Victorian primary with thick walls, a 1970s secondary with long corridors and a recent build with open-plan spaces need different device counts and placements to achieve the same outcome.',
        ],
        bullets: [
          'Same tone and same visual indicator at every site',
          'Same first action expected of staff everywhere',
          'Same all-clear process and the same role authorised to give it',
          'Device count and placement determined per site by survey',
        ],
      },
      {
        heading: 'Monitoring is what makes it maintainable',
        paragraphs: [
          'One building can be checked by walking around it. Six cannot, at least not reliably or repeatedly. Without central visibility, maintenance across an estate becomes a matter of hoping each site remembers.',
          'A monitoring bridge that reports device status and battery health centrally turns that into an exception list. The central team sees what needs attention rather than chasing confirmation that nothing does.',
        ],
      },
      {
        heading: 'Phasing beats waiting',
        paragraphs: [
          'Few trusts can fund every site at once. The practical route is to sequence, usually starting with the sites that have the weakest current coverage or the highest assessed risk rather than the ones that are easiest.',
          'Wireless systems suit this well, because a later phase adds to what is already there rather than repeating a building project. It also lets you apply what you learned at the first site to the next.',
        ],
      },
      {
        heading: 'Primary and secondary sites need different thinking',
        paragraphs: [
          'The same procedure rarely transfers cleanly between a primary and a secondary school, even within the same trust. The difference is not the building so much as the independence of the people in it.',
          'In a primary, almost every pupil is with a member of staff at almost every moment, and the response is essentially a staff instruction carried out on behalf of a class. Younger children also react more strongly to alarm tones, which is an argument for spoken messages and for careful framing during drills.',
          'In a secondary, pupils move independently, may be off timetable, and are spread across a larger site. The procedure has to account for pupils who hear the alert while nowhere near their usual room, which means telling them what to do rather than relying on a teacher being present.',
        ],
      },
      {
        heading: 'Coordinating with existing systems',
        paragraphs: [
          'Most schools already have several systems that touch on safety, and a lockdown alert needs to sit alongside them without creating confusion. The fire alarm is the critical one, and the distinction between the two signals should be identical across every site in the trust.',
          'Access control, if you have it, is worth considering at the same time. Being able to secure entrances quickly complements an alert that tells people a lockdown is underway, and the two decisions are easier to make together than separately.',
        ],
        bullets: [
          'Fire alarm: signals must be unmistakably different at every site',
          'Access control: consider how entrances are secured during an alert',
          'Reception and visitor management: who is responsible during an incident',
          'Site communications: how the central team is informed',
        ],
      },
      {
        heading: 'Building the business case for the board',
        paragraphs: [
          'A trust-wide rollout is a governance decision as much as an operational one, and the paperwork tends to be what slows it down. It helps to present the whole programme with phases marked, rather than a series of separate site requests.',
          'Boards generally want to see the same things: what the current gaps are, what the standard will be, what it costs in total, and how it splits across financial years. Framing it as a single programme delivered in phases is usually more persuasive than an annual repeat of the same conversation.',
        ],
        bullets: [
          'Current position at each site, including known coverage gaps',
          'The trust-wide standard being adopted and why',
          'Total programme cost with a per-site and per-phase breakdown',
          'Which sites are prioritised and on what basis',
          'Ongoing costs and who owns the system day to day',
        ],
      },
      {
        heading: 'Learning from the first site',
        paragraphs: [
          'One genuine advantage of phasing is that the first installation teaches you things that improve every subsequent one. That only happens if someone is paying attention and the findings are captured centrally.',
          'The most useful lessons are usually procedural rather than technical: which parts of the handover staff found confusing, what the first drill exposed, and which questions parents or governors asked. Those answers make the second site considerably smoother.',
          'It is worth having the central team present at the first site’s handover and first drill for exactly this reason. The travel cost is small against the benefit of not repeating the same avoidable friction at every school in turn.',
        ],
      },
      {
        heading: 'Who owns it once the rollout finishes',
        paragraphs: [
          'Programmes have owners. Systems in daily use often do not, and this is where multi-site rollouts most commonly lose momentum. Once the central project closes, responsibility needs to land somewhere specific at both trust and site level.',
          'A workable split is that each site owns day-to-day operation, briefing new staff and running drills, while the central team owns the standard, the monitoring overview and the review cycle. Written down, that takes a paragraph. Left implicit, it tends to mean nobody does it.',
          'The practical test is simple: if a device reports a fault next term, who receives that message and who acts on it? If the answer is not immediately obvious, the handover is not finished.',
        ],
      },
      {
        heading: 'Keeping consistency as the trust changes',
        paragraphs: [
          'Trusts grow. Schools join, buildings are added, and sites occasionally leave. Each of those events is a moment where a carefully built standard can quietly fragment if nobody is watching for it.',
          'A joining school will usually arrive with its own arrangements, or none. Bringing it onto the trust standard is easier if the standard is a short written document rather than institutional knowledge held by whoever ran the original programme.',
        ],
        bullets: [
          'Add lockdown arrangements to the due diligence list for joining schools',
          'Review the trust standard annually rather than only when something changes',
          'Keep a central register of what is installed where, and when it was last tested',
          'Include new buildings and extensions in the standard from the design stage',
        ],
      },
      {
        heading: 'Procurement across a trust',
        paragraphs: [
          'Trust-wide purchases usually attract more procurement scrutiny than single-site ones, and the thresholds that trigger formal processes vary by trust and by funding source. It is worth establishing early which route applies, because it affects the timeline more than anything technical.',
          'A programme covering several schools may exceed a threshold that any individual site would not, which occasionally surprises people who have bought for one school before. Splitting a programme to stay below a threshold is not a legitimate approach, so it is better to plan for the process than to design around it.',
          'Where frameworks are available they can simplify this considerably, and many trusts already use them for other estates and safety work. Whether one covers this category is worth checking with your finance or procurement lead before going to market.',
          'The practical advice is to involve procurement at the point you commission surveys, not at the point you want to order. A specification produced with the eventual process in mind is far easier to take forward than one that has to be reworked to fit it.',
        ],
        bullets: [
          'Establish which procurement route applies before surveying',
          'Check whether an existing framework covers this category',
          'Plan the governance and procurement timeline alongside the calendar',
          'Keep the specification supplier-neutral enough to compare quotes',
          'Involve procurement early rather than at order stage',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can one system cover multiple sites?',
        answer:
          'Each site normally has its own system, since you would not want an alert at one school sounding at another. What is shared is the standard, the signal, and typically central monitoring that reports on all sites in one place.',
      },
      {
        question: 'Do we have to do all our schools at once?',
        answer:
          'No, and most trusts do not. Phasing by site is normal and lets the rollout follow budget cycles. Wireless systems make later phases straightforward because they add to what is already installed.',
      },
      {
        question: 'Can we get a trust-wide price?',
        answer:
          'We survey each site because device counts genuinely differ, but we quote as a programme so you can see the total and the per-site breakdown. That is usually what a board needs to approve a phased plan.',
      },
      {
        question: 'How do we keep procedures consistent across schools?',
        answer:
          'Write one trust-level procedure covering the signal, the first action and the all-clear, with a short site annex for local detail. That gives consistency where it matters without forcing very different sites into one layout.',
      },
      {
        question: 'Who manages the system day to day?',
        answer:
          'Usually the site team locally, with central oversight through monitoring. The monitoring layer is what lets a central estates or compliance lead see the position across every school without visiting.',
      },
    ],
  },
  {
    slug: 'when-to-install-school-safety-systems',
    seoTitle: 'When to Install School Safety Systems',
    seoDescription: 'Planning around term dates, exam periods and lettings, and what to do if you have missed the window you wanted.',
    title: 'When to Install School Safety Systems: Planning Around Term Dates',
    excerpt:
      'Term dates, exams and lettings shape when work can realistically happen. On busy urban sites in London and other cities, the calendar often constrains a project more than the budget does.',
    category: 'Project Planning',
    publishedAt: '2026-05-28',
    displayDate: '28 May 2026',
    readTime: '6 min read',
    author: 'A-Squared Editorial Team',
    serviceHref: '/contact',
    serviceLabel: 'Book a Free Site Survey',
    atAGlance: [
      'Holiday windows fill up early, so booking late usually means waiting a term.',
      'Exam periods block noisy commissioning for weeks, not days.',
      'Urban sites add access and parking constraints that affect the programme.',
      'Wireless installation widens the number of usable windows considerably.',
    ],
    keyTakeaways: [
      'Bring your term dates and exam periods to the survey, not to the install.',
      'Inset days often work well for testing and staff handover together.',
      'Book earlier than feels necessary if you want a specific holiday window.',
    ],
    sections: [
      {
        heading: 'The calendar is a real constraint',
        paragraphs: [
          'Most school projects are shaped by when work can happen rather than how long it takes. Half-terms and holidays are short, in demand, and shared with every other trade wanting the same window.',
          'The practical consequence is that timing decisions need making earlier than people expect. A project agreed in principle but not booked tends to slip a full term, because the next available window has already gone.',
        ],
      },
      {
        heading: 'Which windows actually work',
        paragraphs: [
          'Different parts of the year suit different stages of the work, and knowing this early usually shortens the overall programme.',
        ],
        bullets: [
          'Inset days: ideal for commissioning and staff handover in one visit',
          'Half-terms: good for larger sites needing consecutive days',
          'Summer holidays: best for hard-wired work, but book months ahead',
          'Term time: workable for wireless installation, avoiding exam periods',
        ],
      },
      {
        heading: 'Exams block more than people plan for',
        paragraphs: [
          'Formal exam periods rule out anything noisy, and commissioning an alarm system is noisy by definition. The restriction runs for weeks rather than days, and applies to parts of the site that are not obviously exam rooms.',
          'This is worth mapping at survey stage. Knowing which weeks are unavailable changes the sequencing, and it is much cheaper to plan around than to discover mid-project.',
        ],
      },
      {
        heading: 'Urban sites add their own constraints',
        paragraphs: [
          'On tight city sites, logistics start to matter. Parking, loading access, restricted delivery hours, shared access with neighbours and limited storage all affect how a day on site actually runs.',
          'None of these are unusual, but they need acknowledging in the programme. A plan that assumes a van can park outside all day is optimistic in most of inner London, and the same applies in the centre of any large city.',
        ],
      },
      {
        heading: 'Wireless widens the options',
        paragraphs: [
          'The less intrusive the installation, the more of the calendar becomes usable. Work needing cable routes through occupied buildings realistically needs a holiday. Work involving fixing devices and commissioning them often does not.',
          'That is why the wireless question and the calendar question tend to get answered together. For sites with few available windows, reducing what has to happen on site is frequently what makes the project achievable at all.',
        ],
      },
      {
        heading: 'Working backwards from when you want it live',
        paragraphs: [
          'Most schools think in terms of when the work can happen. It is more useful to decide when you want the system operational and work backwards, because the survey, specification, approval and lead time all sit in front of the installation.',
          'Governance is frequently the longest step and the one most often forgotten. If a purchase needs governor or trust board approval, the meeting cycle can add weeks regardless of how quickly everything else moves.',
        ],
        bullets: [
          'Survey and written specification: allow a week or two',
          'Internal approval, including any governor or board meeting cycle',
          'Order and equipment lead time',
          'Installation and commissioning, scheduled into an available window',
          'Staff handover and first drill, ideally within a few weeks of handover',
        ],
      },
      {
        heading: 'Lettings, clubs and the site that is never empty',
        paragraphs: [
          'The assumption that a school is empty during holidays is often wrong. Holiday clubs, community lettings, sports hire, summer schools and contractor works all keep parts of the site in use, sometimes more unpredictably than during term.',
          'This matters for two reasons. It affects when work can happen, and it affects who is on site when the system is commissioned and tested. A holiday club that has not been told about alarm testing will react exactly as a class would.',
          'It is worth asking whoever manages lettings for the holiday schedule at the same time as you provide term dates. It is a question that rarely gets asked and frequently changes the plan.',
        ],
      },
      {
        heading: 'Coordinating with other summer works',
        paragraphs: [
          'Large school projects cluster in the same weeks, and an alarm installation is rarely the only thing happening. Decorating, flooring, roofing, IT refreshes and building works all compete for the same access and the same site staff.',
          'Sequencing matters here. Fixing devices to walls that are about to be decorated, or before a ceiling is replaced, creates avoidable rework. A short conversation between contractors at the planning stage prevents almost all of it.',
          'If your site manager is coordinating several trades, tell us early. It is usually straightforward for us to work around another contractor if we know in advance, and considerably less so on the morning.',
        ],
      },
      {
        heading: 'Why leaving it late costs more than money',
        paragraphs: [
          'The obvious cost of booking late is waiting for the next window. The less obvious one is that a compressed programme reduces the quality of the handover, which is the part that determines whether the system is actually used well.',
          'When work is squeezed into the last days before term, handover tends to be rushed or deferred, the first drill slips, and the site starts the year with a system nobody has been properly shown. The equipment is installed but the capability is not.',
          'Booking with enough room to include a proper handover session and an early drill is what turns an installation into a working procedure. That is worth more than the few weeks saved by starting the conversation later.',
        ],
      },
      {
        heading: 'Planning around a phased trust rollout',
        paragraphs: [
          'For a trust installing across several schools, the calendar problem multiplies. Each site has its own term dates, exam constraints and lettings, and the available windows rarely line up neatly.',
          'The practical approach is to sequence sites across the year rather than trying to do everything in one holiday. That spreads the work, gives you the benefit of learning from the first installation, and avoids competing with yourself for the same weeks.',
          'It also tends to produce better handovers. A single summer with six simultaneous installations means six rushed handovers, whereas a staggered programme lets the central team attend each one properly.',
        ],
      },
      {
        heading: 'Weather and outdoor work',
        paragraphs: [
          'External devices need installing outdoors, which introduces a variable that indoor work does not have. It is rarely a serious obstacle, but it does affect scheduling at certain times of year.',
          'Deep winter weeks are the least reliable, both for the work itself and for testing audibility outdoors, since wind and rain affect how far sound carries. Sites specifying substantial outdoor coverage often find spring or early autumn easier.',
          'This is worth mentioning if outdoor coverage is a significant part of your scope. It rarely changes the plan, but it occasionally shifts the sequence so that external work happens in a more forgiving window.',
        ],
      },
      {
        heading: 'A realistic timeline for a September start',
        paragraphs: [
          'Wanting a system operational for the start of the academic year is the most common request we receive, and it is entirely achievable if the process starts early enough. Working backwards from September usually looks like this.',
          'The step people underestimate is approval. If a decision needs a governing body or trust board, the meeting cycle can add two months regardless of how quickly everything else moves, and summer meeting schedules are often thinner.',
        ],
        bullets: [
          'Spring term: survey and written specification',
          'Spring or early summer: approval through the relevant governance route',
          'Early summer: order placed, installation window confirmed',
          'Summer holiday or first inset days: installation and commissioning',
          'First half-term: staff briefing and first drill while it is fresh',
        ],
      },
      {
        heading: 'If you have already missed the window you wanted',
        paragraphs: [
          'Plenty of sites reach August having intended to do this over the summer and finding that the window has gone. That is a common position and it does not mean waiting a year.',
          'For wireless installations, term-time work is genuinely viable, which is the main reason the technology choice and the calendar question are linked. Sequenced by area and scheduled around the timetable, most of the work can proceed with limited disruption.',
          'A useful interim step is to install in phases: cover the highest priority areas during available half-days or inset days, and complete the rest at the next holiday. Partial coverage that is properly understood is considerably better than complete coverage that arrives a year later.',
          'The other thing worth doing while you wait is the procedural work, which costs nothing and does not depend on equipment. Writing the procedure, deciding who triggers, and running a tabletop exercise can all happen before anything is installed, and they make the eventual installation much more effective.',
        ],
        bullets: [
          'Wireless term-time installation is viable on most sites',
          'Phase by priority area rather than waiting for a full window',
          'Use inset days for commissioning and staff handover',
          'Do the procedural work now, independent of equipment',
          'Book the next holiday window before it fills up',
        ],
      },
    ],
    faqs: [
      {
        question: 'How far in advance should we book?',
        answer:
          'For a specific holiday window, several months is sensible because those weeks are in demand across every trade. Term-time wireless work can usually be arranged on shorter notice.',
      },
      {
        question: 'Can the work happen during term time?',
        answer:
          'For wireless systems, usually yes. Installation is sequenced by area so disruption stays local, and the only genuinely noisy stage is commissioning, which can be scheduled around the timetable.',
      },
      {
        question: 'What about exam season?',
        answer:
          'Noisy commissioning cannot happen during formal exams, and the restriction covers weeks rather than days. Tell us your exam dates at survey stage and we will sequence around them.',
      },
      {
        question: 'Do you work in school holidays?',
        answer:
          'Yes. Holidays suit larger or hard-wired projects, and many sites prefer them for commissioning. They do need booking well ahead.',
      },
      {
        question: 'How much notice do staff need before testing?',
        answer:
          'Tell them before the day, and again on the morning. Staff need to know what it will sound like and that it is a test, otherwise an unannounced alarm produces exactly the reaction you would expect.',
      },
    ],
  },
  {
    slug: 'what-strong-lockdown-planning-looks-like-on-real-sites',
    seoTitle: 'What Strong Lockdown Planning Looks Like',
    seoDescription: 'How effective lockdown plans are built around real circulation, entrances and staff response patterns.',
    title: 'What Strong Lockdown Planning Looks Like on Real Sites',
    excerpt:
      'Good lockdown planning is not just about adding a button or sounder. It is about creating a response staff can understand immediately, under pressure, in the spaces they actually use every day.',
    category: 'Lockdown Alarm Systems',
    publishedAt: '2026-05-21',
    displayDate: '21 May 2026',
    readTime: '5 min read',
    author: 'A-Squared Editorial Team',
    featured: true,
    serviceHref: '/lockdown-alarms',
    serviceLabel: 'Explore Lockdown Alarm Systems',
    keyTakeaways: [
      'The best lockdown plans are built around real circulation, entrances, and staff response patterns.',
      'Clarity matters more than complexity when people need to act fast.',
      'A lockdown system should fit procedures, not force staff into a confusing workflow.',
    ],
    sections: [
      {
        heading: 'Start with people, not hardware',
        paragraphs: [
          'Many sites begin by asking what devices they need, but the stronger question is what staff need to know the moment an incident starts. A good lockdown plan reduces hesitation. It makes the first action obvious, the next step consistent, and the overall response easier to manage.',
          'That usually means reviewing who can trigger the alert, how the signal reaches different areas, and what each team is expected to do. Reception, leadership, classrooms, offices, and shared spaces often need the same urgency but slightly different instructions.',
        ],
      },
      {
        heading: 'Map the site around movement and vulnerability',
        paragraphs: [
          'The most effective lockdown systems are designed around how the building actually operates. Main entrances, reception points, corridors, external access doors, detached buildings, and low-supervision areas all influence how the alert should be structured.',
          'On some sites, a whole-building response is the right approach. On others, zoning, visual messaging, or supporting access control may be more appropriate. The point is not to install the most equipment. It is to reduce confusion where response time matters most.',
        ],
      },
      {
        heading: 'Make the response easy to repeat and train',
        paragraphs: [
          'A system becomes more valuable when it supports drills, staff confidence, and repeatable practice. If people cannot explain what a signal means, or if the response differs from building to building without reason, confidence drops quickly.',
          'Strong lockdown planning brings together alerting, clear instructions, handover guidance, and realistic site procedures. When those pieces line up, staff are far more likely to respond consistently in both exercises and live incidents.',
        ],
      },
    ],
  },
  {
    slug: 'how-popalert-adds-clarity-to-emergency-communications',
    seoTitle: 'How PopAlert Adds Clarity in an Incident',
    seoDescription: 'How visual on-screen messaging helps office and admin teams receive the same instruction at the same moment.',
    title: 'How PopAlert Adds Clarity to Emergency Communications',
    excerpt:
      'Audible alarms create urgency, but visual instructions remove doubt. PopAlert helps teams receive the same plain-language message at the same time across connected devices.',
    category: 'PopAlert',
    publishedAt: '2026-05-18',
    displayDate: '18 May 2026',
    readTime: '4 min read',
    author: 'A-Squared Editorial Team',
    serviceHref: '/lockdown-alarms#popalert',
    serviceLabel: 'See the PopAlert Section',
    keyTakeaways: [
      'Visual messaging helps reduce interpretation delays during a live incident.',
      'PopAlert is especially useful for reception, admin, and office-based teams.',
      'It works best when paired with a clear site procedure and audible alert strategy.',
    ],
    sections: [
      {
        heading: 'Why visual instructions matter',
        paragraphs: [
          'In a fast-moving incident, the difference between hearing an alarm and understanding what action is required can be significant. A sound can create urgency, but it may not always explain whether staff should lock down, evacuate, invacuate, or stand by.',
          'PopAlert helps close that gap by delivering full-screen instructions to connected PCs and displays. Instead of relying on interpretation, teams receive a direct message with clear wording and consistent terminology.',
        ],
      },
      {
        heading: 'Where schools and workplaces benefit most',
        paragraphs: [
          'The biggest benefit is usually seen in spaces where people are working on computers or managing live site activity. Reception desks, attendance offices, safeguarding teams, admin rooms, and support departments often need immediate clarity because they are coordinating information as the situation develops.',
          'In larger sites or multi-building environments, visual messaging can also help standardise communication across teams who may not all be within earshot of the same alarm conditions.',
        ],
      },
      {
        heading: 'Use it to reinforce, not complicate',
        paragraphs: [
          'PopAlert works best when it supports a wider incident response plan rather than acting as a disconnected feature. The messaging should match your procedures, drills, and site language so staff are not translating instructions in real time.',
          'When the words on screen line up with training and alert signals, the system becomes much more useful. It helps the response feel coordinated instead of fragmented.',
        ],
      },
    ],
  },
  {
    slug: 'fire-alarm-planning-for-schools-commercial-and-changing-sites',
    seoTitle: 'Temporary Fire Alarm Planning',
    seoDescription: 'Practical planning for schools, commercial buildings and sites that change shape during works.',
    title: 'Temporary Fire Alarm Planning for Schools, Commercial Buildings, and Changing Sites',
    excerpt:
      'Fire alarm design should reflect how a building is occupied, maintained, and likely to change over time. The right approach is rarely one-size-fits-all.',
    category: 'Temporary Fire Alarm Systems',
    publishedAt: '2026-05-14',
    displayDate: '14 May 2026',
    readTime: '5 min read',
    author: 'A-Squared Editorial Team',
    serviceHref: '/fire-alarms',
    serviceLabel: 'Explore Temporary Fire Alarm Systems',
    keyTakeaways: [
      'Coverage should be shaped around building use, occupancy, and risk areas.',
      'Schools, offices, and temporary sites often need different planning assumptions.',
      'Reliability, maintenance, and practical day-to-day use matter as much as specification.',
    ],
    sections: [
      {
        heading: 'Design around how the building is used',
        paragraphs: [
          'A useful temporary fire alarm system reflects the way people actually occupy the premises. Classrooms, plant rooms, kitchens, circulation routes, workshops, shared offices, and temporary accommodation all create different planning priorities.',
          'That is why temporary fire alarm design should begin with site use, likely occupancy, and relevant risk areas rather than generic product lists. A system that looks correct on paper still needs to work operationally once the site is live.',
        ],
      },
      {
        heading: 'Allow for sites that evolve',
        paragraphs: [
          'Some premises stay relatively stable. Others change constantly. Schools expand into modular buildings, offices reconfigure layouts, and construction environments may rely on temporary systems while the site develops.',
          'When those changes are likely, the planning approach should account for access, maintenance, extensions, and practical system management. A design that cannot adapt often becomes difficult and expensive to work with later.',
        ],
      },
      {
        heading: 'Think beyond installation day',
        paragraphs: [
          'A temporary fire alarm is not only a procurement decision. It is an operational system that needs testing, understanding, and dependable upkeep. Staff need to trust it, and responsible persons need confidence that the system can be maintained properly over time.',
          'The strongest temporary fire alarm plans balance compliance, usability, and site reality. That usually produces better outcomes than simply choosing the fastest or cheapest option available.',
        ],
      },
    ],
  },
  {
    slug: 'where-vape-detection-adds-the-most-value-in-schools',
    seoTitle: 'Vape Detection in Schools',
    seoDescription: 'Where detection adds the most value, how to deploy it with safeguarding in mind, and what the data actually tells you.',
    title: 'Where Vape Detection Adds the Most Value in Schools',
    excerpt:
      'Vape detection is most useful when it supports safeguarding teams with better visibility, faster alerts, and clearer evidence of where repeated issues are actually happening.',
    category: 'Vape Detection',
    publishedAt: '2026-05-10',
    displayDate: '10 May 2026',
    readTime: '4 min read',
    author: 'A-Squared Editorial Team',
    serviceHref: '/vape-detection',
    serviceLabel: 'View Vape Detection',
    keyTakeaways: [
      'Detection works best in lower-supervision spaces with repeat incident patterns.',
      'Alerts should go to the right responders, not everybody at once.',
      'The system is most valuable when used as safeguarding intelligence, not just enforcement.',
    ],
    sections: [
      {
        heading: 'Focus on the spaces staff cannot supervise continuously',
        paragraphs: [
          'Schools usually get the strongest return from vape detection when it is installed in spaces that are difficult to monitor directly. Toilets, washrooms, changing areas, and certain communal zones are typical examples because incidents can repeat there without clear visibility.',
          'That does not mean every space should be covered. The better approach is to prioritise the areas that are already generating concern, staff time, or repeated safeguarding conversations.',
        ],
      },
      {
        heading: 'Route alerts to the people who can act calmly',
        paragraphs: [
          'Real-time alerting is valuable, but only if it reaches the right team. In most education settings, that means selected pastoral, safeguarding, site, or leadership contacts rather than broadcasting every event to a wide audience.',
          'Well-routed alerts reduce noise and help the response stay proportionate. The goal is not to create disruption across the site. It is to give approved responders enough information to intervene appropriately.',
        ],
      },
      {
        heading: 'Use the system to understand patterns over time',
        paragraphs: [
          'One of the biggest advantages of vape detection is that it helps schools distinguish between assumptions and patterns. Repeated incidents in one area, at one time of day, or around one circulation route can inform staffing decisions and safeguarding reviews.',
          'When used thoughtfully, detection supports better decisions. It gives leaders more confidence that they are responding to real site conditions instead of relying only on anecdotal reporting.',
        ],
      },
    ],
  },
  {
    slug: 'planning-paxton-access-control-for-reception-and-staff-areas',
    seoTitle: 'Planning Paxton Access Control',
    seoDescription: 'How to plan access control for reception, staff areas and restricted zones without disrupting daily site use.',
    title: 'Planning Paxton Access Control for Reception and Staff Areas',
    excerpt:
      'Good access control does not have to feel heavy-handed. The best systems make the right spaces easier to manage while keeping everyday movement simple for staff and authorised visitors.',
    category: 'Access Control',
    publishedAt: '2026-05-05',
    displayDate: '5 May 2026',
    readTime: '5 min read',
    author: 'A-Squared Editorial Team',
    serviceHref: '/access-control',
    serviceLabel: 'Explore Access Control',
    keyTakeaways: [
      'Reception and main entry points are usually the best place to begin.',
      'Permissions should reflect real roles, not just the building layout.',
      'A simple daily user experience improves long-term reliability and uptake.',
    ],
    sections: [
      {
        heading: 'Start with the front door and first decision point',
        paragraphs: [
          'For many organisations, the most practical access control improvement is at the point where visitors first arrive. Main doors, gates, lobbies, and reception-led entry points shape how safely and efficiently people move into the building.',
          'When that first decision point is handled well, it becomes easier to control who enters, how they are received, and which spaces remain restricted until access is confirmed.',
        ],
      },
      {
        heading: 'Build permission levels around real responsibilities',
        paragraphs: [
          'A strong access control plan should reflect how the site operates, not just how the doors are labelled. Admin teams, safeguarding staff, managers, contractors, facilities teams, and external visitors often need different levels of access at different times.',
          'Paxton systems are particularly useful when permissions need to stay flexible without becoming difficult to manage. The key is to keep the structure clear enough that changes remain practical as roles evolve.',
        ],
      },
      {
        heading: 'Keep the system easy to live with',
        paragraphs: [
          'Even a well-specified system can fail in practice if daily use feels awkward. Staff need straightforward credentials, clear rules, and a setup that does not create unnecessary work for reception or facilities teams.',
          'The most reliable access control systems are the ones people actually use properly. Simplicity in the day-to-day experience is often what makes the overall safeguarding benefit sustainable.',
        ],
      },
    ],
  },
  {
    slug: 'out-of-hours-intrusion-protection-for-schools-and-commercial-sites',
    seoTitle: 'Out-of-Hours Intrusion Protection',
    seoDescription: 'Protecting schools and commercial sites when nobody is there, and how wireless systems suit phased upgrades.',
    title: 'Out-of-Hours Intrusion Protection for Schools and Commercial Sites',
    excerpt:
      'Intrusion protection is often most valuable when the site is quiet. The right setup helps organisations protect buildings, stores, offices, and vulnerable access points when occupancy drops.',
    category: 'Intrusion Protection',
    publishedAt: '2026-04-29',
    displayDate: '29 April 2026',
    readTime: '4 min read',
    author: 'A-Squared Editorial Team',
    serviceHref: '/intrusion-protection',
    serviceLabel: 'Explore Intrusion Protection',
    keyTakeaways: [
      'Prioritise the buildings and spaces with the highest out-of-hours risk.',
      'Alerts should reach the people who are authorised to respond.',
      'Intrusion protection works best when aligned with access, keyholding, and site routines.',
    ],
    sections: [
      {
        heading: 'Protect the spaces that become vulnerable after hours',
        paragraphs: [
          'Not every area of a site carries the same risk once the day ends. Reception areas, admin rooms, ICT stores, detached buildings, goods entrances, and plant spaces often become the first places to review because they contain equipment, records, or easier access routes.',
          'A focused intrusion plan starts with those exposure points rather than attempting to treat every part of the estate identically.',
        ],
      },
      {
        heading: 'Make sure alerts reach the right contacts',
        paragraphs: [
          'Early warning only helps if the response path is clear. Out-of-hours alerting should tie into a realistic plan for caretakers, facilities leads, security personnel, or other approved contacts who are responsible for escalation.',
          'That is one reason modern wireless intrusion platforms are attractive. They can support quicker visibility without forcing a complicated interface on the people who need to manage the system.',
        ],
      },
      {
        heading: 'Tie security back to operating routines',
        paragraphs: [
          'Intrusion protection should not sit in isolation from the rest of site management. Locking routines, access permissions, keyholding arrangements, contractor access, holiday shutdowns, and reopening procedures all influence whether the system is used well.',
          'The best outcome is a setup that feels natural to the way the building is already managed, while still tightening protection in the periods when the site is least visible.',
        ],
      },
    ],
  },
  {
    slug: 'introducing-popalert',
    seoTitle: 'Introducing PopAlert',
    seoDescription: 'A cost-effective whole-site alert system that pushes plain-language emergency messages to connected screens.',
    title: 'Introducing PopAlert',
    excerpt:
      'PopAlert is a modern lockdown and alert system that delivers instant full-screen notifications across a site, giving staff a fast and clear way to communicate during critical incidents.',
    image: {
      src: 'https://a-squaredalarms.com/wp-content/uploads/2026/02/Asset-57-1024x403.webp',
      alt: 'Introducing PopAlert visual from the original article',
    },
    category: 'PopAlert',
    publishedAt: '2026-02-18',
    displayDate: '18 February 2026',
    readTime: '5 min read',
    author: 'Alexandra',
    serviceHref: '/lockdown-alarms#popalert',
    serviceLabel: 'See the PopAlert Section',
    keyTakeaways: [
      'PopAlert delivers instant full-screen alerts across connected devices on site.',
      'It uses a dedicated on-site control unit rather than depending on internet or mobile networks.',
      'It can work alongside existing safety equipment while avoiding the cost and complexity of many traditional lockdown systems.',
    ],
    sections: [
      {
        heading: 'A modern site-wide alert system',
        paragraphs: [
          'PopAlert is presented as a modern lockdown and alert system built to deliver instant full-screen notifications across an entire site. The purpose is to help staff warn people quickly and clearly during situations such as a lockdown, a threat outside, or another urgent internal alert.',
          'The source page positions PopAlert around clarity and speed, without relying on phones, cloud systems, or more complicated technology.',
        ],
      },
      {
        heading: 'What makes PopAlert different',
        paragraphs: [
          'The article explains that many lockdown solutions are expensive, overly complex, or built around older technology. PopAlert is described instead as focusing on the things organisations actually need most: speed, clarity, simplicity, and reliability.',
          'It also says the system works inside the building using a dedicated on-site control unit installed by engineers. That means it is intended to keep working during network outages, emergencies, or high-traffic moments when other systems may fail.',
        ],
      },
      {
        heading: 'Installed and ready from day one',
        paragraphs: [
          'The source page emphasises that PopAlert is professionally installed and fully configured by the team, rather than being left as a DIY setup. Installation includes mounting the control unit, testing alerts, and making sure every receiver is connected.',
          'Once the system is installed, the article says the user only needs to open the PopAlert app on their device to trigger alerts instantly. It also highlights that there is no wiring to run, no servers to maintain, and no complicated IT work to manage.',
        ],
      },
      {
        heading: 'Works with existing safety equipment',
        paragraphs: [
          'According to the page, PopAlert can activate many existing safety devices through a simple relay connection. The listed examples include strobe lights, sirens, door access systems, PA interfaces, wireless safety hardware, and custom emergency equipment.',
          'The article frames this as a way of bringing existing safety tools together into one unified system instead of treating them as isolated parts.',
        ],
      },
      {
        heading: 'A cost-effective alternative',
        paragraphs: [
          'The article contrasts PopAlert with more traditional lockdown systems that may require expensive control panels, heavy wiring, specialist servers, complex installations, and large maintenance costs.',
          'It describes PopAlert as a whole-site alert system that removes much of that cost and disruption, making it suitable for schools, academies, colleges, offices, care homes, local authorities, retail locations, and other organisations looking for a practical safety solution.',
        ],
      },
    ],
  },
  {
    slug: "temporary-fire-alarm-systems-for-construction-sites",
    seoTitle: "Temporary Fire Alarms for Construction Sites",
    seoDescription: "How temporary fire alarm systems protect construction sites: what the rules expect, what a good system includes, and how to plan coverage as the build changes.",
    title: "Temporary Fire Alarm Systems for Construction Sites: A Practical Guide",
    excerpt: "A building under construction has no working fire alarm of its own, yet it is full of people, fuel, hot works and changing escape routes. Here is how temporary fire alarm systems fill that gap.",
    category: "Temporary Fire Alarm Systems",
    publishedAt: "2026-08-12",
    displayDate: "12 August 2026",
    readTime: "7 min read",
    author: "A-Squared Editorial Team",
    serviceHref: "/fire-alarms",
    serviceLabel: "Explore Temporary Fire Alarm Systems",
    atAGlance: [
      "Construction sites need a way to raise the alarm long before the permanent fire alarm is commissioned.",
      "CDM 2015 requires suitable fire detection and alarm arrangements, and HSE guidance HSG168 sets out how.",
      "Wireless temporary systems use linked call points, detectors and sounder beacons that need no cabling.",
      "Coverage should be reviewed and moved as floors, stairs and welfare areas change.",
    ],
    keyTakeaways: [
      "Base the system on the site fire risk assessment, not a fixed number of units.",
      "Make sure the alarm can be heard, and seen, everywhere people work, including outdoors.",
      "Test regularly, typically weekly, and keep a log alongside the fire plan.",
    ],
    sections: [
      {
        heading: "Why construction sites need a temporary fire alarm",
        paragraphs: [
          "A building under construction is at its most vulnerable before its own fire alarm works. It is full of combustible materials, temporary electrics, hot works and people who may be spread across several floors, scaffolding and compounds at once.",
          "Shouting, air horns and manual bells rarely reach everyone on a large or noisy site, and they cannot tell the people at the far end of the building what is happening. A linked temporary fire alarm makes sure that when one person raises the alarm, everyone on site hears it at the same time.",
        ],
      },
      {
        heading: "What the rules expect",
        paragraphs: [
          "The Construction (Design and Management) Regulations 2015 require suitable and sufficient fire detection and fire alarm arrangements on construction sites, based on the risks present. The principal contractor is normally responsible for making sure those arrangements are planned, in place and maintained.",
          "The HSE’s guidance on fire safety in construction, HSG168, explains how to assess fire risk and plan detection, warning and escape on a changing site. Many insurers also expect the industry’s Joint Code of Practice on fire prevention on construction sites to be followed on larger projects.",
          "None of these documents prescribe a single product. They expect a system that suits the site, is maintained and is understood by everyone working there.",
        ],
      },
      {
        heading: "What a good temporary system includes",
        paragraphs: [
          "A typical wireless temporary fire alarm is built from a small number of device types, linked together so that any one of them can trigger every alarm on site.",
        ],
        bullets: [
          "Manual call points at exits, stair cores and key work areas, so anyone can raise the alarm",
          "Automatic detectors in higher-risk areas such as welfare cabins, stores and out-of-hours zones",
          "Weatherproof sounder beacons so the alarm is heard and seen indoors, outdoors and on scaffolding",
          "Spoken announcements, which help on sites with mixed-language teams",
          "A wireless mesh link between every unit, with fault reporting if a device loses connection",
        ],
      },
      {
        heading: "Planning coverage on a site that keeps changing",
        paragraphs: [
          "The hardest part of construction fire safety is that the building keeps moving. Escape routes change as stairs go in, floors are enclosed, and welfare cabins are relocated. A fixed, cabled system cannot keep up with that.",
          "Battery-powered wireless devices can be repositioned as the build progresses. The useful habit is to review the layout every time the fire plan changes: add call points to new escape routes, move sounders as work areas shift, and remove devices from areas that are no longer occupied.",
        ],
      },
      {
        heading: "Testing, logging and handover",
        paragraphs: [
          "A temporary system only protects people if it works and is trusted. Testing is typically carried out weekly, rotating which call point is used, with the results recorded in the site fire log. Faults and low batteries should be dealt with immediately.",
          "When the permanent fire alarm is commissioned, the temporary system can be removed area by area, so there is never a gap in cover during the handover.",
        ],
      },
    ],
    comparison: {
      title: "Temporary fire alarm options on site",
      columns: [
        "Wireless linked system",
        "Standalone bells or air horns",
      ],
      rows: [
        {
          label: "Everyone alerted at once",
          cells: [
            "Yes, every unit sounds",
            "Only those within earshot",
          ],
        },
        {
          label: "Automatic detection",
          cells: [
            "Available",
            "No",
          ],
        },
        {
          label: "Moves with the build",
          cells: [
            "Yes, no cabling",
            "Yes, but coverage is patchy",
          ],
        },
        {
          label: "Fault reporting",
          cells: [
            "Yes",
            "No",
          ],
        },
      ],
    },
    faqs: [
      {
        question: "Is a temporary fire alarm a legal requirement on construction sites?",
        answer: "CDM 2015 requires suitable fire detection and alarm arrangements based on the site’s risks. On most sites of any size, a linked temporary fire alarm is the practical way to meet that requirement.",
      },
      {
        question: "Who is responsible for the temporary fire alarm?",
        answer: "Normally the principal contractor, as part of the site fire risk assessment and construction phase plan.",
      },
      {
        question: "Do wireless temporary fire alarms need cabling or mains power?",
        answer: "No. The devices are battery-powered and link wirelessly, so they can be installed quickly and moved as the site changes.",
      },
      {
        question: "How often should a temporary fire alarm be tested?",
        answer: "Typically weekly, using a different call point each time, with results recorded in the site fire log.",
      },
    ],
  },
  {
    slug: "wireless-vs-wired-fire-alarms-for-changing-buildings",
    seoTitle: "Wireless vs Wired Fire Alarms",
    seoDescription: "When a wireless fire alarm makes more sense than a cabled one: refurbishments, temporary buildings, listed buildings and sites that change during works.",
    title: "Wireless vs Wired Fire Alarms for Buildings That Keep Changing",
    excerpt: "Cabled fire alarms suit finished buildings that stay the same. Wireless systems come into their own when a building is being built, refurbished or reorganised.",
    category: "Temporary Fire Alarm Systems",
    publishedAt: "2026-08-26",
    displayDate: "26 August 2026",
    readTime: "6 min read",
    author: "A-Squared Editorial Team",
    serviceHref: "/fire-alarms",
    serviceLabel: "Explore Temporary Fire Alarm Systems",
    atAGlance: [
      "Wired systems remain the norm for finished buildings with stable layouts.",
      "Wireless systems avoid cabling, so they suit construction, refurbishment and historic buildings.",
      "Battery-powered devices can be added, moved or removed as the building changes.",
      "The right choice depends on how long the system is needed and how often the layout changes.",
    ],
    keyTakeaways: [
      "Match the system to the building’s stage of life, not just its size.",
      "Wireless is often the only practical option in occupied or listed buildings under works.",
      "Whatever the technology, maintenance and testing decide whether it protects people.",
    ],
    sections: [
      {
        heading: "Two technologies, two jobs",
        paragraphs: [
          "A conventional wired fire alarm links detectors, call points and sounders to a control panel through fixed cabling. It is reliable and well understood, and it is the standard choice for finished buildings whose layout will not change for years.",
          "A wireless fire alarm uses battery-powered devices that communicate by radio. There is no cabling to install, which changes what is practical: the system can go in on day one of a project and move with it.",
        ],
      },
      {
        heading: "When wireless is the better fit",
        paragraphs: [
          "Wireless systems are most useful wherever cabling is slow, disruptive or impossible.",
        ],
        bullets: [
          "Construction sites, before the permanent fire alarm is commissioned",
          "Refurbishments where the existing system has to be isolated during works",
          "Occupied schools and offices where cabling would disrupt teaching or work",
          "Listed and historic buildings where chasing cables through the fabric is not acceptable",
          "Temporary and modular buildings, welfare cabins and site offices",
        ],
      },
      {
        heading: "When wired still makes sense",
        paragraphs: [
          "For a finished building that will stay as it is, a permanent cabled system designed to the relevant British Standard is usually the long-term answer. Many of our temporary installations exist precisely to protect a building until that permanent system is ready.",
          "The two are not rivals: a wireless temporary system often covers the gap between the start of works and the handover of the permanent alarm.",
        ],
      },
      {
        heading: "Questions to ask before choosing",
        paragraphs: [
        ],
        bullets: [
          "How long will the system be needed: weeks, months or permanently?",
          "How often will the layout, escape routes or occupied areas change?",
          "Can cabling be installed without disruption, damage or consent issues?",
          "Do people need to hear the alarm outdoors or across separate buildings?",
          "Who will test it, log it and replace batteries?",
        ],
      },
    ],
    comparison: {
      title: "Wireless vs wired at a glance",
      columns: [
        "Wireless",
        "Wired",
      ],
      rows: [
        {
          label: "Installation",
          cells: [
            "Hours to days, no cabling",
            "Days to weeks, cabling required",
          ],
        },
        {
          label: "Disruption",
          cells: [
            "Minimal",
            "Can be significant in occupied buildings",
          ],
        },
        {
          label: "Moving devices",
          cells: [
            "Simple",
            "Requires re-cabling",
          ],
        },
        {
          label: "Best for",
          cells: [
            "Sites under works, temporary or historic buildings",
            "Finished buildings with stable layouts",
          ],
        },
        {
          label: "Ongoing care",
          cells: [
            "Battery checks and regular testing",
            "Regular testing and servicing",
          ],
        },
      ],
    },
    faqs: [
      {
        question: "Are wireless fire alarms reliable?",
        answer: "Modern wireless systems link devices in a mesh and report any unit that loses connection or has a low battery, so faults are flagged immediately rather than discovered in an emergency.",
      },
      {
        question: "Can a wireless fire alarm be used in a listed building?",
        answer: "Yes. Because there is no cabling, wireless devices avoid most of the work to historic fabric that a cabled system would need, which is why they are often chosen for listed buildings under works.",
      },
      {
        question: "How long do the batteries last?",
        answer: "It depends on the device and how often it is used, but long-life batteries in the units we install are rated for around two years.",
      },
    ],
  },
  {
    slug: "paxton-net2-vs-paxton10",
    seoTitle: "Paxton Net2 vs Paxton10",
    seoDescription: "Paxton Net2 or Paxton10? How the two Paxton access control systems differ, and which suits schools, offices and multi-site organisations.",
    title: "Paxton Net2 vs Paxton10: Which Access Control System Is Right for Your Building?",
    excerpt: "Paxton makes two main access control platforms. Both are reliable and widely used, but they suit different buildings and ways of working. Here is how to choose.",
    category: "Access Control",
    publishedAt: "2026-09-09",
    displayDate: "9 September 2026",
    readTime: "6 min read",
    author: "A-Squared Editorial Team",
    serviceHref: "/access-control",
    serviceLabel: "Explore Paxton Access Control",
    atAGlance: [
      "Net2 is Paxton’s long-established access control system, managed through dedicated software.",
      "Paxton10 combines access control and video management in one browser- and app-based system.",
      "Both use the same kinds of credentials: cards, fobs and smartphone credentials.",
      "The right choice depends on your building, your IT setup and whether you want video in the same system.",
    ],
    keyTakeaways: [
      "Choose Net2 for a proven, software-managed system or to extend an existing Net2 site.",
      "Choose Paxton10 when you want access control and CCTV managed together.",
      "A site survey of doors, users and IT matters more than the brochure.",
    ],
    sections: [
      {
        heading: "Two Paxton platforms",
        paragraphs: [
          "Paxton is one of the most widely installed access control brands in the UK, and it offers two main systems. Net2 has been the workhorse for many years in schools, offices and commercial buildings. Paxton10 is the newer platform, designed to bring access control and video together in one place.",
          "Both control who can open which doors and when, both keep a record of every door event, and both let you add or remove users in seconds when someone joins or leaves.",
        ],
      },
      {
        heading: "Paxton Net2",
        paragraphs: [
          "Net2 is managed through dedicated software. Door controllers connect back to that software, and administrators use it to set up users, access levels and schedules, run reports and respond to events.",
          "Its strengths are maturity and flexibility. It suits single buildings and larger estates alike, works with a wide range of readers, keypads and door hardware, and is the natural choice when you are extending a site that already runs Net2.",
        ],
      },
      {
        heading: "Paxton10",
        paragraphs: [
          "Paxton10 combines access control and video management in a single system that is managed through a web browser or app. Instead of running separate access control and CCTV software, you see door events and the matching camera footage together.",
          "That makes it attractive for organisations that want simpler day-to-day management, remote administration, and video linked directly to who went where.",
        ],
      },
      {
        heading: "How to choose",
        paragraphs: [
          "In practice the decision usually comes down to a few questions.",
        ],
        bullets: [
          "Do you already have Net2 on site, and do you want to extend it?",
          "Do you want access control and CCTV in one system?",
          "Will the system be managed on site, remotely, or across several sites?",
          "How many doors and users are involved, now and in the next few years?",
          "Are there doors where wireless locks would avoid disruptive cabling?",
        ],
      },
    ],
    comparison: {
      title: "Net2 vs Paxton10",
      columns: [
        "Net2",
        "Paxton10",
      ],
      rows: [
        {
          label: "What it covers",
          cells: [
            "Access control",
            "Access control and video in one",
          ],
        },
        {
          label: "Management",
          cells: [
            "Dedicated software",
            "Web browser and app",
          ],
        },
        {
          label: "Best for",
          cells: [
            "Proven deployments and extending existing Net2 sites",
            "Sites wanting doors and cameras managed together",
          ],
        },
        {
          label: "Credentials",
          cells: [
            "Cards, fobs, keypads, smartphone",
            "Cards, fobs, keypads, smartphone",
          ],
        },
      ],
    },
    faqs: [
      {
        question: "Can Net2 and Paxton10 be mixed on the same site?",
        answer: "They are separate platforms, so most sites standardise on one. If you already run Net2, extending it is usually simplest; a move to Paxton10 is best planned as a deliberate upgrade.",
      },
      {
        question: "Can Paxton access control work with existing doors?",
        answer: "Usually, yes. Readers and locks are fitted to existing doors, and wireless door handles can be used where running cables would be difficult or disruptive.",
      },
      {
        question: "Is Paxton suitable for schools?",
        answer: "Yes. Schools commonly use Paxton to control reception, staff areas and external gates, and to remove a lost card or a leaver’s access instantly.",
      },
    ],
  },
  {
    slug: "how-do-vape-detectors-work",
    seoTitle: "How Do Vape Detectors Work?",
    seoDescription: "How vape detectors sense vaping in school toilets and changing rooms, how staff are alerted, where to install them and how privacy is protected.",
    title: "How Do Vape Detectors Work? A Plain-English Guide for Schools",
    excerpt: "Vape detectors are now common in school toilets and changing rooms. Here is what they actually detect, how staff are alerted, and how to install them without creating privacy concerns.",
    category: "Vape Detection",
    publishedAt: "2026-09-23",
    displayDate: "23 September 2026",
    readTime: "5 min read",
    author: "A-Squared Editorial Team",
    serviceHref: "/contact",
    serviceLabel: "Ask About Vape Detection",
    atAGlance: [
      "Vape detectors sense the vapour particles and chemical changes that vaping releases into the air.",
      "Staff receive an instant alert on their phone or computer, rather than a loud alarm in the room.",
      "They contain no cameras, so they can be fitted in toilets and changing rooms.",
      "Placement and settings matter as much as the device itself.",
    ],
    keyTakeaways: [
      "A vape detector is not a smoke alarm; it is designed to sense vaping specifically.",
      "Silent alerts to staff are more effective than sounding an alarm in the room.",
      "Tell pupils and parents the detectors are there; deterrence is half the value.",
    ],
    sections: [
      {
        heading: "What a vape detector actually senses",
        paragraphs: [
          "When someone vapes, they release a dense cloud of tiny aerosol particles and chemical compounds into the air. A vape detector continuously samples the air and looks for the particular pattern that vaping creates, which is different from normal air, steam or dust.",
          "Unlike a smoke alarm, it is designed to recognise vaping specifically and to report it quietly, rather than to trigger an evacuation.",
        ],
      },
      {
        heading: "How staff are alerted",
        paragraphs: [
          "Most systems send an instant notification to nominated staff, typically by app, email or text, saying which detector has been triggered and when. That lets a member of staff respond to the right toilet block quickly, without alerting the person vaping.",
          "Many detectors also report tampering, such as a device being covered or knocked, and some can flag unusually loud noise, which can help staff respond to bullying or fights in unsupervised spaces.",
        ],
      },
      {
        heading: "Privacy",
        paragraphs: [
          "Vape detectors contain no cameras and do not record conversations, which is why they can be used in toilets and changing rooms where cameras never could. Schools should still explain where detectors are, what they do and how alerts are used, in their behaviour and privacy policies.",
        ],
      },
      {
        heading: "Where to install them",
        paragraphs: [
          "Placement is the difference between a detector that works and one that is ignored.",
        ],
        bullets: [
          "Toilet blocks, positioned so cubicles are covered without being directly above showers or hand dryers",
          "Changing rooms, away from steam sources",
          "Other unsupervised spaces where vaping is reported, such as stairwells",
          "On the ceiling, out of reach, so tampering is harder and triggers an alert",
        ],
      },
      {
        heading: "Making them effective",
        paragraphs: [
          "Detectors work best as part of a wider approach: clear rules, a consistent response when an alert comes in, and communication with pupils and parents. Many schools find that simply letting pupils know detectors are installed reduces vaping in those areas.",
        ],
      },
    ],
    faqs: [
      {
        question: "Will a vape detector go off with deodorant or steam?",
        answer: "Good detectors are designed to tell vaping apart from everyday aerosols and steam, but placement still matters. Keeping them away from showers and hand dryers reduces false alerts.",
      },
      {
        question: "Do vape detectors have cameras or microphones?",
        answer: "They contain no cameras and do not record conversations. Some models measure noise levels to flag possible incidents, without recording what is said.",
      },
      {
        question: "Does the alarm sound in the toilet?",
        answer: "Usually not. Alerts go silently to staff so they can respond, which is more effective than warning the person vaping.",
      },
    ],
  },
  {
    slug: "lockdown-systems-for-hospitals-gp-surgeries-and-clinics",
    seoTitle: "Lockdown Systems for Healthcare Sites",
    seoDescription: "How lockdown alarm systems work in hospitals, GP surgeries and clinics: triggers, discreet staff alerts, patients who can’t move, and Martyn’s Law.",
    title: "Lockdown Systems for Hospitals, GP Surgeries and Clinics",
    excerpt: "Healthcare sites can’t simply clear the building in an emergency. Patients may be unable to move, doors are open to the public all day, and alarms must not cause panic. Here is how lockdown systems are planned for healthcare.",
    category: "Lockdown Alarm Systems",
    publishedAt: "2026-08-19",
    displayDate: "19 August 2026",
    readTime: "6 min read",
    author: "A-Squared Editorial Team",
    serviceHref: "/industries/healthcare",
    serviceLabel: "Explore Healthcare Safety Systems",
    atAGlance: [
      "In healthcare, lockdown and invacuation are often safer than evacuation for patients who cannot move.",
      "Reception and front-desk staff need a fast, discreet way to raise the alarm.",
      "Staff alerts should be clear without alarming patients unnecessarily.",
      "Larger sites open to the public are likely to fall within Martyn’s Law.",
    ],
    keyTakeaways: [
      "Plan the lockdown around patients who cannot leave, not just staff who can.",
      "Combine discreet staff triggers with a signal that cannot be confused with the fire alarm.",
      "Rehearse with every shift pattern, including nights and weekends.",
    ],
    sections: [
      {
        heading: "Why healthcare lockdown is different",
        paragraphs: [
          "Most lockdown plans assume people can move quickly to a safe room. In healthcare that is often not true. Patients may be in treatment, recovering from procedures, frail or reliant on equipment, and visitors may not know the building at all.",
          "Healthcare sites are also open to the public for long hours, with reception desks, waiting areas and multiple entrances. The threat is just as likely to start in the waiting room as outside the building, which is why front-of-house staff need to be able to raise the alarm instantly.",
        ],
      },
      {
        heading: "Typical triggers for raising a lockdown",
        paragraphs: [
        ],
        bullets: [
          "Aggressive or violent behaviour in a waiting area or at reception",
          "An intruder or a person who has been refused entry trying to get in",
          "A serious incident outside the building, where people need to come in and stay in",
          "Concerns about the safety of a patient or staff member in a specific area",
        ],
      },
      {
        heading: "What a healthcare lockdown system needs",
        paragraphs: [
          "The best systems balance speed with calm. They let staff act in seconds without causing panic among patients.",
        ],
        bullets: [
          "Discreet triggers at reception, consulting rooms and nurses’ stations, plus portable triggers for staff on the move",
          "A lockdown tone and beacon that is clearly different from the fire alarm",
          "Zoned or staged alerts on larger sites, so the right areas respond",
          "Integration with door access control so external doors can be secured quickly",
          "On-screen staff instructions, for example with PopAlert, so staff know exactly what to do without a loud announcement",
        ],
      },
      {
        heading: "GP surgeries and small clinics",
        paragraphs: [
          "Smaller practices rarely need a complex system. A handful of wireless call points at reception and in consulting rooms, a distinct sounder in the staff areas and a clear procedure will cover most surgeries. Because the devices are wireless, installation can usually be done around clinic hours without disruption.",
        ],
      },
      {
        heading: "Martyn’s Law and healthcare",
        paragraphs: [
          "Hospitals, primary care clinics and doctor and dentist surgeries are listed premises under Martyn’s Law. Where 200 or more people can reasonably be expected at once, staff included, the duties are expected to apply from spring 2027: procedures for evacuation, invacuation, lockdown and communication, with additional measures for larger sites. A lockdown alarm is a practical way to deliver the communication part.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do GP surgeries need a lockdown alarm?",
        answer: "There is no single rule for every surgery, but any site where staff may face aggressive behaviour or an intruder benefits from a fast, discreet way to raise the alarm. Larger practices may also fall within Martyn’s Law.",
      },
      {
        question: "Will a lockdown alarm frighten patients?",
        answer: "It doesn’t have to. Many healthcare sites use discreet triggers and staff-area sounders or on-screen alerts, so staff respond quickly without a loud alarm in patient areas.",
      },
      {
        question: "Can a lockdown system be installed without disrupting clinics?",
        answer: "Yes. Wireless call points and sounders need no cabling, so installation can usually be planned around opening hours.",
      },
    ],
  },
  {
    slug: "lockdown-alarms-for-colleges-and-universities",
    seoTitle: "Lockdown Alarms for Colleges & Universities",
    seoDescription: "Planning lockdown alarms across college and university campuses: multiple buildings, open sites, students outdoors, and Martyn’s Law duties.",
    title: "Lockdown Alarms for Colleges and Universities",
    excerpt: "A college or university is not a big school. Open campuses, many buildings, adult learners and public access change how a lockdown alarm has to work.",
    category: "Lockdown Alarm Systems",
    publishedAt: "2026-09-02",
    displayDate: "2 September 2026",
    readTime: "6 min read",
    author: "A-Squared Editorial Team",
    serviceHref: "/industries/schools",
    serviceLabel: "Explore School & College Lockdown Alarms",
    atAGlance: [
      "Campuses have many buildings and open spaces, so coverage has to reach outdoors as well as in.",
      "Students move between buildings all day and may not know the procedure.",
      "Zoned alerts let one building lock down without stopping the whole campus.",
      "Further education colleges are always in Martyn’s Law’s standard tier.",
    ],
    keyTakeaways: [
      "Design for an open campus, not a single building.",
      "Combine audible alarms outdoors with clear instructions indoors.",
      "Test with real timetables, including evenings and enrolment days.",
    ],
    sections: [
      {
        heading: "Why campuses are harder to lock down",
        paragraphs: [
          "Most schools have one main building and a controlled perimeter. Colleges and universities often have neither. Students move between buildings throughout the day, the public can walk through parts of the site, and libraries, cafés and sports facilities stay open into the evening.",
          "That means a lockdown has to reach people who are outdoors or between buildings, and it has to make sense to students who may never have practised the procedure.",
        ],
      },
      {
        heading: "Zoning across buildings",
        paragraphs: [
          "On a large campus, locking everything down for an incident in one building can cause more confusion than it prevents. Zoned systems let security or senior staff trigger a lockdown in one building, a group of buildings or the whole site, with the right message for each.",
        ],
      },
      {
        heading: "Reaching people outside",
        paragraphs: [
          "Outdoor sounders and beacons are essential where students walk between buildings, gather in courtyards or use playing fields. Weatherproof wireless units can be mounted on building exteriors and in open spaces without trenching cables across the site.",
          "Indoors, on-screen alerts such as PopAlert can add a written instruction to every computer and display, which helps in lecture theatres, libraries and IT suites where people may not recognise a tone.",
        ],
      },
      {
        heading: "Who can trigger a lockdown",
        paragraphs: [
          "Most colleges give trigger access to reception teams, security staff and senior leaders, with portable triggers for staff on patrol. The aim is that anyone who sees a threat can reach a trigger within seconds, while avoiding accidental activations.",
        ],
      },
      {
        heading: "Martyn’s Law for colleges and universities",
        paragraphs: [
          "Further education colleges are always treated as standard tier under Martyn’s Law, regardless of size. Universities are also covered as education premises, and large university sites may fall within the enhanced tier. Either way, documented lockdown and communication procedures will be expected once the duties apply, expected from spring 2027.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can one part of a campus lock down without the rest?",
        answer: "Yes. Zoned lockdown systems can alert a single building, a group of buildings or the whole site.",
      },
      {
        question: "Do lockdown alarms work outdoors?",
        answer: "Yes. Weatherproof sounders and beacons can cover courtyards, car parks and playing fields, which is essential on an open campus.",
      },
      {
        question: "Does Martyn’s Law apply to colleges?",
        answer: "Further education colleges where 200 or more people can be expected at once are always in the standard tier, which requires procedures for evacuation, invacuation, lockdown and communication.",
      },
    ],
  },
  {
    slug: "lockdown-alarm-vs-lockdown-alert-system",
    seoTitle: "Lockdown Alarm vs Lockdown Alert System",
    seoDescription: "What’s the difference between a lockdown alarm and a lockdown alert system? Audible alarms, on-screen alerts and when you need both.",
    title: "Lockdown Alarm vs Lockdown Alert System: What’s the Difference?",
    excerpt: "People use “lockdown alarm” and “lockdown alert system” as if they mean the same thing. They don’t quite, and the difference matters when you’re deciding what your site needs.",
    category: "Lockdown Alarm Systems",
    publishedAt: "2026-09-16",
    displayDate: "16 September 2026",
    readTime: "5 min read",
    author: "A-Squared Editorial Team",
    serviceHref: "/lockdown-alarms",
    serviceLabel: "Explore Lockdown Alarm Systems",
    atAGlance: [
      "A lockdown alarm is the audible and visual signal: sounders, tones and beacons.",
      "A lockdown alert system can also include written instructions, on screens or phones.",
      "Alarms reach everyone, including outdoors; on-screen alerts tell people exactly what to do.",
      "Many sites use both, triggered together.",
    ],
    keyTakeaways: [
      "Start with an audible lockdown alarm that is distinct from the fire alarm.",
      "Add on-screen instructions where people work at computers or screens.",
      "Trigger everything from one point so nobody has to raise the alarm twice.",
    ],
    sections: [
      {
        heading: "What a lockdown alarm does",
        paragraphs: [
          "A lockdown alarm is the physical signal: call points or panic buttons that trigger sounders and beacons across the site, using a tone and colour that are clearly different from the fire alarm. Its job is to make sure everyone, indoors and outdoors, knows instantly that a lockdown has started.",
          "It works whether or not people are near a screen, which is why it is the foundation of almost every lockdown procedure.",
        ],
      },
      {
        heading: "What a lockdown alert system adds",
        paragraphs: [
          "A sound tells people that something is happening, but not what to do. A lockdown alert system adds the instruction. That might be a full-screen message on every computer, such as PopAlert, a notification to staff phones, or a spoken announcement.",
          "Written instructions are especially useful for visitors, supply staff and contractors who have never heard your lockdown tone before, and for updates as the situation changes, such as “remain in lockdown” or the all clear.",
        ],
      },
      {
        heading: "When you need both",
        paragraphs: [
          "For most schools and larger workplaces, the strongest setup is both, triggered together:",
        ],
        bullets: [
          "The lockdown alarm reaches corridors, halls, playgrounds and car parks",
          "On-screen alerts tell classrooms and offices exactly what to do",
          "One trigger starts both, so staff don’t have to raise the alarm twice",
          "Live updates and the all clear go out through the same system",
        ],
      },
    ],
    comparison: {
      title: "Lockdown alarm vs lockdown alert system",
      columns: [
        "Lockdown alarm",
        "On-screen alert system",
      ],
      rows: [
        {
          label: "Reaches people outdoors",
          cells: [
            "Yes",
            "No, only where there are screens",
          ],
        },
        {
          label: "Tells people what to do",
          cells: [
            "Tone only, or a spoken message",
            "Yes, written instructions",
          ],
        },
        {
          label: "Works for visitors",
          cells: [
            "Only if the tone is recognised",
            "Yes, the instruction is on screen",
          ],
        },
        {
          label: "Live updates",
          cells: [
            "Limited",
            "Yes",
          ],
        },
        {
          label: "Best used",
          cells: [
            "As the foundation",
            "Alongside an alarm",
          ],
        },
      ],
    },
    faqs: [
      {
        question: "Is an on-screen alert enough on its own?",
        answer: "Rarely. It doesn’t reach people outdoors or away from screens, so most sites use it alongside an audible lockdown alarm.",
      },
      {
        question: "Can PopAlert be triggered by a lockdown alarm?",
        answer: "Yes. PopAlert can be triggered from lockdown alarm systems such as Alertex, so one trigger starts both the alarm and the on-screen instructions.",
      },
      {
        question: "Does my lockdown alarm need to sound different from the fire alarm?",
        answer: "Yes. The two require opposite actions, so they should use a different tone and, ideally, a different coloured beacon.",
      },
    ],
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug)
}

export function getFeaturedBlogPost(): BlogPost {
  const featuredPost = BLOG_POSTS.find((post) => post.featured) ?? BLOG_POSTS[0]
  if (!featuredPost) {
    throw new Error('BLOG_POSTS must contain at least one post')
  }
  return featuredPost
}

export function getRelatedBlogPosts(slug: string, limit = 3): BlogPost[] {
  const currentPost = getBlogPostBySlug(slug)
  const otherPosts = BLOG_POSTS.filter((post) => post.slug !== slug)
  if (!currentPost) return otherPosts.slice(0, limit)

  // Same category first, then the rest by recency, so every post gets a
  // genuinely relevant set rather than the same three articles each time.
  const sameCategory = otherPosts.filter((post) => post.category === currentPost.category)
  const rest = otherPosts.filter((post) => post.category !== currentPost.category)
  return [...sameCategory, ...rest].slice(0, limit)
}
