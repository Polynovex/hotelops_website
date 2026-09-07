/**
 * Resource articles.
 *
 * Kept as data rather than as pages so an article can be added without
 * touching a component, and so the index, the SEO metadata and the article
 * view can never disagree about what exists.
 *
 * `status` is the important field. A resources section that shows eight
 * headlines and delivers two finished articles is worse than one that shows
 * two, so only `published` entries are rendered. Drafts stay here as a queue —
 * visible to whoever writes next, invisible to visitors.
 *
 * `needsReview` marks an article making claims that a subject expert should
 * confirm before it goes out. Tax and regulatory guidance is the clear case:
 * getting it wrong on a page a hotel might act on is worse than not publishing
 * it at all.
 */
export interface Resource {
  slug: string;
  title: string;
  /** One line, used on the card and as the meta description. */
  summary: string;
  category: 'Operations' | 'Revenue' | 'Staff' | 'Compliance' | 'Getting started';
  readMinutes: number;
  status: 'published' | 'draft';
  /** True when a claim in the body needs expert sign-off before publishing. */
  needsReview?: boolean;
  /** Body as an ordered list of blocks, so the renderer stays simple. */
  body: Array<
    | { type: 'paragraph'; text: string }
    | { type: 'heading'; text: string }
    | { type: 'list'; items: string[] }
    | { type: 'callout'; text: string }
  >;
}

export const RESOURCES: Resource[] = [
  {
    slug: 'choosing-hotel-management-software-nigeria',
    title: 'Choosing Hotel Management Software in Nigeria: What to Actually Check',
    summary:
      'The questions worth asking before you commit — payments, connectivity, staff turnover and what happens when support is nine hours away.',
    category: 'Getting started',
    readMinutes: 6,
    status: 'published',
    body: [
      {
        type: 'paragraph',
        text: 'Most guidance on choosing a property management system is written for hotels in Europe or North America. It assumes reliable power, reliable internet, card payments as the default and a support desk in your own timezone. If you run a hotel in Nigeria, at least three of those assumptions are wrong, and the shortlist you build from that advice will be wrong with them.'
      },
      { type: 'heading', text: 'Start with how money actually reaches you' },
      {
        type: 'paragraph',
        text: 'A guest at a Lagos hotel might pay by bank transfer, on a POS terminal, in cash at the desk, or through a card link. Often one booking is settled by two of those. The question to ask a vendor is not "do you accept payments" — everyone says yes. It is: can one folio hold a part-transfer and a part-cash payment, and can the front desk close a shift with the variance visible?'
      },
      {
        type: 'paragraph',
        text: 'If the answer involves exporting to a spreadsheet, you have not removed the spreadsheet. You have added a system on top of it.'
      },
      { type: 'heading', text: 'Ask what happens when the internet drops' },
      {
        type: 'paragraph',
        text: 'There is a meaningful difference between software that shows an error when the connection goes and software that keeps working. Ask specifically: can the front desk check a guest in during an outage? Can the restaurant take an order? And when the connection returns, does that work sync on its own, or does someone re-key it?'
      },
      {
        type: 'callout',
        text: 'A useful test during a demo: ask the salesperson to turn off their wifi and keep going. The answer you get in that moment is more informative than any feature list.'
      },
      { type: 'heading', text: 'Price the training, not just the licence' },
      {
        type: 'paragraph',
        text: 'Front desk and housekeeping roles turn over. A system that only works while the one person who was trained on it is still employed is a risk, not an asset. Ask whether training is included, whether it is repeatable for new staff, and whether it costs extra the second time.'
      },
      { type: 'heading', text: 'Check the currency all the way through' },
      {
        type: 'paragraph',
        text: 'Some international systems display Naira on the rate but calculate and report in dollars underneath. That shows up later as reports that do not reconcile with your bank statements. Ask to see a revenue report, an invoice and a payment record — all three — in Naira.'
      },
      { type: 'heading', text: 'Find out who answers, and when' },
      {
        type: 'paragraph',
        text: 'A support desk that opens at 9am in another timezone is unreachable during your busiest check-in period. Ask what hours support runs in WAT, which channels are staffed, and whether WhatsApp is one of them — because when a terminal fails at the desk during a rush, nobody is opening a ticket portal.'
      }
    ]
  },
  {
    slug: 'running-a-small-hotel-on-a-pms',
    title: 'How to Run a Small Hotel on a PMS Without Overcomplicating It',
    summary:
      'A practical order of operations for a 10 to 30 room property moving off notebooks — what to set up first, and what to leave until later.',
    category: 'Getting started',
    readMinutes: 7,
    status: 'published',
    body: [
      {
        type: 'paragraph',
        text: 'The most common way a small hotel fails to adopt a property management system is trying to switch everything on at once. Rooms, rates, restaurant, inventory, payroll and reporting in the first week is too much change for a team that is also running a hotel. The properties that succeed sequence it.'
      },
      { type: 'heading', text: 'Week one: rooms and reservations only' },
      {
        type: 'paragraph',
        text: 'Load your room list and your rates. Nothing else. From day one, every booking goes into the system — including the ones that arrive by WhatsApp and phone. Someone at the desk types them in as they come.'
      },
      {
        type: 'paragraph',
        text: 'This single change fixes the most expensive problem a small hotel has: two guests sold the same room because two people took bookings from two places. Everything else can wait.'
      },
      { type: 'heading', text: 'Week two: check-in and check-out' },
      {
        type: 'paragraph',
        text: 'Once bookings live in one place, move the arrival and departure process across. The test of success is that anyone on the desk can answer "what rooms are free tonight?" without walking upstairs.'
      },
      { type: 'heading', text: 'Week three: housekeeping status' },
      {
        type: 'paragraph',
        text: 'Give housekeeping a way to mark a room clean, and the desk a way to see it. This is the point where a room stops sitting empty for two hours because nobody at the desk knew it was ready.'
      },
      { type: 'heading', text: 'Week four: payments and the daily close' },
      {
        type: 'paragraph',
        text: 'Now record payments against bookings — cash, transfer and POS. Close each shift in the system. It will be uncomfortable for a week because the variances are visible for the first time. That discomfort is the point.'
      },
      { type: 'heading', text: 'After that: only what you will actually read' },
      {
        type: 'list',
        items: [
          'Restaurant POS, if the restaurant is a meaningful share of revenue',
          'Inventory, once you are losing money on stock you cannot account for',
          'Payroll and HR, once you have enough staff for it to be a burden',
          'Reports, which are only worth switching on once the data going in is trustworthy'
        ]
      },
      {
        type: 'callout',
        text: 'A report built on incomplete data is worse than no report, because people make decisions on it. Get the daily entry habit right before you start reading the analytics.'
      }
    ]
  },
  {
    slug: 'reduce-booking-errors',
    title: 'Reducing Booking Errors: Where Double-Bookings Actually Come From',
    summary:
      'Overbookings are rarely a system failure. They are usually a process gap — here are the four most common ones and how to close them.',
    category: 'Operations',
    readMinutes: 5,
    status: 'published',
    body: [
      {
        type: 'paragraph',
        text: 'When a hotel sells the same room twice, the instinct is to blame the software. In practice the software is usually recording exactly what it was told. The failure happened earlier, in a place where a booking existed but the system did not know about it.'
      },
      { type: 'heading', text: 'One: the booking that lived in a chat' },
      {
        type: 'paragraph',
        text: 'A guest messages the hotel line. Whoever is on shift replies, agrees a rate, and means to enter it later. The shift ends. The booking exists only in a conversation nobody else reads.'
      },
      {
        type: 'paragraph',
        text: 'The fix is a rule rather than a feature: a booking is not a booking until it is in the system. Confirm to the guest only after it has been entered.'
      },
      { type: 'heading', text: 'Two: the held room nobody released' },
      {
        type: 'paragraph',
        text: 'A room is held for a guest who is "confirming tomorrow". Tomorrow passes. The hold stays, so the room shows unavailable while sitting empty — or worse, someone releases it informally and it is sold twice.'
      },
      {
        type: 'paragraph',
        text: 'Give holds an expiry, and make somebody responsible for the list.'
      },
      { type: 'heading', text: 'Three: the late check-out nobody recorded' },
      {
        type: 'paragraph',
        text: 'A guest asks the desk for a few extra hours. The desk agrees. Housekeeping cleans on the original schedule, the room shows ready, and the arriving guest is walked to a room that is still occupied.'
      },
      { type: 'heading', text: 'Four: maintenance that was never blocked' },
      {
        type: 'paragraph',
        text: 'A room with a failed air conditioner is unsellable but still shows as available, because the report went to maintenance by phone rather than into the system.'
      },
      {
        type: 'callout',
        text: 'The common thread in all four is the same: a decision was made verbally and never written down. Most overbooking is fixed by process discipline, not by better software — though software that makes the right action quick helps the discipline hold.'
      }
    ]
  },
  {
    slug: 'hotel-operations-without-reliable-internet',
    title: 'Running Hotel Operations Through an Internet Outage',
    summary:
      'What genuinely needs a connection, what does not, and how to set your property up so an outage costs you nothing.',
    category: 'Operations',
    readMinutes: 5,
    status: 'published',
    body: [
      {
        type: 'paragraph',
        text: 'Connectivity in Nigeria is good enough most of the time and unavailable some of the time. A hotel that stops operating during the second case has bought the wrong system. The goal is not perfect uptime — it is that an outage becomes a delay in syncing rather than a stop in trading.'
      },
      { type: 'heading', text: 'Separate what needs the network from what does not' },
      {
        type: 'paragraph',
        text: 'Checking a guest in, taking a restaurant order, recording a cash payment and marking a room clean are all local actions. None of them fundamentally requires a server round trip — they require a record that reaches the server eventually.'
      },
      {
        type: 'paragraph',
        text: 'Card authorisation genuinely does need a connection. So does anything involving a live rate from an external channel. Knowing which of your daily actions fall in each group tells you what an outage will actually cost you.'
      },
      { type: 'heading', text: 'Make the queue visible' },
      {
        type: 'paragraph',
        text: 'Software that works offline should tell you how much work is waiting to sync, and tell you clearly when something has failed to sync rather than quietly dropping it. A pending count that never reaches zero is a problem you want to see the same day, not at month end.'
      },
      { type: 'heading', text: 'Practical steps that cost little' },
      {
        type: 'list',
        items: [
          'Keep a second connection from a different provider, even a modest mobile one',
          'Put the front desk device and the router on the same inverter or UPS',
          'Agree in advance what the desk does during an outage, so nobody improvises onto paper',
          'Check the sync queue at the end of every shift, as part of closing'
        ]
      },
      {
        type: 'callout',
        text: 'The paper fallback is the real risk. Work recorded on paper during an outage is work that has to be re-entered afterwards, and in practice some of it never is.'
      }
    ]
  },
  {
    slug: 'increase-hotel-occupancy',
    title: 'Increasing Occupancy Without Cutting Your Rate',
    summary:
      'Discounting is the fastest lever and the most expensive one. What to look at first.',
    category: 'Revenue',
    readMinutes: 6,
    status: 'draft',
    body: [
      {
        type: 'paragraph',
        text: 'Draft. Needs occupancy and ADR figures from real properties before publishing — the argument depends on numbers this article should not invent.'
      }
    ]
  },
  {
    slug: 'reducing-hotel-expenses',
    title: 'Where Hotel Money Leaks: Five Costs Worth Auditing',
    summary:
      'Cost control that does not damage the guest experience.',
    category: 'Revenue',
    readMinutes: 6,
    status: 'draft',
    body: [
      {
        type: 'paragraph',
        text: 'Draft. Needs benchmark cost ratios for Nigerian properties; publishing generic international figures would mislead.'
      }
    ]
  },
  {
    slug: 'staff-management-for-hotels',
    title: 'Staff Scheduling and Attendance in a Hotel That Never Closes',
    summary:
      'Rota, attendance and handover practices for a 24-hour operation.',
    category: 'Staff',
    readMinutes: 6,
    status: 'draft',
    body: [
      {
        type: 'paragraph',
        text: 'Draft. Outline ready; needs a review against Nigerian labour practice before it goes out.'
      }
    ]
  },
  {
    slug: 'nigerian-hotel-taxes-and-compliance',
    title: 'Understanding Nigerian Hotel Taxes and Compliance',
    summary:
      'VAT, consumption tax and the records a hotel is expected to keep.',
    category: 'Compliance',
    readMinutes: 8,
    status: 'draft',
    needsReview: true,
    body: [
      {
        type: 'paragraph',
        text: 'Draft, and deliberately unpublished. Hotel taxation in Nigeria varies by state — several states levy a consumption tax separate from federal VAT, and the treatment has been litigated. A hotel could act on this page and be wrong, so it must be reviewed by a qualified Nigerian tax practitioner before publication rather than written from general knowledge.'
      }
    ]
  }
];

/** What visitors see. Drafts stay out of the index and out of the sitemap. */
export const publishedResources = () => RESOURCES.filter((r) => r.status === 'published');

export const findResource = (slug: string) =>
  publishedResources().find((r) => r.slug === slug);
