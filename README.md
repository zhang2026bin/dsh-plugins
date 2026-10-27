# DSH 本地插件集

自用的 DeepSeek Harness 插件与 Agent 定义，包含：

| 目录 | 内容 |
|---|---|
| `dsh-azure-maid/` | 主题插件：天蓝渐变 + 女仆启动睁眼动画 + 右下角挂件与自动冒话 |
| `dsh-agent-ai-video/` | Agent preset：AI 视频导演（导演台 v34 + 五条铁律 + 6×N 审稿） |
| `dsh-agent-pilates/` | Agent preset：普拉提工作室（教练 + 获客 + 客户管理 + 私域 + 自媒体） |
| `agents/` | 上面两个 Agent 的人设、规则、知识与验收标准源文件 |

## 安装

插件包用 DSH CLI 装进 profile：

```powershell
dsh plugin --profile desktop add "file:<本仓库路径>/dsh-azure-maid"
dsh plugin --profile desktop add "file:<本仓库路径>/dsh-agent-ai-video"
dsh plugin --profile desktop add "file:<本仓库路径>/dsh-agent-pilates"
```

然后在 `~/.dsh/profiles/desktop/package.json` 的 `dsh.profile.bundles` 里追加：

```json
"dsh-azure-maid",
"dsh-agent-ai-video",
"dsh-agent-pilates"
```

重启应用生效。

也可以直接用 Git URL（把 `<user>` 换成仓库所有者，`<commit>` 换成 40 位 commit）：

```powershell
dsh plugin --profile desktop add "git+https://github.com/<user>/dsh-plugins.git#<commit>&path:/dsh-azure-maid"
```

## 说明

- `dsh-azure-maid` 的 `lib/client.js` 已内联图片，体积约 300 KB，安装后无需额外资源。
- 两个 preset 会读取 `agents/` 下的绝对路径文件；如果你放在别处，需要同步改 `cordis.patch.yml` 里的路径。
- `agents/*/knowledge` 里的部分内容（如普拉提专业基线）是通用基线，需专业教练复核后使用。
