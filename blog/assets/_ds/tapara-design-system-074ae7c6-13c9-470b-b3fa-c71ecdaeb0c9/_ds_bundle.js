/* @ds-bundle: {"format":3,"namespace":"TaparaDesignSystem_074ae7","components":[],"sourceHashes":{"loyalty_redesign/app-v11.jsx":"9fae66c5f582","loyalty_redesign/app.jsx":"6894721268d7","loyalty_redesign/components.jsx":"c8dcd78b0121","loyalty_redesign/data.jsx":"6dfec39db634","loyalty_redesign/design-canvas.jsx":"d3ddcf4241b9","loyalty_redesign/screens1.jsx":"c7167a0d1775","loyalty_redesign/screens2.jsx":"fdef079f9fb0","loyalty_redesign/screens3.jsx":"9285a441efc6","loyalty_redesign/screens4.jsx":"3afa174fbe35","loyalty_redesign/screens5.jsx":"0c1525c16ef9","loyalty_redesign/screens6.jsx":"428c350b9a3b","loyalty_redesign/tokens.js":"613bd63f5ab4","loyalty_redesign/ui.jsx":"8966d359c0f6","ui_kits/consumer_app/app.jsx":"0b8163580a61","ui_kits/consumer_app/frame.jsx":"620a90c6bddc","ui_kits/consumer_app/loyalty.jsx":"655c79568660","ui_kits/consumer_app/screens.jsx":"89a4c569ad78","ui_kits/consumer_app/tokens.js":"88ef816e7258","ui_kits/merchant_app/app.jsx":"875368c02734","ui_kits/merchant_app/builder.jsx":"e010b0d75123","ui_kits/merchant_app/frame.jsx":"620a90c6bddc","ui_kits/merchant_app/home.jsx":"0b593ffe75a2","ui_kits/merchant_app/tokens.js":"88ef816e7258"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TaparaDesignSystem_074ae7 = window.TaparaDesignSystem_074ae7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// loyalty_redesign/app-v11.jsx
try { (() => {
// Tapara v1.1 — separate canvas (Payments & new states only)
const Sv = window.SCREENS;
function BoardV11() {
  return /*#__PURE__*/React.createElement(DesignCanvas, null, /*#__PURE__*/React.createElement(DCSection, {
    id: "payments",
    title: "Payments",
    subtitle: "One-off bank pay & NFC discovery"
  }, /*#__PURE__*/React.createElement(DCArtboard, {
    id: "pay",
    label: "01 \xB7 Payment request \u2014 one-off",
    width: 390,
    height: 844
  }, /*#__PURE__*/React.createElement(Sv.PaymentRequestScreen, null)), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "nfc",
    label: "02 \xB7 NFC \u2014 non-member",
    width: 390,
    height: 844
  }, /*#__PURE__*/React.createElement(Sv.NFCNonMemberScreen, null))), /*#__PURE__*/React.createElement(DCSection, {
    id: "settings",
    title: "Settings & empty states",
    subtitle: "Account / Your Bank, plus the no-clubs home"
  }, /*#__PURE__*/React.createElement(DCArtboard, {
    id: "admin",
    label: "03 \xB7 Account \u2014 Your Bank",
    width: 390,
    height: 1100
  }, /*#__PURE__*/React.createElement(Sv.AdminSettingsScreen, null)), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "homeEmpty",
    label: "04 \xB7 Home \u2014 no clubs",
    width: 390,
    height: 844
  }, /*#__PURE__*/React.createElement(Sv.HomeEmptyScreen, null)), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "leave",
    label: "05 \xB7 Leave club sheet",
    width: 390,
    height: 844
  }, /*#__PURE__*/React.createElement(Sv.LeaveSheetScreen, null))), /*#__PURE__*/React.createElement(DCSection, {
    id: "fast",
    title: "Enable fast payments",
    subtitle: "Upgrade prompt \u2014 two placements"
  }, /*#__PURE__*/React.createElement(DCArtboard, {
    id: "fpA",
    label: "06 \xB7 Banner in dashboard (A)",
    width: 390,
    height: 844
  }, /*#__PURE__*/React.createElement(Sv.FastPaymentsBannerScreen, null)), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "fpB",
    label: "07 \xB7 Modal on payment (B)",
    width: 390,
    height: 844
  }, /*#__PURE__*/React.createElement(Sv.FastPaymentsModalScreen, null))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(BoardV11, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "loyalty_redesign/app-v11.jsx", error: String((e && e.message) || e) }); }

// loyalty_redesign/app.jsx
try { (() => {
// Tapara loyalty redesign — canvas assembly
const S = window.SCREENS;
function Board() {
  return /*#__PURE__*/React.createElement(DesignCanvas, null, /*#__PURE__*/React.createElement(DCSection, {
    id: "onboarding",
    title: "Onboarding",
    subtitle: "First-run carousel + the new bank step"
  }, /*#__PURE__*/React.createElement(DCArtboard, {
    id: "ob1",
    label: "01 \xB7 Carousel \u2014 Your local",
    width: 390,
    height: 844
  }, /*#__PURE__*/React.createElement(S.CarouselSlide, {
    index: 0
  })), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "ob2",
    label: "02 \xB7 Carousel \u2014 Join clubs",
    width: 390,
    height: 844
  }, /*#__PURE__*/React.createElement(S.CarouselSlide, {
    index: 1
  })), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "ob3",
    label: "03 \xB7 Carousel \u2014 Tap to pay",
    width: 390,
    height: 844
  }, /*#__PURE__*/React.createElement(S.CarouselSlide, {
    index: 2
  })), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "ob4",
    label: "04 \xB7 Carousel \u2014 Be rewarded",
    width: 390,
    height: 844
  }, /*#__PURE__*/React.createElement(S.CarouselSlide, {
    index: 3
  })), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "bank",
    label: "05 \xB7 Bank account step (3 of 4)",
    width: 390,
    height: 844
  }, /*#__PURE__*/React.createElement(S.OnboardingBankScreen, null))), /*#__PURE__*/React.createElement(DCSection, {
    id: "home",
    title: "Home",
    subtitle: "Club-centric home \u2014 saved, check in, your clubs"
  }, /*#__PURE__*/React.createElement(DCArtboard, {
    id: "home1",
    label: "06 \xB7 Home",
    width: 390,
    height: 880
  }, /*#__PURE__*/React.createElement(S.HomeScreen, null))), /*#__PURE__*/React.createElement(DCSection, {
    id: "loyalty",
    title: "Loyalty tab",
    subtitle: "Discover + My Clubs, with empty state & search"
  }, /*#__PURE__*/React.createElement(DCArtboard, {
    id: "loy1",
    label: "07 \xB7 Loyalty \u2014 populated",
    width: 390,
    height: 1080
  }, /*#__PURE__*/React.createElement(S.LoyaltyScreen, null)), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "loy2",
    label: "08 \xB7 Loyalty \u2014 no clubs yet",
    width: 390,
    height: 1080
  }, /*#__PURE__*/React.createElement(S.LoyaltyEmptyScreen, null)), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "search",
    label: "09 \xB7 Search results (club card)",
    width: 390,
    height: 844
  }, /*#__PURE__*/React.createElement(S.SearchResultsScreen, null))), /*#__PURE__*/React.createElement(DCSection, {
    id: "detail",
    title: "Club detail",
    subtitle: "Before joining vs. the member dashboard"
  }, /*#__PURE__*/React.createElement(DCArtboard, {
    id: "det1",
    label: "10 \xB7 Learn more \u2014 not joined",
    width: 390,
    height: 1448
  }, /*#__PURE__*/React.createElement(S.ClubDetailNotJoined, null)), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "det2",
    label: "11 \xB7 Member dashboard \u2014 joined",
    width: 390,
    height: 1788
  }, /*#__PURE__*/React.createElement(S.ClubDetailJoined, null))), /*#__PURE__*/React.createElement(DCSection, {
    id: "flow",
    title: "Join & leave",
    subtitle: "Consent \u2192 confirmed, and leaving a club"
  }, /*#__PURE__*/React.createElement(DCArtboard, {
    id: "consent",
    label: "12 \xB7 Join consent",
    width: 390,
    height: 844
  }, /*#__PURE__*/React.createElement(S.JoinConsentScreen, null)), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "confirmed",
    label: "13 \xB7 Joined \u2014 confirmed",
    width: 390,
    height: 844
  }, /*#__PURE__*/React.createElement(S.JoinConfirmedScreen, null)), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "leave",
    label: "14 \xB7 Leave club sheet",
    width: 390,
    height: 844
  }, /*#__PURE__*/React.createElement(S.LeaveSheetScreen, null))), /*#__PURE__*/React.createElement(DCSection, {
    id: "tour",
    title: "Guided tour",
    subtitle: "Bottom-pinned tour banners across the 4 tabs"
  }, /*#__PURE__*/React.createElement(DCArtboard, {
    id: "t1",
    label: "15 \xB7 Tour \u2014 Home",
    width: 390,
    height: 844
  }, /*#__PURE__*/React.createElement(S.TourBannerScreen, {
    tab: "home",
    step: 1
  })), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "t2",
    label: "16 \xB7 Tour \u2014 Activity",
    width: 390,
    height: 844
  }, /*#__PURE__*/React.createElement(S.TourBannerScreen, {
    tab: "activity",
    step: 2
  })), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "t3",
    label: "17 \xB7 Tour \u2014 Loyalty",
    width: 390,
    height: 844
  }, /*#__PURE__*/React.createElement(S.TourBannerScreen, {
    tab: "loyalty",
    step: 3
  })), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "t4",
    label: "18 \xB7 Tour \u2014 Admin",
    width: 390,
    height: 844
  }, /*#__PURE__*/React.createElement(S.TourBannerScreen, {
    tab: "admin",
    step: 4
  }))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(Board, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "loyalty_redesign/app.jsx", error: String((e && e.message) || e) }); }

// loyalty_redesign/components.jsx
try { (() => {
// Tapara loyalty redesign — composite club components
const T = window.T;
const {
  Icon,
  Initial,
  Pill,
  ProgressBar,
  PrimaryButton,
  Overline,
  Chevron
} = window.UI;

// ---- Discover card (compact, horizontal-scroll row) ----
function DiscoverCard({
  c
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto',
      width: 232,
      background: T.white,
      border: `1px solid ${T.tertiary}`,
      borderRadius: 16,
      padding: 18,
      boxShadow: T.shadowEditorial,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Initial, {
    name: c.name,
    size: 44,
    variant: c.variant
  }), /*#__PURE__*/React.createElement(Pill, {
    label: c.cat
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 19,
      color: T.primary,
      lineHeight: 1.15
    }
  }, c.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "location_on",
    size: 14,
    color: T.secondary
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontSize: 12.5,
      color: T.secondary
    }
  }, c.loc.split(',')[0])), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontSize: 12,
      color: T.secondary
    }
  }, c.members, " members"), /*#__PURE__*/React.createElement("span", {
    style: {
      borderRadius: 999,
      border: `1px solid ${T.primary}`,
      padding: '7px 18px',
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 13,
      color: T.primary
    }
  }, "Join")));
}

// ---- Search-result / Discover full card (screen 2 component) ----
function ClubCard({
  c
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.white,
      border: `1px solid ${T.tertiary}`,
      borderRadius: 16,
      padding: 16,
      boxShadow: T.shadowEditorial
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Initial, {
    name: c.name,
    size: 40,
    variant: c.variant
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 16,
      color: T.primary
    }
  }, c.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 12,
      color: T.secondary,
      marginTop: 1
    }
  }, c.members, " members")), /*#__PURE__*/React.createElement(Pill, {
    label: c.cat
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 14,
      color: T.secondary,
      lineHeight: 1.45,
      marginTop: 12
    }
  }, c.tagline), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "location_on",
    size: 15,
    color: T.secondary
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontSize: 13,
      color: T.secondary
    }
  }, c.loc)), /*#__PURE__*/React.createElement("span", {
    style: {
      background: T.primary,
      color: '#fff',
      borderRadius: 999,
      padding: '9px 22px',
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 14
    }
  }, "Join")));
}

// ---- Joined club row (My Clubs list item) ----
function JoinedClubRow({
  c
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      background: T.neutral,
      borderRadius: 16,
      padding: 16,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Initial, {
    name: c.name,
    size: 48,
    variant: c.variant
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 16,
      color: T.primary
    }
  }, c.name), /*#__PURE__*/React.createElement(Pill, {
    label: c.tier,
    filled: !c.next
  }), c.next && /*#__PURE__*/React.createElement(Pill, {
    label: c.tier
  })), c.next ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    pct: c.pct
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 12,
      color: T.secondary,
      marginTop: 7
    }
  }, c.stat)) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 7
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "workspace_premium",
    size: 15,
    color: T.primary
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontSize: 12.5,
      color: T.secondary
    }
  }, "Top tier \xB7 ", c.stat))), /*#__PURE__*/React.createElement(Chevron, null));
}

// ---- Tier ladder (vertical progression; bottom = entry, top = crown) ----
// Renders top-to-bottom visually with the topmost tier first.
function TierLadder({
  tiers,
  youAreHere = false
}) {
  const ordered = [...tiers].reverse(); // top tier first
  return /*#__PURE__*/React.createElement("div", null, ordered.map((t, i) => {
    const isFirst = i === 0;
    const isLast = i === ordered.length - 1;
    const done = t.state === 'done';
    const current = t.state === 'current';
    const locked = t.state === 'locked';
    const dotFill = done || current ? T.primary : T.white;
    const dotBorder = locked ? T.tertiary : T.primary;
    const labelColor = locked ? T.secondary : T.primary;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 26
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 2,
        flex: '0 0 8px',
        background: isFirst ? 'transparent' : T.tertiary
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 26,
        height: 26,
        borderRadius: 13,
        flex: '0 0 auto',
        background: dotFill,
        border: `2px solid ${dotBorder}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, t.top && /*#__PURE__*/React.createElement(Icon, {
      name: "workspace_premium",
      size: 15,
      color: done || current ? '#fff' : locked ? T.secondary : T.primary,
      weight: 500
    }), !t.top && done && /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 14,
      color: "#fff",
      weight: 600
    }), !t.top && current && /*#__PURE__*/React.createElement("div", {
      style: {
        width: 8,
        height: 8,
        borderRadius: 4,
        background: '#fff'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 2,
        flex: '1 1 auto',
        minHeight: 8,
        background: isLast ? 'transparent' : T.tertiary
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        paddingBottom: isLast ? 0 : 26
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginTop: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: T.serif,
        fontWeight: 700,
        fontSize: 17,
        color: labelColor
      }
    }, t.name), current && youAreHere && /*#__PURE__*/React.createElement(Pill, {
      label: "You are here",
      filled: true
    }), current && !youAreHere && /*#__PURE__*/React.createElement(Pill, {
      label: "Current"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: T.sans,
        fontSize: 12.5,
        color: T.secondary,
        marginTop: 3
      }
    }, t.req), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }
    }, t.benefits.map((b, j) => /*#__PURE__*/React.createElement("div", {
      key: j,
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: locked ? 'lock' : 'check',
      size: 15,
      color: locked ? T.tertiary : T.success,
      style: {
        marginTop: 1
      },
      weight: 500
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: T.sans,
        fontSize: 13.5,
        color: locked ? T.secondary : T.primary,
        lineHeight: 1.4
      }
    }, b))))));
  }));
}

// ---- Punch card ----
function PunchCard({
  filled,
  total,
  item,
  locked = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: locked ? T.neutral : T.white,
      border: `1px solid ${T.tertiary}`,
      borderRadius: 16,
      padding: 22,
      boxShadow: locked ? 'none' : T.shadowEditorial,
      opacity: locked ? 0.55 : 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 18,
      color: T.primary
    }
  }, "Free ", item), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 13,
      color: T.secondary,
      marginTop: 2
    }
  }, "Buy ", total, ", get 1 free")), /*#__PURE__*/React.createElement(Icon, {
    name: locked ? 'lock' : 'local_cafe',
    size: 22,
    color: locked ? T.tertiary : T.primary
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, Array.from({
    length: total
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: 34,
      height: 34,
      borderRadius: 17,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: i < filled ? T.primary : 'transparent',
      border: i < filled ? 'none' : `1px dashed ${T.tertiary}`
    }
  }, i < filled && /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14,
    color: "#fff",
    weight: 600
  })))), /*#__PURE__*/React.createElement(Overline, {
    style: {
      marginTop: 18,
      fontSize: 10
    }
  }, filled, " of ", total, " stamps earned"));
}

// ---- Voucher / discount card ----
function VoucherCard({
  value,
  item,
  note = 'Applied automatically at checkout',
  locked = false,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      background: T.neutral,
      borderRadius: 16,
      overflow: 'hidden',
      border: `1px dashed ${T.tertiary}`,
      opacity: locked ? 0.55 : 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 5,
      background: locked ? T.tertiary : T.primary
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 28,
      color: T.primary,
      lineHeight: 1
    }
  }, value, " off"), /*#__PURE__*/React.createElement(Overline, {
    style: {
      marginTop: 8
    }
  }, item)), action ? /*#__PURE__*/React.createElement("span", {
    style: {
      background: T.primary,
      color: '#fff',
      borderRadius: 999,
      padding: '7px 16px',
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 12
    }
  }, "Use") : /*#__PURE__*/React.createElement(Icon, {
    name: locked ? 'lock' : 'confirmation_number',
    size: 26,
    color: T.tertiary
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 12,
      fontStyle: 'italic',
      color: T.secondary,
      marginTop: 10
    }
  }, locked ? 'Unlock at Coffee Lover' : note)));
}

// ---- Stat column ----
function StatCol({
  label,
  value,
  money = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Overline, {
    style: {
      fontSize: 10
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 24,
      color: T.primary,
      marginTop: 5
    }
  }, money ? '$' : '', value));
}

// ---- Mini bar chart (6 months spend) ----
function MiniBars({
  data,
  months
}) {
  const max = Math.max(...data);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 10,
      height: 90
    }
  }, data.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: 70,
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: `${v / max * 100}%`,
      background: i === data.length - 1 ? T.primary : T.tertiary,
      borderRadius: 4
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontSize: 10,
      color: T.secondary
    }
  }, months[i]))));
}

// ---- Empty state ----
function EmptyState({
  title,
  body,
  cta
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '32px 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 88,
      height: 88,
      borderRadius: 44,
      background: T.neutral,
      border: `1px dashed ${T.tertiary}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "storefront",
    size: 36,
    color: T.secondary
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 20,
      color: T.primary
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 14,
      color: T.secondary,
      lineHeight: 1.5,
      marginTop: 8,
      maxWidth: 250
    }
  }, body), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(PrimaryButton, {
    title: cta,
    icon: "explore"
  })));
}
window.CLUB = {
  DiscoverCard,
  ClubCard,
  JoinedClubRow,
  TierLadder,
  PunchCard,
  VoucherCard,
  StatCol,
  MiniBars,
  EmptyState
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "loyalty_redesign/components.jsx", error: String((e && e.message) || e) }); }

// loyalty_redesign/data.jsx
try { (() => {
// Tapara loyalty redesign — sample data (stubbed, on-brand)
window.DATA = {
  user: {
    name: 'Felix',
    full: 'Felix Carr'
  },
  // Discover — clubs the consumer has NOT joined
  discover: [{
    name: 'Bestie',
    cat: 'Cafe',
    tagline: 'All-day brunch & natural wine on K’ Road.',
    loc: 'Karangahape Rd, Auckland',
    members: 212,
    variant: 'solid'
  }, {
    name: 'Crumb Bakehouse',
    cat: 'Bakery',
    tagline: 'Sourdough, pastries & slow mornings.',
    loc: 'Grey Lynn, Auckland',
    members: 88,
    variant: 'solid'
  }, {
    name: 'Major Tom',
    cat: 'Coffee',
    tagline: 'Single-origin espresso bar.',
    loc: 'Ponsonby, Auckland',
    members: 140,
    variant: 'solid'
  }, {
    name: 'Hopper',
    cat: 'Food',
    tagline: 'Sri Lankan street food, done late.',
    loc: 'Newton, Auckland',
    members: 64,
    variant: 'solid'
  }],
  // My Clubs — joined
  myClubs: [{
    name: 'Customs Coffee',
    cat: 'Cafe',
    tier: 'Coffee Lover',
    next: 'Coffee Maniac',
    pct: 62,
    progress: '5 of 8 visits to Coffee Maniac',
    stat: '12 visits · $186 spent',
    variant: 'solid'
  }, {
    name: 'Prefab Eatery',
    cat: 'Eatery',
    tier: 'Regular',
    next: 'Local',
    pct: 40,
    progress: '$120 of $300 spent to Local',
    stat: '6 visits · $120 spent',
    variant: 'solid'
  }, {
    name: 'Pixel Arcade',
    cat: 'Arcade',
    tier: 'Top Gamer',
    next: null,
    pct: 100,
    progress: '',
    stat: '31 visits · $240 spent',
    variant: 'solid'
  }],
  // The club we drill into (Customs Coffee)
  club: {
    name: 'Customs Coffee',
    cat: 'Cafe',
    loc: 'Ponsonby, Auckland',
    members: 318,
    tagline: 'Specialty coffee & pastries. Your morning, remembered.',
    memberSince: 'May 2026',
    bank: 'ASB',
    tiers: [{
      name: 'Coffee Newcomer',
      req: 'Join the club',
      benefits: ['First coffee on us'],
      state: 'done'
    }, {
      name: 'Coffee Lover',
      req: '8 visits or $80 spent',
      benefits: ['10% off all pastries', 'Free coffee every 8 cups'],
      state: 'current'
    }, {
      name: 'Coffee Maniac',
      req: '20 visits or $200 spent',
      benefits: ['15% off everything', 'Skip-the-queue ordering', 'A free bag of beans monthly'],
      state: 'locked',
      top: true
    }],
    punch: {
      filled: 5,
      total: 8,
      item: 'flat white'
    },
    voucher: {
      value: '10%',
      item: 'All pastries'
    },
    spend: [28, 42, 36, 54, 40, 58],
    // last 6 months
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    stats: {
      visits: 12,
      spent: 186,
      saved: 24
    },
    rank: 3
  },
  banks: ['ANZ', 'ASB', 'BNZ', 'Westpac', 'Kiwibank', 'TSB', 'Co-operative Bank']
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "loyalty_redesign/data.jsx", error: String((e && e.message) || e) }); }

// loyalty_redesign/design-canvas.jsx
try { (() => {
/* BEGIN USAGE */
// DesignCanvas.jsx — Figma-ish design canvas wrapper
// Warm gray grid bg + Sections + Artboards + PostIt notes.
// Exports (to window): DesignCanvas, DCSection, DCArtboard, DCPostIt.
// Artboards are reorderable (grip-drag), deletable, labels/titles are
// inline-editable, and any artboard can be opened in a fullscreen focus
// overlay (←/→/Esc). State persists to a .design-canvas.state.json sidecar
// via the host bridge. No assets, no deps.
//
// Usage:
//   <DesignCanvas>
//     <DCSection id="onboarding" title="Onboarding" subtitle="First-run variants">
//       <DCArtboard id="a" label="A · Dusk" width={260} height={480}>…</DCArtboard>
//       <DCArtboard id="b" label="B · Minimal" width={260} height={480}>…</DCArtboard>
//     </DCSection>
//   </DesignCanvas>
//
// Artboards are static design frames, not scroll regions — never use
// height: 100% + overflow: auto/scroll on inner elements; size each artboard
// to fit its content (explicit pixel height, or let it grow).
/* END USAGE */

const DC = {
  bg: '#f0eee9',
  grid: 'rgba(0,0,0,0.06)',
  label: 'rgba(60,50,40,0.7)',
  title: 'rgba(40,30,20,0.85)',
  subtitle: 'rgba(60,50,40,0.6)',
  postitBg: '#fef4a8',
  postitText: '#5a4a2a',
  font: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
};

// One-time CSS injection (classes are dc-prefixed so they don't collide with
// the hosted design's own styles).
if (typeof document !== 'undefined' && !document.getElementById('dc-styles')) {
  const s = document.createElement('style');
  s.id = 'dc-styles';
  s.textContent = ['.dc-editable{cursor:text;outline:none;white-space:nowrap;border-radius:3px;padding:0 2px;margin:0 -2px}', '.dc-editable:focus{background:#fff;box-shadow:0 0 0 1.5px #c96442}', '[data-dc-slot]{transition:transform .18s cubic-bezier(.2,.7,.3,1)}', '[data-dc-slot].dc-dragging{transition:none;z-index:10;pointer-events:none}', '[data-dc-slot].dc-dragging .dc-card{box-shadow:0 12px 40px rgba(0,0,0,.25),0 0 0 2px #c96442;transform:scale(1.02)}',
  // isolation:isolate contains artboard content's z-indexes so a
  // z-indexed child (sticky navbar etc.) can't paint over .dc-header or
  // the .dc-menu popover that drops into the top of the card.
  '.dc-card{isolation:isolate;transition:box-shadow .15s,transform .15s}', '.dc-card *{scrollbar-width:none}', '.dc-card *::-webkit-scrollbar{display:none}',
  // Per-artboard header: grip + label on the left, delete/expand on the
  // right. Single flex row; when the artboard's on-screen width is too
  // narrow for both the label yields (ellipsis, then hidden entirely below
  // ~4ch via the container query) and the buttons stay on the row.
  '.dc-header{position:absolute;bottom:100%;left:-4px;margin-bottom:calc(4px * var(--dc-inv-zoom,1));z-index:2;', '  display:flex;align-items:center;container-type:inline-size}', '.dc-labelrow{display:flex;align-items:center;gap:4px;height:24px;flex:1 1 auto;min-width:0}', '.dc-grip{flex:0 0 auto;cursor:grab;display:flex;align-items:center;padding:5px 4px;border-radius:4px;transition:background .12s,opacity .12s}', '.dc-grip:hover{background:rgba(0,0,0,.08)}', '.dc-grip:active{cursor:grabbing}', '.dc-labeltext{flex:1 1 auto;min-width:0;cursor:pointer;border-radius:4px;padding:3px 6px;', '  display:flex;align-items:center;transition:background .12s;overflow:hidden}',
  // Below ~4ch of label room: hide the label entirely, and drop the grip to
  // hover-only (same reveal rule as .dc-btns) so a narrow header is clean
  // until the card is moused.
  '@container (max-width: 110px){', '  .dc-labeltext{display:none}', '  .dc-grip{opacity:0}', '  [data-dc-slot]:hover .dc-grip{opacity:1}', '}', '.dc-labeltext:hover{background:rgba(0,0,0,.05)}', '.dc-labeltext .dc-editable{overflow:hidden;text-overflow:ellipsis;max-width:100%}', '.dc-labeltext .dc-editable:focus{overflow:visible;text-overflow:clip}', '.dc-btns{flex:0 0 auto;margin-left:auto;display:flex;gap:2px;opacity:0;transition:opacity .12s}', '[data-dc-slot]:hover .dc-btns,.dc-btns:has(.dc-menu){opacity:1}', '.dc-expand,.dc-kebab{width:22px;height:22px;border-radius:5px;border:none;cursor:pointer;padding:0;', '  background:transparent;color:rgba(60,50,40,.7);display:flex;align-items:center;justify-content:center;', '  font:inherit;transition:background .12s,color .12s}', '.dc-expand:hover,.dc-kebab:hover{background:rgba(0,0,0,.06);color:#2a251f}',
  // Slot hosting an open menu floats above later siblings (which otherwise
  // paint on top — same z-index:auto, later DOM order) so the popup isn't
  // clipped by the next card.
  '[data-dc-slot]:has(.dc-menu){z-index:10}', '.dc-menu{position:absolute;top:100%;right:0;margin-top:4px;background:#fff;border-radius:8px;', '  box-shadow:0 8px 28px rgba(0,0,0,.18),0 0 0 1px rgba(0,0,0,.05);padding:4px;min-width:160px;z-index:10}', '.dc-menu button{display:block;width:100%;padding:7px 10px;border:0;background:transparent;', '  border-radius:5px;font-family:inherit;font-size:13px;font-weight:500;line-height:1.2;', '  color:#29261b;cursor:pointer;text-align:left;transition:background .12s;white-space:nowrap}', '.dc-menu button:hover{background:rgba(0,0,0,.05)}', '.dc-menu hr{border:0;border-top:1px solid rgba(0,0,0,.08);margin:4px 2px}', '.dc-menu .dc-danger{color:#c96442}', '.dc-menu .dc-danger:hover{background:rgba(201,100,66,.1)}',
  // Chrome (titles / labels / buttons) counter-scales against the viewport
  // zoom so it stays a constant on-screen size. --dc-inv-zoom is set by
  // DCViewport on every transform update and inherits to all descendants —
  // any overlay inside the world (e.g. a TweaksPanel on an artboard) can use
  // it the same way.
  //
  // The header uses transform:scale (out-of-flow, so layout impact doesn't
  // matter) with its world-space width set to card-width / inv-zoom so that
  // after counter-scaling its on-screen width exactly matches the card's —
  // that's what lets the container query + text-overflow behave against the
  // card's visible edge at every zoom level.
  //
  // The section head uses CSS zoom instead of transform so its layout box
  // grows with the counter-scale, pushing the card row down — otherwise the
  // constant-screen-size title would overflow into the (shrinking) world-
  // space gap and overlap the artboard headers at low zoom.
  '.dc-header{width:calc((100% + 4px) / var(--dc-inv-zoom,1));', '  transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom left}', '.dc-sectionhead{zoom:var(--dc-inv-zoom,1)}'].join('\n');
  document.head.appendChild(s);
}
const DCCtx = React.createContext(null);

// Recursively unwrap React.Fragment so <>…</> grouping doesn't hide
// DCSection/DCArtboard children from the type-based walks below.
function dcFlatten(children) {
  const out = [];
  React.Children.forEach(children, c => {
    if (c && c.type === React.Fragment) out.push(...dcFlatten(c.props.children));else out.push(c);
  });
  return out;
}

// ─────────────────────────────────────────────────────────────
// DesignCanvas — stateful wrapper around the pan/zoom viewport.
// Owns runtime state (per-section order, renamed titles/labels, hidden
// artboards, focused artboard). Order/titles/labels/hidden persist to a
// .design-canvas.state.json
// sidecar next to the HTML. Reads go via plain fetch() so the saved
// arrangement is visible anywhere the HTML + sidecar are served together
// (omelette preview, direct link, downloaded zip). Writes go through the
// host's window.omelette bridge — editing requires the omelette runtime.
// Focus is ephemeral.
// ─────────────────────────────────────────────────────────────
const DC_STATE_FILE = '.design-canvas.state.json';
function DesignCanvas({
  children,
  minScale,
  maxScale,
  style
}) {
  const [state, setState] = React.useState({
    sections: {},
    focus: null
  });
  // Hold rendering until the sidecar read settles so the saved order/titles
  // appear on first paint (no source-order flash). didRead gates writes until
  // the read settles so the empty initial state can't clobber a slow read;
  // skipNextWrite suppresses the one echo-write that would otherwise follow
  // hydration.
  const [ready, setReady] = React.useState(false);
  const didRead = React.useRef(false);
  const skipNextWrite = React.useRef(false);
  React.useEffect(() => {
    let off = false;
    fetch('./' + DC_STATE_FILE).then(r => r.ok ? r.json() : null).then(saved => {
      if (off || !saved || !saved.sections) return;
      skipNextWrite.current = true;
      setState(s => ({
        ...s,
        sections: saved.sections
      }));
    }).catch(() => {}).finally(() => {
      didRead.current = true;
      if (!off) setReady(true);
    });
    const t = setTimeout(() => {
      if (!off) setReady(true);
    }, 150);
    return () => {
      off = true;
      clearTimeout(t);
    };
  }, []);
  React.useEffect(() => {
    if (!didRead.current) return;
    if (skipNextWrite.current) {
      skipNextWrite.current = false;
      return;
    }
    const t = setTimeout(() => {
      window.omelette?.writeFile(DC_STATE_FILE, JSON.stringify({
        sections: state.sections
      })).catch(() => {});
    }, 250);
    return () => clearTimeout(t);
  }, [state.sections]);

  // Build registries synchronously from children so FocusOverlay can read
  // them in the same render. Fragments are flattened; wrapping in other
  // elements still opts out of focus/reorder.
  const registry = {}; // slotId -> { sectionId, artboard }
  const sectionMeta = {}; // sectionId -> { title, subtitle, slotIds[] }
  const sectionOrder = [];
  dcFlatten(children).forEach(sec => {
    if (!sec || sec.type !== DCSection) return;
    const sid = sec.props.id ?? sec.props.title;
    if (!sid) return;
    sectionOrder.push(sid);
    const persisted = state.sections[sid] || {};
    const abs = [];
    dcFlatten(sec.props.children).forEach(ab => {
      if (!ab || ab.type !== DCArtboard) return;
      const aid = ab.props.id ?? ab.props.label;
      if (aid) abs.push([aid, ab]);
    });
    // hidden is scoped to one source revision — when the agent regenerates
    // (artboard-ID set changes), prior deletes don't apply to new content.
    const srcKey = abs.map(([k]) => k).join('\x1f');
    const hidden = persisted.srcKey === srcKey ? persisted.hidden || [] : [];
    const srcIds = [];
    abs.forEach(([aid, ab]) => {
      if (hidden.includes(aid)) return;
      registry[`${sid}/${aid}`] = {
        sectionId: sid,
        artboard: ab
      };
      srcIds.push(aid);
    });
    const kept = (persisted.order || []).filter(k => srcIds.includes(k));
    sectionMeta[sid] = {
      title: persisted.title ?? sec.props.title,
      subtitle: sec.props.subtitle,
      slotIds: [...kept, ...srcIds.filter(k => !kept.includes(k))]
    };
  });
  const api = React.useMemo(() => ({
    state,
    section: id => state.sections[id] || {},
    patchSection: (id, p) => setState(s => ({
      ...s,
      sections: {
        ...s.sections,
        [id]: {
          ...s.sections[id],
          ...(typeof p === 'function' ? p(s.sections[id] || {}) : p)
        }
      }
    })),
    setFocus: slotId => setState(s => ({
      ...s,
      focus: slotId
    }))
  }), [state]);

  // Esc exits focus; any outside pointerdown commits an in-progress rename.
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') api.setFocus(null);
    };
    const onPd = e => {
      const ae = document.activeElement;
      if (ae && ae.isContentEditable && !ae.contains(e.target)) ae.blur();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPd, true);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPd, true);
    };
  }, [api]);
  return /*#__PURE__*/React.createElement(DCCtx.Provider, {
    value: api
  }, /*#__PURE__*/React.createElement(DCViewport, {
    minScale: minScale,
    maxScale: maxScale,
    style: style
  }, ready && children), state.focus && registry[state.focus] && /*#__PURE__*/React.createElement(DCFocusOverlay, {
    entry: registry[state.focus],
    sectionMeta: sectionMeta,
    sectionOrder: sectionOrder
  }));
}

// ─────────────────────────────────────────────────────────────
// DCViewport — transform-based pan/zoom (internal)
//
// Input mapping (Figma-style):
//   • trackpad pinch  → zoom   (ctrlKey wheel; Safari gesture* events)
//   • trackpad scroll → pan    (two-finger)
//   • mouse wheel     → zoom   (notched; distinguished from trackpad scroll)
//   • middle-drag / primary-drag-on-bg → pan
//
// Transform state lives in a ref and is written straight to the DOM
// (translate3d + will-change) so wheel ticks don't go through React —
// keeps pans at 60fps on dense canvases.
// ─────────────────────────────────────────────────────────────
function DCViewport({
  children,
  minScale = 0.1,
  maxScale = 8,
  style = {}
}) {
  const vpRef = React.useRef(null);
  const worldRef = React.useRef(null);
  const tf = React.useRef({
    x: 0,
    y: 0,
    scale: 1
  });
  // Persist viewport across reloads so the user lands back where they were
  // after an agent edit or browser refresh. The sandbox origin is already
  // per-project; pathname keeps multiple canvas files in one project apart.
  const tfKey = 'dc-viewport:' + location.pathname;
  const saveT = React.useRef(0);
  const lastPostedScale = React.useRef();
  const apply = React.useCallback(() => {
    const {
      x,
      y,
      scale
    } = tf.current;
    const el = worldRef.current;
    if (!el) return;
    el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
    // Exposed for zoom-invariant chrome (labels, buttons, TweaksPanel).
    el.style.setProperty('--dc-inv-zoom', String(1 / scale));
    // Keep the host toolbar's % readout in sync with the canvas scale. Pan
    // ticks leave scale unchanged — skip the cross-frame post for those.
    if (lastPostedScale.current !== scale) {
      lastPostedScale.current = scale;
      window.parent.postMessage({
        type: '__dc_zoom',
        scale
      }, '*');
    }
    clearTimeout(saveT.current);
    saveT.current = setTimeout(() => {
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    }, 200);
  }, [tfKey]);
  React.useLayoutEffect(() => {
    const flush = () => {
      clearTimeout(saveT.current);
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    };
    try {
      const s = JSON.parse(localStorage.getItem(tfKey) || 'null');
      if (s && Number.isFinite(s.x) && Number.isFinite(s.y) && Number.isFinite(s.scale)) {
        tf.current = {
          x: s.x,
          y: s.y,
          scale: Math.min(maxScale, Math.max(minScale, s.scale))
        };
        apply();
      }
    } catch {}
    // Flush on pagehide and unmount so a reload within the 200ms debounce
    // window doesn't drop the last pan/zoom.
    window.addEventListener('pagehide', flush);
    return () => {
      window.removeEventListener('pagehide', flush);
      flush();
    };
  }, []);
  React.useEffect(() => {
    const vp = vpRef.current;
    if (!vp) return;
    const zoomAt = (cx, cy, factor) => {
      const r = vp.getBoundingClientRect();
      const px = cx - r.left,
        py = cy - r.top;
      const t = tf.current;
      const next = Math.min(maxScale, Math.max(minScale, t.scale * factor));
      const k = next / t.scale;
      // --dc-inv-zoom consumers (.dc-sectionhead's CSS zoom, each section's
      // marginBottom) reflow on every scale change, vertically shifting the
      // world layout — so a world point mathematically pinned under the cursor
      // drifts as you zoom (content creeps up on zoom-in, down on zoom-out).
      // Anchor the DOM element under the cursor instead: record its screen Y,
      // apply the transform + --dc-inv-zoom, then cancel whatever vertical
      // drift the reflow introduced so it stays put on screen.
      let marker = null,
        markerY0 = 0;
      if (k !== 1) {
        const hit = document.elementFromPoint(cx, cy);
        marker = hit && hit.closest ? hit.closest('[data-dc-slot],[data-dc-section]') : null;
        if (marker) markerY0 = marker.getBoundingClientRect().top;
      }
      // keep the world point under the cursor fixed
      t.x = px - (px - t.x) * k;
      t.y = py - (py - t.y) * k;
      t.scale = next;
      apply();
      if (marker) {
        // A pure zoom around (cx, cy) maps screen Y → cy + (Y - cy) * k. Any
        // departure after the --dc-inv-zoom reflow is the layout drift.
        const drift = marker.getBoundingClientRect().top - (cy + (markerY0 - cy) * k);
        if (Math.abs(drift) > 0.1) {
          t.y -= drift;
          apply();
        }
      }
    };

    // Mouse-wheel vs trackpad-scroll heuristic. A physical wheel sends
    // line-mode deltas (Firefox) or large integer pixel deltas with no X
    // component (Chrome/Safari, typically multiples of 100/120). Trackpad
    // two-finger scroll sends small/fractional pixel deltas, often with
    // non-zero deltaX. ctrlKey is set by the browser for trackpad pinch.
    const isMouseWheel = e => e.deltaMode !== 0 || e.deltaX === 0 && Number.isInteger(e.deltaY) && Math.abs(e.deltaY) >= 40;
    const onWheel = e => {
      e.preventDefault();
      if (isGesturing) return; // Safari: gesture* owns the pinch — discard concurrent wheels
      if ((e.ctrlKey || e.metaKey) && !isMouseWheel(e)) {
        // trackpad pinch, or ctrl/cmd + smooth-scroll mouse. Notched
        // wheels fall through to the fixed-step branch below.
        zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * 0.01));
      } else if (isMouseWheel(e)) {
        // notched mouse wheel — fixed-ratio step per click
        zoomAt(e.clientX, e.clientY, Math.exp(-Math.sign(e.deltaY) * 0.18));
      } else {
        // trackpad two-finger scroll — pan
        tf.current.x -= e.deltaX;
        tf.current.y -= e.deltaY;
        apply();
      }
    };

    // Safari sends native gesture* events for trackpad pinch with a smooth
    // e.scale; preferring these over the ctrl+wheel fallback gives a much
    // better feel there. No-ops on other browsers. Safari also fires
    // ctrlKey wheel events during the same pinch — isGesturing makes
    // onWheel drop those entirely so they neither zoom nor pan.
    let gsBase = 1;
    let isGesturing = false;
    const onGestureStart = e => {
      e.preventDefault();
      isGesturing = true;
      gsBase = tf.current.scale;
    };
    const onGestureChange = e => {
      e.preventDefault();
      zoomAt(e.clientX, e.clientY, gsBase * e.scale / tf.current.scale);
    };
    const onGestureEnd = e => {
      e.preventDefault();
      isGesturing = false;
    };

    // Drag-pan: middle button anywhere, or primary button on canvas
    // background (anything that isn't an artboard or an inline editor).
    let drag = null;
    const onPointerDown = e => {
      const onBg = !e.target.closest('[data-dc-slot], .dc-editable');
      if (!(e.button === 1 || e.button === 0 && onBg)) return;
      e.preventDefault();
      vp.setPointerCapture(e.pointerId);
      drag = {
        id: e.pointerId,
        lx: e.clientX,
        ly: e.clientY
      };
      vp.style.cursor = 'grabbing';
    };
    const onPointerMove = e => {
      if (!drag || e.pointerId !== drag.id) return;
      tf.current.x += e.clientX - drag.lx;
      tf.current.y += e.clientY - drag.ly;
      drag.lx = e.clientX;
      drag.ly = e.clientY;
      apply();
    };
    const onPointerUp = e => {
      if (!drag || e.pointerId !== drag.id) return;
      vp.releasePointerCapture(e.pointerId);
      drag = null;
      vp.style.cursor = '';
    };

    // Host-driven zoom (toolbar % menu). Zooms around viewport centre so the
    // visible midpoint stays fixed — matching the host's iframe-zoom feel.
    const onHostMsg = e => {
      const d = e.data;
      if (d && d.type === '__dc_set_zoom' && typeof d.scale === 'number') {
        const r = vp.getBoundingClientRect();
        zoomAt(r.left + r.width / 2, r.top + r.height / 2, d.scale / tf.current.scale);
      } else if (d && d.type === '__dc_probe') {
        // Host's [readyGen] reset asks whether a canvas is present; it
        // fires on the iframe's native 'load', which for canvases with
        // images/fonts is after our mount-time announce, so re-announce.
        // Clear the pan-tick guard so apply() re-posts the current scale
        // even if it's unchanged — the host just reset dcScale to 1.
        window.parent.postMessage({
          type: '__dc_present'
        }, '*');
        lastPostedScale.current = undefined;
        apply();
      }
    };
    window.addEventListener('message', onHostMsg);
    // Announce canvas mode so the host toolbar proxies its % control here
    // instead of scaling the iframe element (which would just shrink the
    // viewport window of an infinite canvas). The apply() that follows emits
    // the initial __dc_zoom so the toolbar % is correct before first pinch.
    // lastPostedScale reset mirrors the __dc_probe handler: the layout
    // effect's restore-path apply() may already have posted the restored
    // scale (before __dc_present), so clear the guard to re-post it in order.
    window.parent.postMessage({
      type: '__dc_present'
    }, '*');
    lastPostedScale.current = undefined;
    apply();
    vp.addEventListener('wheel', onWheel, {
      passive: false
    });
    vp.addEventListener('gesturestart', onGestureStart, {
      passive: false
    });
    vp.addEventListener('gesturechange', onGestureChange, {
      passive: false
    });
    vp.addEventListener('gestureend', onGestureEnd, {
      passive: false
    });
    vp.addEventListener('pointerdown', onPointerDown);
    vp.addEventListener('pointermove', onPointerMove);
    vp.addEventListener('pointerup', onPointerUp);
    vp.addEventListener('pointercancel', onPointerUp);
    return () => {
      window.removeEventListener('message', onHostMsg);
      vp.removeEventListener('wheel', onWheel);
      vp.removeEventListener('gesturestart', onGestureStart);
      vp.removeEventListener('gesturechange', onGestureChange);
      vp.removeEventListener('gestureend', onGestureEnd);
      vp.removeEventListener('pointerdown', onPointerDown);
      vp.removeEventListener('pointermove', onPointerMove);
      vp.removeEventListener('pointerup', onPointerUp);
      vp.removeEventListener('pointercancel', onPointerUp);
    };
  }, [apply, minScale, maxScale]);
  const gridSvg = `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M120 0H0v120' fill='none' stroke='${encodeURIComponent(DC.grid)}' stroke-width='1'/%3E%3C/svg%3E")`;
  return /*#__PURE__*/React.createElement("div", {
    ref: vpRef,
    className: "design-canvas",
    style: {
      height: '100vh',
      width: '100vw',
      background: DC.bg,
      overflow: 'hidden',
      overscrollBehavior: 'none',
      touchAction: 'none',
      position: 'relative',
      fontFamily: DC.font,
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: worldRef,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      transformOrigin: '0 0',
      willChange: 'transform',
      width: 'max-content',
      minWidth: '100%',
      minHeight: '100%',
      padding: '60px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -6000,
      backgroundImage: gridSvg,
      backgroundSize: '120px 120px',
      pointerEvents: 'none',
      zIndex: -1
    }
  }), children));
}

// ─────────────────────────────────────────────────────────────
// DCSection — editable title + h-row of artboards in persisted order
// ─────────────────────────────────────────────────────────────
function DCSection({
  id,
  title,
  subtitle,
  children,
  gap = 48
}) {
  const ctx = React.useContext(DCCtx);
  const sid = id ?? title;
  const all = React.Children.toArray(dcFlatten(children));
  const artboards = all.filter(c => c && c.type === DCArtboard);
  const rest = all.filter(c => !(c && c.type === DCArtboard));
  const sec = ctx && sid && ctx.section(sid) || {};
  // Must match DesignCanvas's srcKey computation exactly (it filters falsy
  // IDs), or onDelete persists a srcKey that DesignCanvas never recognizes.
  const allIds = artboards.map(a => a.props.id ?? a.props.label).filter(Boolean);
  const srcKey = allIds.join('\x1f');
  const hidden = sec.srcKey === srcKey ? sec.hidden || [] : [];
  const srcOrder = allIds.filter(k => !hidden.includes(k));
  const order = React.useMemo(() => {
    const kept = (sec.order || []).filter(k => srcOrder.includes(k));
    return [...kept, ...srcOrder.filter(k => !kept.includes(k))];
  }, [sec.order, srcOrder.join('|')]);
  const byId = Object.fromEntries(artboards.map(a => [a.props.id ?? a.props.label, a]));

  // marginBottom counter-scales so the on-screen gap between sections stays
  // constant — otherwise at low zoom the (world-space) gap collapses while
  // the screen-constant sectionhead below it doesn't, and the title reads as
  // belonging to the section above. paddingBottom below is just enough for
  // the 24px artboard-header (abs-positioned above each card) plus ~8px, so
  // the title sits tight against its own row at every zoom.
  return /*#__PURE__*/React.createElement("div", {
    "data-dc-section": sid,
    style: {
      marginBottom: 'calc(80px * var(--dc-inv-zoom, 1))',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-sectionhead",
    style: {
      paddingBottom: 36
    }
  }, /*#__PURE__*/React.createElement(DCEditable, {
    tag: "div",
    value: sec.title ?? title,
    onChange: v => ctx && sid && ctx.patchSection(sid, {
      title: v
    }),
    style: {
      fontSize: 28,
      fontWeight: 600,
      color: DC.title,
      letterSpacing: -0.4,
      marginBottom: 6,
      display: 'inline-block'
    }
  }), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: DC.subtitle
    }
  }, subtitle))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap,
      padding: '0 60px',
      alignItems: 'flex-start',
      width: 'max-content'
    }
  }, order.map(k => /*#__PURE__*/React.createElement(DCArtboardFrame, {
    key: k,
    sectionId: sid,
    artboard: byId[k],
    order: order,
    label: (sec.labels || {})[k] ?? byId[k].props.label,
    onRename: v => ctx && ctx.patchSection(sid, x => ({
      labels: {
        ...x.labels,
        [k]: v
      }
    })),
    onReorder: next => ctx && ctx.patchSection(sid, {
      order: next
    }),
    onDelete: () => ctx && ctx.patchSection(sid, x => ({
      hidden: [...(x.srcKey === srcKey ? x.hidden || [] : []), k],
      srcKey
    })),
    onFocus: () => ctx && ctx.setFocus(`${sid}/${k}`)
  }))), rest);
}

// DCArtboard — marker; rendered by DCArtboardFrame via DCSection.
function DCArtboard() {
  return null;
}

// Per-artboard export (kind: 'png' | 'html'). Both paths share the same
// self-contained clone: computed styles baked in, @font-face / <img> /
// inline-style background-image urls inlined as data URIs. PNG wraps the
// clone in foreignObject→canvas at 3× the artboard's natural width×height
// (same pipeline the host uses for page captures); HTML wraps it in a
// minimal standalone document. Both are independent of viewport zoom.
async function dcExport(node, w, h, name, kind) {
  try {
    await document.fonts.ready;
  } catch {}
  const toDataURL = url => fetch(url).then(r => r.blob()).then(b => new Promise(res => {
    const fr = new FileReader();
    fr.onload = () => res(fr.result);
    fr.onerror = () => res(url);
    fr.readAsDataURL(b);
  })).catch(() => url);

  // Collect @font-face rules. ss.cssRules throws SecurityError on
  // cross-origin sheets (e.g. fonts.googleapis.com) — in that case fetch
  // the CSS text directly (those endpoints send ACAO:*) and regex-extract
  // the blocks. @import and @media/@supports are walked so nested
  // @font-face rules aren't missed.
  const fontRules = [],
    pending = [],
    seen = new Set();
  const scrapeCss = href => {
    if (seen.has(href)) return;
    seen.add(href);
    pending.push(fetch(href).then(r => r.text()).then(css => {
      for (const m of css.match(/@font-face\s*{[^}]*}/g) || []) fontRules.push({
        css: m,
        base: href
      });
      for (const m of css.matchAll(/@import\s+(?:url\()?['"]?([^'")\s;]+)/g)) scrapeCss(new URL(m[1], href).href);
    }).catch(() => {}));
  };
  const walk = (rules, base) => {
    for (const r of rules) {
      if (r.type === CSSRule.FONT_FACE_RULE) fontRules.push({
        css: r.cssText,
        base
      });else if (r.type === CSSRule.IMPORT_RULE && r.styleSheet) {
        const ibase = r.styleSheet.href || base;
        try {
          walk(r.styleSheet.cssRules, ibase);
        } catch {
          scrapeCss(ibase);
        }
      } else if (r.cssRules) walk(r.cssRules, base);
    }
  };
  for (const ss of document.styleSheets) {
    const base = ss.href || location.href;
    try {
      walk(ss.cssRules, base);
    } catch {
      if (ss.href) scrapeCss(ss.href);
    }
  }
  while (pending.length) await pending.shift();
  const fontCss = (await Promise.all(fontRules.map(async rule => {
    let out = rule.css,
      m;
    const re = /url\((['"]?)([^'")]+)\1\)/g;
    while (m = re.exec(rule.css)) {
      if (m[2].indexOf('data:') === 0) continue;
      let abs;
      try {
        abs = new URL(m[2], rule.base).href;
      } catch {
        continue;
      }
      out = out.split(m[0]).join('url("' + (await toDataURL(abs)) + '")');
    }
    return out;
  }))).join('\n');
  const cloneStyled = src => {
    if (src.nodeType === 8 || src.nodeType === 1 && src.tagName === 'SCRIPT') return document.createTextNode('');
    const dst = src.cloneNode(false);
    if (src.nodeType === 1) {
      const cs = getComputedStyle(src);
      let txt = '';
      for (let i = 0; i < cs.length; i++) txt += cs[i] + ':' + cs.getPropertyValue(cs[i]) + ';';
      dst.setAttribute('style', txt + 'animation:none;transition:none;');
      if (src.tagName === 'CANVAS') try {
        const im = document.createElement('img');
        im.src = src.toDataURL();
        im.setAttribute('style', txt);
        return im;
      } catch {}
    }
    for (let c = src.firstChild; c; c = c.nextSibling) dst.appendChild(cloneStyled(c));
    return dst;
  };
  const clone = cloneStyled(node);
  clone.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
  // Drop the card's own shadow/radius so the export is a flush w×h rect;
  // the artboard's own background (if any) is already in the computed style.
  clone.style.boxShadow = 'none';
  clone.style.borderRadius = '0';
  const jobs = [];
  clone.querySelectorAll('img').forEach(el => {
    const s = el.getAttribute('src');
    if (s && s.indexOf('data:') !== 0) jobs.push(toDataURL(el.src).then(d => el.setAttribute('src', d)));
  });
  [clone, ...clone.querySelectorAll('*')].forEach(el => {
    const bg = el.style.backgroundImage;
    if (!bg) return;
    let m;
    const re = /url\(["']?([^"')]+)["']?\)/g;
    while (m = re.exec(bg)) {
      const tok = m[0],
        url = m[1];
      if (url.indexOf('data:') === 0) continue;
      jobs.push(toDataURL(url).then(d => {
        el.style.backgroundImage = el.style.backgroundImage.split(tok).join('url("' + d + '")');
      }));
    }
  });
  await Promise.all(jobs);
  const xml = new XMLSerializer().serializeToString(clone);
  const save = (blob, ext) => {
    if (!blob) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name + '.' + ext;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };
  if (kind === 'html') {
    const html = '<!doctype html><html><head><meta charset="utf-8"><title>' + name + '</title>' + (fontCss ? '<style>' + fontCss + '</style>' : '') + '</head><body style="margin:0">' + xml + '</body></html>';
    return save(new Blob([html], {
      type: 'text/html'
    }), 'html');
  }

  // PNG: the SVG's own width/height must be the output resolution — an
  // <img>-loaded SVG rasterizes at its intrinsic size, so sizing it at 1×
  // and ctx.scale()-ing up would just upscale a 1× bitmap. viewBox maps the
  // w×h foreignObject onto the px·w × px·h SVG canvas so the browser renders
  // the HTML at full resolution.
  const px = 3;
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w * px + '" height="' + h * px + '" viewBox="0 0 ' + w + ' ' + h + '"><foreignObject width="' + w + '" height="' + h + '">' + (fontCss ? '<style><![CDATA[' + fontCss + ']]></style>' : '') + xml + '</foreignObject></svg>';
  const img = new Image();
  await new Promise((res, rej) => {
    img.onload = res;
    img.onerror = () => rej(new Error('svg load failed'));
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  });
  const cv = document.createElement('canvas');
  cv.width = w * px;
  cv.height = h * px;
  cv.getContext('2d').drawImage(img, 0, 0);
  cv.toBlob(blob => save(blob, 'png'), 'image/png');
}
function DCArtboardFrame({
  sectionId,
  artboard,
  label,
  order,
  onRename,
  onReorder,
  onFocus,
  onDelete
}) {
  const {
    id: rawId,
    label: rawLabel,
    width = 260,
    height = 480,
    children,
    style = {}
  } = artboard.props;
  const id = rawId ?? rawLabel;
  const ref = React.useRef(null);
  const cardRef = React.useRef(null);
  const menuRef = React.useRef(null);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [confirming, setConfirming] = React.useState(false);

  // ⋯ menu: close on any outside pointerdown. Two-click delete lives inside
  // the menu — first click arms the row, second commits; closing disarms.
  React.useEffect(() => {
    if (!menuOpen) {
      setConfirming(false);
      return;
    }
    const off = e => {
      if (!menuRef.current || !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('pointerdown', off, true);
    return () => document.removeEventListener('pointerdown', off, true);
  }, [menuOpen]);
  const doExport = kind => {
    setMenuOpen(false);
    if (!cardRef.current) return;
    const name = String(label || id || 'artboard').replace(/[^\w\s.-]+/g, '_');
    dcExport(cardRef.current, width, height, name, kind).catch(e => console.error('[design-canvas] export failed:', e));
  };

  // Live drag-reorder: dragged card sticks to cursor; siblings slide into
  // their would-be slots in real time via transforms. DOM order only
  // changes on drop.
  const onGripDown = e => {
    e.preventDefault();
    e.stopPropagation();
    const me = ref.current;
    // translateX is applied in local (pre-scale) space but pointer deltas and
    // getBoundingClientRect().left are screen-space — divide by the viewport's
    // current scale so the dragged card tracks the cursor at any zoom level.
    const scale = me.getBoundingClientRect().width / me.offsetWidth || 1;
    const peers = Array.from(document.querySelectorAll(`[data-dc-section="${sectionId}"] [data-dc-slot]`));
    const homes = peers.map(el => ({
      el,
      id: el.dataset.dcSlot,
      x: el.getBoundingClientRect().left
    }));
    const slotXs = homes.map(h => h.x);
    const startIdx = order.indexOf(id);
    const startX = e.clientX;
    let liveOrder = order.slice();
    me.classList.add('dc-dragging');
    const layout = () => {
      for (const h of homes) {
        if (h.id === id) continue;
        const slot = liveOrder.indexOf(h.id);
        h.el.style.transform = `translateX(${(slotXs[slot] - h.x) / scale}px)`;
      }
    };
    const move = ev => {
      const dx = ev.clientX - startX;
      me.style.transform = `translateX(${dx / scale}px)`;
      const cur = homes[startIdx].x + dx;
      let nearest = 0,
        best = Infinity;
      for (let i = 0; i < slotXs.length; i++) {
        const d = Math.abs(slotXs[i] - cur);
        if (d < best) {
          best = d;
          nearest = i;
        }
      }
      if (liveOrder.indexOf(id) !== nearest) {
        liveOrder = order.filter(k => k !== id);
        liveOrder.splice(nearest, 0, id);
        layout();
      }
    };
    const up = () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
      const finalSlot = liveOrder.indexOf(id);
      me.classList.remove('dc-dragging');
      me.style.transform = `translateX(${(slotXs[finalSlot] - homes[startIdx].x) / scale}px)`;
      // After the settle transition, kill transitions + clear transforms +
      // commit the reorder in the same frame so there's no visual snap-back.
      setTimeout(() => {
        for (const h of homes) {
          h.el.style.transition = 'none';
          h.el.style.transform = '';
        }
        if (liveOrder.join('|') !== order.join('|')) onReorder(liveOrder);
        requestAnimationFrame(() => requestAnimationFrame(() => {
          for (const h of homes) h.el.style.transition = '';
        }));
      }, 180);
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    "data-dc-slot": id,
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-header",
    "data-omelette-chrome": "",
    style: {
      color: DC.label
    },
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-labelrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-grip",
    onPointerDown: onGripDown,
    title: "Drag to reorder"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "13",
    viewBox: "0 0 9 13",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "11",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "11",
    r: "1.1"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-labeltext",
    onClick: onFocus,
    title: "Click to focus"
  }, /*#__PURE__*/React.createElement(DCEditable, {
    value: label,
    onChange: onRename,
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: DC.label,
      lineHeight: 1
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-btns"
  }, /*#__PURE__*/React.createElement("div", {
    ref: menuRef,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "dc-kebab",
    title: "More",
    onClick: () => setMenuOpen(o => !o)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2.5",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9.5",
    cy: "6",
    r: "1.1"
  }))), menuOpen && /*#__PURE__*/React.createElement("div", {
    className: "dc-menu",
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('png')
  }, "Download PNG"), /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('html')
  }, "Download HTML"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("button", {
    className: "dc-danger",
    onClick: () => {
      if (confirming) {
        setMenuOpen(false);
        onDelete();
      } else setConfirming(true);
    }
  }, confirming ? 'Click again to delete' : 'Delete'))), /*#__PURE__*/React.createElement("button", {
    className: "dc-expand",
    onClick: onFocus,
    title: "Focus"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 1h4v4M5 11H1V7M11 1L7.5 4.5M1 11l3.5-3.5"
  }))))), /*#__PURE__*/React.createElement("div", {
    ref: cardRef,
    className: "dc-card",
    style: {
      borderRadius: 2,
      boxShadow: '0 1px 3px rgba(0,0,0,.08),0 4px 16px rgba(0,0,0,.06)',
      overflow: 'hidden',
      width,
      height,
      background: '#fff',
      ...style
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb',
      fontSize: 13,
      fontFamily: DC.font
    }
  }, id)));
}

// Inline rename — commits on blur or Enter.
function DCEditable({
  value,
  onChange,
  style,
  tag = 'span',
  onClick
}) {
  const T = tag;
  return /*#__PURE__*/React.createElement(T, {
    className: "dc-editable",
    contentEditable: true,
    suppressContentEditableWarning: true,
    onClick: onClick,
    onPointerDown: e => e.stopPropagation(),
    onBlur: e => onChange && onChange(e.currentTarget.textContent),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.currentTarget.blur();
      }
    },
    style: style
  }, value);
}

// ─────────────────────────────────────────────────────────────
// Focus mode — overlay one artboard; ←/→ within section, ↑/↓ across
// sections, Esc or backdrop click to exit.
// ─────────────────────────────────────────────────────────────
function DCFocusOverlay({
  entry,
  sectionMeta,
  sectionOrder
}) {
  const ctx = React.useContext(DCCtx);
  const {
    sectionId,
    artboard
  } = entry;
  const sec = ctx.section(sectionId);
  const meta = sectionMeta[sectionId];
  const peers = meta.slotIds;
  const aid = artboard.props.id ?? artboard.props.label;
  const idx = peers.indexOf(aid);
  const secIdx = sectionOrder.indexOf(sectionId);
  const go = d => {
    const n = peers[(idx + d + peers.length) % peers.length];
    if (n) ctx.setFocus(`${sectionId}/${n}`);
  };
  const goSection = d => {
    // Sections whose artboards are all deleted have slotIds:[] — step past
    // them to the next non-empty section so ↑/↓ doesn't dead-end.
    const n = sectionOrder.length;
    for (let i = 1; i < n; i++) {
      const ns = sectionOrder[((secIdx + d * i) % n + n) % n];
      const first = sectionMeta[ns] && sectionMeta[ns].slotIds[0];
      if (first) {
        ctx.setFocus(`${ns}/${first}`);
        return;
      }
    }
  };
  React.useEffect(() => {
    const k = e => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        goSection(-1);
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        goSection(1);
      }
    };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  });
  const {
    width = 260,
    height = 480,
    children
  } = artboard.props;
  const [vp, setVp] = React.useState({
    w: window.innerWidth,
    h: window.innerHeight
  });
  React.useEffect(() => {
    const r = () => setVp({
      w: window.innerWidth,
      h: window.innerHeight
    });
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  const scale = Math.max(0.1, Math.min((vp.w - 200) / width, (vp.h - 260) / height, 2));
  const [ddOpen, setDd] = React.useState(false);
  const Arrow = ({
    dir,
    onClick
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onClick();
    },
    style: {
      position: 'absolute',
      top: '50%',
      [dir]: 28,
      transform: 'translateY(-50%)',
      border: 'none',
      background: 'rgba(255,255,255,.08)',
      color: 'rgba(255,255,255,.9)',
      width: 44,
      height: 44,
      borderRadius: 22,
      fontSize: 18,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background .15s'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.18)',
    onMouseLeave: e => e.currentTarget.style.background = 'rgba(255,255,255,.08)'
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: dir === 'left' ? 'M11 3L5 9l6 6' : 'M7 3l6 6-6 6'
  })));

  // Portal to body so position:fixed is the real viewport regardless of any
  // transform on DesignCanvas's ancestors (including the canvas zoom itself).
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: () => ctx.setFocus(null),
    onWheel: e => e.preventDefault(),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(24,20,16,.6)',
      backdropFilter: 'blur(14px)',
      fontFamily: DC.font,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 72,
      display: 'flex',
      alignItems: 'flex-start',
      padding: '16px 20px 0',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setDd(o => !o),
    style: {
      border: 'none',
      background: 'transparent',
      color: '#fff',
      cursor: 'pointer',
      padding: '6px 8px',
      borderRadius: 6,
      textAlign: 'left',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: -0.3
    }
  }, meta.title), /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 11 11",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    style: {
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 4l3.5 3.5L9 4"
  }))), meta.subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      opacity: .6,
      fontWeight: 400,
      marginTop: 2
    }
  }, meta.subtitle)), ddOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      marginTop: 4,
      background: '#2a251f',
      borderRadius: 8,
      boxShadow: '0 8px 32px rgba(0,0,0,.4)',
      padding: 4,
      minWidth: 200,
      zIndex: 10
    }
  }, sectionOrder.filter(sid => sectionMeta[sid].slotIds.length).map(sid => /*#__PURE__*/React.createElement("button", {
    key: sid,
    onClick: () => {
      setDd(false);
      const f = sectionMeta[sid].slotIds[0];
      if (f) ctx.setFocus(`${sid}/${f}`);
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      border: 'none',
      cursor: 'pointer',
      background: sid === sectionId ? 'rgba(255,255,255,.1)' : 'transparent',
      color: '#fff',
      padding: '8px 12px',
      borderRadius: 5,
      fontSize: 14,
      fontWeight: sid === sectionId ? 600 : 400,
      fontFamily: 'inherit'
    }
  }, sectionMeta[sid].title)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => ctx.setFocus(null),
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.12)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent',
    style: {
      border: 'none',
      background: 'transparent',
      color: 'rgba(255,255,255,.7)',
      width: 32,
      height: 32,
      borderRadius: 16,
      fontSize: 20,
      cursor: 'pointer',
      lineHeight: 1,
      transition: 'background .12s'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 64,
      bottom: 56,
      left: 100,
      right: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: width * scale,
      height: height * scale,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      background: '#fff',
      borderRadius: 2,
      overflow: 'hidden',
      boxShadow: '0 20px 80px rgba(0,0,0,.4)'
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb'
    }
  }, aid))), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 14,
      fontWeight: 500,
      opacity: .85,
      textAlign: 'center'
    }
  }, (sec.labels || {})[aid] ?? artboard.props.label, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .5,
      marginLeft: 10,
      fontVariantNumeric: 'tabular-nums'
    }
  }, idx + 1, " / ", peers.length))), /*#__PURE__*/React.createElement(Arrow, {
    dir: "left",
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: "right",
    onClick: () => go(1)
  }), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 8
    }
  }, peers.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => ctx.setFocus(`${sectionId}/${p}`),
    style: {
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      width: 6,
      height: 6,
      borderRadius: 3,
      background: i === idx ? '#fff' : 'rgba(255,255,255,.3)'
    }
  })))), document.body);
}

// ─────────────────────────────────────────────────────────────
// Post-it — absolute-positioned sticky note
// ─────────────────────────────────────────────────────────────
function DCPostIt({
  children,
  top,
  left,
  right,
  bottom,
  rotate = -2,
  width = 180
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top,
      left,
      right,
      bottom,
      width,
      background: DC.postitBg,
      padding: '14px 16px',
      fontFamily: '"Comic Sans MS", "Marker Felt", "Segoe Print", cursive',
      fontSize: 14,
      lineHeight: 1.4,
      color: DC.postitText,
      boxShadow: '0 2px 8px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)',
      transform: `rotate(${rotate}deg)`,
      zIndex: 5
    }
  }, children);
}
Object.assign(window, {
  DesignCanvas,
  DCSection,
  DCArtboard,
  DCPostIt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "loyalty_redesign/design-canvas.jsx", error: String((e && e.message) || e) }); }

// loyalty_redesign/screens1.jsx
try { (() => {
// Tapara loyalty redesign — Screen 1: Loyalty tab (Discover + My Clubs) & empty state
const T = window.T;
const G = 28; // screen gutter
const {
  Screen,
  TabBar,
  SearchBar,
  FilterPills,
  SectionHead,
  Icon,
  Pill,
  Initial,
  PrimaryButton
} = window.UI;
const {
  DiscoverCard,
  JoinedClubRow,
  EmptyState
} = window.CLUB;
const D = window.DATA;
function LoyaltyScreen() {
  return /*#__PURE__*/React.createElement(Screen, {
    height: 1080
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `8px ${G}px 16px`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 30,
      color: T.primary
    }
  }, "Loyalty")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `0 ${G}px`
    }
  }, /*#__PURE__*/React.createElement(SearchBar, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `16px ${G}px 0`
    }
  }, /*#__PURE__*/React.createElement(FilterPills, {
    items: ['Nearby', 'Coffee', 'Food', 'Drinks', 'All'],
    active: 0
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `28px 0 0`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `0 ${G}px`
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Discover",
    sub: "Local clubs worth joining"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      padding: `0 ${G}px`,
      overflowX: 'hidden'
    }
  }, D.discover.map((c, i) => /*#__PURE__*/React.createElement(DiscoverCard, {
    key: i,
    c: c
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `32px ${G}px 0`
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "My Clubs",
    trailing: /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 26,
        height: 22,
        padding: '0 8px',
        borderRadius: 999,
        background: T.primary,
        color: '#fff',
        fontFamily: T.sans,
        fontWeight: 500,
        fontSize: 12
      }
    }, D.myClubs.length)
  }), D.myClubs.map((c, i) => /*#__PURE__*/React.createElement(JoinedClubRow, {
    key: i,
    c: c
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  })), /*#__PURE__*/React.createElement(TabBar, {
    active: "loyalty"
  }));
}
function LoyaltyEmptyScreen() {
  return /*#__PURE__*/React.createElement(Screen, {
    height: 1080
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `8px ${G}px 16px`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 30,
      color: T.primary
    }
  }, "Loyalty")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `0 ${G}px`
    }
  }, /*#__PURE__*/React.createElement(SearchBar, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `16px ${G}px 0`
    }
  }, /*#__PURE__*/React.createElement(FilterPills, {
    items: ['Nearby', 'Coffee', 'Food', 'Drinks', 'All'],
    active: 0
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `28px 0 0`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `0 ${G}px`
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Discover",
    sub: "Local clubs worth joining"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      padding: `0 ${G}px`,
      overflowX: 'hidden'
    }
  }, D.discover.map((c, i) => /*#__PURE__*/React.createElement(DiscoverCard, {
    key: i,
    c: c
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `32px ${G}px 0`
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "My Clubs"
  }), /*#__PURE__*/React.createElement(EmptyState, {
    title: "No clubs yet",
    body: "Join a local cafe or shop and your tiers, rewards and visits show up here.",
    cta: "Find your first cafe"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  })), /*#__PURE__*/React.createElement(TabBar, {
    active: "loyalty"
  }));
}
window.SCREENS = Object.assign(window.SCREENS || {}, {
  LoyaltyScreen,
  LoyaltyEmptyScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "loyalty_redesign/screens1.jsx", error: String((e && e.message) || e) }); }

// loyalty_redesign/screens2.jsx
try { (() => {
// Tapara loyalty redesign — Screen 2 (Club card / search results) & Screen 9 (Home)
const T2 = window.T;
const G2 = 28;
const {
  Screen,
  TabBar,
  Icon,
  Initial,
  Pill,
  Overline,
  SectionHead,
  PrimaryButton,
  ProgressBar
} = window.UI;
const {
  ClubCard
} = window.CLUB;
const D2 = window.DATA;

// ---------- SCREEN 2 — Merchant club card in search results ----------
function SearchResultsScreen() {
  const results = [{
    name: 'Bestie',
    cat: 'Cafe',
    tagline: 'All-day brunch & natural wine on K’ Road.',
    loc: 'Karangahape Rd, Auckland',
    members: 212,
    variant: 'solid'
  }, {
    name: 'Major Tom',
    cat: 'Coffee',
    tagline: 'Single-origin espresso bar.',
    loc: 'Ponsonby, Auckland',
    members: 140,
    variant: 'solid'
  }, {
    name: 'Crumb Bakehouse',
    cat: 'Bakery',
    tagline: 'Sourdough, pastries & slow mornings.',
    loc: 'Grey Lynn, Auckland',
    members: 88,
    variant: 'solid'
  }];
  return /*#__PURE__*/React.createElement(Screen, {
    height: 844
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `8px ${G2}px 0`,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: T2.neutral,
      borderRadius: 999,
      padding: '14px 18px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 20,
    color: T2.secondary
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T2.sans,
      fontSize: 15,
      color: T2.primary
    }
  }, "coffee"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 18,
    color: T2.secondary
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T2.sans,
      fontWeight: 500,
      fontSize: 15,
      color: T2.primary
    }
  }, "Cancel")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `20px ${G2}px 10px`
    }
  }, /*#__PURE__*/React.createElement(Overline, null, "3 clubs near you")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `0 ${G2}px`,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, results.map((c, i) => /*#__PURE__*/React.createElement(ClubCard, {
    key: i,
    c: c
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  })), /*#__PURE__*/React.createElement(TabBar, {
    active: "loyalty"
  }));
}

// ---------- Home club summary card ----------
function HomeClubCard({
  c
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto',
      width: 168,
      background: T2.neutral,
      borderRadius: 16,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(Initial, {
    name: c.name,
    size: 40,
    variant: c.variant
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T2.serif,
      fontWeight: 700,
      fontSize: 15,
      color: T2.primary,
      marginTop: 12,
      lineHeight: 1.15
    }
  }, c.name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    label: c.tier,
    filled: !c.next
  })), c.next ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    pct: c.pct,
    height: 4
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T2.sans,
      fontSize: 11.5,
      color: T2.secondary,
      marginTop: 7
    }
  }, c.quick)) : /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "workspace_premium",
    size: 14,
    color: T2.primary
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T2.sans,
      fontSize: 11.5,
      color: T2.secondary
    }
  }, "Top tier reached")));
}

// ---------- SCREEN 9 — Home ----------
function HomeScreen() {
  const clubs = [{
    name: 'Customs Coffee',
    tier: 'Coffee Lover',
    next: 'Coffee Maniac',
    pct: 62,
    quick: '3 visits to Maniac',
    variant: 'solid'
  }, {
    name: 'Prefab Eatery',
    tier: 'Regular',
    next: 'Local',
    pct: 40,
    quick: '$120 / $300 spent',
    variant: 'solid'
  }, {
    name: 'Pixel Arcade',
    tier: 'Top Gamer',
    next: null,
    variant: 'solid'
  }];
  return /*#__PURE__*/React.createElement(Screen, {
    height: 880
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `8px ${G2}px 0`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T2.serif,
      fontWeight: 700,
      fontSize: 26,
      color: T2.primary
    }
  }, "Good morning, Felix"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T2.sans,
      fontSize: 14,
      color: T2.secondary,
      marginTop: 4
    }
  }, "Sunday, 1 June")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: `22px ${G2}px 0`,
      background: T2.neutral,
      borderRadius: 20,
      padding: 24,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Overline, null, "Total saved"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T2.serif,
      fontWeight: 700,
      fontSize: 44,
      color: T2.primary,
      marginTop: 6
    }
  }, "$42.50"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T2.sans,
      fontSize: 13,
      color: T2.secondary,
      marginTop: 4
    }
  }, "Across 3 clubs")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `16px ${G2}px 0`
    }
  }, /*#__PURE__*/React.createElement(PrimaryButton, {
    title: "Check in",
    icon: "contactless"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `30px 0 0`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `0 ${G2}px`
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Your Clubs",
    trailing: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: T2.sans,
        fontWeight: 500,
        fontSize: 13.5,
        color: T2.secondary
      }
    }, "See all")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      padding: `0 ${G2}px`,
      overflowX: 'hidden'
    }
  }, clubs.map((c, i) => /*#__PURE__*/React.createElement(HomeClubCard, {
    key: i,
    c: c
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `30px ${G2}px 0`
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Active Orders"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: T2.neutral,
      borderRadius: 16,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(Initial, {
    name: "Customs Coffee",
    size: 44,
    variant: "solid"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T2.serif,
      fontWeight: 700,
      fontSize: 15,
      color: T2.primary
    }
  }, "Customs Coffee"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T2.sans,
      fontSize: 13,
      color: T2.secondary,
      marginTop: 2
    }
  }, "Flat white \xB7 Almond croissant")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      borderRadius: 999,
      border: `1px solid ${T2.tertiary}`,
      padding: '6px 12px',
      fontFamily: T2.sans,
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: 1,
      textTransform: 'uppercase',
      color: T2.primary
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 4,
      background: T2.success
    }
  }), "Preparing"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  })), /*#__PURE__*/React.createElement(TabBar, {
    active: "home"
  }));
}
window.SCREENS = Object.assign(window.SCREENS || {}, {
  SearchResultsScreen,
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "loyalty_redesign/screens2.jsx", error: String((e && e.message) || e) }); }

// loyalty_redesign/screens3.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Tapara loyalty redesign — Screen 3 (club detail, not joined) & Screen 4 (joined dashboard)
const T3 = window.T;
const G3 = 28;
const {
  Screen,
  Icon,
  Initial,
  Pill,
  Overline,
  SectionHead,
  PrimaryButton,
  ProgressBar
} = window.UI;
const {
  TierLadder,
  PunchCard,
  VoucherCard,
  StatCol,
  MiniBars
} = window.CLUB;
const D3 = window.DATA;
function TopBar({
  left,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: `4px ${G3}px 0`,
      height: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, left), /*#__PURE__*/React.createElement("div", null, right));
}
function IconBtn({
  name
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 19,
      background: T3.neutral,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: name,
    size: 20,
    color: T3.primary
  }));
}

// ---------- SCREEN 3 — Club detail, NOT joined ("learn more") ----------
function ClubDetailNotJoined() {
  const c = D3.club;
  const previewTiers = c.tiers.map(t => ({
    ...t,
    state: 'preview'
  }));
  return /*#__PURE__*/React.createElement(Screen, {
    height: 1448
  }, /*#__PURE__*/React.createElement(TopBar, {
    left: /*#__PURE__*/React.createElement(IconBtn, {
      name: "close"
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: `12px ${G3}px 0`
    }
  }, /*#__PURE__*/React.createElement(Initial, {
    name: c.name,
    size: 80,
    variant: "solid"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T3.serif,
      fontWeight: 700,
      fontSize: 28,
      color: T3.primary,
      marginTop: 18
    }
  }, c.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T3.sans,
      fontSize: 14,
      color: T3.secondary,
      marginTop: 6
    }
  }, c.cat, " \xB7 ", c.loc), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T3.sans,
      fontSize: 15,
      color: T3.secondary,
      lineHeight: 1.5,
      marginTop: 14,
      maxWidth: 290
    }
  }, c.tagline), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "group",
    size: 16,
    color: T3.secondary
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T3.sans,
      fontSize: 13,
      color: T3.secondary
    }
  }, c.members, " members"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: T3.hairline,
      margin: `28px ${G3}px 0`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `26px ${G3}px 0`
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Loyalty tiers",
    sub: "Climb as you visit \u2014 Customs Coffee's own ladder"
  }), /*#__PURE__*/React.createElement(TierLadder, {
    tiers: previewTiers
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `30px ${G3}px 0`
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Rewards",
    sub: "Unlock these once you join"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(PunchCard, _extends({}, c.punch, {
    locked: true
  })), /*#__PURE__*/React.createElement(VoucherCard, {
    value: c.voucher.value,
    item: c.voucher.item,
    locked: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 24
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `16px ${G3}px 28px`,
      borderTop: `1px solid ${T3.hairline}`,
      background: T3.white
    }
  }, /*#__PURE__*/React.createElement(PrimaryButton, {
    title: `Join ${c.name}`
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T3.sans,
      fontSize: 12,
      color: T3.secondary,
      textAlign: 'center',
      marginTop: 12
    }
  }, "Link your bank to pay at ", c.name))));
}

// ---------- SCREEN 4 — Club detail, JOINED (member dashboard) ----------
function ClubDetailJoined() {
  const c = D3.club;
  return /*#__PURE__*/React.createElement(Screen, {
    height: 1788
  }, /*#__PURE__*/React.createElement(TopBar, {
    left: /*#__PURE__*/React.createElement(IconBtn, {
      name: "arrow_back"
    }),
    right: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: T3.sans,
        fontWeight: 500,
        fontSize: 14,
        color: T3.secondary
      }
    }, "Leave")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: `12px ${G3}px 0`
    }
  }, /*#__PURE__*/React.createElement(Initial, {
    name: c.name,
    size: 60,
    variant: "solid"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T3.serif,
      fontWeight: 700,
      fontSize: 24,
      color: T3.primary
    }
  }, c.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T3.sans,
      fontSize: 13,
      color: T3.secondary,
      marginTop: 3
    }
  }, "Member since ", c.memberSince))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: `22px ${G3}px 0`,
      background: T3.primary,
      borderRadius: 20,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T3.sans,
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: 1.8,
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.6)'
    }
  }, "Your tier"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T3.serif,
      fontWeight: 700,
      fontSize: 30,
      color: '#fff',
      marginTop: 6
    }
  }, "Coffee Lover")), /*#__PURE__*/React.createElement(Icon, {
    name: "local_cafe",
    size: 28,
    color: "rgba(255,255,255,0.5)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    pct: 62,
    track: "rgba(255,255,255,0.18)",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T3.sans,
      fontSize: 13,
      color: 'rgba(255,255,255,0.75)',
      marginTop: 9
    }
  }, "3 more visits to Coffee Maniac")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 22,
      paddingTop: 20,
      borderTop: '1px solid rgba(255,255,255,0.14)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T3.sans,
      fontWeight: 500,
      fontSize: 10,
      letterSpacing: 1.8,
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.55)'
    }
  }, "Visits"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T3.serif,
      fontWeight: 700,
      fontSize: 24,
      color: '#fff',
      marginTop: 5
    }
  }, c.stats.visits)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T3.sans,
      fontWeight: 500,
      fontSize: 10,
      letterSpacing: 1.8,
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.55)'
    }
  }, "Spent"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T3.serif,
      fontWeight: 700,
      fontSize: 24,
      color: '#fff',
      marginTop: 5
    }
  }, "$", c.stats.spent)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `30px ${G3}px 0`
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Your benefits",
    sub: "Active at Coffee Lover"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(PunchCard, c.punch), /*#__PURE__*/React.createElement(VoucherCard, {
    value: c.voucher.value,
    item: c.voucher.item,
    action: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `30px ${G3}px 0`
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "All tiers"
  }), /*#__PURE__*/React.createElement(TierLadder, {
    tiers: c.tiers,
    youAreHere: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `30px ${G3}px 0`
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Your activity"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: T3.neutral,
      borderRadius: 16,
      padding: 20
    }
  }, /*#__PURE__*/React.createElement(Overline, {
    style: {
      fontSize: 10
    }
  }, "Spend, last 6 months"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(MiniBars, {
    data: c.spend,
    months: c.months
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: T3.neutral,
      borderRadius: 16,
      padding: 18
    }
  }, /*#__PURE__*/React.createElement(StatCol, {
    label: "Visits",
    value: c.stats.visits
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: T3.neutral,
      borderRadius: 16,
      padding: 18
    }
  }, /*#__PURE__*/React.createElement(StatCol, {
    label: "Spent",
    value: c.stats.spent,
    money: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: T3.neutral,
      borderRadius: 16,
      padding: 18
    }
  }, /*#__PURE__*/React.createElement(StatCol, {
    label: "Saved",
    value: c.stats.saved,
    money: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: T3.white,
      border: `1px solid ${T3.tertiary}`,
      borderRadius: 16,
      padding: 18,
      marginTop: 14,
      boxShadow: T3.shadowEditorial
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 22,
      background: T3.primary,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: T3.serif,
      fontWeight: 700,
      fontSize: 17,
      color: '#fff'
    }
  }, "#", c.rank), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T3.serif,
      fontWeight: 700,
      fontSize: 16,
      color: T3.primary
    }
  }, "You're their #", c.rank, " customer"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T3.sans,
      fontSize: 13,
      color: T3.secondary,
      marginTop: 2
    }
  }, "Out of ", c.members, " members this month")))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 28
    }
  })));
}
window.SCREENS = Object.assign(window.SCREENS || {}, {
  ClubDetailNotJoined,
  ClubDetailJoined
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "loyalty_redesign/screens3.jsx", error: String((e && e.message) || e) }); }

// loyalty_redesign/screens4.jsx
try { (() => {
// Tapara loyalty redesign — Screens 5 (consent), 6 (confirmed), 7 (bank), 8 (carousel)
const T4 = window.T;
const G4 = 28;
const {
  Screen,
  Icon,
  Initial,
  Overline,
  PrimaryButton,
  TextLink,
  ProgressBar
} = window.UI;
const D4 = window.DATA;

// Striped illustration placeholder (brand: striped placeholder + monospace caption)
function Placeholder({
  label,
  size = 180
}) {
  const stripe = `repeating-linear-gradient(45deg, ${T4.neutral}, ${T4.neutral} 11px, #ECECE9 11px, #ECECE9 22px)`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: 24,
      background: stripe,
      border: `1px solid ${T4.tertiary}`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "image",
    size: 30,
    color: T4.secondary
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'ui-monospace, Menlo, monospace',
      fontSize: 11,
      letterSpacing: 0.5,
      color: T4.secondary
    }
  }, label));
}

// ---------- SCREEN 5 — Join consent ----------
function JoinConsentScreen() {
  const c = D4.club;
  return /*#__PURE__*/React.createElement(Screen, {
    height: 844
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: `4px ${G4}px 0`,
      height: 40
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 19,
      background: T4.neutral,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 20,
    color: T4.primary
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: `0 ${G4}px`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Initial, {
    name: c.name,
    size: 64,
    variant: "solid",
    check: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T4.serif,
      fontWeight: 700,
      fontSize: 24,
      color: T4.primary,
      marginTop: 22
    }
  }, "Join ", c.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T4.sans,
      fontSize: 14,
      color: T4.secondary,
      lineHeight: 1.6,
      marginTop: 14,
      maxWidth: 296
    }
  }, "To pay at ", c.name, " through tapara, we'll securely link your bank account via open banking. You'll be redirected to ", c.bank, " to approve."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 22,
      background: T4.neutral,
      borderRadius: 999,
      padding: '11px 18px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 17,
    color: T4.secondary
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T4.sans,
      fontSize: 12.5,
      color: T4.secondary
    }
  }, "tapara never sees your banking credentials"))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      paddingBottom: 28
    }
  }, /*#__PURE__*/React.createElement(PrimaryButton, {
    title: `Continue to ${c.bank}`,
    icon: "account_balance"
  }), /*#__PURE__*/React.createElement(TextLink, {
    title: "Cancel"
  }))));
}

// ---------- SCREEN 6 — Join confirmed ----------
function JoinConfirmedScreen() {
  const c = D4.club;
  return /*#__PURE__*/React.createElement(Screen, {
    height: 844
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: `0 ${G4}px`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 84,
      height: 84,
      borderRadius: 42,
      background: T4.success,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 46,
    color: "#fff",
    weight: 600
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T4.serif,
      fontWeight: 700,
      fontSize: 36,
      color: T4.success,
      marginTop: 24
    }
  }, "You're in!"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T4.sans,
      fontSize: 16,
      color: T4.primary,
      marginTop: 10
    }
  }, "You've joined ", c.name, "'s loyalty club"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T4.sans,
      fontSize: 14,
      color: T4.secondary,
      lineHeight: 1.5,
      marginTop: 8,
      maxWidth: 280
    }
  }, "Next time you visit, just tap to check in and pay."), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      marginTop: 28,
      background: T4.neutral,
      borderRadius: 16,
      padding: 20,
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, {
    style: {
      fontSize: 10
    }
  }, "Starting tier"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T4.serif,
      fontWeight: 700,
      fontSize: 20,
      color: T4.primary,
      marginTop: 5
    }
  }, "Coffee Newcomer")), /*#__PURE__*/React.createElement(Icon, {
    name: "local_cafe",
    size: 24,
    color: T4.primary
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check_circle",
    size: 16,
    color: T4.success
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T4.sans,
      fontSize: 13.5,
      color: T4.primary
    }
  }, "Free coffee every 8 cups")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    pct: 0
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T4.sans,
      fontSize: 12,
      color: T4.secondary,
      marginTop: 7
    }
  }, "0 of 8 visits to Coffee Lover")))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      paddingBottom: 28
    }
  }, /*#__PURE__*/React.createElement(PrimaryButton, {
    title: "Done"
  }))));
}

// ---------- SCREEN 7 — Onboarding: bank ----------
function OnboardingBankScreen() {
  const banks = D4.banks;
  return /*#__PURE__*/React.createElement(Screen, {
    height: 844
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: `4px ${G4}px 0`,
      height: 40
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow_back",
    size: 24,
    color: T4.primary
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      padding: `8px ${G4}px 0`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginBottom: 26
    }
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: 4,
      borderRadius: 2,
      background: i < 3 ? T4.primary : T4.tertiary
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T4.serif,
      fontWeight: 700,
      fontSize: 28,
      color: T4.primary
    }
  }, "Your bank"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T4.sans,
      fontSize: 14,
      color: T4.secondary,
      lineHeight: 1.5,
      marginTop: 8
    }
  }, "Select your bank so we can speed up payments when you join merchant clubs."), /*#__PURE__*/React.createElement(Overline, {
    style: {
      marginTop: 26,
      marginBottom: 10
    }
  }, "Select your bank"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      border: `1px solid ${T4.primary}`,
      borderRadius: 12,
      padding: '13px 16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      background: T4.primary,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: T4.serif,
      fontWeight: 700,
      fontSize: 12,
      color: '#fff'
    }
  }, "ASB"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: T4.sans,
      fontWeight: 500,
      fontSize: 15,
      color: T4.primary
    }
  }, "ASB"), /*#__PURE__*/React.createElement(Icon, {
    name: "expand_more",
    size: 22,
    color: T4.secondary
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 12
    }
  }, banks.filter(b => b !== 'ASB').map(b => /*#__PURE__*/React.createElement("span", {
    key: b,
    style: {
      borderRadius: 999,
      border: `1px solid ${T4.tertiary}`,
      padding: '7px 14px',
      fontFamily: T4.sans,
      fontSize: 13,
      color: T4.secondary
    }
  }, b))), /*#__PURE__*/React.createElement(Overline, {
    style: {
      marginTop: 22,
      marginBottom: 10
    }
  }, "Account number"), /*#__PURE__*/React.createElement("div", {
    style: {
      border: `1px solid ${T4.tertiary}`,
      borderRadius: 12,
      padding: '15px 16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T4.sans,
      fontSize: 15,
      color: T4.secondary,
      letterSpacing: 1
    }
  }, "XX-XXXX-XXXXXXX-XX")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T4.sans,
      fontSize: 12,
      color: T4.secondary,
      marginTop: 8
    }
  }, "Found on your bank app or card"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 16
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 24
    }
  }, /*#__PURE__*/React.createElement(PrimaryButton, {
    title: "Continue"
  }), /*#__PURE__*/React.createElement(TextLink, {
    title: "Skip for now"
  }))));
}

// ---------- SCREEN 8 — Onboarding carousel slide ----------
const SLIDES = [{
  label: 'community / neighbourhood',
  title: 'Your local, remembered',
  body: 'Join your favourite cafes and shops. Pay, earn rewards, and become a regular.'
}, {
  label: 'loyalty card / membership',
  title: 'Join loyalty clubs',
  body: 'Discover local merchants, join their clubs, and unlock rewards the more you visit.'
}, {
  label: 'contactless tap / NFC',
  title: 'Tap to check in & pay',
  body: 'Check in with a tap, approve your order, and pay directly from your bank. No card fees.'
}, {
  label: 'gift / tier progression',
  title: 'Be rewarded',
  body: 'Earn tier upgrades, punch-card rewards, and exclusive discounts at every visit.'
}];
function CarouselSlide({
  index
}) {
  const s = SLIDES[index];
  const last = index === SLIDES.length - 1;
  return /*#__PURE__*/React.createElement(Screen, {
    height: 844
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      padding: `4px ${G4}px 0`,
      height: 40
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T4.sans,
      fontWeight: 500,
      fontSize: 14,
      color: T4.secondary
    }
  }, "Skip")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: `0 ${G4}px`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    label: s.label,
    size: 188
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T4.serif,
      fontWeight: 700,
      fontSize: 28,
      color: T4.primary,
      marginTop: 40
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T4.sans,
      fontSize: 16,
      color: T4.secondary,
      lineHeight: 1.55,
      marginTop: 14,
      maxWidth: 300
    }
  }, s.body)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 24
    }
  }, SLIDES.map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: i === index ? 22 : 7,
      height: 7,
      borderRadius: 4,
      background: i === index ? T4.primary : T4.tertiary,
      transition: 'width .2s'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      paddingBottom: 28
    }
  }, /*#__PURE__*/React.createElement(PrimaryButton, {
    title: last ? 'Get started' : 'Next',
    icon: last ? null : 'arrow_forward'
  }))));
}
window.SCREENS = Object.assign(window.SCREENS || {}, {
  JoinConsentScreen,
  JoinConfirmedScreen,
  OnboardingBankScreen,
  CarouselSlide
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "loyalty_redesign/screens4.jsx", error: String((e && e.message) || e) }); }

// loyalty_redesign/screens5.jsx
try { (() => {
// Tapara loyalty redesign — Screen 10 (leave sheet) & Screen 11 (tour banners)
const T5 = window.T;
const G5 = 28;
const {
  StatusBar,
  TabBar,
  Icon,
  Initial,
  Overline,
  PrimaryButton
} = window.UI;
const D5 = window.DATA;

// Bare phone shell (manual, for overlay screens)
function Shell({
  children,
  statusDark = true,
  bg = T5.white
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 844,
      background: bg,
      fontFamily: T5.sans,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, children);
}

// Light grey skeleton block
function Sk({
  w,
  h = 14,
  r = 7,
  mt = 0,
  c
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: w,
      height: h,
      borderRadius: r,
      background: c || T5.neutral,
      marginTop: mt
    }
  });
}

// ---------- SCREEN 10 — Leave club bottom sheet ----------
function LeaveSheetScreen() {
  const c = D5.club;
  return /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: T5.white
    }
  }, /*#__PURE__*/React.createElement(StatusBar, {
    dark: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `4px ${G5}px`
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow_back",
    size: 24,
    color: T5.primary
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: `12px ${G5}px 0`
    }
  }, /*#__PURE__*/React.createElement(Initial, {
    name: c.name,
    size: 60,
    variant: "solid"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T5.serif,
      fontWeight: 700,
      fontSize: 24,
      color: T5.primary
    }
  }, c.name), /*#__PURE__*/React.createElement(Sk, {
    w: 140,
    h: 11,
    mt: 8
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: `22px ${G5}px 0`,
      height: 150,
      borderRadius: 20,
      background: T5.primary,
      opacity: 0.92
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(10,10,10,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      background: T5.white,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      padding: `12px ${G5}px 30px`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 4,
      borderRadius: 2,
      background: T5.tertiary,
      margin: '0 auto 22px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 28,
      border: `1.5px solid ${T5.primary}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "priority_high",
    size: 28,
    color: T5.primary,
    weight: 500
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T5.serif,
      fontWeight: 700,
      fontSize: 20,
      color: T5.primary
    }
  }, "Leave ", c.name, "?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T5.sans,
      fontSize: 14,
      color: T5.secondary,
      lineHeight: 1.5,
      marginTop: 10
    }
  }, "You'll lose your tier progress and rewards at this merchant. Your payment link will also be removed."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T5.sans,
      fontSize: 13,
      fontStyle: 'italic',
      color: T5.secondary,
      marginTop: 12
    }
  }, "You can rejoin anytime, but your progress will start over."), /*#__PURE__*/React.createElement("button", {
    style: {
      width: '100%',
      minHeight: 54,
      marginTop: 22,
      borderRadius: 999,
      border: 'none',
      cursor: 'pointer',
      background: T5.error,
      color: '#fff',
      fontFamily: T5.sans,
      fontWeight: 500,
      fontSize: 16
    }
  }, "Leave club"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontFamily: T5.sans,
      fontWeight: 500,
      fontSize: 15,
      color: T5.secondary,
      padding: '16px 0 2px'
    }
  }, "Cancel")));
}

// ---------- SCREEN 11 — Tour banners ----------
function TabBackdrop({
  tab
}) {
  const heads = {
    home: 'Good morning, Felix',
    activity: 'Activity',
    loyalty: 'Loyalty',
    admin: 'Account'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `8px ${G5}px 0`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T5.serif,
      fontWeight: 700,
      fontSize: 26,
      color: T5.primary
    }
  }, heads[tab]), tab === 'home' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 120,
      borderRadius: 20,
      background: T5.neutral,
      marginTop: 20
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 54,
      borderRadius: 999,
      background: T5.primary,
      marginTop: 16
    }
  }), /*#__PURE__*/React.createElement(Sk, {
    w: 120,
    h: 16,
    mt: 28,
    c: T5.tertiary
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 120,
      borderRadius: 16,
      background: T5.neutral
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 120,
      borderRadius: 16,
      background: T5.neutral
    }
  }))), tab === 'activity' && /*#__PURE__*/React.createElement(React.Fragment, null, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '16px 0',
      borderBottom: `1px solid ${T5.hairline}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 22,
      background: T5.neutral
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Sk, {
    w: 150,
    h: 13
  }), /*#__PURE__*/React.createElement(Sk, {
    w: 90,
    h: 10,
    mt: 8
  })), /*#__PURE__*/React.createElement(Sk, {
    w: 44,
    h: 14,
    c: T5.tertiary
  })))), tab === 'loyalty' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 50,
      borderRadius: 999,
      background: T5.neutral,
      marginTop: 18
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 16
    }
  }, [60, 70, 60].map((w, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: w,
      height: 36,
      borderRadius: 999,
      background: i === 0 ? T5.primary : T5.neutral
    }
  }))), /*#__PURE__*/React.createElement(Sk, {
    w: 110,
    h: 16,
    mt: 26,
    c: T5.tertiary
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 150,
      borderRadius: 16,
      background: T5.neutral
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 150,
      borderRadius: 16,
      background: T5.neutral
    }
  }))), tab === 'admin' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Sk, {
    w: 210,
    h: 12,
    mt: 10
  }), [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '18px 0',
      borderBottom: `1px solid ${T5.hairline}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 24,
      height: 24,
      borderRadius: 6,
      background: T5.neutral
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Sk, {
    w: 140,
    h: 13
  }), /*#__PURE__*/React.createElement(Sk, {
    w: 180,
    h: 10,
    mt: 8
  }))))));
}
function TourBannerScreen({
  tab,
  step
}) {
  const steps = {
    home: {
      title: 'This is your home',
      body: 'See your clubs, savings, and check in to pay at any merchant you’ve joined.'
    },
    activity: {
      title: 'Your activity',
      body: 'View your payment history and order status across all your clubs.'
    },
    loyalty: {
      title: 'Discover & join clubs',
      body: 'Search for local merchants, explore their rewards, and join their loyalty clubs to start earning.'
    },
    admin: {
      title: 'Your settings',
      body: 'Manage your bank account, payment methods, and personal details.'
    }
  };
  const s = steps[tab];
  return /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement(StatusBar, {
    dark: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(TabBackdrop, {
    tab: tab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(10,10,10,0.45)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      background: '#141414',
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      padding: `22px ${G5}px 22px`
    }
  }, /*#__PURE__*/React.createElement(Overline, {
    color: "rgba(255,255,255,0.5)",
    style: {
      fontSize: 10.5
    }
  }, "Step ", step, " of 4"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T5.sans,
      fontWeight: 600,
      fontSize: 17,
      color: '#fff',
      marginTop: 10
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T5.sans,
      fontSize: 14,
      color: 'rgba(255,255,255,0.7)',
      lineHeight: 1.5,
      marginTop: 8
    }
  }, s.body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T5.sans,
      fontWeight: 500,
      fontSize: 14,
      color: 'rgba(255,255,255,0.55)'
    }
  }, "Skip"), /*#__PURE__*/React.createElement("span", {
    style: {
      background: '#fff',
      color: T5.primary,
      borderRadius: 999,
      padding: '11px 26px',
      fontFamily: T5.sans,
      fontWeight: 500,
      fontSize: 14
    }
  }, step === 4 ? 'Done' : 'Next')))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(TabBar, {
    active: tab
  })));
}
window.SCREENS = Object.assign(window.SCREENS || {}, {
  LeaveSheetScreen,
  TourBannerScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "loyalty_redesign/screens5.jsx", error: String((e && e.message) || e) }); }

// loyalty_redesign/screens6.jsx
try { (() => {
// Tapara loyalty redesign — v1.1 screens
// Payment request, NFC non-member, admin/settings, home empty, fast-payments prompts
const T6 = window.T;
const G6 = 28;
const {
  Screen,
  StatusBar,
  TabBar,
  Icon,
  Initial,
  Pill,
  Overline,
  SectionHead,
  PrimaryButton,
  TextLink,
  ProgressBar
} = window.UI;
const D6 = window.DATA;
const BANK = 'BNZ';

// Bare shell for overlay screens
function Shell6({
  children,
  bg = T6.white
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 844,
      background: bg,
      fontFamily: T6.sans,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, children);
}

// ---------- SCREEN — Payment request (one-off) ----------
function PaymentRequestScreen() {
  const items = [{
    name: 'Flat white',
    qty: 1,
    price: 5.50
  }, {
    name: 'Almond croissant',
    qty: 1,
    price: 6.50
  }];
  return /*#__PURE__*/React.createElement(Screen, {
    height: 844
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: `4px ${G6}px 0`,
      height: 40
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 24,
    color: T6.primary
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T6.sans,
      fontWeight: 500,
      fontSize: 15,
      color: T6.primary
    }
  }, "Customs Coffee"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontFamily: T6.sans,
      fontWeight: 500,
      fontSize: 14,
      color: T6.secondary
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "schedule",
    size: 16,
    color: T6.secondary
  }), "1:47")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      padding: `0 ${G6}px`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '20px 0 4px'
    }
  }, /*#__PURE__*/React.createElement(Initial, {
    name: "Customs Coffee",
    size: 48,
    variant: "solid"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T6.serif,
      fontWeight: 700,
      fontSize: 20,
      color: T6.primary
    }
  }, "Customs Coffee"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T6.sans,
      fontSize: 13,
      color: T6.secondary,
      marginTop: 2
    }
  }, "Ponsonby, Auckland"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: T6.neutral,
      borderRadius: 20,
      padding: 22,
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Overline, {
    style: {
      fontSize: 10,
      marginBottom: 16
    }
  }, "Your order"), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T6.sans,
      fontSize: 15,
      color: T6.primary
    }
  }, it.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T6.sans,
      fontSize: 15,
      color: T6.secondary
    }
  }, it.qty, " \xD7 $", it.price.toFixed(2)))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: T6.hairline,
      margin: '6px 0 14px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: T6.sans,
      fontSize: 14,
      color: T6.success
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "local_cafe",
    size: 16,
    color: T6.success
  }), "Coffee Lover \u2014 10% off"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T6.sans,
      fontWeight: 500,
      fontSize: 15,
      color: T6.success
    }
  }, "\u2212$1.20")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T6.sans,
      fontWeight: 500,
      fontSize: 16,
      color: T6.primary
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T6.serif,
      fontWeight: 700,
      fontSize: 28,
      color: T6.primary
    }
  }, "$10.80"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 26
    }
  }, /*#__PURE__*/React.createElement(PrimaryButton, {
    title: "Pay $10.80",
    icon: "open_in_new"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T6.sans,
      fontSize: 12,
      color: T6.secondary,
      textAlign: 'center',
      marginTop: 12
    }
  }, "You'll be redirected to ", BANK, " to approve this payment"), /*#__PURE__*/React.createElement(TextLink, {
    title: "Decline"
  }))));
}

// ---------- SCREEN — NFC non-member ----------
function NFCNonMemberScreen() {
  return /*#__PURE__*/React.createElement(Screen, {
    height: 844
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: `4px ${G6}px 0`,
      height: 40
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 24,
    color: T6.primary
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: `0 ${G6}px`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      width: 104,
      height: 104,
      borderRadius: 52,
      border: `1px solid ${T6.tertiary}`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      width: 132,
      height: 132,
      borderRadius: 66,
      border: `1px solid ${T6.hairline}`
    }
  }), /*#__PURE__*/React.createElement(Initial, {
    name: "Customs Coffee",
    size: 64,
    variant: "solid"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T6.serif,
      fontWeight: 700,
      fontSize: 24,
      color: T6.primary
    }
  }, "Customs Coffee"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T6.sans,
      fontSize: 14,
      color: T6.secondary,
      marginTop: 6
    }
  }, "Cafe \xB7 Ponsonby, Auckland"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T6.sans,
      fontSize: 16,
      color: T6.primary,
      lineHeight: 1.5,
      marginTop: 18,
      maxWidth: 280
    }
  }, "Join Customs Coffee to pay with tapara"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      marginTop: 24,
      background: T6.neutral,
      borderRadius: 16,
      padding: 18,
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "star",
    size: 20,
    color: T6.primary
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T6.sans,
      fontWeight: 500,
      fontSize: 14.5,
      color: T6.primary
    }
  }, "Earn rewards on every visit")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: T6.hairline,
      margin: '14px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T6.sans,
      fontSize: 14,
      color: T6.secondary
    }
  }, "Starting tier"), /*#__PURE__*/React.createElement(Pill, {
    label: "Coffee Newcomer"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      paddingBottom: 28
    }
  }, /*#__PURE__*/React.createElement(PrimaryButton, {
    title: "Join Customs Coffee"
  }), /*#__PURE__*/React.createElement(TextLink, {
    title: "Not now"
  }))));
}

// ---------- Settings building blocks ----------
function SettingsGroup({
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(Overline, {
    style: {
      fontSize: 10.5,
      marginLeft: 4,
      marginBottom: 10
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      background: T6.neutral,
      borderRadius: 16,
      overflow: 'hidden'
    }
  }, children));
}
function SettingsRow({
  icon,
  label,
  sub,
  value,
  accessory = 'chevron',
  danger = false,
  last = false
}) {
  const labelColor = danger ? T6.error : T6.primary;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '15px 16px',
      borderBottom: last ? 'none' : `1px solid ${T6.hairline}`
    }
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 21,
    color: danger ? T6.error : T6.primary
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T6.sans,
      fontWeight: 500,
      fontSize: 15,
      color: labelColor
    }
  }, label), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T6.sans,
      fontSize: 12.5,
      color: T6.secondary,
      marginTop: 2
    }
  }, sub)), value && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T6.sans,
      fontSize: 14,
      color: T6.secondary
    }
  }, value), accessory === 'chevron' && /*#__PURE__*/React.createElement(Icon, {
    name: "chevron_right",
    size: 20,
    color: T6.tertiary
  }));
}

// ---------- SCREEN — Admin / Settings (Your Bank) ----------
function AdminSettingsScreen() {
  return /*#__PURE__*/React.createElement(Screen, {
    height: 1100
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      padding: `8px ${G6}px 0`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T6.serif,
      fontWeight: 700,
      fontSize: 28,
      color: T6.primary
    }
  }, "Account"), /*#__PURE__*/React.createElement(SettingsGroup, {
    title: "Profile"
  }, /*#__PURE__*/React.createElement(SettingsRow, {
    label: "Felix Carr",
    sub: "felix.carr@gmail.com"
  }), /*#__PURE__*/React.createElement(SettingsRow, {
    icon: "notifications",
    label: "Notifications",
    last: true
  })), /*#__PURE__*/React.createElement(SettingsGroup, {
    title: "Your Bank"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '15px 16px',
      borderBottom: `1px solid ${T6.hairline}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 8,
      background: T6.primary,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: T6.serif,
      fontWeight: 700,
      fontSize: 12,
      color: '#fff'
    }
  }, "BNZ"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T6.sans,
      fontWeight: 500,
      fontSize: 15,
      color: T6.primary
    }
  }, "BNZ")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T6.sans,
      fontSize: 14,
      color: T6.secondary,
      letterSpacing: 0.5
    }
  }, "\u2022\u2022\u2022\u2022\u2022\u20227496-00")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '13px 16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T6.sans,
      fontWeight: 500,
      fontSize: 14,
      color: T6.secondary
    }
  }, "Change bank"))), /*#__PURE__*/React.createElement(SettingsGroup, {
    title: "Card"
  }, /*#__PURE__*/React.createElement(SettingsRow, {
    icon: "credit_card",
    label: "Add international card",
    sub: "Used where bank pay isn't available",
    last: true
  })), /*#__PURE__*/React.createElement(SettingsGroup, {
    title: "My Businesses"
  }, /*#__PURE__*/React.createElement(SettingsRow, {
    icon: "storefront",
    label: "Prefab Eatery",
    sub: "Owner",
    last: true
  })), /*#__PURE__*/React.createElement(SettingsGroup, {
    title: "Account"
  }, /*#__PURE__*/React.createElement(SettingsRow, {
    icon: "description",
    label: "Terms of Service"
  }), /*#__PURE__*/React.createElement(SettingsRow, {
    icon: "logout",
    label: "Sign out",
    accessory: "none",
    danger: true,
    last: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 28
    }
  })), /*#__PURE__*/React.createElement(TabBar, {
    active: "admin"
  }));
}

// ---------- SCREEN — Home empty (no clubs) ----------
function HomeEmptyScreen() {
  return /*#__PURE__*/React.createElement(Screen, {
    height: 844
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `8px ${G6}px 0`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T6.serif,
      fontWeight: 700,
      fontSize: 26,
      color: T6.primary
    }
  }, "Good morning, Felix"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T6.sans,
      fontSize: 14,
      color: T6.secondary,
      marginTop: 4
    }
  }, "Sunday, 1 June")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: `22px ${G6}px 0`,
      background: T6.neutral,
      borderRadius: 20,
      padding: 24,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Overline, null, "Total saved"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T6.serif,
      fontWeight: 700,
      fontSize: 44,
      color: T6.tertiary,
      marginTop: 6
    }
  }, "$0.00"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T6.sans,
      fontSize: 13,
      color: T6.secondary,
      marginTop: 4
    }
  }, "Join a club to start saving")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `16px ${G6}px 0`
    }
  }, /*#__PURE__*/React.createElement(PrimaryButton, {
    title: "Check in",
    icon: "contactless"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `30px ${G6}px 0`
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Your Clubs"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '24px 8px',
      background: T6.neutral,
      borderRadius: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      borderRadius: 36,
      background: T6.white,
      border: `1px dashed ${T6.tertiary}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "storefront",
    size: 30,
    color: T6.secondary
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T6.serif,
      fontWeight: 700,
      fontSize: 18,
      color: T6.primary
    }
  }, "Join your first club"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T6.sans,
      fontSize: 14,
      color: T6.secondary,
      lineHeight: 1.5,
      marginTop: 8,
      maxWidth: 250
    }
  }, "Discover local merchants in the Loyalty tab."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      borderRadius: 999,
      border: `1px solid ${T6.primary}`,
      padding: '11px 22px',
      fontFamily: T6.sans,
      fontWeight: 500,
      fontSize: 14,
      color: T6.primary
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "explore",
    size: 18,
    color: T6.primary
  }), "Explore clubs")))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  })), /*#__PURE__*/React.createElement(TabBar, {
    active: "home"
  }));
}

// ---------- SCREEN — Fast payments, Variant A (dashboard banner) ----------
function FastPaymentsBannerScreen() {
  const c = D6.club;
  return /*#__PURE__*/React.createElement(Screen, {
    height: 844
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: `4px ${G6}px 0`,
      height: 40
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow_back",
    size: 24,
    color: T6.primary
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T6.sans,
      fontWeight: 500,
      fontSize: 14,
      color: T6.secondary
    }
  }, "Leave")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      padding: `0 ${G6}px`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '12px 0 0'
    }
  }, /*#__PURE__*/React.createElement(Initial, {
    name: c.name,
    size: 60,
    variant: "solid"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T6.serif,
      fontWeight: 700,
      fontSize: 24,
      color: T6.primary
    }
  }, c.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T6.sans,
      fontSize: 13,
      color: T6.secondary,
      marginTop: 3
    }
  }, "Member since ", c.memberSince))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginTop: 22,
      borderRadius: 18,
      padding: 18,
      background: T6.white,
      border: `1px solid ${T6.primary}`,
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 20,
      background: T6.primary,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bolt",
    size: 22,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      paddingRight: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T6.sans,
      fontWeight: 600,
      fontSize: 15,
      color: T6.primary
    }
  }, "Fast payments available"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T6.sans,
      fontSize: 13,
      color: T6.secondary,
      lineHeight: 1.4,
      marginTop: 3
    }
  }, "Skip bank approval every time you pay at ", c.name)), /*#__PURE__*/React.createElement("span", {
    style: {
      background: T6.primary,
      color: '#fff',
      borderRadius: 999,
      padding: '9px 18px',
      fontFamily: T6.sans,
      fontWeight: 500,
      fontSize: 13,
      flex: '0 0 auto'
    }
  }, "Enable"), /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 17,
    color: T6.tertiary,
    style: {
      position: 'absolute',
      top: 10,
      right: 10
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      background: T6.primary,
      borderRadius: 20,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement(Overline, {
    color: "rgba(255,255,255,0.6)",
    style: {
      fontSize: 10
    }
  }, "Your tier"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T6.serif,
      fontWeight: 700,
      fontSize: 30,
      color: '#fff',
      marginTop: 6
    }
  }, "Coffee Lover"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    pct: 62,
    track: "rgba(255,255,255,0.18)",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T6.sans,
      fontSize: 13,
      color: 'rgba(255,255,255,0.75)',
      marginTop: 9
    }
  }, "3 more visits to Coffee Maniac"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  })));
}

// ---------- SCREEN — Fast payments, Variant B (payment modal) ----------
function FastPaymentsModalScreen() {
  const items = [{
    name: 'Flat white',
    qty: 1,
    price: 5.50
  }, {
    name: 'Almond croissant',
    qty: 1,
    price: 6.50
  }];
  return /*#__PURE__*/React.createElement(Shell6, null, /*#__PURE__*/React.createElement(StatusBar, {
    dark: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: `4px ${G6}px 0`,
      height: 40
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 24,
    color: T6.primary
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T6.sans,
      fontWeight: 500,
      fontSize: 15,
      color: T6.primary
    }
  }, "Customs Coffee"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontFamily: T6.sans,
      fontWeight: 500,
      fontSize: 14,
      color: T6.secondary
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "schedule",
    size: 16,
    color: T6.secondary
  }), "1:47")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `0 ${G6}px`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '20px 0 4px'
    }
  }, /*#__PURE__*/React.createElement(Initial, {
    name: "Customs Coffee",
    size: 48,
    variant: "solid"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T6.serif,
      fontWeight: 700,
      fontSize: 20,
      color: T6.primary
    }
  }, "Customs Coffee"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T6.sans,
      fontSize: 13,
      color: T6.secondary,
      marginTop: 2
    }
  }, "Ponsonby, Auckland"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: T6.neutral,
      borderRadius: 20,
      padding: 22,
      marginTop: 22
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T6.sans,
      fontSize: 15,
      color: T6.primary
    }
  }, it.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T6.sans,
      fontSize: 15,
      color: T6.secondary
    }
  }, it.qty, " \xD7 $", it.price.toFixed(2)))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: T6.hairline,
      margin: '6px 0 14px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T6.sans,
      fontWeight: 500,
      fontSize: 16,
      color: T6.primary
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T6.serif,
      fontWeight: 700,
      fontSize: 28,
      color: T6.primary
    }
  }, "$10.80")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(10,10,10,0.45)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      background: T6.white,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      padding: `12px ${G6}px 28px`,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 4,
      borderRadius: 2,
      background: T6.tertiary,
      margin: '0 auto 22px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 58,
      height: 58,
      borderRadius: 29,
      background: T6.primary,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 18px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bolt",
    size: 28,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T6.serif,
      fontWeight: 700,
      fontSize: 21,
      color: T6.primary
    }
  }, "Pay faster next time"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T6.sans,
      fontSize: 14,
      color: T6.secondary,
      lineHeight: 1.5,
      marginTop: 10,
      maxWidth: 300,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }, "Enable fast payments to skip the bank redirect. One-time setup."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(PrimaryButton, {
    title: "Enable now"
  })), /*#__PURE__*/React.createElement(TextLink, {
    title: "Not now"
  }))));
}
window.SCREENS = Object.assign(window.SCREENS || {}, {
  PaymentRequestScreen,
  NFCNonMemberScreen,
  AdminSettingsScreen,
  HomeEmptyScreen,
  FastPaymentsBannerScreen,
  FastPaymentsModalScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "loyalty_redesign/screens6.jsx", error: String((e && e.message) || e) }); }

// loyalty_redesign/tokens.js
try { (() => {
/* Tapara loyalty redesign — shared design tokens (mirror of colors_and_type.css) */
window.T = {
  primary: '#0A0A0A',
  secondary: '#888888',
  tertiary: '#E0E0DC',
  neutral: '#F5F5F3',
  white: '#FFFFFF',
  success: '#1D9E75',
  error: '#E24B4A',
  warning: '#C8862B',
  tagPad: '#EEEEEC',
  hairline: 'rgba(10,10,10,0.08)',
  serif: "'Noto Serif', Georgia, serif",
  sans: "'Manrope', -apple-system, system-ui, sans-serif",
  shadowEditorial: '0 12px 40px rgba(10,10,10,0.04)',
  shadowReceipt: '0 2px 12px rgba(10,10,10,0.08)'
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "loyalty_redesign/tokens.js", error: String((e && e.message) || e) }); }

// loyalty_redesign/ui.jsx
try { (() => {
// Tapara loyalty redesign — shared UI primitives
// Pure-monochrome, editorial. Reuses the consumer_app kit's component vocabulary.
const {
  useState
} = React;
const T = window.T;

// ---- Icon (Material Symbols Outlined) ----
function Icon({
  name,
  size = 24,
  color = T.primary,
  weight,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: size,
      color,
      lineHeight: 1,
      fontVariationSettings: weight ? `'wght' ${weight}` : undefined,
      ...style
    }
  }, name);
}

// ---- Phone screen frame (390 wide; grows to content height) ----
// Renders an iOS-ish status bar, a content body, and an optional bottom region.
function Screen({
  children,
  statusDark = true,
  bg = T.white,
  height
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: height || 'auto',
      minHeight: height || 0,
      background: bg,
      fontFamily: T.sans,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, {
    dark: statusDark,
    bg: bg
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, children));
}
function StatusBar({
  dark = true,
  bg = T.white
}) {
  const c = dark ? T.primary : '#fff';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 50,
      flex: '0 0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 28px',
      position: 'relative',
      zIndex: 5,
      background: bg
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontWeight: 600,
      fontSize: 15,
      letterSpacing: .3,
      color: c
    }
  }, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "signal_cellular_alt",
    size: 16,
    color: c
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "wifi",
    size: 16,
    color: c
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "battery_full",
    size: 16,
    color: c
  })));
}

// ---- Bottom tab bar (Home · Activity · Loyalty · Admin) ----
function TabBar({
  active = 'loyalty',
  dim = false
}) {
  const tabs = [{
    key: 'home',
    label: 'Home',
    icon: 'home'
  }, {
    key: 'activity',
    label: 'Activity',
    icon: 'receipt_long'
  }, {
    key: 'loyalty',
    label: 'Loyalty',
    icon: 'loyalty'
  }, {
    key: 'admin',
    label: 'Admin',
    icon: 'workspaces'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto',
      display: 'flex',
      justifyContent: 'space-around',
      borderTop: `1px solid ${T.tertiary}`,
      padding: '10px 0 22px',
      background: T.white,
      opacity: dim ? 0.4 : 1
    }
  }, tabs.map(t => {
    const on = active === t.key;
    const col = on ? T.primary : 'rgba(136,136,136,0.5)';
    return /*#__PURE__*/React.createElement("div", {
      key: t.key,
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: t.icon,
      size: 24,
      color: col
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: T.sans,
        fontWeight: 500,
        fontSize: 9,
        letterSpacing: 1,
        textTransform: 'uppercase',
        color: col
      }
    }, t.label));
  }));
}

// ---- Primary button (solid black pill) ----
function PrimaryButton({
  title,
  icon,
  light = false,
  style = {},
  subLabel
}) {
  return /*#__PURE__*/React.createElement("button", {
    style: {
      background: light ? T.white : T.primary,
      color: light ? T.primary : '#fff',
      border: light ? `1px solid ${T.tertiary}` : 'none',
      borderRadius: 999,
      minHeight: 54,
      padding: '0 24px',
      width: '100%',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 9,
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 16,
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20,
    color: light ? T.primary : '#fff'
  }), title);
}

// ---- Text link / secondary action ----
function TextLink({
  title,
  color = T.secondary,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 15,
      color,
      padding: '12px 0',
      width: '100%',
      ...style
    }
  }, title);
}

// ---- Merchant initial circle (monochrome: solid black, white serif letter) ----
function Initial({
  name,
  size = 40,
  variant = 'solid',
  check = false
}) {
  const fontSize = Math.round(size * 0.42);
  const base = {
    width: size,
    height: size,
    borderRadius: size / 2,
    flex: '0 0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  };
  const style = variant === 'outline' ? {
    ...base,
    background: T.neutral,
    border: `1px solid ${T.tertiary}`
  } : {
    ...base,
    background: T.primary
  };
  const letterColor = variant === 'outline' ? T.primary : '#fff';
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize,
      color: letterColor
    }
  }, name[0]), check && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: -2,
      bottom: -2,
      width: size * 0.42,
      height: size * 0.42,
      borderRadius: '50%',
      background: T.success,
      border: '2px solid #fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: size * 0.24,
    color: "#fff",
    weight: 600
  })));
}

// ---- Pills ----
function Pill({
  label,
  filled = false,
  tone = 'default',
  style = {}
}) {
  // tone: default | success | warning
  const tones = {
    default: {
      fg: T.secondary,
      bd: T.tertiary,
      bgFill: T.primary,
      fgFill: '#fff'
    },
    success: {
      fg: T.success,
      bd: 'rgba(29,158,117,0.4)',
      bgFill: T.success,
      fgFill: '#fff'
    },
    warning: {
      fg: T.warning,
      bd: 'rgba(200,134,43,0.4)',
      bgFill: T.warning,
      fgFill: '#fff'
    }
  };
  const t = tones[tone] || tones.default;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: 999,
      padding: '4px 11px',
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 10.5,
      letterSpacing: 1.2,
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      background: filled ? t.bgFill : 'transparent',
      color: filled ? t.fgFill : t.fg,
      border: filled ? 'none' : `1px solid ${t.bd}`,
      ...style
    }
  }, label);
}

// ---- Progress bar ----
function ProgressBar({
  pct,
  height = 5,
  track = T.tertiary,
  fill = T.primary,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      background: track,
      borderRadius: height / 2,
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      width: `${pct}%`,
      background: fill,
      borderRadius: height / 2
    }
  }));
}

// ---- Overline label (ALL CAPS tracked) ----
function Overline({
  children,
  color = T.secondary,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: 1.8,
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, children);
}

// ---- Section heading (sans medium) with optional trailing element ----
function SectionHead({
  title,
  trailing,
  sub,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 16,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 17,
      color: T.primary,
      letterSpacing: -0.1
    }
  }, title), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 13,
      color: T.secondary,
      marginTop: 3
    }
  }, sub)), trailing);
}

// ---- Search bar ----
function SearchBar({
  placeholder = 'Search cafes, restaurants…'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: T.neutral,
      borderRadius: 999,
      padding: '14px 18px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 20,
    color: T.secondary
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontSize: 15,
      color: T.secondary
    }
  }, placeholder));
}

// ---- Filter pills row (horizontally scrollable) ----
function FilterPills({
  items,
  active = 0
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      overflowX: 'hidden'
    }
  }, items.map((it, i) => {
    const on = i === active;
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        flex: '0 0 auto',
        borderRadius: 999,
        padding: '9px 18px',
        fontFamily: T.sans,
        fontWeight: 500,
        fontSize: 13.5,
        whiteSpace: 'nowrap',
        background: on ? T.primary : 'transparent',
        color: on ? '#fff' : T.secondary,
        border: on ? 'none' : `1px solid ${T.tertiary}`
      }
    }, it);
  }));
}

// ---- Chevron ----
function Chevron({
  color = T.tertiary,
  size = 22
}) {
  return /*#__PURE__*/React.createElement(Icon, {
    name: "chevron_right",
    size: size,
    color: color
  });
}
window.UI = {
  Icon,
  Screen,
  StatusBar,
  TabBar,
  PrimaryButton,
  TextLink,
  Initial,
  Pill,
  ProgressBar,
  Overline,
  SectionHead,
  SearchBar,
  FilterPills,
  Chevron
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "loyalty_redesign/ui.jsx", error: String((e && e.message) || e) }); }

// ui_kits/consumer_app/app.jsx
try { (() => {
// Tapara consumer app — interactive controller
const {
  useState,
  useEffect,
  useRef
} = React;
const T = window.T;
const {
  PhoneFrame,
  TabBar
} = window;
const {
  ConsumerHome,
  CheckIn,
  PaymentRequest,
  FaceIdOverlay,
  PaymentSuccess
} = window.ConsumerScreens;
const {
  ConsumerLoyalty,
  ConsumerActivity
} = window.ConsumerScreens2;
const {
  Icon,
  Scroll
} = window;
const BILL = {
  business: 'Customs Coffee',
  items: [{
    name: 'Flat white',
    qty: 2,
    price: 5.5
  }, {
    name: 'Almond croissant',
    qty: 1,
    price: 6.5
  }],
  subtotal: '17.50',
  discount: {
    label: '10% off pastries',
    amount: '0.65'
  },
  total: '16.85'
};
function App() {
  const [tab, setTab] = useState('home');
  const [modal, setModal] = useState(null); // null | 'checkin' | 'payment' | 'success'
  const [checkPhase, setCheckPhase] = useState('scanning');
  const [faceId, setFaceId] = useState(false);
  const [timer, setTimer] = useState('1:58');
  const [loyaltyFilter, setLoyaltyFilter] = useState('all');
  const [saved, setSaved] = useState('248.50');
  const [activeOrder, setActiveOrder] = useState(null);
  const [memberships, setMemberships] = useState([{
    business: 'Customs Coffee',
    tier: 'Coffee Lover',
    next: 'Coffee Maniac',
    pct: 62,
    progress: '5 / 8 visits',
    unlock: '10% off pastries, priority ordering'
  }, {
    business: 'Pixel Arcade',
    tier: 'Top Gamer',
    next: null,
    progress: '',
    unlock: ''
  }, {
    business: 'Unity Books',
    tier: 'Bookworm',
    next: 'Bibliophile',
    pct: 40,
    progress: '2 / 5 purchases',
    unlock: 'Monthly newsletter, early previews'
  }]);
  const [tx, setTx] = useState([{
    business: 'Customs Coffee',
    date: 'Today · 8:24am',
    amount: '5.50',
    saved: '0.55'
  }, {
    business: 'Unity Books',
    date: 'Yesterday',
    amount: '38.00',
    saved: null
  }, {
    business: 'Prefab Eatery',
    date: '21 May',
    amount: '24.00',
    saved: '2.40'
  }, {
    business: 'Pixel Arcade',
    date: '18 May',
    amount: '12.00',
    saved: null
  }]);
  const rewards = [{
    business: 'Customs Coffee',
    punch: {
      filled: 6,
      total: 10,
      item: 'flat white'
    },
    coupon: {
      value: '10%',
      item: 'Pastries'
    }
  }, {
    business: 'Unity Books',
    coupon: {
      value: '$5',
      item: 'Every order'
    }
  }];

  // Check-in scanning → confirmed → payment request
  function startCheckIn() {
    setCheckPhase('scanning');
    setModal('checkin');
    setTimeout(() => setCheckPhase('confirmed'), 2000);
    setTimeout(() => {
      setModal('payment');
    }, 4200);
  }

  // Countdown on payment request
  useEffect(() => {
    if (modal !== 'payment') return;
    let s = 118;
    const id = setInterval(() => {
      s -= 1;
      if (s < 0) {
        clearInterval(id);
        return;
      }
      setTimer(`${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`);
    }, 1000);
    return () => clearInterval(id);
  }, [modal]);
  function approve() {
    setFaceId(true);
    setTimeout(() => {
      setFaceId(false);
      setModal('success');
      setActiveOrder({
        business: BILL.business
      });
      setSaved('249.15');
      setMemberships(ms => ms.map(m => m.business === 'Customs Coffee' ? {
        ...m,
        pct: 75,
        progress: '6 / 8 visits'
      } : m));
      setTx(t => [{
        business: BILL.business,
        date: 'Just now',
        amount: BILL.total,
        saved: BILL.discount.amount
      }, ...t]);
    }, 1300);
  }
  function finishSuccess() {
    setModal(null);
    setTab('home');
  }

  // ----- render -----
  let content,
    statusDark = true,
    showTabs = true;
  if (modal === 'checkin') {
    showTabs = false;
    content = /*#__PURE__*/React.createElement(CheckIn, {
      phase: checkPhase,
      business: {
        name: BILL.business,
        address: '142 Hardy St, Nelson'
      },
      onCancel: () => setModal(null)
    });
  } else if (modal === 'payment') {
    showTabs = false;
    statusDark = false;
    content = /*#__PURE__*/React.createElement(PaymentRequest, {
      business: BILL.business,
      items: BILL.items,
      subtotal: BILL.subtotal,
      discount: BILL.discount,
      total: BILL.total,
      timer: timer,
      loading: faceId,
      onApprove: approve,
      onDecline: () => setModal(null)
    });
  } else if (modal === 'success') {
    showTabs = false;
    content = /*#__PURE__*/React.createElement(PaymentSuccess, {
      amount: BILL.total,
      business: BILL.business,
      onDone: finishSuccess
    });
  } else if (tab === 'home') content = /*#__PURE__*/React.createElement(ConsumerHome, {
    user: "James Mitchell",
    saved: saved,
    memberships: memberships,
    activeOrder: activeOrder,
    onCheckIn: startCheckIn,
    onOpenOrder: () => {}
  });else if (tab === 'activity') content = /*#__PURE__*/React.createElement(ConsumerActivity, {
    tx: tx
  });else if (tab === 'loyalty') content = /*#__PURE__*/React.createElement(ConsumerLoyalty, {
    memberships: memberships,
    rewards: rewards,
    filter: loyaltyFilter,
    setFilter: setLoyaltyFilter
  });else if (tab === 'admin') content = /*#__PURE__*/React.createElement(AdminPlaceholder, null);
  return /*#__PURE__*/React.createElement(PhoneFrame, {
    statusDark: statusDark
  }, content, faceId && /*#__PURE__*/React.createElement(FaceIdOverlay, null), showTabs && /*#__PURE__*/React.createElement(TabBar, {
    active: tab,
    onChange: setTab
  }));
}
function AdminPlaceholder() {
  const rows = [{
    icon: 'account_balance',
    label: 'Linked bank account',
    sub: 'ASB ···· 4021 · 0% fee rail'
  }, {
    icon: 'credit_card',
    label: 'Card fallback',
    sub: 'Apple Pay · used if no bank linked'
  }, {
    icon: 'notifications',
    label: 'Notifications',
    sub: 'Payment requests, order updates'
  }, {
    icon: 'description',
    label: 'Terms & privacy',
    sub: 'FSP1012381 · FDRS member'
  }];
  return /*#__PURE__*/React.createElement(Scroll, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 32px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 28,
      color: T.primary
    }
  }, "Account"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 14,
      color: T.secondary,
      marginTop: 4
    }
  }, "James Mitchell \xB7 james@example.co.nz")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 32px'
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '18px 0',
      borderBottom: `1px solid ${T.hairline}`
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.icon,
    size: 22,
    color: T.secondary
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 15,
      color: T.primary
    }
  }, r.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 13,
      color: T.secondary,
      marginTop: 2
    }
  }, r.sub)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontSize: 22,
      color: T.tertiary
    }
  }, "\u203A")))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/consumer_app/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/consumer_app/frame.jsx
try { (() => {
// Tapara UI kit — phone frame + shared UI primitives
// Faithful monochrome recreation of the Tapara React Native app chrome.
const {
  useState,
  useEffect,
  useRef
} = React;
const T = window.T;

// ---- Icon (Material Symbols Outlined — matches @expo/vector-icons in app) ----
function Icon({
  name,
  size = 24,
  color = T.primary,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: size,
      color,
      lineHeight: 1,
      ...style
    }
  }, name);
}

// ---- Phone frame: 390x844 logical screen inside a black bezel ----
function PhoneFrame({
  children,
  statusDark = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: frameStyles.bezel
  }, /*#__PURE__*/React.createElement("div", {
    style: frameStyles.screen
  }, /*#__PURE__*/React.createElement("div", {
    style: frameStyles.statusbar
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...frameStyles.sbTime,
      color: statusDark ? T.primary : '#fff'
    }
  }, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: frameStyles.notch
  }), /*#__PURE__*/React.createElement("div", {
    style: frameStyles.sbIcons
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "signal_cellular_alt",
    size: 15,
    color: statusDark ? T.primary : '#fff'
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "wifi",
    size: 15,
    color: statusDark ? T.primary : '#fff'
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "battery_full",
    size: 15,
    color: statusDark ? T.primary : '#fff'
  }))), /*#__PURE__*/React.createElement("div", {
    style: frameStyles.body
  }, children)));
}
const frameStyles = {
  bezel: {
    width: 390,
    height: 844,
    background: '#0A0A0A',
    borderRadius: 54,
    padding: 11,
    boxShadow: '0 40px 90px rgba(10,10,10,0.32)',
    flex: '0 0 auto'
  },
  screen: {
    width: '100%',
    height: '100%',
    background: T.white,
    borderRadius: 44,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: T.sans
  },
  statusbar: {
    height: 50,
    flex: '0 0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 30px',
    position: 'relative',
    zIndex: 5
  },
  sbTime: {
    fontFamily: T.sans,
    fontWeight: 600,
    fontSize: 15,
    letterSpacing: .3
  },
  notch: {
    position: 'absolute',
    top: 8,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 120,
    height: 32,
    background: '#0A0A0A',
    borderRadius: 20
  },
  sbIcons: {
    display: 'flex',
    gap: 5,
    alignItems: 'center'
  },
  body: {
    flex: 1,
    minHeight: 0,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  }
};

// ---- Primary button (solid black pill, >=52px) ----
function PrimaryButton({
  title,
  onPress,
  disabled = false,
  style = {}
}) {
  const [press, setPress] = useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: disabled ? undefined : onPress,
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    onMouseLeave: () => setPress(false),
    style: {
      background: T.primary,
      color: '#fff',
      border: 'none',
      borderRadius: 999,
      minHeight: 52,
      padding: '0 24px',
      width: '100%',
      cursor: disabled ? 'default' : 'pointer',
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 16,
      opacity: disabled ? 0.4 : press ? 0.86 : 1,
      transition: 'opacity .12s',
      ...style
    }
  }, title);
}

// ---- Screen header (serif title + optional grey sub) ----
function Header({
  title,
  sub,
  brand
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 32px 16px'
    }
  }, brand && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 28,
      color: T.primary
    }
  }, "tapara"), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: brand ? 0 : 28,
      color: T.primary,
      height: brand ? 0 : 'auto'
    }
  }, !brand && title), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 14,
      color: T.secondary,
      marginTop: 4
    }
  }, sub));
}

// ---- Bottom tab bar (4-tab unified shell) ----
function TabBar({
  active,
  onChange
}) {
  const tabs = [{
    key: 'home',
    label: 'Home',
    icon: 'home'
  }, {
    key: 'activity',
    label: 'Activity',
    icon: 'receipt_long'
  }, {
    key: 'loyalty',
    label: 'Loyalty',
    icon: 'loyalty'
  }, {
    key: 'admin',
    label: 'Admin',
    icon: 'workspaces'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto',
      display: 'flex',
      justifyContent: 'space-around',
      borderTop: `1px solid ${T.tertiary}`,
      padding: '10px 0 22px',
      background: T.white
    }
  }, tabs.map(t => {
    const on = active === t.key;
    return /*#__PURE__*/React.createElement("button", {
      key: t.key,
      onClick: () => onChange(t.key),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        color: on ? T.primary : 'rgba(136,136,136,0.5)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: t.icon,
      size: 24,
      color: on ? T.primary : 'rgba(136,136,136,0.5)'
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: T.sans,
        fontWeight: 500,
        fontSize: 9,
        letterSpacing: 1,
        textTransform: 'uppercase'
      }
    }, t.label));
  }));
}

// ---- Scroll area helper ----
function Scroll({
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: 'auto',
      ...style
    }
  }, children);
}
Object.assign(window, {
  Icon,
  PhoneFrame,
  PrimaryButton,
  Header,
  TabBar,
  Scroll,
  frameStyles
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/consumer_app/frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/consumer_app/loyalty.jsx
try { (() => {
// Tapara consumer app — Loyalty & Activity screens
const T = window.T;
const {
  Icon,
  Scroll
} = window;

// ---------- LOYALTY ----------
function MerchantDivider({
  name
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 10,
      letterSpacing: 2,
      color: T.primary,
      textTransform: 'uppercase'
    }
  }, "Merchant: ", name), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: T.tertiary
    }
  }));
}
function RankCard({
  m
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.neutral,
      border: `1px solid ${T.tertiary}`,
      borderRadius: 16,
      padding: 24,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 20,
      color: T.primary
    }
  }, m.business), /*#__PURE__*/React.createElement(Icon, {
    name: "shield",
    size: 22,
    color: T.secondary
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 13,
      color: T.secondary,
      marginTop: 4
    }
  }, m.tier), m.next ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 13,
      color: T.primary
    }
  }, m.progress), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 13,
      color: T.primary
    }
  }, m.next, " Progress")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 5,
      background: T.tertiary,
      borderRadius: 3,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 5,
      width: `${m.pct}%`,
      background: T.primary,
      borderRadius: 3
    }
  })), m.unlock && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 12,
      fontStyle: 'italic',
      color: T.secondary,
      marginTop: 8
    }
  }, "Next tier unlocks: ", m.unlock)) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: T.sans,
      fontSize: 13,
      color: T.secondary
    }
  }, m.tier, /*#__PURE__*/React.createElement(Icon, {
    name: "check_circle",
    size: 14,
    color: T.primary
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      background: T.primary,
      color: '#fff',
      borderRadius: 999,
      padding: '5px 14px',
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 10,
      letterSpacing: 1.5,
      textTransform: 'uppercase'
    }
  }, "Max tier")));
}
function PunchCard({
  filled,
  total,
  item
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: `1px solid ${T.tertiary}`,
      borderRadius: 16,
      padding: 32,
      boxShadow: T.shadowEditorial
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 22,
      color: T.primary
    }
  }, "Free ", item), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 13,
      color: T.secondary,
      marginTop: 2
    }
  }, "Buy ", total, ", get 1 free")), /*#__PURE__*/React.createElement(Icon, {
    name: "local_cafe",
    size: 24,
    color: T.primary
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, Array.from({
    length: total
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: 42,
      height: 42,
      borderRadius: 21,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: i < filled ? T.primary : 'transparent',
      border: i < filled ? 'none' : `1px dashed ${T.tertiary}`
    }
  }, i < filled && /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    color: "#fff"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 10,
      letterSpacing: 2,
      color: T.secondary,
      marginTop: 24,
      textTransform: 'uppercase'
    }
  }, filled, " of ", total, " stamps earned"));
}
function Coupon({
  value,
  item
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      background: T.neutral,
      borderRadius: 16,
      overflow: 'hidden',
      border: `1px dashed ${T.tertiary}`,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 5,
      background: T.primary
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 32,
      color: T.primary,
      lineHeight: 1.05
    }
  }, value, /*#__PURE__*/React.createElement("br", null), "OFF"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 12,
      letterSpacing: 1.5,
      color: T.secondary,
      textTransform: 'uppercase'
    }
  }, item), /*#__PURE__*/React.createElement(Icon, {
    name: "confirmation_number",
    size: 28,
    color: T.tertiary
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 12,
      fontStyle: 'italic',
      color: T.secondary,
      marginTop: 8
    }
  }, "Applied automatically at checkout")));
}
function ConsumerLoyalty({
  memberships,
  rewards,
  filter,
  setFilter
}) {
  const filters = [{
    k: 'all',
    l: 'All'
  }, {
    k: 'punch',
    l: 'Punch Cards'
  }, {
    k: 'coupons',
    l: 'Coupons'
  }];
  return /*#__PURE__*/React.createElement(Scroll, {
    style: {
      paddingBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 32px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 28,
      color: T.primary
    }
  }, "Loyalty")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 32px',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 10,
      letterSpacing: 2,
      color: T.secondary,
      textTransform: 'uppercase',
      marginBottom: 4
    }
  }, "Your status"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 26,
      color: T.primary
    }
  }, "Rankings")), memberships.map((m, i) => /*#__PURE__*/React.createElement(RankCard, {
    key: i,
    m: m
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 10,
      letterSpacing: 2,
      color: T.secondary,
      textTransform: 'uppercase',
      marginBottom: 4
    }
  }, "Active rewards"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 26,
      color: T.primary
    }
  }, "Rewards")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 18
    }
  }, filters.map(f => /*#__PURE__*/React.createElement("button", {
    key: f.k,
    onClick: () => setFilter(f.k),
    style: {
      border: 'none',
      cursor: 'pointer',
      borderRadius: 999,
      padding: '9px 22px',
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: 1.5,
      textTransform: 'uppercase',
      background: filter === f.k ? T.primary : T.neutral,
      color: filter === f.k ? '#fff' : T.secondary
    }
  }, f.l))), rewards.map((g, i) => {
    const showPunch = filter === 'all' || filter === 'punch';
    const showCoup = filter === 'all' || filter === 'coupons';
    if ((!showPunch || !g.punch) && (!showCoup || !g.coupon)) return null;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        marginBottom: 28
      }
    }, /*#__PURE__*/React.createElement(MerchantDivider, {
      name: g.business
    }), showPunch && g.punch && /*#__PURE__*/React.createElement(PunchCard, g.punch), showCoup && g.coupon && /*#__PURE__*/React.createElement(Coupon, g.coupon));
  })));
}

// ---------- ACTIVITY ----------
function ConsumerActivity({
  tx
}) {
  return /*#__PURE__*/React.createElement(Scroll, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 32px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 28,
      color: T.primary
    }
  }, "Activity")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 32px'
    }
  }, tx.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '16px 0',
      borderBottom: `1px solid ${T.hairline}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 22,
      background: T.neutral,
      border: `1px solid ${T.tertiary}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 14,
      color: T.primary
    }
  }, t.business.split(' ').map(w => w[0]).join('').slice(0, 2)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 15,
      color: T.primary
    }
  }, t.business), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 13,
      color: T.secondary,
      marginTop: 2
    }
  }, t.date, t.saved ? ` · saved $${t.saved}` : '')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 17,
      color: T.primary
    }
  }, "$", t.amount)))));
}
window.ConsumerScreens2 = {
  ConsumerLoyalty,
  ConsumerActivity
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/consumer_app/loyalty.jsx", error: String((e && e.message) || e) }); }

// ui_kits/consumer_app/screens.jsx
try { (() => {
// Tapara consumer app — screens
const {
  useState,
  useEffect
} = React;
const T = window.T;
const {
  Icon,
  PrimaryButton,
  Header,
  Scroll
} = window;

// ---------- HOME ----------
function ConsumerHome({
  user,
  saved,
  memberships,
  activeOrder,
  onCheckIn,
  onOpenOrder
}) {
  return /*#__PURE__*/React.createElement(Scroll, {
    style: {
      padding: '4px 0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 32px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 28,
      color: T.primary
    }
  }, "Hi, ", user.split(' ')[0])), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '24px 32px 0',
      background: T.neutral,
      borderRadius: 20,
      padding: 24,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 11,
      letterSpacing: 1.5,
      color: T.secondary,
      textTransform: 'uppercase'
    }
  }, "Total saved"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 42,
      color: T.primary,
      marginTop: 4
    }
  }, "$", saved), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 13,
      color: T.secondary,
      marginTop: 4
    }
  }, "Since joining Tapara"), /*#__PURE__*/React.createElement(PrimaryButton, {
    title: "Check in",
    onPress: onCheckIn,
    style: {
      marginTop: 22
    }
  })), activeOrder && /*#__PURE__*/React.createElement("button", {
    onClick: onOpenOrder,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      width: 'calc(100% - 64px)',
      margin: '16px 32px 0',
      background: T.neutral,
      border: 'none',
      borderRadius: 16,
      padding: 16,
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 5,
      background: T.success
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 15,
      color: T.primary
    }
  }, activeOrder.business), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 13,
      color: T.secondary,
      marginTop: 2
    }
  }, "Your order is being prepared")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontSize: 24,
      color: T.secondary
    }
  }, "\u203A")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 32px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 24,
      color: T.primary,
      marginBottom: 16
    }
  }, "Loyalty"), memberships.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: T.neutral,
      borderRadius: 16,
      padding: 16,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 15,
      color: T.primary
    }
  }, m.business), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 13,
      color: T.secondary,
      marginTop: 2
    }
  }, m.tier, m.next ? ` → ${m.next}` : ' (Max)'), m.next && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      borderRadius: 2,
      background: T.tertiary,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      width: `${m.pct}%`,
      background: T.primary,
      borderRadius: 2
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 12,
      color: T.secondary,
      marginTop: 6
    }
  }, m.progress))))));
}

// ---------- CHECK IN (NFC) ----------
function CheckIn({
  phase,
  business,
  onCancel
}) {
  // phase: 'scanning' | 'confirmed'
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 80,
      height: 80,
      borderRadius: 16,
      background: phase === 'confirmed' ? T.success : T.primary,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 32,
      transition: 'background .3s'
    }
  }, phase === 'confirmed' ? /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 40,
    color: "#fff"
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 20,
      color: '#fff'
    }
  }, "((o))")), phase === 'scanning' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 28,
      color: T.primary
    }
  }, "Scanning\u2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 15,
      color: T.secondary,
      marginTop: 16,
      lineHeight: 1.5
    }
  }, "Hold your phone near the Tapara pad on the counter.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 28,
      color: T.primary
    }
  }, "Checked in"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 17,
      color: T.primary,
      marginTop: 14
    }
  }, business.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 14,
      color: T.secondary,
      marginTop: 4
    }
  }, business.address), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 14,
      color: T.secondary,
      marginTop: 20,
      lineHeight: 1.5,
      maxWidth: 240
    }
  }, "The counter can see you now. Your payment request will arrive in a moment."))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 32px 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onCancel,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 16,
      color: T.primary
    }
  }, phase === 'confirmed' ? 'Done' : 'Cancel')));
}

// ---------- PAYMENT REQUEST ----------
function PaymentRequest({
  business,
  items,
  subtotal,
  discount,
  total,
  timer,
  loading,
  onApprove,
  onDecline
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.primary,
      padding: '24px 32px 24px',
      borderBottomLeftRadius: 24,
      borderBottomRightRadius: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 11,
      letterSpacing: 1.5,
      color: T.secondary,
      textTransform: 'uppercase',
      marginBottom: 10
    }
  }, "Incoming request"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 28,
      color: '#fff'
    }
  }, business), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 26,
      border: '2px solid #fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 14,
      color: '#fff'
    }
  }, timer)))), /*#__PURE__*/React.createElement(Scroll, {
    style: {
      padding: '24px 32px 0'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontSize: 15,
      color: T.primary
    }
  }, it.name, it.qty > 1 ? ` x${it.qty}` : ''), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontSize: 15,
      color: T.primary
    }
  }, "$", (it.price * it.qty).toFixed(2)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: rowBox
  }, /*#__PURE__*/React.createElement("span", {
    style: boxLabel
  }, "Subtotal"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontSize: 15,
      color: T.primary
    }
  }, "$", subtotal)), discount && /*#__PURE__*/React.createElement("div", {
    style: rowBox
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...boxLabel,
      color: T.success,
      letterSpacing: .5
    }
  }, "Loyalty ", discount.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 15,
      color: T.success
    }
  }, "-$", discount.amount)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontSize: 12,
      letterSpacing: 1,
      color: T.secondary,
      textTransform: 'uppercase'
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 42,
      color: T.primary
    }
  }, "$", total)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 32px 32px'
    }
  }, /*#__PURE__*/React.createElement(PrimaryButton, {
    title: loading ? 'Authorising…' : 'Approve payment',
    onPress: onApprove,
    disabled: loading
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onDecline,
    disabled: loading,
    style: {
      width: '100%',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: T.sans,
      fontSize: 16,
      color: T.secondary,
      padding: '14px 0 4px'
    }
  }, "Decline")));
}
const rowBox = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: T.neutral,
  borderRadius: 12,
  padding: '14px 16px',
  marginBottom: 12
};
const boxLabel = {
  fontFamily: T.sans,
  fontSize: 12,
  letterSpacing: 1,
  color: T.secondary,
  textTransform: 'uppercase'
};

// ---------- FACE ID overlay ----------
function FaceIdOverlay() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(10,10,10,0.55)',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 14,
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "face",
    size: 34,
    color: T.primary
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 14,
      color: '#fff'
    }
  }, "Face ID")));
}

// ---------- SUCCESS ----------
function PaymentSuccess({
  amount,
  business,
  onDone
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 88,
      height: 88,
      borderRadius: 44,
      background: T.success,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 48,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 11,
      letterSpacing: 1.5,
      color: T.secondary,
      textTransform: 'uppercase'
    }
  }, "Paid"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 48,
      color: T.primary,
      marginTop: 6
    }
  }, "$", amount), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 15,
      color: T.secondary,
      marginTop: 6
    }
  }, business), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 32,
      left: 32,
      right: 32
    }
  }, /*#__PURE__*/React.createElement(PrimaryButton, {
    title: "Done",
    onPress: onDone
  })));
}
window.ConsumerScreens = {
  ConsumerHome,
  CheckIn,
  PaymentRequest,
  FaceIdOverlay,
  PaymentSuccess
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/consumer_app/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/consumer_app/tokens.js
try { (() => {
/* Tapara UI kit — shared design tokens (mirror of colors_and_type.css) */
window.T = {
  primary: '#0A0A0A',
  secondary: '#888888',
  tertiary: '#E0E0DC',
  neutral: '#F5F5F3',
  white: '#FFFFFF',
  success: '#1D9E75',
  error: '#E24B4A',
  tagPad: '#EEEEEC',
  hairline: 'rgba(10,10,10,0.08)',
  serif: "'Noto Serif', Georgia, serif",
  sans: "'Manrope', -apple-system, system-ui, sans-serif",
  shadowEditorial: '0 12px 40px rgba(10,10,10,0.04)',
  shadowReceipt: '0 2px 12px rgba(10,10,10,0.08)'
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/consumer_app/tokens.js", error: String((e && e.message) || e) }); }

// ui_kits/merchant_app/app.jsx
try { (() => {
// Tapara merchant app — interactive controller
const {
  useState
} = React;
const T = window.T;
const {
  PhoneFrame,
  TabBar,
  Icon,
  Scroll
} = window;
const {
  MerchantHome
} = window.MerchantHomeScreens;
const {
  OrderBuilder,
  Awaiting,
  Confirmed,
  LoyaltyManager
} = window.MerchantScreens;
const MENU = [{
  name: 'Flat white',
  price: 5.5
}, {
  name: 'Long black',
  price: 5.0
}, {
  name: 'Almond croissant',
  price: 6.5
}, {
  name: 'Bacon & egg roll',
  price: 12.0
}, {
  name: 'Banana bread',
  price: 5.5
}];
const TIERS = [{
  name: 'Coffee Newcomer',
  threshold: '0 visits',
  benefit: 'Welcome — you’re on the board.'
}, {
  name: 'Coffee Lover',
  threshold: '8 visits',
  benefit: '10% off pastries, priority ordering.'
}, {
  name: 'Coffee Maniac',
  threshold: '25 visits',
  benefit: 'Free coffee Fridays, early access to beans.'
}];
function App() {
  const [tab, setTab] = useState('home');
  const [segment, setSegment] = useState('pads');
  const [screen, setScreen] = useState(null); // null | 'builder' | 'awaiting' | 'confirmed'
  const [activeCustomer, setActiveCustomer] = useState(null);
  const [cart, setCart] = useState({});
  const [pads, setPads] = useState([{
    label: 'Pad 1 · Counter',
    checkin: {
      name: 'James Mitchell',
      tier: 'Coffee Lover',
      usual: '2 flat whites'
    }
  }, {
    label: 'Pad 2 · Window',
    checkin: {
      name: 'Aroha Ngata',
      tier: 'Coffee Maniac',
      usual: 'Long black'
    }
  }, {
    label: 'Pad 3 · Bar',
    checkin: null
  }]);
  const [orders, setOrders] = useState([{
    id: 'o1',
    shortId: 'A7F3D2',
    name: 'Mere Walker',
    items: 'Long black, Banana bread',
    total: '10.50',
    pad: 'Pad 2',
    elapsed: '2 min ago'
  }]);
  const total = Object.entries(cart).reduce((s, [n, q]) => s + MENU.find(m => m.name === n).price * q, 0).toFixed(2);
  function openPad(pad) {
    setActiveCustomer({
      ...pad.checkin,
      pad: pad.label.split(' · ')[0]
    });
    const seed = {};
    setCart(seed);
    setScreen('builder');
  }
  const add = n => setCart(c => ({
    ...c,
    [n]: (c[n] || 0) + 1
  }));
  const remove = n => setCart(c => {
    const q = (c[n] || 0) - 1;
    const nc = {
      ...c
    };
    if (q <= 0) delete nc[n];else nc[n] = q;
    return nc;
  });
  function send() {
    setScreen('awaiting');
    setTimeout(() => setScreen('confirmed'), 2600);
  }
  function doneConfirmed() {
    const items = Object.entries(cart).map(([n, q]) => q > 1 ? `${n} x${q}` : n).join(', ');
    setOrders(o => [{
      id: 'o' + Date.now(),
      shortId: Math.random().toString(36).slice(2, 8).toUpperCase(),
      name: activeCustomer.name,
      items,
      total,
      pad: activeCustomer.pad,
      elapsed: 'just now'
    }, ...o]);
    setScreen(null);
    setActiveCustomer(null);
    setCart({});
    setSegment('orders');
  }
  const complete = id => setOrders(o => o.filter(x => x.id !== id));
  let content,
    showTabs = true;
  if (screen === 'builder') {
    showTabs = false;
    content = /*#__PURE__*/React.createElement(OrderBuilder, {
      customer: activeCustomer,
      menu: MENU,
      cart: cart,
      onAdd: add,
      onRemove: remove,
      total: total,
      onBack: () => setScreen(null),
      onSend: send
    });
  } else if (screen === 'awaiting') {
    showTabs = false;
    content = /*#__PURE__*/React.createElement(Awaiting, {
      customer: activeCustomer.name.split(' ')[0],
      total: total,
      onCancel: () => setScreen('builder')
    });
  } else if (screen === 'confirmed') {
    showTabs = false;
    content = /*#__PURE__*/React.createElement(Confirmed, {
      customer: activeCustomer.name,
      total: total,
      tierUp: null,
      onDone: doneConfirmed
    });
  } else if (tab === 'home') content = /*#__PURE__*/React.createElement(MerchantHome, {
    owner: "Felix",
    segment: segment,
    setSegment: setSegment,
    pads: pads,
    orders: orders,
    onOpenPad: openPad,
    onComplete: complete,
    onNewSale: () => {}
  });else if (tab === 'activity') content = /*#__PURE__*/React.createElement(MerchantActivity, null);else if (tab === 'loyalty') content = /*#__PURE__*/React.createElement(LoyaltyManager, {
    tiers: TIERS
  });else if (tab === 'admin') content = /*#__PURE__*/React.createElement(MerchantAdmin, null);
  return /*#__PURE__*/React.createElement(PhoneFrame, {
    statusDark: true
  }, content, showTabs && /*#__PURE__*/React.createElement(TabBar, {
    active: tab,
    onChange: setTab
  }));
}
function MerchantActivity() {
  const stats = [{
    label: 'Today',
    value: '$842.50',
    sub: '63 orders · 0% fees'
  }, {
    label: 'This week',
    value: '$5,210',
    sub: '418 orders'
  }];
  const tx = [{
    name: 'James Mitchell',
    amount: '16.85',
    time: '8:24am',
    tier: 'Coffee Lover'
  }, {
    name: 'Aroha Ngata',
    amount: '5.00',
    time: '8:11am',
    tier: 'Coffee Maniac'
  }, {
    name: 'Mere Walker',
    amount: '10.50',
    time: '7:58am',
    tier: 'Coffee Newcomer'
  }];
  return /*#__PURE__*/React.createElement(Scroll, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 32px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 28,
      color: T.primary
    }
  }, "Activity")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 32px',
      display: 'flex',
      gap: 12,
      marginBottom: 24
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      background: T.neutral,
      borderRadius: 16,
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 10,
      letterSpacing: 1.5,
      textTransform: 'uppercase',
      color: T.secondary
    }
  }, s.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 26,
      color: T.primary,
      marginTop: 6
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 12,
      color: T.secondary,
      marginTop: 4
    }
  }, s.sub)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 32px'
    }
  }, tx.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '16px 0',
      borderBottom: `1px solid ${T.hairline}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 22,
      background: T.neutral,
      border: `1px solid ${T.tertiary}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 14,
      color: T.primary
    }
  }, t.name.split(' ').map(w => w[0]).join('')), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 15,
      color: T.primary
    }
  }, t.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 13,
      color: T.secondary,
      marginTop: 2
    }
  }, t.time, " \xB7 ", t.tier)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 17,
      color: T.primary
    }
  }, "$", t.amount)))));
}
function MerchantAdmin() {
  const rows = [{
    icon: 'account_balance',
    label: 'Payout account',
    sub: 'ASB ···· 8830 · daily settlement'
  }, {
    icon: 'nfc',
    label: 'NFC pads',
    sub: '3 pads · manage & pair'
  }, {
    icon: 'group',
    label: 'Staff',
    sub: '4 members · roles & access'
  }, {
    icon: 'storefront',
    label: 'Store profile',
    sub: 'Customs Coffee · 142 Hardy St'
  }, {
    icon: 'credit_card',
    label: 'Card payments',
    sub: 'Stripe · Tap to Pay enabled'
  }];
  return /*#__PURE__*/React.createElement(Scroll, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 32px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 28,
      color: T.primary
    }
  }, "Admin"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 14,
      color: T.secondary,
      marginTop: 4
    }
  }, "Felix \xB7 Owner")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 32px'
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '18px 0',
      borderBottom: `1px solid ${T.hairline}`
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.icon,
    size: 22,
    color: T.secondary
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 15,
      color: T.primary
    }
  }, r.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 13,
      color: T.secondary,
      marginTop: 2
    }
  }, r.sub)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontSize: 22,
      color: T.tertiary
    }
  }, "\u203A")))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/merchant_app/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/merchant_app/builder.jsx
try { (() => {
// Tapara merchant app — order builder, awaiting, confirmed, loyalty manager
const {
  useState
} = React;
const T = window.T;
const {
  Icon,
  PrimaryButton,
  Scroll
} = window;

// ---------- ORDER BUILDER ----------
function OrderBuilder({
  customer,
  menu,
  cart,
  onAdd,
  onRemove,
  total,
  onBack,
  onSend
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 32px 14px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      color: T.secondary,
      fontFamily: T.sans,
      fontSize: 14,
      padding: 0,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow_back",
    size: 18,
    color: T.secondary
  }), " Pads"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 28,
      color: T.primary
    }
  }, customer.name), customer.tier && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: T.secondary
    }
  }, "\u2605"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: 1,
      textTransform: 'uppercase',
      color: T.secondary
    }
  }, customer.tier, " \xB7 ", customer.pad))), /*#__PURE__*/React.createElement(Scroll, {
    style: {
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 10,
      letterSpacing: 2,
      textTransform: 'uppercase',
      color: T.secondary,
      margin: '4px 0 12px'
    }
  }, "Menu"), menu.map((it, i) => {
    const qty = cart[it.name] || 0;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px 0',
        borderBottom: `1px solid ${T.hairline}`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: T.sans,
        fontWeight: 500,
        fontSize: 15,
        color: T.primary
      }
    }, it.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: T.sans,
        fontSize: 13,
        color: T.secondary,
        marginTop: 2
      }
    }, "$", it.price.toFixed(2))), qty > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      onClick: () => onRemove(it.name),
      style: qtyBtn
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "remove",
      size: 18,
      color: T.primary
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: T.sans,
        fontWeight: 500,
        fontSize: 15,
        color: T.primary,
        minWidth: 18,
        textAlign: 'center'
      }
    }, qty)), /*#__PURE__*/React.createElement("button", {
      onClick: () => onAdd(it.name),
      style: qtyBtn
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "add",
      size: 18,
      color: T.primary
    })));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 32px 18px',
      borderTop: `1px solid ${T.tertiary}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontSize: 12,
      letterSpacing: 1,
      textTransform: 'uppercase',
      color: T.secondary
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 32,
      color: T.primary
    }
  }, "$", total)), /*#__PURE__*/React.createElement(PrimaryButton, {
    title: "Send payment request",
    onPress: onSend,
    disabled: total === '0.00'
  })));
}
const qtyBtn = {
  width: 34,
  height: 34,
  borderRadius: 17,
  border: `1px solid ${T.tertiary}`,
  background: '#fff',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

// ---------- AWAITING PAYMENT ----------
function Awaiting({
  customer,
  total,
  onCancel
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 88,
      height: 88,
      borderRadius: 44,
      border: `2px solid ${T.tertiary}`,
      borderTopColor: T.primary,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 28,
      animation: 'spin 1s linear infinite'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "contactless",
    size: 40,
    color: T.primary
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 26,
      color: T.primary
    }
  }, "Waiting for ", customer), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 15,
      color: T.secondary,
      marginTop: 12,
      lineHeight: 1.5,
      maxWidth: 240
    }
  }, "Sent a request for ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: T.primary
    }
  }, "$", total), ". They\u2019ll approve with Face ID."), /*#__PURE__*/React.createElement("button", {
    onClick: onCancel,
    style: {
      position: 'absolute',
      bottom: 32,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: T.sans,
      fontSize: 16,
      color: T.secondary
    }
  }, "Cancel request"), /*#__PURE__*/React.createElement("style", null, `@keyframes spin{to{transform:rotate(360deg)}}`));
}

// ---------- CONFIRMED ----------
function Confirmed({
  customer,
  total,
  tierUp,
  onDone
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 88,
      height: 88,
      borderRadius: 44,
      background: T.success,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 48,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 11,
      letterSpacing: 1.5,
      textTransform: 'uppercase',
      color: T.secondary
    }
  }, "Paid by ", customer), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 48,
      color: T.primary,
      marginTop: 6
    }
  }, "$", total), tierUp && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      background: T.neutral,
      borderRadius: 12,
      padding: '12px 18px',
      fontFamily: T.sans,
      fontSize: 13,
      color: T.primary
    }
  }, customer.split(' ')[0], " reached ", /*#__PURE__*/React.createElement("strong", null, tierUp)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 32,
      left: 32,
      right: 32
    }
  }, /*#__PURE__*/React.createElement(PrimaryButton, {
    title: "Done",
    onPress: onDone
  })));
}

// ---------- LOYALTY MANAGER ----------
function LoyaltyManager({
  tiers
}) {
  return /*#__PURE__*/React.createElement(Scroll, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 32px 6px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 28,
      color: T.primary
    }
  }, "Loyalty"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 14,
      color: T.secondary,
      marginTop: 4
    }
  }, "Your program \xB7 Customs Coffee")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 32px 0'
    }
  }, tiers.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: i === tiers.length - 1 ? T.primary : T.neutral,
      border: i === tiers.length - 1 ? 'none' : `1px solid ${T.tertiary}`,
      borderRadius: 16,
      padding: 20,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 20,
      color: i === tiers.length - 1 ? '#fff' : T.primary
    }
  }, t.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: 1,
      textTransform: 'uppercase',
      color: i === tiers.length - 1 ? 'rgba(255,255,255,0.6)' : T.secondary
    }
  }, t.threshold)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 13,
      color: i === tiers.length - 1 ? 'rgba(255,255,255,0.75)' : T.secondary,
      marginTop: 6
    }
  }, t.benefit))), /*#__PURE__*/React.createElement("button", {
    style: {
      width: '100%',
      border: `1px dashed ${T.tertiary}`,
      background: 'transparent',
      borderRadius: 16,
      padding: 18,
      cursor: 'pointer',
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 14,
      color: T.secondary,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "add",
    size: 18,
    color: T.secondary
  }), " Add a tier")));
}
window.MerchantScreens = {
  OrderBuilder,
  Awaiting,
  Confirmed,
  LoyaltyManager
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/merchant_app/builder.jsx", error: String((e && e.message) || e) }); }

// ui_kits/merchant_app/frame.jsx
try { (() => {
// Tapara UI kit — phone frame + shared UI primitives
// Faithful monochrome recreation of the Tapara React Native app chrome.
const {
  useState,
  useEffect,
  useRef
} = React;
const T = window.T;

// ---- Icon (Material Symbols Outlined — matches @expo/vector-icons in app) ----
function Icon({
  name,
  size = 24,
  color = T.primary,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: size,
      color,
      lineHeight: 1,
      ...style
    }
  }, name);
}

// ---- Phone frame: 390x844 logical screen inside a black bezel ----
function PhoneFrame({
  children,
  statusDark = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: frameStyles.bezel
  }, /*#__PURE__*/React.createElement("div", {
    style: frameStyles.screen
  }, /*#__PURE__*/React.createElement("div", {
    style: frameStyles.statusbar
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...frameStyles.sbTime,
      color: statusDark ? T.primary : '#fff'
    }
  }, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: frameStyles.notch
  }), /*#__PURE__*/React.createElement("div", {
    style: frameStyles.sbIcons
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "signal_cellular_alt",
    size: 15,
    color: statusDark ? T.primary : '#fff'
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "wifi",
    size: 15,
    color: statusDark ? T.primary : '#fff'
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "battery_full",
    size: 15,
    color: statusDark ? T.primary : '#fff'
  }))), /*#__PURE__*/React.createElement("div", {
    style: frameStyles.body
  }, children)));
}
const frameStyles = {
  bezel: {
    width: 390,
    height: 844,
    background: '#0A0A0A',
    borderRadius: 54,
    padding: 11,
    boxShadow: '0 40px 90px rgba(10,10,10,0.32)',
    flex: '0 0 auto'
  },
  screen: {
    width: '100%',
    height: '100%',
    background: T.white,
    borderRadius: 44,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: T.sans
  },
  statusbar: {
    height: 50,
    flex: '0 0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 30px',
    position: 'relative',
    zIndex: 5
  },
  sbTime: {
    fontFamily: T.sans,
    fontWeight: 600,
    fontSize: 15,
    letterSpacing: .3
  },
  notch: {
    position: 'absolute',
    top: 8,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 120,
    height: 32,
    background: '#0A0A0A',
    borderRadius: 20
  },
  sbIcons: {
    display: 'flex',
    gap: 5,
    alignItems: 'center'
  },
  body: {
    flex: 1,
    minHeight: 0,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  }
};

// ---- Primary button (solid black pill, >=52px) ----
function PrimaryButton({
  title,
  onPress,
  disabled = false,
  style = {}
}) {
  const [press, setPress] = useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: disabled ? undefined : onPress,
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    onMouseLeave: () => setPress(false),
    style: {
      background: T.primary,
      color: '#fff',
      border: 'none',
      borderRadius: 999,
      minHeight: 52,
      padding: '0 24px',
      width: '100%',
      cursor: disabled ? 'default' : 'pointer',
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 16,
      opacity: disabled ? 0.4 : press ? 0.86 : 1,
      transition: 'opacity .12s',
      ...style
    }
  }, title);
}

// ---- Screen header (serif title + optional grey sub) ----
function Header({
  title,
  sub,
  brand
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 32px 16px'
    }
  }, brand && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 28,
      color: T.primary
    }
  }, "tapara"), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: brand ? 0 : 28,
      color: T.primary,
      height: brand ? 0 : 'auto'
    }
  }, !brand && title), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 14,
      color: T.secondary,
      marginTop: 4
    }
  }, sub));
}

// ---- Bottom tab bar (4-tab unified shell) ----
function TabBar({
  active,
  onChange
}) {
  const tabs = [{
    key: 'home',
    label: 'Home',
    icon: 'home'
  }, {
    key: 'activity',
    label: 'Activity',
    icon: 'receipt_long'
  }, {
    key: 'loyalty',
    label: 'Loyalty',
    icon: 'loyalty'
  }, {
    key: 'admin',
    label: 'Admin',
    icon: 'workspaces'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto',
      display: 'flex',
      justifyContent: 'space-around',
      borderTop: `1px solid ${T.tertiary}`,
      padding: '10px 0 22px',
      background: T.white
    }
  }, tabs.map(t => {
    const on = active === t.key;
    return /*#__PURE__*/React.createElement("button", {
      key: t.key,
      onClick: () => onChange(t.key),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        color: on ? T.primary : 'rgba(136,136,136,0.5)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: t.icon,
      size: 24,
      color: on ? T.primary : 'rgba(136,136,136,0.5)'
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: T.sans,
        fontWeight: 500,
        fontSize: 9,
        letterSpacing: 1,
        textTransform: 'uppercase'
      }
    }, t.label));
  }));
}

// ---- Scroll area helper ----
function Scroll({
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: 'auto',
      ...style
    }
  }, children);
}
Object.assign(window, {
  Icon,
  PhoneFrame,
  PrimaryButton,
  Header,
  TabBar,
  Scroll,
  frameStyles
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/merchant_app/frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/merchant_app/home.jsx
try { (() => {
// Tapara merchant app — home (Pads / Orders segments)
const {
  useState,
  useRef
} = React;
const T = window.T;
const {
  Icon,
  Scroll
} = window;
function Segment({
  value,
  onChange,
  orderCount
}) {
  const opts = [{
    k: 'pads',
    l: 'Pads'
  }, {
    k: 'orders',
    l: `Orders${orderCount ? ` (${orderCount})` : ''}`
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignSelf: 'center',
      margin: '0 auto 24px',
      background: T.neutral,
      border: `1px solid ${T.tertiary}`,
      borderRadius: 999,
      padding: 3,
      width: 'fit-content'
    }
  }, opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.k,
    onClick: () => onChange(o.k),
    style: {
      border: 'none',
      cursor: 'pointer',
      borderRadius: 999,
      padding: '10px 32px',
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 12,
      letterSpacing: 1,
      textTransform: 'uppercase',
      background: value === o.k ? T.primary : 'transparent',
      color: value === o.k ? '#fff' : T.secondary
    }
  }, o.l)));
}
function PadCard({
  pad,
  onOpen
}) {
  if (!pad.checkin) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: 16,
        border: `1px dashed ${T.tertiary}`,
        background: 'rgba(245,245,243,0.5)',
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 150
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 32,
        color: 'rgba(136,136,136,0.4)',
        marginBottom: 8
      }
    }, "\u229E"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: T.sans,
        fontWeight: 500,
        fontSize: 12,
        letterSpacing: 1,
        textTransform: 'uppercase',
        color: T.secondary
      }
    }, pad.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: T.sans,
        fontSize: 10,
        letterSpacing: .5,
        textTransform: 'uppercase',
        color: 'rgba(136,136,136,0.6)',
        marginTop: 4
      }
    }, "Ready for pairing"));
  }
  const c = pad.checkin;
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => onOpen(pad),
    style: {
      textAlign: 'left',
      cursor: 'pointer',
      borderRadius: 16,
      border: `1px solid ${T.tertiary}`,
      background: '#fff',
      padding: 24,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 24,
      background: T.neutral,
      border: `1px solid ${T.tertiary}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 16,
      color: T.primary
    }
  }, c.name.split(' ').map(w => w[0]).join('').slice(0, 2))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 20,
      color: T.primary,
      marginBottom: 4
    }
  }, c.name), c.tier && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: T.secondary
    }
  }, "\u2605"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: 1,
      textTransform: 'uppercase',
      color: T.secondary
    }
  }, c.tier)), c.usual && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 13,
      color: T.secondary,
      marginBottom: 16
    }
  }, "Usual: ", c.usual), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTop: `1px solid ${T.hairline}`,
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontSize: 11,
      color: T.secondary
    }
  }, pad.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: T.secondary
    }
  }, "\u25C9")));
}

// Swipe-to-complete order card (drag right past 40% → completes)
function OrderCard({
  order,
  onComplete
}) {
  const [dx, setDx] = useState(0);
  const start = useRef(null);
  const W = 326;
  function down(e) {
    start.current = e.touches ? e.touches[0].clientX : e.clientX;
  }
  function move(e) {
    if (start.current == null) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    setDx(Math.max(0, x - start.current));
  }
  function up() {
    if (dx >= W * 0.4) {
      setDx(W);
      setTimeout(() => onComplete(order.id), 180);
    } else setDx(0);
    start.current = null;
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 16,
      overflow: 'hidden',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: T.success,
      borderRadius: 16,
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 32
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 28,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    onMouseDown: down,
    onMouseMove: move,
    onMouseUp: up,
    onMouseLeave: () => start.current != null && up(),
    onTouchStart: down,
    onTouchMove: move,
    onTouchEnd: up,
    style: {
      position: 'relative',
      background: T.neutral,
      borderRadius: 16,
      padding: 24,
      transform: `translateX(${dx}px)`,
      transition: start.current == null ? 'transform .2s' : 'none',
      cursor: 'grab',
      userSelect: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 20,
      color: T.primary
    }
  }, order.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontSize: 13,
      color: T.secondary
    }
  }, "#", order.shortId)), (order.tags || order.pad) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginBottom: 8
    }
  }, (order.tags || []).map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      borderRadius: 999,
      padding: '2px 12px',
      background: T.primary,
      color: '#fff',
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 11
    }
  }, t)), order.pad && /*#__PURE__*/React.createElement("span", {
    style: {
      borderRadius: 999,
      padding: '2px 12px',
      background: T.tagPad,
      color: T.primary,
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 11
    }
  }, order.pad)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 14,
      color: T.secondary,
      marginBottom: 8
    }
  }, order.items), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 16,
      color: T.primary
    }
  }, "$", order.total), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: T.sans,
      fontSize: 13,
      color: T.secondary
    }
  }, order.elapsed, " \xB7 swipe to complete \u2192"))));
}
function EmptyState({
  title,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 16,
      color: T.primary,
      marginBottom: 8
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 14,
      color: T.secondary,
      lineHeight: 1.5
    }
  }, sub));
}
function MerchantHome({
  owner,
  segment,
  setSegment,
  pads,
  orders,
  onOpenPad,
  onComplete,
  onNewSale
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 32px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.serif,
      fontWeight: 700,
      fontSize: 28,
      color: T.primary
    }
  }, "tapara"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: T.sans,
      fontSize: 14,
      color: T.secondary,
      marginTop: 4
    }
  }, "Hi, ", owner, " \xB7 Customs Coffee")), /*#__PURE__*/React.createElement(Segment, {
    value: segment,
    onChange: setSegment,
    orderCount: orders.length
  }), /*#__PURE__*/React.createElement(Scroll, {
    style: {
      padding: '0 32px'
    }
  }, segment === 'pads' ? pads.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(PadCard, {
    pad: p,
    onOpen: onOpenPad
  }))) : orders.length ? orders.map(o => /*#__PURE__*/React.createElement(OrderCard, {
    key: o.id,
    order: o,
    onComplete: onComplete
  })) : /*#__PURE__*/React.createElement(EmptyState, {
    title: "No active orders",
    sub: "Orders will appear here after customers pay."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 32px 16px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onNewSale,
    style: {
      width: '100%',
      minHeight: 52,
      borderRadius: 999,
      background: T.primary,
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
      fontFamily: T.sans,
      fontWeight: 500,
      fontSize: 16
    }
  }, "+ Off-app sale")));
}
window.MerchantHomeScreens = {
  MerchantHome
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/merchant_app/home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/merchant_app/tokens.js
try { (() => {
/* Tapara UI kit — shared design tokens (mirror of colors_and_type.css) */
window.T = {
  primary: '#0A0A0A',
  secondary: '#888888',
  tertiary: '#E0E0DC',
  neutral: '#F5F5F3',
  white: '#FFFFFF',
  success: '#1D9E75',
  error: '#E24B4A',
  tagPad: '#EEEEEC',
  hairline: 'rgba(10,10,10,0.08)',
  serif: "'Noto Serif', Georgia, serif",
  sans: "'Manrope', -apple-system, system-ui, sans-serif",
  shadowEditorial: '0 12px 40px rgba(10,10,10,0.04)',
  shadowReceipt: '0 2px 12px rgba(10,10,10,0.08)'
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/merchant_app/tokens.js", error: String((e && e.message) || e) }); }

})();
