! function(t) {
  CTNewsInformer = function() {
    function t(t) {
      var e = document.createElement("style");
      e.innerText = "#WIDGET [data-simplebar]{position:relative;z-index:0;overflow:hidden;-webkit-overflow-scrolling:touch}#WIDGET [data-simplebar=init]{display:-webkit-box;display:-ms-flexbox;display:flex}#WIDGET .simplebar-scroll-content{overflow-x:hidden;overflow-y:scroll;min-width:100%;-webkit-box-sizing:content-box;box-sizing:content-box}#WIDGET .simplebar-content{overflow-x:scroll;overflow-y:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;min-height:100%}#WIDGET .simplebar-track{z-index:1;border-radius:7px;position:absolute;right:0;bottom:0;width:7px;background-color:#b0bec5}#WIDGET .simplebar-scrollbar{position:absolute;right:0;border-radius:7px;min-height:10px;width:7px;opacity:0;-webkit-transition:opacity .2s linear;transition:opacity .2s linear;background-color:#546e7a;background-clip:padding-box}#WIDGET .simplebar-track:hover .simplebar-scrollbar{opacity:.5;-webkit-transition:opacity 0 linear;transition:opacity 0 linear}#WIDGET .simplebar-track .simplebar-scrollbar.visible{opacity:.5}#WIDGET .simplebar-track.horizontal{left:0;width:auto;height:11px}#WIDGET .simplebar-track.vertical{top:0}#WIDGET .horizontal.simplebar-track .simplebar-scrollbar{right:auto;top:0;height:7px;min-height:0;min-width:10px;width:auto}#WIDGET .ct-widget-container{min-width:100%; font-family:'Open Sans',Helvetica,sans-serif!important;font-size:16px!important;line-height:1.416!important}#WIDGET .ct-widget{width:100%;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:2px;padding:16px;padding-right:7px}#WIDGET .ct-widget::before{content:'';display:block;position:absolute;left:25px;right:25px;top:0;bottom:0;z-index:1}#WIDGET .ct-widget.ct-widget_theme_dark{background-color:#253137}#WIDGET .ct-widget.ct-widget_theme_dark::before{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTI3cHgiIGhlaWdodD0iMTIwcHgiIHZpZXdCb3g9IjAgMCAxMjcgMTIwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OC4yICg0NzMyNykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+Q1QgaWNvbiBtb25vVzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJOZXdzLVdpZGdldDIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjMyLjAwMDAwMCwgLTIwOS4wMDAwMDApIiBvcGFjaXR5PSIwLjI0MjY0MDM5OSI+CiAgICAgICAgPGcgaWQ9IjMwMC14LTQyMC1BcnRpY2xlcy1EYXJrLTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExNDkuMDAwMDAwLCA0NC4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNCI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJDVC1pY29uLW1vbm9XIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG92ZXJsYXk7IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4My4wMDAwMDAsIDE2NS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTczLjMyNDYxNzMsODguODI1Njg4MSBMNTIuMjQzNzg5Nyw5OC4yNzUyMjk4IEw1Mi4yNDM3ODk3LDk3LjMzMDI3NTQgQzQ4LjE3OTg2MTIsOTguNDAyNTc1IDQzLjY3NTQ3MTcsOTkuMDIxNDU5MSAzOS40MTE5ODE4LDk5LjIyMDE4MzMgQzE5LjU4NTU0MTEsOTkuMDIxNDU5MSAzLjg0ODY4NzE1LDg4LjMyMzYwNTIgMy42NjYyMzA4Niw3NS41OTYzMzAyIEwzLjY2NjIzMDg2LDcwLjg3MTU1OTYgQzEwLjE3NzYzOTMsODAuNjMxNzU5NyAyMy40MzQyMjg0LDg3LjE3NDI0ODkgMzkuNDExOTgxOCw4Ni45MzU3Nzk4IEM0NC44MTU4MjM2LDg3LjE3NDI0ODkgNTAuMzQ2NTI5NSw4Ni4yOTAxMjg3IDU0Ljk5MzQ2Myw4NS4wNDU4NzE1IEw1Ni44MjY1Nzg0LDgwLjMyMTEwMDkgQzUxLjMxNTgyODUsODIuMDE2ODgxMiA0NS4zMDA0NzMxLDgzLjE5NTcwODIgMzkuNDExOTgxOCw4My4xNTU5NjMzIEMxOS41ODU1NDExLDgzLjE5NTcwODIgMy44NDg2ODcxNSw3Mi40OTc4NTQxIDMuNjY2MjMwODYsNTkuNTMyMTEgTDMuNjY2MjMwODYsNTUuNzUyMjkzNiBDMTAuMTc3NjM5Myw2NC43NzY1MzggMjMuNDA1NzE5NSw3MS4zMTkwMjcxIDM5LjQxMTk4MTgsNzAuODcxNTU5NiBDNDYuNjExODc3NSw3MS4zMTkwMjcxIDUzLjY1MzU0OTUsNjkuNzU3MDgxNiA1OS41NzYyNTE1LDY3LjA5MTc0MzIgTDYwLjQ5MjgwOTIsNjIuMzY2OTcyNSBDNTQuNzA4Mzc1LDY1LjUxMzMwNDggNDcuMjEwNTYyMyw2Ny4zNDA0ODY0IDM5LjQxMTk4MTgsNjcuMDkxNzQzMiBDMTkuNTg1NTQxMSw2Ny4zNDA0ODY0IDMuODQ4Njg3MTUsNTYuNjQyNjMyNCAzLjY2NjIzMDg2LDQzLjQ2Nzg5IEwzLjY2NjIzMDg2LDM5LjY4ODA3MzQgQzEwLjE3NzYzOTMsNDguOTIxMzE2MSAyMy40MzQyMjg0LDU1LjQ2MzgwNTQgMzkuNDExOTgxOCw1NS43NTIyOTM2IEM0OC40OTM0NTgsNTUuNDYzODA1NCA1Ny4xMDMxMTM3LDUyLjk4ODI2OSA2NC4xNTkwNDAxLDQ5LjEzNzYxNDcgTDY1LjA3NTU5NzgsNDMuNDY3ODkgQzU4LjY3MTA5NzQsNDguMzYxMzczNCA0OS4zMjAyMTMsNTEuNTE0NzM1MyAzOS40MTE5ODE4LDUxLjk3MjQ3NyBDMTkuNTg1NTQxMSw1MS41MTQ3MzUzIDMuODQ4Njg3MTUsNDAuODE2ODgxMiAzLjY2NjIzMDg2LDI3LjQwMzY2OTggQzMuODQ4Njg3MTUsMTQuNjQ2OTI0MiAxOS41ODU1NDExLDMuOTQ5MDcwMSAzOS40MTE5ODE4LDMuNzc5ODE2NTEgQzUxLjIzMDMwMjIsMy45NDkwNzAxIDYyLjIwNjE4NzcsOC4yMjIzMTc2MSA2OC43NDE4Mjg2LDE1LjExOTI2NiBMNjkuMzc4MzI3LDE2LjIxMjk2MyBMNzQsMTYuMjMxNzg0MSBMNzMuMzI0NjE3MywxNS4xMTkyNjYgQzY2LjgyNDYxMjIsNi4wMTIwMTcxNyA1My44MjQ2MDI0LDAgMzkuNDExOTgxOCwwIEMxNy40NzU4OTA1LDAgMCwxMi40NjYwOTQ0IDAsMjcuNDAzNjY5OCBMMCwyOC4zNDg2MjM4IEwwLDc2LjU0MTI4NDQgQzAuNzY5NzM3NDI4LDkxLjEyMzMxOTEgMTcuODQ2NTA0OCwxMDMgMzkuNDExOTgxOCwxMDMgQzUzLjY1MzU0OTUsMTAzIDY2LjQ1Mzk5NzksOTcuMjIzNzQ4NiA3My4zMjQ2MTczLDg4LjgyNTY4ODEgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik02NC4wOTY3NzQyLDEyMCBMNzEuODM4NzA5Nyw4Ny41MTc4NTcxIEw0OS41ODA2NDUyLDk3LjA3MTQyODYgTDYzLjEyOTAzMjMsNDAuNzA1MzU3MSBMMzcsNDAuNzA1MzU3MSBMNDMuNzc0MTkzNSwxMyBMMTI3LDEzIEwxMjAuMjI1ODA2LDQwLjcwNTM1NzEgTDkzLjEyOTAzMjMsNDAuNzA1MzU3MSBMODcuMzIyNTgwNiw1NS45OTEwNzE0IEwxMTcuMzIyNTgxLDQzLjU3MTQyODYgTDY0LjA5Njc3NDIsMTIwIFogTTc3LjY0NTE2MTMsODAuODMwMzU3MSBMNzMuNzc0MTkzNSw5OS45Mzc1IEwxMDUuNzA5Njc3LDUyLjE2OTY0MjkgTDc5LjU4MDY0NTIsNjMuNjMzOTI4NiBMOTEuMTkzNTQ4NCwzNi44ODM5Mjg2IEwxMTcuMzIyNTgxLDM2Ljg4MzkyODYgTDEyMi4xNjEyOSwxNi44MjE0Mjg2IEw0Ni42Nzc0MTk0LDE2LjgyMTQyODYgTDQxLjgzODcwOTcsMzYuODgzOTI4NiBMNjcuOTY3NzQxOSwzNi44ODM5Mjg2IEw1NS4zODcwOTY4LDkwLjM4MzkyODYgTDc3LjY0NTE2MTMsODAuODMwMzU3MSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==);background-position:center center;background-repeat:no-repeat;opacity:.24}#WIDGET .ct-widget.ct-widget_theme_light{background-color:#fafafa}#WIDGET .ct-widget.ct-widget_theme_light::before{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTI3cHgiIGhlaWdodD0iMTIwcHgiIHZpZXdCb3g9IjAgMCAxMjcgMTIwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OC4yICg0NzMyNykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+Q1QgaWNvbiBtb25vRzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJOZXdzLVdpZGdldDIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MTIuMDAwMDAwLCAtMTEzLjAwMDAwMCkiIG9wYWNpdHk9IjAuMDU0NDYxMDUwNyI+CiAgICAgICAgPGcgaWQ9IjMwMC14LTI1MC1BcnRpY2xlcy1XaGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTI1LjAwMDAwMCwgNDQuMDAwMDAwKSIgZmlsbD0iIzI1MzEzNyIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9IkNULWljb24tbW9ub0ciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg3LjAwMDAwMCwgNjkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMiI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTc0LjMxNTQ5MDUsODcuMTAwOTE3NSBMNTIuOTQ5Nzg2OSw5Ni4zNjY5NzI5IEw1Mi45NDk3ODY5LDk1LjQ0MDM2NzEgQzQ4LjgzMDk0MDQsOTYuNDkxODQ1NCA0NC4yNjU2ODA4LDk3LjA5ODcxMjMgMzkuOTQ0NTc2Miw5Ny4yOTM1Nzc3IEMxOS44NTAyMTA2LDk3LjA5ODcxMjMgMy45MDA2OTY0Myw4Ni42MDg1ODM3IDMuNzE1Nzc0NTIsNzQuMTI4NDQwMyBMMy43MTU3NzQ1Miw2OS40OTU0MTI4IEMxMC4zMTUxNzUsNzkuMDY2MDk0NSAyMy43NTA5MDcyLDg1LjQ4MTU0NTEgMzkuOTQ0NTc2Miw4NS4yNDc3MDY0IEM0NS40MjE0NDI4LDg1LjQ4MTU0NTEgNTEuMDI2ODg4LDg0LjYxNDU5MjIgNTUuNzM2NjE3OSw4My4zOTQ0OTU0IEw1Ny41OTQ1MDUxLDc4Ljc2MTQ2NzkgQzUyLjAwOTI4NTcsODAuNDI0MzIwNCA0NS45MTI2NDE2LDgxLjU4MDI1NzUgMzkuOTQ0NTc2Miw4MS41NDEyODQ0IEMxOS44NTAyMTA2LDgxLjU4MDI1NzUgMy45MDA2OTY0Myw3MS4wOTAxMjg4IDMuNzE1Nzc0NTIsNTguMzc2MTQ2NyBMMy43MTU3NzQ1Miw1NC42Njk3MjQ4IEMxMC4zMTUxNzUsNjMuNTE4NzQxMSAyMy43MjIwMTMsNjkuOTM0MTkxNiAzOS45NDQ1NzYyLDY5LjQ5NTQxMjggQzQ3LjI0MTc2NzcsNjkuOTM0MTkxNiA1NC4zNzg1OTc1LDY4LjQwMjU3NTIgNjAuMzgxMzM2LDY1Ljc4ODk5MDkgTDYxLjMxMDI3OTYsNjEuMTU1OTYzMyBDNTUuNDQ3Njc3NCw2NC4yNDEyMDE4IDQ3Ljg0ODU0MjgsNjYuMDMyOTA0MiAzOS45NDQ1NzYyLDY1Ljc4ODk5MDkgQzE5Ljg1MDIxMDYsNjYuMDMyOTA0MiAzLjkwMDY5NjQzLDU1LjU0Mjc3NTQgMy43MTU3NzQ1Miw0Mi42MjM4NTMzIEwzLjcxNTc3NDUyLDM4LjkxNzQzMTIgQzEwLjMxNTE3NSw0Ny45NzEzODc3IDIzLjc1MDkwNzIsNTQuMzg2ODM4MyAzOS45NDQ1NzYyLDU0LjY2OTcyNDggQzQ5LjE0ODc3NSw1NC4zODY4MzgzIDU3Ljg3NDc3NzQsNTEuOTU5MzcwNiA2NS4wMjYwNTQxLDQ4LjE4MzQ4NjMgTDY1Ljk1NDk5NzgsNDIuNjIzODUzMyBDNTkuNDYzOTUwMSw0Ny40MjIzMTc2IDQ5Ljk4NjcwMjQsNTAuNTE0NDQ5MiAzOS45NDQ1NzYyLDUwLjk2MzMwMjcgQzE5Ljg1MDIxMDYsNTAuNTE0NDQ5MiAzLjkwMDY5NjQzLDQwLjAyNDMyMDQgMy43MTU3NzQ1MiwyNi44NzE1NTk3IEMzLjkwMDY5NjQzLDE0LjM2MjUxNzkgMTkuODUwMjEwNiwzLjg3MjM4OTEzIDM5Ljk0NDU3NjIsMy43MDY0MjIwMiBDNTEuOTIyNjAzNiwzLjg3MjM4OTEzIDYzLjA0NjgxMTgsOC4wNjI2NjA5NiA2OS42NzA3NzIyLDE0LjgyNTY4ODEgTDcwLjMxNTg3MiwxNS44OTgxNDgxIEw3NSwxNS45MTY2MDM4IEw3NC4zMTU0OTA1LDE0LjgyNTY4ODEgQzY3LjcyNzY0NzUsNS44OTUyNzg5NyA1NC41NTE5NjE4LDAgMzkuOTQ0NTc2MiwwIEMxNy43MTIwNTEyLDAgMCwxMi4yMjQwMzQzIDAsMjYuODcxNTU5NyBMMCwyNy43OTgxNjUxIEwwLDc1LjA1NTA0NTggQzAuNzgwMTM5Mjg1LDg5LjM1MzkzNDMgMTguMDg3NjczOCwxMDEgMzkuOTQ0NTc2MiwxMDEgQzU0LjM3ODU5NzUsMTAxIDY3LjM1MjAyNDksOTUuMzM1OTA4OCA3NC4zMTU0OTA1LDg3LjEwMDkxNzUgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTY1LjQ5NDYyMzcsMTIwIEw3My4wNjQ1MTYxLDg4LjEyNSBMNTEuMzAxMDc1Myw5Ny41IEw2NC41NDgzODcxLDQyLjE4NzUgTDM5LDQyLjE4NzUgTDQ1LjYyMzY1NTksMTUgTDEyNywxNSBMMTIwLjM3NjM0NCw0Mi4xODc1IEw5My44ODE3MjA0LDQyLjE4NzUgTDg4LjIwNDMwMTEsNTcuMTg3NSBMMTE3LjUzNzYzNCw0NSBMNjUuNDk0NjIzNywxMjAgWiBNNzguNzQxOTM1NSw4MS41NjI1IEw3NC45NTY5ODkyLDEwMC4zMTI1IEwxMDYuMTgyNzk2LDUzLjQzNzUgTDgwLjYzNDQwODYsNjQuNjg3NSBMOTEuOTg5MjQ3MywzOC40Mzc1IEwxMTcuNTM3NjM0LDM4LjQzNzUgTDEyMi4yNjg4MTcsMTguNzUgTDQ4LjQ2MjM2NTYsMTguNzUgTDQzLjczMTE4MjgsMzguNDM3NSBMNjkuMjc5NTY5OSwzOC40Mzc1IEw1Ni45Nzg0OTQ2LDkwLjkzNzUgTDc4Ljc0MTkzNTUsODEuNTYyNSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);background-position:center center;background-repeat:no-repeat}#WIDGET .ct-widget .ct-widget__header,#WIDGET .ct-widget .ct-widget__body,#WIDGET .ct-widget .ct-widget__footer{position:relative;z-index:3}#WIDGET .ct-widget .ct-widget__header{margin-bottom:14px;font-size:0}#WIDGET .ct-widget .ct-widget__header .ct-widget__tag{font-size:11px;line-height:1.3636;display:inline-block;padding:5px 10px;overflow:hidden;text-align:center}#WIDGET .ct-widget .ct-widget__header .ct-widget__tag_tr{border-radius:0 2px 0 2px;margin:-16px -7px 0 0;float:right}#WIDGET .ct-widget .ct-widget__posts{padding-right:11px}#WIDGET .ct-widget .ct-widget__footer{margin:5px -7px -16px -16px;padding:5px 2px}#WIDGET .ct-widget .ct-widget__powered{font-size:9px;font-weight:600;line-height:13px;display:inline-block;margin:0 10px;vertical-align:middle}#WIDGET .ct-widget .ct-widget__poweredLink{text-decoration:underline}#WIDGET .ct-widget .ct-widget__poweredLink:hover{text-decoration:none}#WIDGET .ct-widget .ct-widget__footer>.ct-widget__powered{display:block;text-align:center}#WIDGET .ct-currency-rates{overflow:hidden;margin:-5px -2px}#WIDGET .ct-currency-rates__row{text-align:left;overflow:hidden;font-size:0;padding:0 0 0 7px}#WIDGET .ct-currency-rates.ct-currency-rates_mini .ct-currency{padding:3px 7px}#WIDGET .ct-currency-rates.ct-currency-rates_big .ct-currency{padding:8px 7px}#WIDGET .ct-currency{display:inline-block;vertical-align:middle;font-size:11px;line-height:15px}#WIDGET .ct-currency .ct-currency__code{vertical-align:bottom}#WIDGET .ct-currency .ct-currency__price{margin:0 2px 0 0;font-weight:700;vertical-align:bottom}#WIDGET .ct-currency .ct-currency__indicator{vertical-align:bottom;padding:0 0 0 9px;display:inline-block;position:relative}#WIDGET .ct-currency .ct-currency__indicator i{position:absolute;vertical-align:middle}#WIDGET .ct-currency .ct-currency__indicator_down i{display:inline-block;border:4px solid transparent;border-top:5px solid;width:0;height:0;top:6px;left:0}#WIDGET .ct-currency .ct-currency__indicator_up i{display:inline-block;border:4px solid transparent;border-bottom:5px solid;width:0;height:0;bottom:5px;left:0}#WIDGET .ct-logotype{text-decoration:none!important;display:inline-block;vertical-align:middle}#WIDGET .ct-post__meta{display:block}#WIDGET .ct-post__text{margin:0;padding:0}#WIDGET .ct-post__link{text-decoration:none;color:inherit;font-size:12px;line-height:17px;display:inline-block}#WIDGET .ct-post_text+.ct-post_text{border-top:1px solid;margin-top:16px;padding-top:6px}#WIDGET .ct-post_image{overflow:hidden}#WIDGET .ct-post_image+.ct-post_image{margin-top:12px;padding-top:14px;border-top:1px solid}#WIDGET .ct-post_image .ct-post__meta{float:left;width:85px}#WIDGET .ct-post_image .ct-post__image{display:block;max-width:100%;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.24);box-shadow:0 2px 4px 0 rgba(0,0,0,.24)}#WIDGET .ct-post_image .ct-post__text{margin-left:93px;font-weight:600}#WIDGET .ct-widget.ct-widget_theme_dark{color:#b0bec5}#WIDGET .ct-widget.ct-widget_theme_dark .ct-logotype{background:url(data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyAgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQnIFsKCTwhRU5USVRZIG5zX2V4dGVuZCAiaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNpYmlsaXR5LzEuMC8iPgoJPCFFTlRJVFkgbnNfYWkgImh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyI+Cgk8IUVOVElUWSBuc19ncmFwaHMgImh0dHA6Ly9ucy5hZG9iZS5jb20vR3JhcGhzLzEuMC8iPgoJPCFFTlRJVFkgbnNfdmFycyAiaHR0cDovL25zLmFkb2JlLmNvbS9WYXJpYWJsZXMvMS4wLyI+Cgk8IUVOVElUWSBuc19pbXJlcCAiaHR0cDovL25zLmFkb2JlLmNvbS9JbWFnZVJlcGxhY2VtZW50LzEuMC8iPgoJPCFFTlRJVFkgbnNfc2Z3ICJodHRwOi8vbnMuYWRvYmUuY29tL1NhdmVGb3JXZWIvMS4wLyI+Cgk8IUVOVElUWSBuc19jdXN0b20gImh0dHA6Ly9ucy5hZG9iZS5jb20vR2VuZXJpY0N1c3RvbU5hbWVzcGFjZS8xLjAvIj4KCTwhRU5USVRZIG5zX2Fkb2JlX3hwYXRoICJodHRwOi8vbnMuYWRvYmUuY29tL1hQYXRoLzEuMC8iPgpdPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNjUuMyA2MSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCB5PSIwIiB4PSIwIiBoZWlnaHQ9IjEiIHdpZHRoPSIxIiByZXF1aXJlZEV4dGVuc2lvbnM9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIvPjxnPjxwYXRoIGQ9Ik0zNSA0NS4xYy0zLjMgMy04LjcgNC45LTE0LjcgNC45QzEwLjIgNTAgMiA0NC42IDIgMzh2LTJjMy4zIDQuNyAxMC4yIDggMTguMyA4IDMuNSAwIDYuOC0uNiA5LjctMS43bC42LTIuNGMtMi45IDEuMy02LjUgMi4xLTEwLjMgMi4xQzEwLjIgNDIgMiAzNi42IDIgMzB2LTJjMy4zIDQuNyAxMC4yIDggMTguMyA4IDQuNSAwIDguNi0xIDExLjktMi43bC43LTIuNmMtMy4zIDIuMS03LjcgMy4zLTEyLjYgMy4zQzEwLjIgMzQgMiAyOC42IDIgMjJ2LTJjMy4zIDQuNyAxMC4yIDggMTguMyA4IDUuNiAwIDEwLjYtMS42IDE0LjMtNC4xbC44LTMuMkMzMiAyMy45IDI2LjUgMjYgMjAuMyAyNiAxMC4yIDI2IDIgMjAuNiAyIDE0UzEwLjIgMiAyMC4zIDJjNyAwIDEzLjIgMi42IDE2LjIgNi41aDIuNEMzNS44IDMuNSAyOC42IDAgMjAuMyAwIDkuMSAwIDAgNi4zIDAgMTR2MjQuNUMuNCA0NiA5LjMgNTIgMjAuMyA1MmM4LjUgMCAxNS44LTMuNiAxOC44LTguOEwzNSA0NS4xeiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0zNC4zIDYxbDMuOC0xNi4zLTExIDVMMzQuMiAyMWgtMTNsMi45LTEzLjVoNDEuMWwtMy41IDE0aC0xM2wtMy4zIDcuNiAxNC44LTYuNEwzNC4zIDYxem02LjYtMTkuN0wzOC43IDUxbDE2LjEtMjMuNy0xMy4yIDUuNiA1LjctMTMuNGgxMi45bDIuNS0xMEgyNS44TDIzLjcgMTloMTNMMzAgNDYuMmwxMC45LTQuOXoiIGZpbGw9IiNFOUM2NDciLz48L2c+PC9zd2l0Y2g+PC9zdmc+Cg==) no-repeat 0 0;width:25px;height:21px;background-size:25px 21px}#WIDGET .ct-widget.ct-widget_theme_dark .ct-widget__tag{background:#465a65;color:#afbdc4}#WIDGET .ct-widget.ct-widget_theme_dark .ct-currency-rates{background-color:rgba(55,72,82,.9)}#WIDGET .ct-widget.ct-widget_theme_dark .ct-currency-rates .ct-currency__code{color:#fb0}#WIDGET .ct-widget.ct-widget_theme_dark .ct-currency-rates .ct-currency__price{color:#fff}#WIDGET .ct-widget.ct-widget_theme_dark .ct-currency-rates .ct-currency__indicator_down{color:#ff919f}#WIDGET .ct-widget.ct-widget_theme_dark .ct-currency-rates .ct-currency__indicator_up{color:#7ed321}#WIDGET .ct-widget.ct-widget_theme_dark .ct-post{border-color:#2e3d44}#WIDGET .ct-widget.ct-widget_theme_dark .ct-widget__powered{color:#b0bec5}#WIDGET .ct-widget.ct-widget_theme_dark .ct-widget__poweredLink{color:#fb0}#WIDGET .ct-widget.ct-widget_theme_light{color:#253137}#WIDGET .ct-widget.ct-widget_theme_light .ct-logotype{background:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNCI+PGcgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0ZCMCIgZD0iTTEzLjM2NiAyMy4yNTNsMS40NS02LjIwNy00LjE5IDEuOTAzTDEzLjMzIDguMDI1SDguMzc3TDkuNDggMi44OWgxNS42N2wtMS4zMzYgNS4zMjhIMTguODZMMTcuNiAxMS4xMTJsNS42NDYtMi40MzUtOS44ODIgMTQuNTc2em0yLjUyLTcuNDk4bC0uODM4IDMuNjkzIDYuMTM4LTkuMDItNS4wMzQgMi4xMjggMi4xNzUtNS4xMDJoNC45MmwuOTUyLTMuODA2SDEwLjEyNmwtLjggMy42Mmg0Ljk1NmwtMi41NTMgMTAuMzUgNC4xNTYtMS44NjN6Ii8+PHBhdGggZmlsbD0iIzI1MzEzNyIgZD0iTTE0LjgwNCAxNy4wNTJsLTQuMTggMS44OTcuMDU4LS4yMjdjLS44Mi4yMi0xLjcxNi4zNC0yLjY1LjM0LTMuODUgMC02Ljk3Ny0yLjA1Ni02Ljk3Ny00LjU3di0uNzU0YzEuMjU3IDEuNzkgMy44OSAzLjA0NiA2Ljk3NyAzLjA0NiAxLjE2IDAgMi4yNi0uMTcgMy4yNS0uNDkzbC4yMi0uODgzYTkuOTE1IDkuOTE1IDAgMCAxLTMuNDcuNjEyYy0zLjg1IDAtNi45NzctMi4wNTYtNi45NzctNC41N3YtLjc2YzEuMjU3IDEuNzkgMy44ODUgMy4wNDcgNi45NzcgMy4wNDcgMS41MTcgMCAyLjkxNi0uMyA0LjA4OC0uODE2bC4yMjctLjkyM2MtMS4xOS42MjQtMi42OC45NzUtNC4zMTUuOTc1LTMuODUgMC02Ljk3Ny0yLjA1Ni02Ljk3Ny00LjU3di0uNzZjMS4yNTcgMS43OSAzLjg5IDMuMDQ4IDYuOTc3IDMuMDQ4IDEuODkgMCAzLjYtLjQ3NiA0Ljk1LTEuMjQ2bC4yNjUtMS4wODJjLTEuMzAyLjk2My0zLjE2IDEuNTctNS4yMTUgMS41Ny0zLjg1IDAtNi45NzctMi4wNTctNi45NzctNC41NyAwLTIuNTE1IDMuMTI2LTQuNTcgNi45NzctNC41NyAyLjQzNSAwIDQuNjE1LjgyIDUuODQ0IDIuMDk1aC45OEMxMy41NjMgMS4xOSAxMC45OC4wMzUgOC4wMy4wMzVjLTQuMjcgMC03Ljc0IDIuMzk2LTcuNzQgNS4zM3Y5LjMyNmMuMTUyIDIuODU1IDMuNTQ0IDUuMTM3IDcuNzQgNS4xMzcgMi45MTYgMCA1LjQ2LTEuMTEgNi43NzItMi43NzV6Ii8+PC9nPjwvc3ZnPg0K) no-repeat 0 0;width:23px;height:21px;background-size:23px 21px;overflow:hidden}#WIDGET .ct-widget.ct-widget_theme_light .ct-widget__tag{background:#eceff1;color:#253137}#WIDGET .ct-widget.ct-widget_theme_light .ct-post{border-color:#d7dddf}#WIDGET .ct-widget.ct-widget_theme_light .ct-currency-rates{background-color:rgba(236,239,241,.8)}#WIDGET .ct-widget.ct-widget_theme_light .ct-currency-rates .ct-currency__code{color:#546e7a}#WIDGET .ct-widget.ct-widget_theme_light .ct-currency-rates .ct-currency__price{color:#253137}#WIDGET .ct-widget.ct-widget_theme_light .ct-currency-rates .ct-currency__indicator_down{color:#d0021b}#WIDGET .ct-widget.ct-widget_theme_light .ct-currency-rates .ct-currency__indicator_up{color:#417505}#WIDGET .ct-widget.ct-widget_theme_light .ct-widget__powered{color:#546e7a}#WIDGET .ct-widget.ct-widget_theme_light .ct-widget__poweredLink{color:#253137}#WIDGET .ct-widget.ct-widget_size_sm::before,#WIDGET .ct-widget.ct-widget_size_md::before,#WIDGET .ct-widget.ct-widget_size_md_wide::before,#WIDGET .ct-widget.ct-widget_size_lg::before{background-position:center right}#WIDGET .ct-widget.ct-widget_size_sm.ct-widget_images .ct-widget__body,#WIDGET .ct-widget.ct-widget_size_md.ct-widget_images .ct-widget__body,#WIDGET .ct-widget.ct-widget_size_md_wide.ct-widget_images .ct-widget__body,#WIDGET .ct-widget.ct-widget_size_lg.ct-widget_images .ct-widget__body{margin:0 0 0 -16px;overflow:hidden;font-size:0}#WIDGET .ct-widget.ct-widget_size_sm .ct-post_image,#WIDGET .ct-widget.ct-widget_size_md .ct-post_image,#WIDGET .ct-widget.ct-widget_size_md_wide .ct-post_image,#WIDGET .ct-widget.ct-widget_size_lg .ct-post_image{border:0;padding-top:0;width:50%;display:inline-block;vertical-align:top;padding-left:16px;padding-right:16px;margin-bottom:16px;-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:10px}#WIDGET .ct-widget.ct-widget_size_sm .ct-post__link,#WIDGET .ct-widget.ct-widget_size_md .ct-post__link,#WIDGET .ct-widget.ct-widget_size_md_wide .ct-post__link,#WIDGET .ct-widget.ct-widget_size_lg .ct-post__link{font-size:15px;line-height:20px;font-weight:400}#WIDGET .ct-widget.ct-widget_size_sm .ct-widget__powered,#WIDGET .ct-widget.ct-widget_size_md .ct-widget__powered,#WIDGET .ct-widget.ct-widget_size_md_wide .ct-widget__powered,#WIDGET .ct-widget.ct-widget_size_lg .ct-widget__powered{text-align:left}#WIDGET .ct-widget.ct-widget_size_sm .ct-widget__footer,#WIDGET .ct-widget.ct-widget_size_md .ct-widget__footer,#WIDGET .ct-widget.ct-widget_size_md_wide .ct-widget__footer,#WIDGET .ct-widget.ct-widget_size_lg .ct-widget__footer{margin-top:5px}#WIDGET .ct-widget.ct-widget_size_sm{max-width:768px}#WIDGET .ct-widget.ct-widget_size_md{min-width:768px;max-width:1024px}#WIDGET .ct-widget.ct-widget_size_md_wide{min-width:768px}#WIDGET .ct-widget.ct-widget_size_lg{min-width:768px;max-width:1024px}#WIDGET .ct-widget.ct-widget_size_lg.ct-widget_images{min-width:1024px;max-width:1440px}#WIDGET .ct-widget.ct-widget_size_lg .ct-post_image{width:33.3333%}#WIDGET .ct-widget .ct-widget__footer .ct-logotype{margin:5px 0 4px 5px;overflow:hidden}#WIDGET .ct-widget .ct-widget__footer_yellow{background-color:#fabf2c}#WIDGET .ct-widget .ct-widget__footer_yellow .ct-widget__powered,#WIDGET .ct-widget .ct-widget__footer_yellow .ct-widget__poweredLink{color:#253137}".replace(/(#WIDGET)+/g, "#" + t + " "), document.getElementsByTagName("body")[0].appendChild(e)
    }! function(t, e) {
      "use strict";
      "function" == typeof define && define.amd ? define("ajax", e) : "object" == typeof exports ? exports = module.exports = e() : t.ajax = e()
    }(this, function() {
      "use strict";

      function t(t) {
        return t || null
      }

      function e(t, e, r, c) {
        var a = ["then", "catch", "always"].reduce(function(t, e) {
            return t[e] = function(i) {
              return t[e] = i, t
            }, t
          }, {}),
          u = new XMLHttpRequest,
          l = i(e, r, t);
        return u.open(t, l, !0), u.withCredentials = c.hasOwnProperty("withCredentials"), n(u, c.headers), u.addEventListener("readystatechange", o(a, u), !1), u.send(s(r)), a.abort = function() {
          return u.abort()
        }, a
      }

      function i(t, e, i) {
        if ("get" !== i.toLowerCase() || !e) return t;
        var n = s(e);
        return t + (t.indexOf("?") > -1 ? "&" : "?") + n
      }

      function n(t, e) {
        r(e = e || {}) || (e["Content-Type"] = "application/x-www-form-urlencoded"), Object.keys(e).forEach(function(i) {
          e[i] && t.setRequestHeader(i, e[i])
        })
      }

      function r(t) {
        return Object.keys(t).some(function(t) {
          return "content-type" === t.toLowerCase()
        })
      }

      function o(t, e) {
        return function i() {
          e.readyState === e.DONE && (e.removeEventListener("readystatechange", i, !1), t.always.apply(t, c(e)), e.status >= 200 && e.status < 300 ? t.then.apply(t, c(e)) : t.catch.apply(t, c(e)))
        }
      }

      function c(t) {
        var e;
        try {
          e = JSON.parse(t.responseText)
        } catch (i) {
          e = t.responseText
        }
        return [e, t]
      }

      function s(t) {
        return a(t) ? u(t) : t
      }

      function a(t) {
        return "[object Object]" === Object.prototype.toString.call(t)
      }

      function u(t) {
        return Object.keys(t).reduce(function(e, i) {
          return (e ? e + "&" : "") + l(i) + "=" + l(t[i])
        }, "")
      }

      function l(t) {
        return encodeURIComponent(t)
      }
      return function(i) {
        var n = ["get", "post", "put", "delete"];
        return i = i || {}, i.baseUrl = i.baseUrl || "", i.method && i.url ? e(i.method, i.baseUrl + i.url, t(i.data), i) : n.reduce(function(n, r) {
          return n[r] = function(n, o) {
            return e(r, i.baseUrl + n, t(o), i)
          }, n
        }, {})
      }
    }),
    function(t, e) {
      "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.SimpleBar = e() : t.SimpleBar = e()
    }(this, function() {
      return function(t) {
        function e(n) {
          if (i[n]) return i[n].exports;
          var r = i[n] = {
            i: n,
            l: !1,
            exports: {}
          };
          return t[n].call(r.exports, r, r.exports, e), r.l = !0, r.exports
        }
        var i = {};
        return e.m = t, e.c = i, e.d = function(t, i, n) {
          e.o(t, i) || Object.defineProperty(t, i, {
            configurable: !1,
            enumerable: !0,
            get: n
          })
        }, e.n = function(t) {
          var i = t && t.__esModule ? function() {
            return t.default
          } : function() {
            return t
          };
          return e.d(i, "a", i), i
        }, e.o = function(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 27)
      }([function(t, e, i) {
        var n = i(23)("wks"),
          r = i(12),
          o = i(1).Symbol,
          c = "function" == typeof o;
        (t.exports = function(t) {
          return n[t] || (n[t] = c && o[t] || (c ? o : r)("Symbol." + t))
        }).store = n
      }, function(t, e) {
        var i = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = i)
      }, function(t, e) {
        var i = {}.hasOwnProperty;
        t.exports = function(t, e) {
          return i.call(t, e)
        }
      }, function(t, e) {
        var i = t.exports = {
          version: "2.5.1"
        };
        "number" == typeof __e && (__e = i)
      }, function(t, e, i) {
        var n = i(5),
          r = i(11);
        t.exports = i(7) ? function(t, e, i) {
          return n.f(t, e, r(1, i))
        } : function(t, e, i) {
          return t[e] = i, t
        }
      }, function(t, e, i) {
        var n = i(6),
          r = i(33),
          o = i(34),
          c = Object.defineProperty;
        e.f = i(7) ? Object.defineProperty : function(t, e, i) {
          if (n(t), e = o(e, !0), n(i), r) try {
            return c(t, e, i)
          } catch (t) {}
          if ("get" in i || "set" in i) throw TypeError("Accessors not supported!");
          return "value" in i && (t[e] = i.value), t
        }
      }, function(t, e, i) {
        var n = i(10);
        t.exports = function(t) {
          if (!n(t)) throw TypeError(t + " is not an object!");
          return t
        }
      }, function(t, e, i) {
        t.exports = !i(16)(function() {
          return 7 != Object.defineProperty({}, "a", {
            get: function() {
              return 7
            }
          }).a
        })
      }, function(t, e) {
        var i = Math.ceil,
          n = Math.floor;
        t.exports = function(t) {
          return isNaN(t = +t) ? 0 : (t > 0 ? n : i)(t)
        }
      }, function(t, e) {
        t.exports = function(t) {
          if (void 0 == t) throw TypeError("Can't call method on  " + t);
          return t
        }
      }, function(t, e) {
        t.exports = function(t) {
          return "object" == typeof t ? null !== t : "function" == typeof t
        }
      }, function(t, e) {
        t.exports = function(t, e) {
          return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
          }
        }
      }, function(t, e) {
        var i = 0,
          n = Math.random();
        t.exports = function(t) {
          return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++i + n).toString(36))
        }
      }, function(t, e) {
        t.exports = {}
      }, function(t, e, i) {
        var n = i(23)("keys"),
          r = i(12);
        t.exports = function(t) {
          return n[t] || (n[t] = r(t))
        }
      }, function(t, e, i) {
        var n = i(1),
          r = i(3),
          o = i(4),
          c = i(18),
          s = i(19),
          a = function(t, e, i) {
            var u, l, d, g, h = t & a.F,
              M = t & a.G,
              f = t & a.S,
              p = t & a.P,
              w = t & a.B,
              y = M ? n : f ? n[e] || (n[e] = {}) : (n[e] || {}).prototype,
              N = M ? r : r[e] || (r[e] = {}),
              D = N.prototype || (N.prototype = {});
            M && (i = e);
            for (u in i) l = !h && y && void 0 !== y[u], d = (l ? y : i)[u], g = w && l ? s(d, n) : p && "function" == typeof d ? s(Function.call, d) : d, y && c(y, u, d, t & a.U), N[u] != d && o(N, u, g), p && D[u] != d && (D[u] = d)
          };
        n.core = r, a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, t.exports = a
      }, function(t, e) {
        t.exports = function(t) {
          try {
            return !!t()
          } catch (t) {
            return !0
          }
        }
      }, function(t, e, i) {
        var n = i(10),
          r = i(1).document,
          o = n(r) && n(r.createElement);
        t.exports = function(t) {
          return o ? r.createElement(t) : {}
        }
      }, function(t, e, i) {
        var n = i(1),
          r = i(4),
          o = i(2),
          c = i(12)("src"),
          s = Function.toString,
          a = ("" + s).split("toString");
        i(3).inspectSource = function(t) {
          return s.call(t)
        }, (t.exports = function(t, e, i, s) {
          var u = "function" == typeof i;
          u && (o(i, "name") || r(i, "name", e)), t[e] !== i && (u && (o(i, c) || r(i, c, t[e] ? "" + t[e] : a.join(String(e)))), t === n ? t[e] = i : s ? t[e] ? t[e] = i : r(t, e, i) : (delete t[e], r(t, e, i)))
        })(Function.prototype, "toString", function() {
          return "function" == typeof this && this[c] || s.call(this)
        })
      }, function(t, e, i) {
        var n = i(35);
        t.exports = function(t, e, i) {
          if (n(t), void 0 === e) return t;
          switch (i) {
            case 1:
              return function(i) {
                return t.call(e, i)
              };
            case 2:
              return function(i, n) {
                return t.call(e, i, n)
              };
            case 3:
              return function(i, n, r) {
                return t.call(e, i, n, r)
              }
          }
          return function() {
            return t.apply(e, arguments)
          }
        }
      }, function(t, e, i) {
        var n = i(41),
          r = i(9);
        t.exports = function(t) {
          return n(r(t))
        }
      }, function(t, e) {
        var i = {}.toString;
        t.exports = function(t) {
          return i.call(t).slice(8, -1)
        }
      }, function(t, e, i) {
        var n = i(8),
          r = Math.min;
        t.exports = function(t) {
          return t > 0 ? r(n(t), 9007199254740991) : 0
        }
      }, function(t, e, i) {
        var n = i(1),
          r = n["__core-js_shared__"] || (n["__core-js_shared__"] = {});
        t.exports = function(t) {
          return r[t] || (r[t] = {})
        }
      }, function(t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
      }, function(t, e, i) {
        var n = i(5).f,
          r = i(2),
          o = i(0)("toStringTag");
        t.exports = function(t, e, i) {
          t && !r(t = i ? t : t.prototype, o) && n(t, o, {
            configurable: !0,
            value: e
          })
        }
      }, function(t, e, i) {
        var n = i(9);
        t.exports = function(t) {
          return Object(n(t))
        }
      }, function(t, e, i) {
        "use strict";

        function n(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }

        function r(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
          }
        }

        function c(t, e, i) {
          return e && o(t.prototype, e), i && o(t, i), t
        }
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0, i(28);
        var s = n(i(53)),
          a = n(i(54)),
          u = n(i(56));
        i(57), Object.assign = i(58);
        var l = function() {
          function t(e, i) {
            r(this, t), this.el = e, this.flashTimeout, this.contentEl, this.scrollContentEl, this.dragOffset = {
              x: 0,
              y: 0
            }, this.isVisible = {
              x: !0,
              y: !0
            }, this.scrollOffsetAttr = {
              x: "scrollLeft",
              y: "scrollTop"
            }, this.sizeAttr = {
              x: "offsetWidth",
              y: "offsetHeight"
            }, this.scrollSizeAttr = {
              x: "scrollWidth",
              y: "scrollHeight"
            }, this.offsetAttr = {
              x: "left",
              y: "top"
            }, this.globalObserver, this.mutationObserver, this.resizeObserver, this.currentAxis, this.isRtl, this.options = Object.assign({}, t.defaultOptions, i), this.classNames = this.options.classNames, this.scrollbarWidth = (0, s.default)(), this.offsetSize = 20, this.flashScrollbar = this.flashScrollbar.bind(this), this.onDragY = this.onDragY.bind(this), this.onDragX = this.onDragX.bind(this), this.onScrollY = this.onScrollY.bind(this), this.onScrollX = this.onScrollX.bind(this), this.drag = this.drag.bind(this), this.onEndDrag = this.onEndDrag.bind(this), this.onMouseEnter = this.onMouseEnter.bind(this), this.recalculate = (0, a.default)(this.recalculate, 100, {
              leading: !0
            }), this.init()
          }
          return c(t, [{
            key: "init",
            value: function() {
              this.el.SimpleBar = this, this.initDOM(), this.scrollbarX = this.trackX.querySelector(".".concat(this.classNames.scrollbar)), this.scrollbarY = this.trackY.querySelector(".".concat(this.classNames.scrollbar)), this.isRtl = "rtl" === getComputedStyle(this.contentEl).direction, this.scrollContentEl.style[this.isRtl ? "paddingLeft" : "paddingRight"] = "".concat(this.scrollbarWidth || this.offsetSize, "px"), this.scrollContentEl.style.marginBottom = "-".concat(2 * this.scrollbarWidth || this.offsetSize, "px"), this.contentEl.style.paddingBottom = "".concat(this.scrollbarWidth || this.offsetSize, "px"), 0 !== this.scrollbarWidth && (this.contentEl.style[this.isRtl ? "marginLeft" : "marginRight"] = "-".concat(this.scrollbarWidth, "px")), this.recalculate(), this.initListeners()
            }
          }, {
            key: "initDOM",
            value: function() {
              var t = this;
              if (Array.from(this.el.children).filter(function(e) {
                  return e.classList.contains(t.classNames.scrollContent)
                }).length) this.trackX = this.el.querySelector(".".concat(this.classNames.track, ".horizontal")), this.trackY = this.el.querySelector(".".concat(this.classNames.track, ".vertical")), this.scrollContentEl = this.el.querySelector(".".concat(this.classNames.scrollContent)), this.contentEl = this.el.querySelector(".".concat(this.classNames.content));
              else {
                for (this.scrollContentEl = document.createElement("div"), this.contentEl = document.createElement("div"), this.scrollContentEl.classList.add(this.classNames.scrollContent), this.contentEl.classList.add(this.classNames.content); this.el.firstChild;) this.contentEl.appendChild(this.el.firstChild);
                this.scrollContentEl.appendChild(this.contentEl), this.el.appendChild(this.scrollContentEl)
              }
              if (!this.trackX || !this.trackY) {
                var e = document.createElement("div"),
                  i = document.createElement("div");
                e.classList.add(this.classNames.track), i.classList.add(this.classNames.scrollbar), e.appendChild(i), this.trackX = e.cloneNode(!0), this.trackX.classList.add("horizontal"), this.trackY = e.cloneNode(!0), this.trackY.classList.add("vertical"), this.el.insertBefore(this.trackX, this.el.firstChild), this.el.insertBefore(this.trackY, this.el.firstChild)
              }
              this.el.setAttribute("data-simplebar", "init")
            }
          }, {
            key: "initListeners",
            value: function() {
              var t = this;
              this.options.autoHide && this.el.addEventListener("mouseenter", this.onMouseEnter), this.scrollbarY.addEventListener("mousedown", this.onDragY), this.scrollbarX.addEventListener("mousedown", this.onDragX), this.scrollContentEl.addEventListener("scroll", this.onScrollY), this.contentEl.addEventListener("scroll", this.onScrollX), "undefined" != typeof MutationObserver && (this.mutationObserver = new MutationObserver(function(e) {
                e.forEach(function(e) {
                  (t.isChildNode(e.target) || e.addedNodes.length) && t.recalculate()
                })
              }), this.mutationObserver.observe(this.el, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
              })), this.resizeObserver = new u.default(this.recalculate.bind(this)), this.resizeObserver.observe(this.el)
            }
          }, {
            key: "removeListeners",
            value: function() {
              this.options.autoHide && this.el.removeEventListener("mouseenter", this.onMouseEnter), this.scrollbarX.removeEventListener("mousedown", this.onDragX), this.scrollbarY.removeEventListener("mousedown", this.onDragY), this.scrollContentEl.removeEventListener("scroll", this.onScrollY), this.contentEl.removeEventListener("scroll", this.onScrollX), this.mutationObserver.disconnect(), this.resizeObserver.disconnect()
            }
          }, {
            key: "onDragX",
            value: function(t) {
              this.onDrag(t, "x")
            }
          }, {
            key: "onDragY",
            value: function(t) {
              this.onDrag(t, "y")
            }
          }, {
            key: "onDrag",
            value: function(t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "y";
              t.preventDefault();
              var i = "y" === e ? this.scrollbarY : this.scrollbarX,
                n = "y" === e ? t.pageY : t.pageX;
              this.dragOffset[e] = n - i.getBoundingClientRect()[this.offsetAttr[e]], this.currentAxis = e, document.addEventListener("mousemove", this.drag), document.addEventListener("mouseup", this.onEndDrag)
            }
          }, {
            key: "drag",
            value: function(t) {
              var e, i, n;
              t.preventDefault(), "y" === this.currentAxis ? (e = t.pageY, i = this.trackY, n = this.scrollContentEl) : (e = t.pageX, i = this.trackX, n = this.contentEl);
              var r = (e - i.getBoundingClientRect()[this.offsetAttr[this.currentAxis]] - this.dragOffset[this.currentAxis]) / i[this.sizeAttr[this.currentAxis]] * this.contentEl[this.scrollSizeAttr[this.currentAxis]];
              n[this.scrollOffsetAttr[this.currentAxis]] = r
            }
          }, {
            key: "onEndDrag",
            value: function() {
              document.removeEventListener("mousemove", this.drag), document.removeEventListener("mouseup", this.onEndDrag)
            }
          }, {
            key: "resizeScrollbar",
            value: function() {
              var t, e, i, n, r, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "y";
              "x" === o ? (t = this.trackX, e = this.scrollbarX, i = this.contentEl[this.scrollOffsetAttr[o]], n = this.contentSizeX, r = this.scrollbarXSize) : (t = this.trackY, e = this.scrollbarY, i = this.scrollContentEl[this.scrollOffsetAttr[o]], n = this.contentSizeY, r = this.scrollbarYSize);
              var c = r / n,
                s = i / (n - r),
                a = Math.max(~~(c * r), this.options.scrollbarMinSize),
                u = ~~((r - a) * s);
              this.isVisible[o] = r < n, this.isVisible[o] || this.options.forceVisible ? (t.style.visibility = "visible", this.options.forceVisible ? e.style.visibility = "hidden" : e.style.visibility = "visible", "x" === o ? (e.style.left = "".concat(u, "px"), e.style.width = "".concat(a, "px")) : (e.style.top = "".concat(u, "px"), e.style.height = "".concat(a, "px"))) : t.style.visibility = "hidden"
            }
          }, {
            key: "onScrollX",
            value: function() {
              this.flashScrollbar("x")
            }
          }, {
            key: "onScrollY",
            value: function() {
              this.flashScrollbar("y")
            }
          }, {
            key: "onMouseEnter",
            value: function() {
              this.flashScrollbar("x"), this.flashScrollbar("y")
            }
          }, {
            key: "flashScrollbar",
            value: function() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "y";
              this.resizeScrollbar(t), this.showScrollbar(t)
            }
          }, {
            key: "showScrollbar",
            value: function() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "y";
              this.isVisible[t] && ("x" === t ? this.scrollbarX.classList.add("visible") : this.scrollbarY.classList.add("visible"), this.options.autoHide && ("number" == typeof this.flashTimeout && window.clearTimeout(this.flashTimeout), this.flashTimeout = window.setTimeout(this.hideScrollbar.bind(this), 1e3)))
            }
          }, {
            key: "hideScrollbar",
            value: function() {
              this.scrollbarX.classList.remove("visible"), this.scrollbarY.classList.remove("visible"), "number" == typeof this.flashTimeout && window.clearTimeout(this.flashTimeout)
            }
          }, {
            key: "recalculate",
            value: function() {
              this.contentSizeX = this.contentEl[this.scrollSizeAttr.x], this.contentSizeY = this.contentEl[this.scrollSizeAttr.y] - (this.scrollbarWidth || this.offsetSize), this.scrollbarXSize = this.trackX[this.sizeAttr.x], this.scrollbarYSize = this.trackY[this.sizeAttr.y], this.resizeScrollbar("x"), this.resizeScrollbar("y"), this.options.autoHide || (this.showScrollbar("x"), this.showScrollbar("y"))
            }
          }, {
            key: "getScrollElement",
            value: function() {
              return "y" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "y") ? this.scrollContentEl : this.contentEl
            }
          }, {
            key: "getContentElement",
            value: function() {
              return this.contentEl
            }
          }, {
            key: "unMount",
            value: function() {
              this.removeListeners(), this.el.SimpleBar = null
            }
          }, {
            key: "isChildNode",
            value: function(t) {
              return null !== t && (t === this.el || this.isChildNode(t.parentNode))
            }
          }], [{
            key: "initHtmlApi",
            value: function() {
              this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this), "undefined" != typeof MutationObserver && (this.globalObserver = new MutationObserver(function(e) {
                e.forEach(function(e) {
                  Array.from(e.addedNodes).forEach(function(e) {
                    1 === e.nodeType && (e.hasAttribute("data-simplebar") ? !e.SimpleBar && new t(e, t.getElOptions(e)) : Array.from(e.querySelectorAll("[data-simplebar]")).forEach(function(e) {
                      !e.SimpleBar && new t(e, t.getElOptions(e))
                    }))
                  }), Array.from(e.removedNodes).forEach(function(t) {
                    1 === t.nodeType && (t.hasAttribute("data-simplebar") ? t.SimpleBar && t.SimpleBar.unMount() : Array.from(t.querySelectorAll("[data-simplebar]")).forEach(function(t) {
                      t.SimpleBar && t.SimpleBar.unMount()
                    }))
                  })
                })
              }), this.globalObserver.observe(document, {
                childList: !0,
                subtree: !0
              })), "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements.bind(this)) : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.addEventListener("load", this.initDOMLoadedElements))
            }
          }, {
            key: "getElOptions",
            value: function(e) {
              return Object.keys(t.htmlAttributes).reduce(function(i, n) {
                var r = t.htmlAttributes[n];
                return e.hasAttribute(r) && (i[n] = JSON.parse(e.getAttribute(r) || !0)), i
              }, {})
            }
          }, {
            key: "removeObserver",
            value: function() {
              this.globalObserver.disconnect()
            }
          }, {
            key: "initDOMLoadedElements",
            value: function() {
              document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.removeEventListener("load", this.initDOMLoadedElements), Array.from(document.querySelectorAll("[data-simplebar]")).forEach(function(e) {
                e.SimpleBar || new t(e, t.getElOptions(e))
              })
            }
          }, {
            key: "defaultOptions",
            get: function() {
              return {
                autoHide: !0,
                forceVisible: !1,
                classNames: {
                  content: "simplebar-content",
                  scrollContent: "simplebar-scroll-content",
                  scrollbar: "simplebar-scrollbar",
                  track: "simplebar-track"
                },
                scrollbarMinSize: 25
              }
            }
          }, {
            key: "htmlAttributes",
            get: function() {
              return {
                autoHide: "data-simplebar-auto-hide",
                forceVisible: "data-simplebar-force-visible",
                scrollbarMinSize: "data-simplebar-scrollbar-min-size"
              }
            }
          }]), t
        }();
        e.default = l, l.initHtmlApi()
      }, function(t, e, i) {
        i(29), i(46), t.exports = i(3).Array.from
      }, function(t, e, i) {
        "use strict";
        var n = i(30)(!0);
        i(31)(String, "String", function(t) {
          this._t = String(t), this._i = 0
        }, function() {
          var t, e = this._t,
            i = this._i;
          return i >= e.length ? {
            value: void 0,
            done: !0
          } : (t = n(e, i), this._i += t.length, {
            value: t,
            done: !1
          })
        })
      }, function(t, e, i) {
        var n = i(8),
          r = i(9);
        t.exports = function(t) {
          return function(e, i) {
            var o, c, s = String(r(e)),
              a = n(i),
              u = s.length;
            return a < 0 || a >= u ? t ? "" : void 0 : (o = s.charCodeAt(a)) < 55296 || o > 56319 || a + 1 === u || (c = s.charCodeAt(a + 1)) < 56320 || c > 57343 ? t ? s.charAt(a) : o : t ? s.slice(a, a + 2) : c - 56320 + (o - 55296 << 10) + 65536
          }
        }
      }, function(t, e, i) {
        "use strict";
        var n = i(32),
          r = i(15),
          o = i(18),
          c = i(4),
          s = i(2),
          a = i(13),
          u = i(36),
          l = i(25),
          d = i(45),
          g = i(0)("iterator"),
          h = !([].keys && "next" in [].keys()),
          M = function() {
            return this
          };
        t.exports = function(t, e, i, f, p, w, y) {
          u(i, e, f);
          var N, D, I, b = function(t) {
              if (!h && t in v) return v[t];
              switch (t) {
                case "keys":
                case "values":
                  return function() {
                    return new i(this, t)
                  }
              }
              return function() {
                return new i(this, t)
              }
            },
            m = e + " Iterator",
            T = "values" == p,
            z = !1,
            v = t.prototype,
            E = v[g] || v["@@iterator"] || p && v[p],
            _ = E || b(p),
            x = p ? T ? b("entries") : _ : void 0,
            j = "Array" == e ? v.entries || E : E;
          if (j && (I = d(j.call(new t))) !== Object.prototype && I.next && (l(I, m, !0), n || s(I, g) || c(I, g, M)), T && E && "values" !== E.name && (z = !0, _ = function() {
              return E.call(this)
            }), n && !y || !h && !z && v[g] || c(v, g, _), a[e] = _, a[m] = M, p)
            if (N = {
                values: T ? _ : b("values"),
                keys: w ? _ : b("keys"),
                entries: x
              }, y)
              for (D in N) D in v || o(v, D, N[D]);
            else r(r.P + r.F * (h || z), e, N);
          return N
        }
      }, function(t, e) {
        t.exports = !1
      }, function(t, e, i) {
        t.exports = !i(7) && !i(16)(function() {
          return 7 != Object.defineProperty(i(17)("div"), "a", {
            get: function() {
              return 7
            }
          }).a
        })
      }, function(t, e, i) {
        var n = i(10);
        t.exports = function(t, e) {
          if (!n(t)) return t;
          var i, r;
          if (e && "function" == typeof(i = t.toString) && !n(r = i.call(t))) return r;
          if ("function" == typeof(i = t.valueOf) && !n(r = i.call(t))) return r;
          if (!e && "function" == typeof(i = t.toString) && !n(r = i.call(t))) return r;
          throw TypeError("Can't convert object to primitive value")
        }
      }, function(t, e) {
        t.exports = function(t) {
          if ("function" != typeof t) throw TypeError(t + " is not a function!");
          return t
        }
      }, function(t, e, i) {
        "use strict";
        var n = i(37),
          r = i(11),
          o = i(25),
          c = {};
        i(4)(c, i(0)("iterator"), function() {
          return this
        }), t.exports = function(t, e, i) {
          t.prototype = n(c, {
            next: r(1, i)
          }), o(t, e + " Iterator")
        }
      }, function(t, e, i) {
        var n = i(6),
          r = i(38),
          o = i(24),
          c = i(14)("IE_PROTO"),
          s = function() {},
          a = function() {
            var t, e = i(17)("iframe"),
              n = o.length;
            for (e.style.display = "none", i(44).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), a = t.F; n--;) delete a.prototype[o[n]];
            return a()
          };
        t.exports = Object.create || function(t, e) {
          var i;
          return null !== t ? (s.prototype = n(t), i = new s, s.prototype = null, i[c] = t) : i = a(), void 0 === e ? i : r(i, e)
        }
      }, function(t, e, i) {
        var n = i(5),
          r = i(6),
          o = i(39);
        t.exports = i(7) ? Object.defineProperties : function(t, e) {
          r(t);
          for (var i, c = o(e), s = c.length, a = 0; s > a;) n.f(t, i = c[a++], e[i]);
          return t
        }
      }, function(t, e, i) {
        var n = i(40),
          r = i(24);
        t.exports = Object.keys || function(t) {
          return n(t, r)
        }
      }, function(t, e, i) {
        var n = i(2),
          r = i(20),
          o = i(42)(!1),
          c = i(14)("IE_PROTO");
        t.exports = function(t, e) {
          var i, s = r(t),
            a = 0,
            u = [];
          for (i in s) i != c && n(s, i) && u.push(i);
          for (; e.length > a;) n(s, i = e[a++]) && (~o(u, i) || u.push(i));
          return u
        }
      }, function(t, e, i) {
        var n = i(21);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
          return "String" == n(t) ? t.split("") : Object(t)
        }
      }, function(t, e, i) {
        var n = i(20),
          r = i(22),
          o = i(43);
        t.exports = function(t) {
          return function(e, i, c) {
            var s, a = n(e),
              u = r(a.length),
              l = o(c, u);
            if (t && i != i) {
              for (; u > l;)
                if ((s = a[l++]) != s) return !0
            } else
              for (; u > l; l++)
                if ((t || l in a) && a[l] === i) return t || l || 0;
            return !t && -1
          }
        }
      }, function(t, e, i) {
        var n = i(8),
          r = Math.max,
          o = Math.min;
        t.exports = function(t, e) {
          return (t = n(t)) < 0 ? r(t + e, 0) : o(t, e)
        }
      }, function(t, e, i) {
        var n = i(1).document;
        t.exports = n && n.documentElement
      }, function(t, e, i) {
        var n = i(2),
          r = i(26),
          o = i(14)("IE_PROTO"),
          c = Object.prototype;
        t.exports = Object.getPrototypeOf || function(t) {
          return t = r(t), n(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? c : null
        }
      }, function(t, e, i) {
        "use strict";
        var n = i(19),
          r = i(15),
          o = i(26),
          c = i(47),
          s = i(48),
          a = i(22),
          u = i(49),
          l = i(50);
        r(r.S + r.F * !i(52)(function(t) {
          Array.from(t)
        }), "Array", {
          from: function(t) {
            var e, i, r, d, g = o(t),
              h = "function" == typeof this ? this : Array,
              M = arguments.length,
              f = M > 1 ? arguments[1] : void 0,
              p = void 0 !== f,
              w = 0,
              y = l(g);
            if (p && (f = n(f, M > 2 ? arguments[2] : void 0, 2)), void 0 == y || h == Array && s(y))
              for (e = a(g.length), i = new h(e); e > w; w++) u(i, w, p ? f(g[w], w) : g[w]);
            else
              for (d = y.call(g), i = new h; !(r = d.next()).done; w++) u(i, w, p ? c(d, f, [r.value, w], !0) : r.value);
            return i.length = w, i
          }
        })
      }, function(t, e, i) {
        var n = i(6);
        t.exports = function(t, e, i, r) {
          try {
            return r ? e(n(i)[0], i[1]) : e(i)
          } catch (e) {
            var o = t.return;
            throw void 0 !== o && n(o.call(t)), e
          }
        }
      }, function(t, e, i) {
        var n = i(13),
          r = i(0)("iterator"),
          o = Array.prototype;
        t.exports = function(t) {
          return void 0 !== t && (n.Array === t || o[r] === t)
        }
      }, function(t, e, i) {
        "use strict";
        var n = i(5),
          r = i(11);
        t.exports = function(t, e, i) {
          e in t ? n.f(t, e, r(0, i)) : t[e] = i
        }
      }, function(t, e, i) {
        var n = i(51),
          r = i(0)("iterator"),
          o = i(13);
        t.exports = i(3).getIteratorMethod = function(t) {
          if (void 0 != t) return t[r] || t["@@iterator"] || o[n(t)]
        }
      }, function(t, e, i) {
        var n = i(21),
          r = i(0)("toStringTag"),
          o = "Arguments" == n(function() {
            return arguments
          }()),
          c = function(t, e) {
            try {
              return t[e]
            } catch (t) {}
          };
        t.exports = function(t) {
          var e, i, s;
          return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(i = c(e = Object(t), r)) ? i : o ? n(e) : "Object" == (s = n(e)) && "function" == typeof e.callee ? "Arguments" : s
        }
      }, function(t, e, i) {
        var n = i(0)("iterator"),
          r = !1;
        try {
          var o = [7][n]();
          o.return = function() {
            r = !0
          }, Array.from(o, function() {
            throw 2
          })
        } catch (t) {}
        t.exports = function(t, e) {
          if (!e && !r) return !1;
          var i = !1;
          try {
            var o = [7],
              c = o[n]();
            c.next = function() {
              return {
                done: i = !0
              }
            }, o[n] = function() {
              return c
            }, t(o)
          } catch (t) {}
          return i
        }
      }, function(t, e, i) {
        var n, r, o;
        ! function(i, c) {
          r = [], void 0 !== (o = "function" == typeof(n = c) ? n.apply(e, r) : n) && (t.exports = o)
        }(0, function() {
          "use strict";
          return function() {
            if ("undefined" == typeof document) return 0;
            var t, e = document.body,
              i = document.createElement("div"),
              n = i.style;
            return n.position = "absolute", n.top = n.left = "-9999px", n.width = n.height = "100px", n.overflow = "scroll", e.appendChild(i), t = i.offsetWidth - i.clientWidth, e.removeChild(i), t
          }
        })
      }, function(t, e, i) {
        (function(e) {
          function i(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e)
          }

          function n(t) {
            return !!t && "object" == typeof t
          }

          function r(t) {
            return "symbol" == typeof t || n(t) && w.call(t) == a
          }

          function o(t) {
            if ("number" == typeof t) return t;
            if (r(t)) return s;
            if (i(t)) {
              var e = "function" == typeof t.valueOf ? t.valueOf() : t;
              t = i(e) ? e + "" : e
            }
            if ("string" != typeof t) return 0 === t ? t : +t;
            t = t.replace(u, "");
            var n = d.test(t);
            return n || g.test(t) ? h(t.slice(2), n ? 2 : 8) : l.test(t) ? s : +t
          }
          var c = "Expected a function",
            s = NaN,
            a = "[object Symbol]",
            u = /^\s+|\s+$/g,
            l = /^[-+]0x[0-9a-f]+$/i,
            d = /^0b[01]+$/i,
            g = /^0o[0-7]+$/i,
            h = parseInt,
            M = "object" == typeof e && e && e.Object === Object && e,
            f = "object" == typeof self && self && self.Object === Object && self,
            p = M || f || Function("return this")(),
            w = Object.prototype.toString,
            y = Math.max,
            N = Math.min,
            D = function() {
              return p.Date.now()
            };
          t.exports = function(t, e, n) {
            function r(e) {
              var i = h,
                n = M;
              return h = M = void 0, b = e, p = t.apply(n, i)
            }

            function s(t) {
              return b = t, w = setTimeout(l, e), m ? r(t) : p
            }

            function a(t) {
              var i = t - b,
                n = e - (t - I);
              return T ? N(n, f - i) : n
            }

            function u(t) {
              var i = t - I,
                n = t - b;
              return void 0 === I || i >= e || i < 0 || T && n >= f
            }

            function l() {
              var t = D();
              if (u(t)) return d(t);
              w = setTimeout(l, a(t))
            }

            function d(t) {
              return w = void 0, z && h ? r(t) : (h = M = void 0, p)
            }

            function g() {
              var t = D(),
                i = u(t);
              if (h = arguments, M = this, I = t, i) {
                if (void 0 === w) return s(I);
                if (T) return w = setTimeout(l, e), r(I)
              }
              return void 0 === w && (w = setTimeout(l, e)), p
            }
            var h, M, f, p, w, I, b = 0,
              m = !1,
              T = !1,
              z = !0;
            if ("function" != typeof t) throw new TypeError(c);
            return e = o(e) || 0, i(n) && (m = !!n.leading, T = "maxWait" in n, f = T ? y(o(n.maxWait) || 0, e) : f, z = "trailing" in n ? !!n.trailing : z), g.cancel = function() {
              void 0 !== w && clearTimeout(w), b = 0, h = I = M = w = void 0
            }, g.flush = function() {
              return void 0 === w ? p : d(D())
            }, g
          }
        }).call(e, i(55))
      }, function(t, e) {
        var i;
        i = function() {
          return this
        }();
        try {
          i = i || Function("return this")() || (0, eval)("this")
        } catch (t) {
          "object" == typeof window && (i = window)
        }
        t.exports = i
      }, function(t, e, i) {
        "use strict";

        function n(t) {
          return parseFloat(t) || 0
        }

        function r(t) {
          return Array.prototype.slice.call(arguments, 1).reduce(function(e, i) {
            return e + n(t["border-" + i + "-width"])
          }, 0)
        }

        function o(t) {
          for (var e = {}, i = 0, r = ["top", "right", "bottom", "left"]; i < r.length; i += 1) {
            var o = r[i],
              c = t["padding-" + o];
            e[o] = n(c)
          }
          return e
        }

        function c(t) {
          var e = t.getBBox();
          return d(0, 0, e.width, e.height)
        }

        function s(t) {
          var e = t.clientWidth,
            i = t.clientHeight;
          if (!e && !i) return b;
          var c = getComputedStyle(t),
            s = o(c),
            u = s.left + s.right,
            l = s.top + s.bottom,
            g = n(c.width),
            h = n(c.height);
          if ("border-box" === c.boxSizing && (Math.round(g + u) !== e && (g -= r(c, "left", "right") + u), Math.round(h + l) !== i && (h -= r(c, "top", "bottom") + l)), !a(t)) {
            var M = Math.round(g + u) - e,
              f = Math.round(h + l) - i;
            1 !== Math.abs(M) && (g -= M), 1 !== Math.abs(f) && (h -= f)
          }
          return d(s.left, s.top, g, h)
        }

        function a(t) {
          return t === document.documentElement
        }

        function u(t) {
          return h ? m(t) ? c(t) : s(t) : b
        }

        function l(t) {
          var e = t.x,
            i = t.y,
            n = t.width,
            r = t.height,
            o = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            c = Object.create(o.prototype);
          return I(c, {
            x: e,
            y: i,
            width: n,
            height: r,
            top: i,
            right: e + n,
            bottom: r + i,
            left: e
          }), c
        }

        function d(t, e, i, n) {
          return {
            x: t,
            y: e,
            width: i,
            height: n
          }
        }
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var g = function() {
            function t(t, e) {
              var i = -1;
              return t.some(function(t, n) {
                return t[0] === e && (i = n, !0)
              }), i
            }
            return "undefined" != typeof Map ? Map : function() {
              function e() {
                this.__entries__ = []
              }
              var i = {
                size: {}
              };
              return i.size.get = function() {
                return this.__entries__.length
              }, e.prototype.get = function(e) {
                var i = t(this.__entries__, e),
                  n = this.__entries__[i];
                return n && n[1]
              }, e.prototype.set = function(e, i) {
                var n = t(this.__entries__, e);
                ~n ? this.__entries__[n][1] = i : this.__entries__.push([e, i])
              }, e.prototype.delete = function(e) {
                var i = this.__entries__,
                  n = t(i, e);
                ~n && i.splice(n, 1)
              }, e.prototype.has = function(e) {
                return !!~t(this.__entries__, e)
              }, e.prototype.clear = function() {
                this.__entries__.splice(0)
              }, e.prototype.forEach = function(t, e) {
                void 0 === e && (e = null);
                for (var i = 0, n = this.__entries__; i < n.length; i += 1) {
                  var r = n[i];
                  t.call(e, r[1], r[0])
                }
              }, Object.defineProperties(e.prototype, i), e
            }()
          }(),
          h = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
          M = "function" == typeof requestAnimationFrame ? requestAnimationFrame : function(t) {
            return setTimeout(function() {
              return t(Date.now())
            }, 1e3 / 60)
          },
          f = 2,
          p = function(t, e) {
            function i() {
              o && (o = !1, t()), c && r()
            }

            function n() {
              M(i)
            }

            function r() {
              var t = Date.now();
              if (o) {
                if (t - s < f) return;
                c = !0
              } else o = !0, c = !1, setTimeout(n, e);
              s = t
            }
            var o = !1,
              c = !1,
              s = 0;
            return r
          },
          w = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
          y = "undefined" != typeof navigator && /Trident\/.*rv:11/.test(navigator.userAgent),
          N = "undefined" != typeof MutationObserver && !y,
          D = function() {
            this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = p(this.refresh.bind(this), 20)
          };
        D.prototype.addObserver = function(t) {
          ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_()
        }, D.prototype.removeObserver = function(t) {
          var e = this.observers_,
            i = e.indexOf(t);
          ~i && e.splice(i, 1), !e.length && this.connected_ && this.disconnect_()
        }, D.prototype.refresh = function() {
          this.updateObservers_() && this.refresh()
        }, D.prototype.updateObservers_ = function() {
          var t = this.observers_.filter(function(t) {
            return t.gatherActive(), t.hasActive()
          });
          return t.forEach(function(t) {
            return t.broadcastActive()
          }), t.length > 0
        }, D.prototype.connect_ = function() {
          h && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), N ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, D.prototype.disconnect_ = function() {
          h && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, D.prototype.onTransitionEnd_ = function(t) {
          var e = t.propertyName;
          w.some(function(t) {
            return !!~e.indexOf(t)
          }) && this.refresh()
        }, D.getInstance = function() {
          return this.instance_ || (this.instance_ = new D), this.instance_
        }, D.instance_ = null;
        var I = function(t, e) {
            for (var i = 0, n = Object.keys(e); i < n.length; i += 1) {
              var r = n[i];
              Object.defineProperty(t, r, {
                value: e[r],
                enumerable: !1,
                writable: !1,
                configurable: !0
              })
            }
            return t
          },
          b = d(0, 0, 0, 0),
          m = "undefined" != typeof SVGGraphicsElement ? function(t) {
            return t instanceof SVGGraphicsElement
          } : function(t) {
            return t instanceof SVGElement && "function" == typeof t.getBBox
          },
          T = function(t) {
            this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = d(0, 0, 0, 0), this.target = t
          };
        T.prototype.isActive = function() {
          var t = u(this.target);
          return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
        }, T.prototype.broadcastRect = function() {
          var t = this.contentRect_;
          return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
        };
        var z = function(t, e) {
            var i = l(e);
            I(this, {
              target: t,
              contentRect: i
            })
          },
          v = function(t, e, i) {
            if ("function" != typeof t) throw new TypeError("The callback provided as parameter 1 is not a function.");
            this.activeObservations_ = [], this.observations_ = new g, this.callback_ = t, this.controller_ = e, this.callbackCtx_ = i
          };
        v.prototype.observe = function(t) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" != typeof Element && Element instanceof Object) {
            if (!(t instanceof Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var e = this.observations_;
            e.has(t) || (e.set(t, new T(t)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, v.prototype.unobserve = function(t) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" != typeof Element && Element instanceof Object) {
            if (!(t instanceof Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var e = this.observations_;
            e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this))
          }
        }, v.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, v.prototype.gatherActive = function() {
          var t = this;
          this.clearActive(), this.observations_.forEach(function(e) {
            e.isActive() && t.activeObservations_.push(e)
          })
        }, v.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var t = this.callbackCtx_,
              e = this.activeObservations_.map(function(t) {
                return new z(t.target, t.broadcastRect())
              });
            this.callback_.call(t, e, t), this.clearActive()
          }
        }, v.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, v.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        };
        var E = "undefined" != typeof WeakMap ? new WeakMap : new g,
          _ = function(t) {
            if (!(this instanceof _)) throw new TypeError("Cannot call a class as a function");
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            var e = D.getInstance(),
              i = new v(t, e, this);
            E.set(this, i)
          };
        ["observe", "unobserve", "disconnect"].forEach(function(t) {
          _.prototype[t] = function() {
            return (e = E.get(this))[t].apply(e, arguments);
            var e
          }
        });
        var x = "undefined" != typeof ResizeObserver ? ResizeObserver : _;
        e.default = x
      }, function(t, e) {}, function(t, e, i) {
        "use strict";

        function n(t) {
          if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
          return Object(t)
        }
        var r = Object.getOwnPropertySymbols,
          o = Object.prototype.hasOwnProperty,
          c = Object.prototype.propertyIsEnumerable;
        t.exports = function() {
          try {
            if (!Object.assign) return !1;
            var t = new String("abc");
            if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
            for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
            if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t) {
                return e[t]
              }).join("")) return !1;
            var n = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(t) {
              n[t] = t
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
          } catch (t) {
            return !1
          }
        }() ? Object.assign : function(t, e) {
          for (var i, s, a = n(t), u = 1; u < arguments.length; u++) {
            i = Object(arguments[u]);
            for (var l in i) o.call(i, l) && (a[l] = i[l]);
            if (r) {
              s = r(i);
              for (var d = 0; d < s.length; d++) c.call(i, s[d]) && (a[s[d]] = i[s[d]])
            }
          }
          return a
        }
      }]).default
    });
    var e = {};
    e.date_format = function(t) {
      return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][t.getMonth()].substr(0, 3) + " " + t.getDate() + ", " + t.getFullYear()
    }, e.extend = function(t) {
      t = t || {};
      for (var e = 1; e < arguments.length; e++) {
        var i = arguments[e];
        if (i)
          for (var n in i) i.hasOwnProperty(n) && ("object" == typeof i[n] ? t[n] = this.extend(t[n], i[n]) : t[n] = i[n])
      }
      return t
    }, e.nano = function(t, e) {
      return t.replace(/\{([\w\.]*)\}/g, function(t, i) {
        for (var n = i.split("."), r = e[n.shift()], o = 0, c = n.length; o < c; o++) r = r[n[o]];
        return void 0 !== r && null !== r ? r : ""
      })
    }, e.eachTemplate = function(t, e) {
      var i = "";
      for (var n in e) i += this.nano(t, e[n]);
      return i
    }, e.updateUrl = function(t, e, i) {
      var n = new RegExp("([?&])" + e + "=.*?(&|$)", "i"),
        r = t ? -1 !== t.indexOf("?") ? "&" : "?" : "";
      return t && t.match(n) ? t.replace(n, "$1" + e + "=" + i + "$2") : t + r + e + "=" + i
    }, e.closest = function(t, e) {
      var i;
      ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"].some(function(t) {
        return "function" == typeof document.body[t] && (i = t, !0)
      });
      for (var n; t;) {
        if ((n = t.parentElement) && n[i](e)) return n;
        t = n
      }
      return null
    }, e.hasClass = function(t, e) {
      return t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className)
    }, e.parents = function(t, e) {
      var i, n = [],
        r = void 0 !== e;
      for (["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"].some(function(t) {
          return "function" == typeof document.body[t] && (i = t, !0)
        }); null !== (t = t.parentElement);) t.nodeType === Node.ELEMENT_NODE && (r && !t[i](e) || n.push(t));
      return n
    };
    var i = function(t) {
        this._default = {
          data: null,
          currency: "USD",
          coins: null
        }, this.options = e.extend(this._default, t);
        var i = "",
          n = {
            down: '<span class="ct-currency__indicator ct-currency__indicator_down"><i></i>{CHANGE_VALUE}</span>',
            up: '<span class="ct-currency__indicator ct-currency__indicator_up"><i></i>{CHANGE_VALUE}</span>'
          },
          r = [],
          o = this.options.currency;
        for (var c in this.options.coins) {
          var s = this.options.coins[c],
            a = this.options.data.RAW[s][o].CHANGE24HOUR,
            u = Math.abs(this.options.data.DISPLAY[s][o].CHANGEPCT24HOUR).toFixed(1) + " %";
          i = a >= 0 ? n.up : n.down, r.push({
            TOSYMBOL: this.options.data.DISPLAY[s][o].TOSYMBOL,
            CODE: this.options.data.RAW[s][o].FROMSYMBOL,
            PRICE: this.options.data.RAW[s][o].PRICE.toFixed(1),
            CHANGE: e.nano(i, {
              CHANGE_VALUE: u
            })
          })
        }
        return e.eachTemplate('<div class="ct-currency"><span class="ct-currency__code">{CODE}</span>&nbsp;&nbsp;<span class="ct-currency__price">{TOSYMBOL}{PRICE}</span>{CHANGE}</div>', r)
      },
      n = function(t, i) {
        this._template = "", this._data = {}, this.fnItemsTemplatePrepare = function() {}, this.container = t, this._defaults = {
          data: {},
          config: {
            theme: "dark",
            priceindex: !1,
            images: !1,
            category: null,
            size: "auto",
            selflink: !1,
            footerColor: "",
            height: 100
          },
          coins: ["BTC", "ETH"],
          currency: "USD"
        }, this.options = e.extend({}, this._defaults, i), this.template = '<div class="ct-widget-container" style="height:75%"><div class="ct-widget"><div class="ct-widget__body" {bodyAttr}><div class="ct-widget__posts">{news}</div></div><div class="ct-widget__footer">{footer}</div></div></div>', this.arWidgetClassMap = {
          ".ct-widget": function(t) {
            return ["ct-widget_theme_" + ("light" === t.theme ? "light" : "dark"), function(t) {
              var e = {
                small: "sm",
                medium: "md",
                "medium-wide": "md_wide",
                large: "lg"
              };
              return t.size in e ? "ct-widget_size_" + e[t.size] : "ct-widget_responsive"
            }(t), !0 === t.images ? "ct-widget_images" : null, !0 === t.priceindex ? "ct-widget_priceindex" : null].join(";").replace(/(;+)+/g, " ")
          }(this.options.config),
          ".ct-widget__footer": function(t) {
            return "yellow" === t.footerColor ? "ct-widget__footer_yellow" : ""
          }(this.options.config),
          ".ct-post": function(t) {
            return "ct-post_" + (!0 === t.images ? "image" : "text")
          }(this.options.config),
          ".ct-currency-rates": function(t) {
            return "ct-currency-rates_" + (!0 === t.images ? "mini" : "big")
          }(this.options.config)
        }, this.init(), this.afterInit()
      };
    n.prototype.init = function() {
      var t = {
        news: function(t, i) {
          var n = '<div class="ct-post">{image_html}<p class="ct-post__text"><a {target_link} class="ct-post__link" href="{share_url}">{title}</a></p></div>';
          return !0 === t.config.images && (n = n.replace("{image_html}", '<div class="ct-post__meta"><a href="{share_url}" {target_link}><img src="{thumb}" class="ct-post__image" alt=""/></a></div>')), !1 === t.config.selflink && (n = n.replace(/\{target_link\}/g, 'target="_blank"')), e.eachTemplate(n, i.news)
        },
        footer: function(t, e) {
          var n = '<div class="ct-widget__powered">Powered by <a href="https://leggmason.com" target="_blank" class="ct-widget__poweredLink">Legg Mason</a></div>';
          if (!0 === t.config.priceindex) {
            var r = i({
              data: e.priceindex,
              currency: t.currency,
              coins: t.coins
            });
            return t.config.size && "auto" !== t.config.size ? '<div class="ct-currency-rates"><div class="ct-currency-rates__row">' + r + n + "</div></div>" : '<div class="ct-currency-rates"><div class="ct-currency-rates__row"><a href="https://cointelegraph.com" target="_blank" class="ct-logotype"></a>' + r + "</div></div>"
          }
          return n
        },
        bodyAttr: function(t, e) {
          return 'style="max-height:' + (parseInt(t.config.height) > 0 ? parseInt(t.config.height) : t._defaults.height) + 'px"'
        }
      };
      for (var n in t) this._data[n] = t[n].call(this, this.options, this.options.data);
      this.render(this.template, this._data)
    }, n.prototype.render = function(t, i) {
      this._template = e.nano(t, i), this.container.innerHTML = this._template;
      for (var n in this.arWidgetClassMap) {
        var r = this.container.querySelectorAll(n),
          o = this.arWidgetClassMap[n];
        for (var c in r) {
          var s = r[c];
          s.classList ? o.split(" ").forEach(function(t) {
            t && s.classList.add(t)
          }) : s.className += " " + o
        }
      }
    }, n.prototype.afterInit = function(t, e) {
      "undefined" != typeof SimpleBar && new SimpleBar(this.container.querySelector(".ct-widget__body"), {
        autoHide: !1
      })
    };
    var r = function(i, n) {
      this.container = i || null, this.apiNewsUrl = "https://api.cointelegraph.com/api/v1", this.apiNewsMethod = "/ext-news", this._default = {
        apiPriceUrl: "https://min-api.cryptocompare.com/data/pricemultifull",
        coins: ["BTC", "ETH"],
        currency: "USD",
        widgetConfig: {
          theme: "dark",
          priceindex: !1,
          images: !1,
          category: null,
          size: "auto",
          selflink: !1,
          footerColor: "",
          height: "515px", // Parameter to control widget height
          // position: "relative"
        },
        newsParams: {
          limit: 5
        }
      }, this.options = e.extend(this._default, n), this.configure(), this.init(), t(i.id)
    };
    return r.prototype.configure = function() {
      if ("string" == typeof this.options.widgetConfig.category && this.options.widgetConfig.category.length > 0) {
        var t = this.options.widgetConfig.category.toString().replace(/\s+/g, "-").toLowerCase().trim();
        this.apiNewsMethod = "/ext-tags/" + t
      }
    }, r.prototype.init = function() {
      ajax().get(this.apiNewsUrl + this.apiNewsMethod, this.options.newsParams).then(function(t, e) {
        if (t = this.prepareNews(t.news), !0 === this.options.widgetConfig.priceindex) {
          var i = {
            fsyms: this.options.coins.join(","),
            tsyms: this.options.currency
          };
          ajax().get(this.options.apiPriceUrl, i).then(function(e) {
            this.widgetMount(this.container, t, e)
          }.bind(this))
        } else this.widgetMount(this.container, t)
      }.bind(this))
    }, r.prototype.prepareNews = function(t) {
      for (var i in t) {
        if (t[i].published_at) {
          var n = t[i].published_at.date.toString().replace(/-/g, "/").replace(/[T|Z]/g, " ").replace(/\+[\d]{2}\:[\d]{2}/g, "").replace(/\.[\d]+$/, "");
          try {
            var r = new Date(n);
            t[i].published_formatted = e.date_format(r)
          } catch (e) {
            t[i].published_formatted = ""
          }
        }
        t[i].share_url = e.updateUrl(t[i].share_url, "utm_source", window.location.host), t[i].share_url = e.updateUrl(t[i].share_url, "utm_medium", "referral"), t[i].share_url = e.updateUrl(t[i].share_url, "utm_campaign", "news_widget")
      }
      return t
    }, r.prototype.widgetMount = function(t, e, i) {
      if (t) r = [t];
      else var r = document.querySelectorAll("[id^=ct-news-informer-]");
      for (var o = 0; o < r.length; o++) new n(r[o], {
        data: {
          news: e || "",
          priceindex: i || ""
        },
        coins: this.options.coins,
        currency: this.options.currency,
        config: this.options.widgetConfig
      })
    }, r.prototype.fetchPrices = function(t) {
      ajax().get(this.apiNewsUrl, this.apiParams()).then(function(e, i) {
        if ("function" != typeof t) return !0;
        t(e)
      }.bind(this))
    }, r
  }(), window.CTNewsInformerLastId = window.CTNewsInformerLastId + 1 || 0;
  var e = t.createElement("div"),
    i = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  e.id = "ct-news-informer-" + window.CTNewsInformerLastId + i, t.write(e.outerHTML);
  var n = document.getElementById("ct-news-informer-" + window.CTNewsInformerLastId + i),
    r = n.previousElementSibling;
  !0 == !!r.getAttribute("data-ct-widget-dev") || new CTNewsInformer(n, {
    currency: r.getAttribute("data-ct-widget-currency"),
    widgetConfig: {
      priceindex: !!r.getAttribute("data-ct-widget-priceindex"),
      images: !!r.getAttribute("data-ct-widget-images"),
      theme: "light" === r.getAttribute("data-ct-widget-theme") ? "light" : "dark",
      category: !!r.getAttribute("data-ct-widget-category") && r.getAttribute("data-ct-widget-category"),
      size: r.getAttribute("data-ct-widget-size"),
      selflink: !!r.getAttribute("data-ct-widget-selflink"),
      footerColor: "yellow" === r.getAttribute("data-ct-widget-footer-color") ? "yellow" : "",
      height: r.getAttribute("data-ct-widget-height")
    },
    newsParams: {
      limit: r.getAttribute("data-ct-widget-limit") || 5
    }
  })
}(document);