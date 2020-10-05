# baidu-translate-generater
A command line tool to generate baidu-translate link for scripts.
Usage:

```shell
echo hello | node main.js | xargs curl -s | jq .trans_result[0].dst
```

can be a part of your terminal-oriented api.
