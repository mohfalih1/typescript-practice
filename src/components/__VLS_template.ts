import Dialog from "@/components/Dialog.vue";
import TextField from "@/components/inputs/TextField.vue";
import {
  __VLS_publicComponent,
  __VLS_internalComponent,
  __VLS_componentsOption,
  __VLS_name,
  item,
  message,
  t,
  loadBtn,
  testAPI,
  isDialog,
} from "./HelloWorld.vue";

function __VLS_template() {
  let __VLS_ctx!: InstanceType<
    __VLS_PickNotAny<typeof __VLS_publicComponent, new () => {}>
  > &
    InstanceType<
      __VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>
    > & {};
  /* Components */
  let __VLS_otherComponents!: NonNullable<
    typeof __VLS_internalComponent extends { components: infer C } ? C : {}
  > &
    typeof __VLS_componentsOption;
  let __VLS_own!: __VLS_SelfComponent<
    typeof __VLS_name,
    typeof __VLS_internalComponent &
      typeof __VLS_publicComponent &
      (new () => { $slots: typeof __VLS_slots })
  >;
  let __VLS_localComponents!: typeof __VLS_otherComponents &
    Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
  let __VLS_components!: typeof __VLS_localComponents &
    __VLS_GlobalComponents &
    typeof __VLS_ctx;
  /* Style Scoped */
  type __VLS_StyleScopedClasses = {};
  let __VLS_styleScopedClasses!:
    | __VLS_StyleScopedClasses
    | keyof __VLS_StyleScopedClasses
    | (keyof __VLS_StyleScopedClasses)[];
  /* CSS variable injection */
  /* CSS variable injection end */
  let __VLS_resolvedLocalAndGlobalComponents!: {} & __VLS_WithComponent<
    "VContainer",
    typeof __VLS_localComponents,
    "VContainer",
    "vContainer",
    "v-container"
  > &
    __VLS_WithComponent<
      "VResponsive",
      typeof __VLS_localComponents,
      "VResponsive",
      "vResponsive",
      "v-responsive"
    > &
    __VLS_WithComponent<
      "VRow",
      typeof __VLS_localComponents,
      "VRow",
      "vRow",
      "v-row"
    > &
    __VLS_WithComponent<
      "VCol",
      typeof __VLS_localComponents,
      "VCol",
      "vCol",
      "v-col"
    > &
    __VLS_WithComponent<
      "TextField",
      typeof __VLS_localComponents,
      "TextField",
      "TextField",
      "TextField"
    > &
    __VLS_WithComponent<
      "VBtn",
      typeof __VLS_localComponents,
      "VBtn",
      "vBtn",
      "v-btn"
    > &
    __VLS_WithComponent<
      "VIcon",
      typeof __VLS_localComponents,
      "VIcon",
      "vIcon",
      "v-icon"
    > &
    __VLS_WithComponent<
      "Dialog",
      typeof __VLS_localComponents,
      "Dialog",
      "Dialog",
      "Dialog"
    >;
  __VLS_components.VContainer;
  __VLS_components.VContainer;
  __VLS_components.vContainer;
  __VLS_components.vContainer;
  __VLS_components["v-container"];
  __VLS_components["v-container"];
  // @ts-ignore
  [VContainer, VContainer];
  __VLS_components.VResponsive;
  __VLS_components.VResponsive;
  __VLS_components.vResponsive;
  __VLS_components.vResponsive;
  __VLS_components["v-responsive"];
  __VLS_components["v-responsive"];
  // @ts-ignore
  [VResponsive, VResponsive];
  (({}) as __VLS_IntrinsicElements).p;
  (({}) as __VLS_IntrinsicElements).p;
  __VLS_components.VRow;
  __VLS_components.VRow;
  __VLS_components.VRow;
  __VLS_components.VRow;
  __VLS_components.vRow;
  __VLS_components.vRow;
  __VLS_components.vRow;
  __VLS_components.vRow;
  __VLS_components["v-row"];
  __VLS_components["v-row"];
  __VLS_components["v-row"];
  __VLS_components["v-row"];
  // @ts-ignore
  [VRow, VRow, VRow, VRow];
  __VLS_components.VCol;
  __VLS_components.VCol;
  __VLS_components.VCol;
  __VLS_components.VCol;
  __VLS_components.vCol;
  __VLS_components.vCol;
  __VLS_components.vCol;
  __VLS_components.vCol;
  __VLS_components["v-col"];
  __VLS_components["v-col"];
  __VLS_components["v-col"];
  __VLS_components["v-col"];
  // @ts-ignore
  [VCol, VCol, VCol, VCol];
  __VLS_components.TextField;
  // @ts-ignore
  [TextField];
  (({}) as __VLS_IntrinsicElements).div;
  (({}) as __VLS_IntrinsicElements).div;
  __VLS_components.VBtn;
  __VLS_components.VBtn;
  __VLS_components.vBtn;
  __VLS_components.vBtn;
  __VLS_components["v-btn"];
  __VLS_components["v-btn"];
  // @ts-ignore
  [VBtn, VBtn];
  __VLS_components.VIcon;
  __VLS_components.vIcon;
  __VLS_components["v-icon"];
  // @ts-ignore
  [VIcon];
  __VLS_components.Dialog;
  // @ts-ignore
  [Dialog];
  {
    let __VLS_0!: "VContainer" extends keyof typeof __VLS_ctx
      ? typeof __VLS_ctx.VContainer
      : "vContainer" extends keyof typeof __VLS_ctx
      ? typeof __VLS_ctx.vContainer
      : "v-container" extends keyof typeof __VLS_ctx
      ? (typeof __VLS_ctx)["v-container"]
      : (typeof __VLS_resolvedLocalAndGlobalComponents)["VContainer"];
    const __VLS_1 = __VLS_asFunctionalComponent(
      __VLS_0,
      new __VLS_0({ ...{}, class: "fill-height" })
    );
    (({}) as { VContainer: typeof __VLS_0 }).VContainer;
    (({}) as { VContainer: typeof __VLS_0 }).VContainer;
    const __VLS_2 = __VLS_1(
      { ...{ ...{}, class: "fill-height" } },
      ...__VLS_functionalComponentArgsRest(__VLS_1)
    );
    const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
    {
      let __VLS_4!: "VResponsive" extends keyof typeof __VLS_ctx
        ? typeof __VLS_ctx.VResponsive
        : "vResponsive" extends keyof typeof __VLS_ctx
        ? typeof __VLS_ctx.vResponsive
        : "v-responsive" extends keyof typeof __VLS_ctx
        ? (typeof __VLS_ctx)["v-responsive"]
        : (typeof __VLS_resolvedLocalAndGlobalComponents)["VResponsive"];
      const __VLS_5 = __VLS_asFunctionalComponent(
        __VLS_4,
        new __VLS_4({ ...{}, class: "align-center text-center fill-height" })
      );
      (({}) as { VResponsive: typeof __VLS_4 }).VResponsive;
      (({}) as { VResponsive: typeof __VLS_4 }).VResponsive;
      const __VLS_6 = __VLS_5(
        { ...{ ...{}, class: "align-center text-center fill-height" } },
        ...__VLS_functionalComponentArgsRest(__VLS_5)
      );
      const __VLS_7 = __VLS_pickFunctionalComponentCtx(__VLS_4, __VLS_6)!;
      {
        const __VLS_8 = ({} as __VLS_IntrinsicElements)["p"];
        const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, {});
        (({}) as __VLS_IntrinsicElements).p;
        (({}) as __VLS_IntrinsicElements).p;
        const __VLS_10 = __VLS_9(
          { ...{ ...{}, style: {} } },
          ...__VLS_functionalComponentArgsRest(__VLS_9)
        );
        const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10)!;
        __VLS_ctx.item[0].data;
      }
      {
        let __VLS_12!: "VRow" extends keyof typeof __VLS_ctx
          ? typeof __VLS_ctx.VRow
          : "vRow" extends keyof typeof __VLS_ctx
          ? typeof __VLS_ctx.vRow
          : "v-row" extends keyof typeof __VLS_ctx
          ? (typeof __VLS_ctx)["v-row"]
          : (typeof __VLS_resolvedLocalAndGlobalComponents)["VRow"];
        const __VLS_13 = __VLS_asFunctionalComponent(
          __VLS_12,
          new __VLS_12({ ...{} })
        );
        (({}) as { VRow: typeof __VLS_12 }).VRow;
        (({}) as { VRow: typeof __VLS_12 }).VRow;
        const __VLS_14 = __VLS_13(
          { ...{ ...{} } },
          ...__VLS_functionalComponentArgsRest(__VLS_13)
        );
        const __VLS_15 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14)!;
        {
          let __VLS_16!: "VCol" extends keyof typeof __VLS_ctx
            ? typeof __VLS_ctx.VCol
            : "vCol" extends keyof typeof __VLS_ctx
            ? typeof __VLS_ctx.vCol
            : "v-col" extends keyof typeof __VLS_ctx
            ? (typeof __VLS_ctx)["v-col"]
            : (typeof __VLS_resolvedLocalAndGlobalComponents)["VCol"];
          const __VLS_17 = __VLS_asFunctionalComponent(
            __VLS_16,
            new __VLS_16({ ...{} })
          );
          (({}) as { VCol: typeof __VLS_16 }).VCol;
          (({}) as { VCol: typeof __VLS_16 }).VCol;
          const __VLS_18 = __VLS_17(
            { ...{ ...{} } },
            ...__VLS_functionalComponentArgsRest(__VLS_17)
          );
          const __VLS_19 = __VLS_pickFunctionalComponentCtx(
            __VLS_16,
            __VLS_18
          )!;
          {
            let __VLS_20!: "TextField" extends keyof typeof __VLS_ctx
              ? typeof __VLS_ctx.TextField
              : (typeof __VLS_resolvedLocalAndGlobalComponents)["TextField"];
            const __VLS_21 = __VLS_asFunctionalComponent(
              __VLS_20,
              new __VLS_20({
                ...{ "onUpdate:modelValue": {} as any },
                modelValue: __VLS_ctx.message,
                TextField: {
                  title: "ddd",
                  label: "Email",
                  placeholder: "Enter your email",
                },
              })
            );
            (({}) as { TextField: typeof __VLS_20 }).TextField;
            const __VLS_22 = __VLS_21(
              {
                ...{
                  ...{ "onUpdate:modelValue": {} as any },
                  modelValue: __VLS_ctx.message,
                  TextField: {
                    title: "ddd",
                    label: "Email",
                    placeholder: "Enter your email",
                  },
                },
              },
              ...__VLS_functionalComponentArgsRest(__VLS_21)
            );
            const __VLS_23 = __VLS_pickFunctionalComponentCtx(
              __VLS_20,
              __VLS_22
            )!;
            let __VLS_24 = {
              "update:modelValue": __VLS_pickEvent(
                __VLS_23.emit!,
                "update:modelValue" as const,
                __VLS_componentProps(__VLS_21, __VLS_22)["onUpdate:modelValue"]
              ),
            };
            __VLS_24 = {
              "update:modelValue": (newValue) => (__VLS_ctx.message = newValue),
            };
          }
        }
        {
          const __VLS_25 = ({} as __VLS_IntrinsicElements)["div"];
          const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, {});
          (({}) as __VLS_IntrinsicElements).div;
          (({}) as __VLS_IntrinsicElements).div;
          const __VLS_27 = __VLS_26(
            { ...{ ...{} } },
            ...__VLS_functionalComponentArgsRest(__VLS_26)
          );
          const __VLS_28 = __VLS_pickFunctionalComponentCtx(
            __VLS_25,
            __VLS_27
          )!;
          __VLS_ctx.t("welcome");
        }
      }
      {
        let __VLS_29!: "VRow" extends keyof typeof __VLS_ctx
          ? typeof __VLS_ctx.VRow
          : "vRow" extends keyof typeof __VLS_ctx
          ? typeof __VLS_ctx.vRow
          : "v-row" extends keyof typeof __VLS_ctx
          ? (typeof __VLS_ctx)["v-row"]
          : (typeof __VLS_resolvedLocalAndGlobalComponents)["VRow"];
        const __VLS_30 = __VLS_asFunctionalComponent(
          __VLS_29,
          new __VLS_29({ ...{}, class: "d-flex align-center justify-center" })
        );
        (({}) as { VRow: typeof __VLS_29 }).VRow;
        (({}) as { VRow: typeof __VLS_29 }).VRow;
        const __VLS_31 = __VLS_30(
          { ...{ ...{}, class: "d-flex align-center justify-center" } },
          ...__VLS_functionalComponentArgsRest(__VLS_30)
        );
        const __VLS_32 = __VLS_pickFunctionalComponentCtx(__VLS_29, __VLS_31)!;
        {
          let __VLS_33!: "VCol" extends keyof typeof __VLS_ctx
            ? typeof __VLS_ctx.VCol
            : "vCol" extends keyof typeof __VLS_ctx
            ? typeof __VLS_ctx.vCol
            : "v-col" extends keyof typeof __VLS_ctx
            ? (typeof __VLS_ctx)["v-col"]
            : (typeof __VLS_resolvedLocalAndGlobalComponents)["VCol"];
          const __VLS_34 = __VLS_asFunctionalComponent(
            __VLS_33,
            new __VLS_33({ ...{}, cols: "auto" })
          );
          (({}) as { VCol: typeof __VLS_33 }).VCol;
          (({}) as { VCol: typeof __VLS_33 }).VCol;
          const __VLS_35 = __VLS_34(
            { ...{ ...{}, cols: "auto" } },
            ...__VLS_functionalComponentArgsRest(__VLS_34)
          );
          const __VLS_36 = __VLS_pickFunctionalComponentCtx(
            __VLS_33,
            __VLS_35
          )!;
          {
            let __VLS_37!: "VBtn" extends keyof typeof __VLS_ctx
              ? typeof __VLS_ctx.VBtn
              : "vBtn" extends keyof typeof __VLS_ctx
              ? typeof __VLS_ctx.vBtn
              : "v-btn" extends keyof typeof __VLS_ctx
              ? (typeof __VLS_ctx)["v-btn"]
              : (typeof __VLS_resolvedLocalAndGlobalComponents)["VBtn"];
            const __VLS_38 = __VLS_asFunctionalComponent(
              __VLS_37,
              new __VLS_37({
                ...{ onClick: {} as any },
                color: "primary",
                rel: "noopener noreferrer",
                size: "x-large",
                variant: "flat",
                loading: __VLS_ctx.loadBtn,
              })
            );
            (({}) as { VBtn: typeof __VLS_37 }).VBtn;
            (({}) as { VBtn: typeof __VLS_37 }).VBtn;
            const __VLS_39 = __VLS_38(
              {
                ...{
                  ...{ onClick: {} as any },
                  color: "primary",
                  rel: "noopener noreferrer",
                  size: "x-large",
                  variant: "flat",
                  loading: __VLS_ctx.loadBtn,
                },
              },
              ...__VLS_functionalComponentArgsRest(__VLS_38)
            );
            const __VLS_40 = __VLS_pickFunctionalComponentCtx(
              __VLS_37,
              __VLS_39
            )!;
            let __VLS_41 = {
              click: __VLS_pickEvent(
                __VLS_40.emit!,
                "click" as const,
                __VLS_componentProps(__VLS_38, __VLS_39).onClick
              ),
            };
            __VLS_41 = {
              click: ($event) => {
                __VLS_ctx.testAPI();
              },
            };
            {
              let __VLS_42!: "VIcon" extends keyof typeof __VLS_ctx
                ? typeof __VLS_ctx.VIcon
                : "vIcon" extends keyof typeof __VLS_ctx
                ? typeof __VLS_ctx.vIcon
                : "v-icon" extends keyof typeof __VLS_ctx
                ? (typeof __VLS_ctx)["v-icon"]
                : (typeof __VLS_resolvedLocalAndGlobalComponents)["VIcon"];
              const __VLS_43 = __VLS_asFunctionalComponent(
                __VLS_42,
                new __VLS_42({
                  ...{},
                  icon: "mdi-speedometer",
                  size: "large",
                  start: true,
                })
              );
              (({}) as { VIcon: typeof __VLS_42 }).VIcon;
              const __VLS_44 = __VLS_43(
                {
                  ...{
                    ...{},
                    icon: "mdi-speedometer",
                    size: "large",
                    start: true,
                  },
                },
                ...__VLS_functionalComponentArgsRest(__VLS_43)
              );
              const __VLS_45 = __VLS_pickFunctionalComponentCtx(
                __VLS_42,
                __VLS_44
              )!;
            }
            __VLS_ctx.t("test");
          }
        }
      }
    }
  }
  {
    let __VLS_46!: "Dialog" extends keyof typeof __VLS_ctx
      ? typeof __VLS_ctx.Dialog
      : (typeof __VLS_resolvedLocalAndGlobalComponents)["Dialog"];
    const __VLS_47 = __VLS_asFunctionalComponent(
      __VLS_46,
      new __VLS_46({
        ...{},
        modelValue: __VLS_ctx.isDialog,
        title: "hello Dialog",
        item: __VLS_ctx.item,
      })
    );
    (({}) as { Dialog: typeof __VLS_46 }).Dialog;
    const __VLS_48 = __VLS_47(
      {
        ...{
          ...{},
          modelValue: __VLS_ctx.isDialog,
          title: "hello Dialog",
          item: __VLS_ctx.item,
        },
      },
      ...__VLS_functionalComponentArgsRest(__VLS_47)
    );
    const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48)!;
  }
  if (
    typeof __VLS_styleScopedClasses === "object" &&
    !Array.isArray(__VLS_styleScopedClasses)
  ) {
  }
  var __VLS_slots!: {};
  // @ts-ignore
  [
    item,
    message,
    message,
    message,
    t,
    loadBtn,
    loadBtn,
    testAPI,
    t,
    isDialog,
    item,
    isDialog,
    item,
  ];
  return __VLS_slots;
}
