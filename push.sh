#!/bin/bash

# Thiết lập màu sắc hiển thị
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${CYAN}=== Script Tự Động Git Commit & Push ===${NC}"

# Kiểm tra thay đổi trong git
if [ -z "$(git status --porcelain)" ]; then
    echo -e "${YELLOW}ℹ Không có thay đổi nào mới để commit.${NC}"
    exit 0
fi

# Lấy message từ tham số dòng lệnh nếu có
COMMIT_MSG="$*"

# Nếu không truyền message, cho phép nhập hoặc lấy mặc định thời gian hiện tại
if [ -z "$COMMIT_MSG" ]; then
    if [ -t 0 ]; then
        read -rp "Nhập nội dung commit (Nhấn Enter để dùng mặc định): " INPUT_MSG
        COMMIT_MSG="${INPUT_MSG}"
    fi
    if [ -z "$COMMIT_MSG" ]; then
        COMMIT_MSG="update: $(date '+%Y-%m-%d %H:%M:%S')"
    fi
fi

# Lấy tên nhánh hiện tại
CURRENT_BRANCH=$(git branch --show-current)
if [ -z "$CURRENT_BRANCH" ]; then
    CURRENT_BRANCH="main"
fi

echo -e "${YELLOW}⏳ Đang thêm các file thay đổi...${NC}"
git add .

echo -e "${YELLOW}⏳ Đang tạo commit: \"${COMMIT_MSG}\"...${NC}"
git commit -m "$COMMIT_MSG"

echo -e "${YELLOW}⏳ Đang đẩy code lên branch '${CURRENT_BRANCH}' trên GitHub...${NC}"
if git push origin "$CURRENT_BRANCH"; then
    echo -e "${GREEN}✓ Đã push thành công lên GitHub!${NC}"
else
    echo -e "${RED}✗ Có lỗi xảy ra trong quá trình push lên GitHub. Vui lòng kiểm tra lại kết nối mạng hoặc SSH key/token.${NC}"
    exit 1
fi
