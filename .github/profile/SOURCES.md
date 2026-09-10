# Profile evidence

Updated 2026-09-10. The owner requested a photo-free profile centered on major projects, personal contributions, and troubleshooting. Screenshots and minor-project listings were removed. The latest follow-up adds visible Android/iOS experience through GateStamp, not a nested exploration footnote. The technology inventory remains collapsed to preserve the earlier request for fuller stack coverage.

## Evidence standard

Each troubleshooting case below is based on the owner's public commit, implementation, or technical record. A code change does not by itself prove a production outage, measured performance gain, or a successful live deployment. No performance percentages, incident counts, or newly executed project tests are claimed. Tests mentioned in the profile were added in the cited commits; they were not rerun as part of editing this profile.

## SallaeMallae

### Personal role

[README 담당 파트](https://github.com/beshurl/SallaeMallae/blob/master/README.md) credits 정준용 with primary frontend screens, OAuth, popular-keyword SSE integration, KIS stock APIs, and Redis Top-list cache. AI model training and all server-side streaming infrastructure are not claimed as personal work.

### Troubleshooting

- [News pagination reset](https://github.com/beshurl/SallaeMallae/commit/18481f416829d50e49a31a23c31034bd3959d4af): previous query data was lost between page-group requests. A missing total count became one total page and triggered a page clamp. Both news query variants now retain previous data with placeholderData. [Page logic](https://github.com/beshurl/SallaeMallae/blob/master/services/frontend/src/app/news/components/NewsPageClient.tsx).
- [Authentication/cache synchronization](https://github.com/beshurl/SallaeMallae/commit/b3039b860193b66664d7b4a885d492322a6c3b1e): AuthQuerySync compares user ID or guest identity, skips restoration, and clears query data on an identity change. This is an isolation mechanism; no actual data-leak incident is asserted.
- [Missing quotes during ranking fallback](https://github.com/beshurl/SallaeMallae/commit/08bdf207ef8fc30d3b1bd1b7d21236361e72894f): when ranking requests and local daily-price data are unavailable, fetch missing quotes only for the displayed page, preserve the original entry if enrichment fails, and add a test for the combined failure path.

## BoneToBe

### Personal role

[OAuth](https://github.com/beshurl/BoneToBe/commit/e11a71d83aa11b551a76147ad59bbbc917c5df15), [profile/community API integration](https://github.com/beshurl/BoneToBe/commit/e072956f1e691ad41f0c1715005334609b8285b1), [profile editing](https://github.com/beshurl/BoneToBe/commit/ce899be61f8844e64d70f6b4b20582a5bafa71aa), [main-page animation](https://github.com/beshurl/BoneToBe/commit/c883cacee0c8b294aa8430b6274282d14a87eb5e).

### Troubleshooting

- [About-page infinite rendering](https://github.com/beshurl/BoneToBe/commit/01a931c49775df5434a74ce9229265b5c3db2bca): freshly mapped section ID arrays invalidated memoization and recreated observers/effects. A joined content key replaces array-reference dependencies.
- [Photo data persistence](https://github.com/beshurl/BoneToBe/commit/e779dfe66b60ebe08898970f4ffd9672f25a862a): Zustand partialize excludes photoData and persists basic info, analysis results, and report ID. No observed QuotaExceededError or numerical storage reduction is claimed.
- Supporting role evidence: [scroll-work scheduling](https://github.com/beshurl/BoneToBe/commit/b41217ae919b534efc37a400e8c2223c750b1c56) uses requestAnimationFrame and updates state only when changed; no FPS metric is asserted.

## DotShelf

### Personal role

[Book-market UI/API](https://github.com/beshurl/DotShelf/commit/79bb321c547a504b8b6bb0474f78f244d7cd121d), [lazy-loaded notebook UI](https://github.com/beshurl/DotShelf/commit/39a2e29c24edef8c364e140b464094e5076ffdee), [S3 thumbnail API](https://github.com/beshurl/DotShelf/commit/9c36a7676c62ddb7adafbfff9cc2c454cbd5bfa0).

### Troubleshooting

- [Public-space remote assets](https://github.com/beshurl/DotShelf/commit/ce997ac0fe4607d72c564df5482d9226814a4f24), [design and verification record](https://github.com/beshurl/DotShelf/blob/master/docs/study/2026-05-13-feat-unity-remote-asset-cache.md): owner-only download access did not match visitor restoration. Add a public-space manifest restricted to saved layout references and the space owner's asset ownership; register it before Unity restores the layout; use version/hash caches for GLB/AssetBundle content. The record reports targeted backend and Unity EditMode checks; real S3/multiple-account end-to-end verification was still a follow-up, so the profile does not claim full live-service validation.
- [Thumbnail upload retries](https://github.com/beshurl/DotShelf/commit/97670a916d4dbebd7d49920002d7acb15a371b17): next-layout-version keys collided before confirmation, and confirmation retries incremented the version again. Timestamp/UUID keys, same-key idempotency, and stale-key rejection were introduced. [Regression tests](https://github.com/beshurl/DotShelf/blob/97670a916d4dbebd7d49920002d7acb15a371b17/backend/src/test/java/com/dotshelf/domain/space/service/SpaceServiceTest.java) cover unique keys, repeated confirmation, and older keys. No operational incident frequency is claimed.

## GateStamp — native Android and iOS

### Personal role and scope

[Initial implementation](https://github.com/beshurl/skala-temp-for-gain/commit/d1e8ab3e9ef9a24d28d2bf2afd9272fdc5fbe2ce) is authored by 정준용 / beshurl. The Android and iOS client sources and tests are included. The current [root README](https://github.com/beshurl/skala-temp-for-gain) describes mobile feature development as paused while web/server Slack registration evolves. The profile calls these native prototypes; it does not claim app-store publication, production adoption, or native support for the newer Slack signup flow.

- [Android structure](https://github.com/beshurl/skala-temp-for-gain/blob/HEAD/android/README.md): Kotlin, Jetpack Compose, Material 3, Retrofit/OkHttp, ViewModel/Repository boundaries, manual DI, state-specific attendance guidance. [SecureTokenStore](https://github.com/beshurl/skala-temp-for-gain/blob/HEAD/android/app/src/main/java/com/gatestamp/android/core/storage/SecureTokenStore.kt) uses an Android Keystore AES-GCM key to encrypt the token; ciphertext and IV are stored in private SharedPreferences with backup exclusion and checked persistence failures. The token itself is not described as directly residing in Keystore.
- [iOS structure](https://github.com/beshurl/skala-temp-for-gain/blob/HEAD/ios/README.md): Swift/SwiftUI, typed NavigationStack routing, URLSession transport, protocol-based repository boundaries, Keychain storage and session restoration/logout. Attendance authorization and source-IP decisions remain server-side.

### Troubleshooting

- [Mobile time display correction](https://github.com/beshurl/skala-temp-for-gain/commit/d1e268ee68ab9edd29a8caed306747ead7e2cb5e), authored by beshurl: the receipt/history displayed the full server displayTime string, including date/day. Android and iOS now extract a clock value, fall back to checkedInAt in Asia/Seoul, and display --:--:-- for unusable inputs. Android AttendanceClockTimeTest and iOS AttendanceTimeFormatterTests were added. No measured layout improvement or test execution in this profile-editing task is claimed.
- [iOS response generation guard](https://github.com/beshurl/skala-temp-for-gain/blob/d1e8ab3e9ef9a24d28d2bf2afd9272fdc5fbe2ce/ios/GateStamp/Features/Attendance/AttendanceViewModel.swift#L42): capture generation at request start; reject old success/error responses; reset increments generation. [RootView](https://github.com/beshurl/skala-temp-for-gain/blob/d1e8ab3e9ef9a24d28d2bf2afd9272fdc5fbe2ce/ios/GateStamp/App/RootView.swift#L15) invokes reset on signedOut. [Regression tests](https://github.com/beshurl/skala-temp-for-gain/blob/d1e8ab3e9ef9a24d28d2bf2afd9272fdc5fbe2ce/ios/GateStampTests/Features/Attendance/AttendanceViewModelTests.swift#L67) cover old check-in results, old authentication errors, and old load results. This is defensive implementation, not a claimed production account-isolation incident.

### Attribution exclusions

DotShelf contains team-authored SwiftUI/RealityKit/Metal and an iOS Apple-login bridge, but their inspected commits are attributed to other contributors, not beshurl. They are not added as personal native skills or personal troubleshooting achievements. React Native, Expo, and Flutter were not evidenced in the reviewed public repositories.

## Sequence

### Personal role

[Team](https://github.com/Sequence-Front/sequence/blob/main/src/main/page/WhoMade.tsx) identifies Jung Joon-yong as frontend. [Feature integration](https://github.com/Sequence-Front/sequence/commit/90f92d5276d62d11376eb6141cd911f3199d60cd) modifies project/archive, team evaluation, notifications, reporting and auth flows. Referenced fixes are attributed to beshurl.

### Troubleshooting

- [School-date payload](https://github.com/Sequence-Front/sequence/commit/8f74f60ebe7525228f1b150c5fc81af721be1a7d) converts school years to YYYY-01-01 strings. It is serialization of selected year precision, not discovery of actual month/day. [Date-entry QA](https://github.com/Sequence-Front/sequence/commit/926c20ca296078d5c1a2fc0b571575e36e9f8669) separates change handling and blur normalization for month/day fields. Do not claim a complete calendar/leap-year validation system.
- [Logout cleanup](https://github.com/Sequence-Front/sequence/commit/926c20ca296078d5c1a2fc0b571575e36e9f8669) adds clearing browser storage after a successful logout API call. [Storage migration](https://github.com/Sequence-Front/sequence/commit/f1d4207b3250a8646ee70f8f1a78df3cd5228bb5) updates login, token refresh, requests, header/profile reads, logout and withdrawal consistently from localStorage to sessionStorage. The profile does not describe this as an XSS fix or guaranteed token revocation.

## Technology inventory

Main dependencies: [Sallae frontend](https://github.com/beshurl/SallaeMallae/blob/master/services/frontend/package.json), [Sallae backend](https://github.com/beshurl/SallaeMallae/blob/master/services/backend/pom.xml), [Bone frontend](https://github.com/beshurl/BoneToBe/blob/master/frontend/package.json), [DotShelf Unity](https://github.com/beshurl/DotShelf/blob/master/frontend/Packages/manifest.json), [DotShelf backend](https://github.com/beshurl/DotShelf/blob/master/backend/build.gradle.kts), [Sequence](https://github.com/Sequence-Front/sequence/blob/main/package.json).

The broader collapsed inventory also reflects [GateStamp](https://github.com/beshurl/skala-temp-for-gain), [WAYTHER](https://github.com/beshurl/skala-vue), [Python pipeline](https://github.com/beshurl/SKALA_DAY1_Pipeline), and [O2O service](https://github.com/beshurl/o2oMarketService) dependencies inspected earlier. Their presence is evidence of project use, not a proficiency rating. Kotlin/Compose and Swift/SwiftUI remain visible in the primary stack summary and have separate Android/iOS groups in the full inventory. The owner subsequently removed the supplemental library/service and team-level AI system sections; they must not be restored.

## Profile structure references

The 2026-09-10 redesign uses structural ideas, not copied content or assets, from these public profiles:

- [antfu](https://github.com/antfu/antfu): concise text-link navigation. Adapted as three local anchors into this README.
- [bradgarropy](https://github.com/bradgarropy/bradgarropy): a short role-led introduction. The profile retains the owner's own name, scope and projects.
- [posva](https://github.com/posva/posva): minimal identity and purposeful links. Used as a clarity reference, not as evidence of this owner's experience.

The native project index is original to this profile. All five personal-role records, eleven troubleshooting cases and their evidence links remain in independently expandable sections. A subsequent owner request restores the previous local technology icon badges in four primary groups and the full inventory disclosure, with alt text and natural wrapping. No banner, statistics widget, generated project cover or screenshot is reintroduced.

## Maintenance

Edit README.md and keep troubleshooting links close to each claim. Preview using node scripts/preview.mjs. Preserve the user's latest text-first direction; do not restore screenshots or illustration covers. Local badges can be regenerated with node scripts/build-badges.mjs; logo licenses are in assets/vendor/devicon.
