const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Text,
		C3.Plugins.Mouse,
		C3.Plugins.Audio,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.System.Acts.SetLayerInteractive,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Cnds.Every
	];
};
self.C3_JsPropNameTable = [
	{Oy43Cau3m9E6dSAIIaRmzoK3nh8DkkIAOA6WwsnnuiuBRxPO2G2RYzyrUYAKj8EIRz0RFi3ZJTa70UJq9WHeAe: 0},
	{деньгинаэкране: 0},
	{Бубс: 0},
	{Магазин: 0},
	{Мышь: 0},
	{PanelShop: 0},
	{BtnClose: 0},
	{УлучшитьКлик: 0},
	{автоклик: 0},
	{ЗвукКлика: 0},
	{pupok: 0},
	{ТАЙНАМОЩНЫХСИСКЭ: 0},
	{Рукинедляскуки: 0},
	{дышимдышим: 0},
	{rodinky: 0},
	{Деньги: 0},
	{СилаКлика: 0},
	{ЦенаУлучшения: 0},
	{AutoDengi: 0},
	{CenaAuto: 0},
	{CenaRuki: 0},
	{CenaDyshim: 0},
	{CenaRodinka: 0}
];

self.InstanceType = {
	Oy43Cau3m9E6dSAIIaRmzoK3nh8DkkIAOA6WwsnnuiuBRxPO2G2RYzyrUYAKj8EIRz0RFi3ZJTa70UJq9WHeAe: class extends self.ISpriteInstance {},
	деньгинаэкране: class extends self.ITextInstance {},
	Бубс: class extends self.ISpriteInstance {},
	Магазин: class extends self.ITextInstance {},
	Мышь: class extends self.IInstance {},
	PanelShop: class extends self.ISpriteInstance {},
	BtnClose: class extends self.ISpriteInstance {},
	УлучшитьКлик: class extends self.ITextInstance {},
	автоклик: class extends self.ITextInstance {},
	ЗвукКлика: class extends self.IInstance {},
	pupok: class extends self.ISpriteInstance {},
	ТАЙНАМОЩНЫХСИСКЭ: class extends self.ISpriteInstance {},
	Рукинедляскуки: class extends self.ITextInstance {},
	дышимдышим: class extends self.ITextInstance {},
	rodinky: class extends self.ITextInstance {}
}