# DSH 本地插件集

自用的 DeepSeek Harness 插件与 Agent 定义，包含：

| 目录 | 内容 |
|---|---|
| `dsh-azure-maid/` | 主题插件：天蓝渐变 + 女仆启动睁眼动画 + 右下角挂件与自动冒话 |
| `dsh-agent-ai-video/` | Agent preset：AI 视频导演（导演台 v34 + 五条铁律 + 6×N 审稿） |
| `dsh-agent-pilates/` | Agent preset：普拉提工作室（教练 + 获客 + 客户管理 + 私域 + 自媒体） |
| `agents/` | 上面两个 Agent 的人设、规则、知识与验收标准源文件 |

## 安装

```powershell
git clone https://github.com/zhang2026bin/dsh-plugins.git
cd dsh-plugins
.\install.ps1
```

脚本会改写两个 Agent preset 里的绝对路径、安装三个插件包、并把它们写进 profile 的 `dsh.profile.bundles`。完成后重启应用。

> 需要 `dsh` 命令在 PATH 中。如果只想要主题，可以单独装：
> `dsh plugin --profile desktop add "file:.\dsh-azure-maid"`，再加 `"dsh-azure-maid"` 到 bundles。

也可以直接用 Git URL（把 `<user>` 换成仓库所有者，`<commit>` 换成 40 位 commit）：

```powershell
dsh plugin --profile desktop add "git+https://github.com/<user>/dsh-plugins.git#<commit>&path:/dsh-azure-maid"
```

## 说明

- `dsh-azure-maid` 的 `lib/client.js` 已内联图片，体积约 300 KB，安装后无需额外资源。
- 主题源码是 dsh-azure-maid/lib/client.v5.template.js；用构建脚本内联图片后生成 client.js（仓库存的是已构建产物，v1–v4 历史模板已删除）。
- 两个 preset 会读取 `agents/` 下的绝对路径文件；如果你放在别处，需要同步改 `cordis.patch.yml` 里的路径。
- `agents/*/knowledge` 里的部分内容（如普拉提专业基线）是通用基线，需专业教练复核后使用。
