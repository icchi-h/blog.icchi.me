---
title: SainSmart製 Arduino mega 2560 互換ボードでLチカしてみる
date: 2014-07-30T09:00:00.000Z
slug: /try-led-chika-with-arduinomega2560
category: 電子工作
tags:
  - 電子工作
  - Lチカ
  - Arduino
keywords:
  - Lチカ
  - Arduino
  - Arduino Mega 2560
  - SainSmart
thumbnail: 2014/07/try-led-chika-with-arduinomega2560/thumbnail.jpg
---

![](./thumbnail.jpg)

おうちはっくに向けてラズパイやら Arduino やらを適当に買い揃えています icchi です.

SainSmart 製の Arduino mega の互換ボードを amazon で購入し, 動作チェックを兼ねて L チカしてみました. 使うにあたって IDE 設定の変更もしたのでそれをメモしておきます.

## 実際の動作

<iframe width="560" height="315" src="https://www.youtube.com/embed/0PRSH5ESbRo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 準備

使ったものは以下の 2 つだけ

- [サインスマート（SainSmart） MEGA2560 互換ボード R3](https://www.amazon.co.jp/%E3%82%B5%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%9E%E3%83%BC%E3%83%88%EF%BC%88SainSmart%EF%BC%89-101-52-102-MEGA2560-%E4%BA%92%E6%8F%9B%E3%83%9C%E3%83%BC%E3%83%89-R3/dp/B00CF2REXC%3Fpsc%3D1%26SubscriptionId%3DAKIAIRLTYCBPDAPE5LIQ%26tag%3Dharuyuki04-22%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB00CF2REXC)
- 赤色 LED 5mm

今回初めて, Arduino は純正品ではなく Amazon で売っている互換品のものを購入しました. 理由は単純に安いから. 純正品の Arduino mega 2560 R3 が約 6000 円なのに対して SainSmart 製の互換ボードはその半分ほどの値段で購入できます. 海外サイトならもっとやすく購入できるでしょう.

こちらのサイトで紹介されている同製品は少しハンダ付けが荒いように感じますが, 今回届いたものは綺麗な製品でした. 運が良かったのか品質が改善されたのか...

あと本体に加えて接続用の USB ケーブルも付いてきました.

![](./process2.jpg)

## IDE の設定変更

コードの書き込みは公式の Arduino IDE を利用.

メニューバーのツールから以下の項目を画像のように設定.

![](process7.jpg)

![](process8.jpg)

![](process9.jpg)

## 回路

面倒だったので赤色 LED を本体に直刺し. 13pin に LED の+を, GND に-をセット.

![](./circuit-figure.png)

## プログラム

以下の L チカするコードを書き込み.

```c
void setup() {
  pinMode(13, OUTPUT);
}

void loop() {
  digitalWrite(13, HIGH);   // set the LED on
  delay(1000);              // wait for a second
  digitalWrite(13, LOW);    // set the LED off
  delay(1000);              // wait for a second
}
```
