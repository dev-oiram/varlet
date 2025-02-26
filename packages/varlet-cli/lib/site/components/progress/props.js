"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.props = void 0;
function modeValidator(mode) {
    return ['linear', 'circle'].includes(mode);
}
exports.props = {
    // progress 模式
    mode: {
        type: String,
        default: 'linear',
        validator: modeValidator,
    },
    // progress 线宽
    lineWidth: {
        type: [Number, String],
        default: 4,
    },
    // progress 颜色
    color: {
        type: String,
    },
    // progress 轨道颜色
    trackColor: {
        type: String,
    },
    // 是否添加水波纹效果
    ripple: {
        type: Boolean,
        default: false,
    },
    // progress 值
    value: {
        type: [Number, String],
        default: 0,
    },
    // 是否显示label
    label: {
        type: Boolean,
        default: false,
    },
    // circle 的尺寸
    size: {
        type: Number,
        default: 40,
    },
    // circle的原点
    rotate: {
        type: Number,
        default: 0,
    },
    // 是否显示 circle 轨道
    track: {
        type: Boolean,
        default: true,
    },
};
