# Changelog

All notable changes to this project will be documented in this file. The format
is based on [Keep a Changelog](http://keepachangelog.com), and this project
attempts to adhere to [Semantic Versioning](http://semver.org).

## [Unreleased]

## [0.2.0] - 2023-03-26

### Added

- The `sendMoney` function now takes an optional `destinationTag` (e.g. for
including a memo for XLM transactions)

### Changed

- The underlying retry mechanism now uses
[axios-retry](https://github.com/softonic/axios-retry) instead of
[retry-axios](https://github.com/JustinBeckwith/retry-axios)

## 0.1.0 - 2021-06-12

### Added

- Initial release

[Unreleased]: https://github.com/dguo/coinbase-js/compare/v0.2.0...HEAD
[0.2.0]: https://github.com/dguo/coinbase-js/compare/v0.1.0...v0.2.0
