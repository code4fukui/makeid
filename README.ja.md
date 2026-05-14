# makeid

さまざまな一意な識別子（ユニークID）を生成・比較するためのウェブツールです。

## デモ

[**https://code4fukui.github.io/makeid/**](https://code4fukui.github.io/makeid/)

ウェブインターフェースには、異なるアルゴリズムで生成されたIDのリストが表示されます。「generate」ボタンをクリックすると、新しいIDのセットが作成されます。

*視覚的説明: ページは2カラムのレイアウトになっています。左側のカラムにはIDの種類（uuid, ulid, cuid, nanoid, tid）が並び、右側のカラムには対応する生成されたIDが入力フィールドに表示されます。*

## 機能

- UUID、ULID、CUID、Nanoid、TIDの5種類の一意な識別子を生成します。
- IDを即座に生成して比較できるシンプルなウェブインターフェース。
- 主要な生成ライブラリのパフォーマンスベンチマークが含まれています。

## 使い方

1. [デモページ](https://code4fukui.github.io/makeid/)を開きます。
2. ページに、新しく生成されたIDのセットが表示されます。
3. **generate**ボタンをクリックして、新しいIDを作成します。

## パフォーマンス

`performance.js` で測定した、1,000,000個のIDを生成した際のベンチマーク結果です。なお、TIDはこのベンチマークに含まれていません。

| タイプ | 時間 (秒) | ID例 | 長さ |
|--------|-----------|------|------|
| uuid   | 0.350     | `a079b64a-c8ac-4651-9c30-07c49ea978f5` | 36 |
| nanoid | 0.780     | `mKm0GvN-n7jV9f8_4mmI0` | 21 |
| ulid   | 3.893     | `01GW9WAE5ZTK05Z8XN0GTESM5C` | 26 |
| cuid   | 9.204     | `mi0ik4y5l9w7lpe9od943law` | 24 |

## 依存ライブラリ

このツールは以下のライブラリを使用しています:

- [UUID](https://github.com/code4fukui/UUID)
- [ulid](https://github.com/code4fukui/ulid)
- [cuid](https://github.com/code4fukui/cuid)
- [nanoid](https://github.com/code4fukui/nanoid)
- [TID](https://github.com/code4fukui/TID)

## ライセンス

MIT License
