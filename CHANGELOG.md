# Changelog

## [4.0.0](https://github.com/remedyred/snickbit.js/compare/v3.0.0...v4.0.0) (2023-03-03)


### ⚠ BREAKING CHANGES

* change API for spinner() slightly
* Drop support for node 12

### Features

* add auto_increment and dynamic adds ([b4e06bc](https://github.com/remedyred/snickbit.js/commit/b4e06bcda798373c13dd18b8d4d68b23fe49249f))
* add warn and stop stopped states ([27db33b](https://github.com/remedyred/snickbit.js/commit/27db33be745a6c2e7d7a3e698ae827bd61dba230))
* create spinner package ([#118](https://github.com/remedyred/snickbit.js/issues/118)) ([ad7d670](https://github.com/remedyred/snickbit.js/commit/ad7d6704044bb67b74d63b2a5615514d99c5ce9a))
* overhaul spinners to use the spinnies library instead and support multiple spinners. ([2848687](https://github.com/remedyred/snickbit.js/commit/28486879a90ff24df3e7d14e0e2153bc737a765b))


### Bug Fixes

* allow for text as 2nd param in add or start ([07e9e17](https://github.com/remedyred/snickbit.js/commit/07e9e17bddd506f91c0c060d5cc3eb75c7c3b95f))
* **ci:** use @snickbit/semantic-release on @snickbit/controller ([3980431](https://github.com/remedyred/snickbit.js/commit/39804316c4aa7a2de0329431675dcf6a2fb6ca52))
* correct store type ([e549678](https://github.com/remedyred/snickbit.js/commit/e5496786eaa30876625b3824c7f1fde7ca94f9b1))
* **deps:** update dependencies ([51f2e32](https://github.com/remedyred/snickbit.js/commit/51f2e324eff51c7c864d5020311e9babd80744ba))
* **deps:** update dependencies ([#104](https://github.com/remedyred/snickbit.js/issues/104)) ([ee0a82f](https://github.com/remedyred/snickbit.js/commit/ee0a82fa505b6bb7d83203c793b955bcd210f3f5))
* **deps:** update dependencies ([#106](https://github.com/remedyred/snickbit.js/issues/106)) ([e47652a](https://github.com/remedyred/snickbit.js/commit/e47652a16d5587a78785b0a5ca62a7f27ad5d419))
* **deps:** update relevant packages to latest ([#105](https://github.com/remedyred/snickbit.js/issues/105)) ([f1014b2](https://github.com/remedyred/snickbit.js/commit/f1014b200756780b02e7d05d9a5cc9ef43c2eac1))
* improve multi-spinner handling with SpinnerChild class ([41014e5](https://github.com/remedyred/snickbit.js/commit/41014e5c8ba22898f696169810cdb54310e01598))
* improve param constraints ([06c9d3e](https://github.com/remedyred/snickbit.js/commit/06c9d3e997514cf2d3be44b2754806c2824211e4))
* improve text and option configurations ([22a0ae8](https://github.com/remedyred/snickbit.js/commit/22a0ae8c2a33437c6c64181352689aad3047798f))
* lint errors ([d0ecb5a](https://github.com/remedyred/snickbit.js/commit/d0ecb5aa6aec593a95467ddc5b30d924c66b1099))
* remove depcheck ([#119](https://github.com/remedyred/snickbit.js/issues/119)) ([0fb970f](https://github.com/remedyred/snickbit.js/commit/0fb970fe23d85f4e678fbdca577c877b059a86fb))
* remove preload_message ([423006f](https://github.com/remedyred/snickbit.js/commit/423006fcef7a627dd787462935b0b4a6d1ad65cf))
* require node v14.17 or higher ([092c0dc](https://github.com/remedyred/snickbit.js/commit/092c0dcb6a1b736ea81559025e3eccc8ede79368))
* return SpinnerChild from start if one is created ([9a841b8](https://github.com/remedyred/snickbit.js/commit/9a841b856e509ebd6937fbb1edb70721bad2f458))
* set Spinnies text correctly during init ([c84f510](https://github.com/remedyred/snickbit.js/commit/c84f510c31f73eb2a0f221aad5ea16b86e051205))
* set status to 'stopped' on stop ([40511bb](https://github.com/remedyred/snickbit.js/commit/40511bb9cecfb289944ba7d117c4856ac816b32e))
* update dependencies ([#111](https://github.com/remedyred/snickbit.js/issues/111)) ([7390370](https://github.com/remedyred/snickbit.js/commit/73903708c67c80cf51ffe927b6c5fb157f6de251))
* update options during start ([5e8146c](https://github.com/remedyred/snickbit.js/commit/5e8146c7c082f95aa02afae474d6a9224312499c))
* use pick to check for spinner existence. ([b95a26a](https://github.com/remedyred/snickbit.js/commit/b95a26abfbef5966b8701f438aa7bb62922b63be))


### Reverts

* update @snickbit/utilities to 3.4.17 ([859ba77](https://github.com/remedyred/snickbit.js/commit/859ba7791bfcc71d3bde5f6b1f367ee70326035b))
* update @snickbit/utilities to 3.4.17 in @snickbit/controller ([ef7f46f](https://github.com/remedyred/snickbit.js/commit/ef7f46f75282e8b30336b592e7b3777f1524c23b))
